#!/usr/bin/env node
// Génère le blog statique de metalboost-ia.fr.
//
// Usage : node scripts/build-blog.mjs   (ou : npm run blog)
//
// 1. Lit les fichiers HTML déposés dans blog-inbox/ (export "Télécharger HTML" de Blog&Post Studio)
// 2. Les transforme en articles : content/blog/<slug>/{meta.json, article.html}
//    (images distantes téléchargées dans public/blog/<slug>/)
// 3. Régénère public/blog/index.html, public/blog/<slug>/index.html et le bloc blog du sitemap
//
// Métadonnées optionnelles, en commentaires HTML en tête du fichier déposé :
//   <!-- meta-description: ... -->   <!-- date: 2026-10-02 -->   <!-- slug: mon-slug -->
//   <!-- title: ... -->  (sinon, titre = premier <h1>)

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const INBOX = path.join(ROOT, 'blog-inbox')
const CONTENT = path.join(ROOT, 'content', 'blog')
const PUBLIC_BLOG = path.join(ROOT, 'public', 'blog')
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml')
const SITE = 'https://metalboost-ia.fr'

const MARK_START = '<!-- blog:start -->'
const MARK_END = '<!-- blog:end -->'

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const stripTags = (html) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim()

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
}

function truncate(text, max) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,.;:\s]+$/, '') + '…'
}

const frDate = (iso) =>
  new Date(iso + 'T12:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

const today = () => new Date().toISOString().slice(0, 10)

// ---------- Import ----------

function readDirectives(html) {
  const out = {}
  const re = /<!--\s*(meta-description|date|slug|title)\s*:\s*([\s\S]*?)\s*-->/gi
  let m
  while ((m = re.exec(html))) out[m[1].toLowerCase()] = m[2].trim()
  return { directives: out, html: html.replace(re, '') }
}

function sanitize(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*')/gi, '')
    .replace(/(href|src)\s*=\s*("|')\s*javascript:[^"']*\2/gi, '$1=$2#$2')
}

async function downloadImages(html, slug) {
  const dir = path.join(PUBLIC_BLOG, slug)
  fs.mkdirSync(dir, { recursive: true })
  const found = new Map()
  const re = /<img\b[^>]*?\ssrc\s*=\s*"(https?:\/\/[^"]+)"/gi
  let m
  while ((m = re.exec(html))) found.set(m[1], null)

  let n = 0
  for (const url of found.keys()) {
    n++
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Image introuvable (${res.status}) : ${url}`)
    const type = (res.headers.get('content-type') || '').split(';')[0]
    const ext =
      { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/avif': 'avif' }[type] ||
      path.extname(new URL(url).pathname).replace('.', '') ||
      'jpg'
    const file = `image-${n}.${ext}`
    fs.writeFileSync(path.join(dir, file), Buffer.from(await res.arrayBuffer()))
    found.set(url, `/blog/${slug}/${file}`)
  }
  let out = html
  for (const [url, local] of found) out = out.split(url).join(local)
  return out
}

async function importInbox() {
  const files = fs.readdirSync(INBOX).filter((f) => f.toLowerCase().endsWith('.html'))
  const imported = []
  for (const file of files) {
    const raw = fs.readFileSync(path.join(INBOX, file), 'utf8')
    const { directives, html: noDirectives } = readDirectives(raw)
    let body = sanitize(noDirectives).trim()

    // Document complet : on garde le contenu de <body>
    const bodyMatch = body.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    if (bodyMatch) body = bodyMatch[1].trim()

    const h1 = body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)
    const title = directives.title || (h1 ? stripTags(h1[1]) : '')
    if (!title) throw new Error(`${file} : aucun titre (<h1> ou <!-- title: ... -->)`)
    body = body.replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, '').trim() // le gabarit réaffiche le titre

    const slug = slugify(directives.slug || title)
    if (fs.existsSync(path.join(CONTENT, slug))) {
      throw new Error(`${file} : l'article "${slug}" existe déjà (supprime content/blog/${slug} pour le remplacer)`)
    }

    body = await downloadImages(body, slug)

    const firstPara = body.match(/<p[^>]*>([\s\S]*?)<\/p>/i)
    const description = truncate(directives['meta-description'] || (firstPara ? stripTags(firstPara[1]) : title), 160)
    const cover = (body.match(/<img\b[^>]*?\ssrc="([^"]+)"/i) || [])[1] || null
    const coverAlt = cover ? ((body.match(/<img\b[^>]*?\salt="([^"]*)"/i) || [])[1] || title) : null
    const words = stripTags(body).split(' ').length

    const meta = {
      slug,
      title,
      description,
      date: directives.date || today(),
      cover,
      coverAlt,
      readingMinutes: Math.max(1, Math.round(words / 200)),
    }

    fs.mkdirSync(path.join(CONTENT, slug), { recursive: true })
    fs.writeFileSync(path.join(CONTENT, slug, 'article.html'), body + '\n')
    fs.writeFileSync(path.join(CONTENT, slug, 'meta.json'), JSON.stringify(meta, null, 2) + '\n')
    fs.unlinkSync(path.join(INBOX, file))
    imported.push(meta)
    console.log(`+ importé : ${slug} (${words} mots, ${meta.readingMinutes} min)`)
  }
  return imported
}

// ---------- Gabarits ----------

const GTM_HEAD = `<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MM3SW794');</script>
<!-- End Google Tag Manager -->`

const GTM_BODY = `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MM3SW794" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`

const NAV = [
  ['Accueil', '/'],
  ['Offres', '/offres'],
  ['IA & Automatisation', '/ia-automatisation'],
  ['Marketing Digital', '/marketing-digital'],
  ['Méthodologie', '/methodologie'],
  ['Blog', '/blog'],
  ['À propos', '/a-propos'],
]

function layout({ title, description, canonical, ogType, jsonLd, ogImage, body, activeBlog }) {
  const image = ogImage ? SITE + ogImage : SITE + '/og-image.png'
  return `<!doctype html>
<html lang="fr">
<head>
${GTM_HEAD}
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="author" content="Grégory Rota, METALBOOST IA Consulting">
<link rel="canonical" href="${canonical}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="${ogType}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${image}">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="METALBOOST IA Consulting">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/blog/blog.css">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
${GTM_BODY}
<header class="site-header">
  <div class="topbar"><div class="wrap">
    <a href="tel:+33658934607">06 58 93 46 07</a>
    <a href="mailto:contact@metalboost-ia.fr">contact@metalboost-ia.fr</a>
  </div></div>
  <nav class="wrap nav">
    <a href="/" class="logo"><img src="/blog/logo-metalboost.png" alt="METALBOOST IA Consulting"></a>
    <div class="links">
${NAV.map(([n, h]) => `      <a href="${h}"${activeBlog && h === '/blog' ? ' class="active"' : ''}>${esc(n)}</a>`).join('\n')}
    </div>
    <a href="/contact" class="btn">Contactez-moi</a>
  </nav>
</header>
<main>
${body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <p>© ${new Date().getFullYear()} METALBOOST IA Consulting. Tous droits réservés.</p>
    <p><a href="/mentions-legales">Mentions légales</a> · <a href="/politique-confidentialite">Politique de confidentialité</a></p>
  </div>
</footer>
</body>
</html>
`
}

function renderArticle(meta, bodyHtml) {
  const url = `${SITE}/blog/${meta.slug}`
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: meta.title,
        description: meta.description,
        datePublished: meta.date,
        dateModified: meta.date,
        inLanguage: 'fr-FR',
        mainEntityOfPage: url,
        url,
        ...(meta.cover ? { image: SITE + meta.cover } : {}),
        author: { '@type': 'Person', name: 'Grégory Rota', url: `${SITE}/a-propos` },
        publisher: { '@type': 'Organization', name: 'METALBOOST IA Consulting', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE + '/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE + '/blog' },
          { '@type': 'ListItem', position: 3, name: meta.title, item: url },
        ],
      },
    ],
  }
  const body = `<article class="wrap article">
  <nav class="crumbs" aria-label="Fil d'Ariane"><a href="/">Accueil</a> › <a href="/blog">Blog</a></nav>
  <h1>${esc(meta.title)}</h1>
  <p class="byline">Par Grégory Rota · <time datetime="${meta.date}">${frDate(meta.date)}</time> · ${meta.readingMinutes} min de lecture</p>
  <div class="prose">
${bodyHtml}
  </div>
  <aside class="cta">
    <h2>Et dans votre atelier ?</h2>
    <p>Découvrez en 2 minutes quelles tâches de votre entreprise peuvent être automatisées, ou échangeons directement sur votre situation.</p>
    <p><a class="btn" href="/audit-express">Faire l'audit express gratuit</a> <a class="btn btn-outline" href="/contact">Réserver un échange</a></p>
  </aside>
</article>`
  return layout({
    title: `${meta.title} | METALBOOST IA`,
    description: meta.description,
    canonical: url,
    ogType: 'article',
    ogImage: meta.cover,
    jsonLd,
    body,
    activeBlog: true,
  })
}

function renderIndex(metas) {
  const url = `${SITE}/blog`
  const description =
    "Conseils concrets sur l'IA, l'automatisation et le No Code pour les industriels de la métallerie, de la tôlerie et de la chaudronnerie."
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog METALBOOST IA',
    url,
    description,
    inLanguage: 'fr-FR',
    blogPost: metas.map((m) => ({
      '@type': 'BlogPosting',
      headline: m.title,
      url: `${SITE}/blog/${m.slug}`,
      datePublished: m.date,
    })),
  }
  const cards = metas.length
    ? metas
        .map(
          (m) => `    <a class="card" href="/blog/${m.slug}">
${m.cover ? `      <img src="${m.cover}" alt="${esc(m.coverAlt || m.title)}" loading="lazy">\n` : ''}      <div class="card-body">
        <p class="meta"><time datetime="${m.date}">${frDate(m.date)}</time> · ${m.readingMinutes} min</p>
        <h2>${esc(m.title)}</h2>
        <p>${esc(m.description)}</p>
        <span class="more">Lire l'article →</span>
      </div>
    </a>`,
        )
        .join('\n')
    : '    <p>Les premiers articles arrivent bientôt.</p>'
  const body = `<section class="hero"><div class="wrap">
  <h1>Le blog METALBOOST IA</h1>
  <p>${esc(description)}</p>
</div></section>
<section class="wrap grid">
${cards}
</section>`
  return layout({
    title: 'Blog IA et automatisation pour la métallerie | METALBOOST IA',
    description,
    canonical: url,
    ogType: 'website',
    jsonLd,
    body,
    activeBlog: true,
  })
}

// ---------- Génération ----------

function loadAll() {
  if (!fs.existsSync(CONTENT)) return []
  return fs
    .readdirSync(CONTENT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(CONTENT, d.name, 'meta.json')))
    .map((d) => JSON.parse(fs.readFileSync(path.join(CONTENT, d.name, 'meta.json'), 'utf8')))
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}

function updateSitemap(metas) {
  const entries = [
    { loc: `${SITE}/blog`, lastmod: metas[0]?.date || today(), freq: 'weekly', prio: '0.8' },
    ...metas.map((m) => ({ loc: `${SITE}/blog/${m.slug}`, lastmod: m.date, freq: 'monthly', prio: '0.7' })),
  ]
  const block =
    MARK_START +
    '\n' +
    entries
      .map(
        (e) =>
          `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.freq}</changefreq>\n    <priority>${e.prio}</priority>\n  </url>\n`,
      )
      .join('\n') +
    MARK_END
  let xml = fs.readFileSync(SITEMAP, 'utf8')
  if (xml.includes(MARK_START)) {
    xml = xml.replace(new RegExp(`${MARK_START}[\\s\\S]*?${MARK_END}`), () => block)
  } else {
    xml = xml.replace('</urlset>', () => `${block}\n\n</urlset>`)
  }
  fs.writeFileSync(SITEMAP, xml)
}

async function main() {
  fs.mkdirSync(INBOX, { recursive: true })
  fs.mkdirSync(CONTENT, { recursive: true })
  fs.mkdirSync(PUBLIC_BLOG, { recursive: true })

  await importInbox()

  const metas = loadAll()
  for (const m of metas) {
    const body = fs.readFileSync(path.join(CONTENT, m.slug, 'article.html'), 'utf8')
    fs.mkdirSync(path.join(PUBLIC_BLOG, m.slug), { recursive: true })
    fs.writeFileSync(path.join(PUBLIC_BLOG, m.slug, 'index.html'), renderArticle(m, body))
  }
  fs.writeFileSync(path.join(PUBLIC_BLOG, 'index.html'), renderIndex(metas))
  updateSitemap(metas)
  console.log(`Blog généré : ${metas.length} article(s).`)
}

main().catch((e) => {
  console.error('Erreur :', e.message)
  process.exit(1)
})
