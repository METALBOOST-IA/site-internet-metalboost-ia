#!/usr/bin/env node
// Pré-rendu des pages du site (après `vite build` et `vite build --ssr`).
// Pour chaque route de src/seo.ts : HTML complet dans dist/<route>/index.html,
// avec titre, description, canonical et balises Open Graph propres à la page.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const SSR = path.join(ROOT, 'dist-ssr')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const { render, pageSeo, canonicalFor } = await import(pathToFileURL(path.join(SSR, 'entry-server.js')).href)

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8')
if (!template.includes('<div id="root"></div>')) throw new Error('Gabarit inattendu : <div id="root"></div> introuvable')

const setTag = (html, regex, replacement) => {
  if (!regex.test(html)) throw new Error(`Balise introuvable : ${regex}`)
  return html.replace(regex, () => replacement)
}

// Coquille vide pour les routes non pré-rendues (404, /cas-usage) : évite d'hydrater la page d'accueil avec un autre contenu.
fs.writeFileSync(path.join(DIST, 'spa.html'), template)

for (const route of Object.keys(pageSeo)) {
  const seo = pageSeo[route]
  const url = canonicalFor(route)
  let html = template
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${esc(seo.title)}</title>`)
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(seo.description)}" />`)
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${esc(seo.title)}" />`)
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${esc(seo.description)}" />`)
  html = html.replace('<div id="root"></div>', () => `<div id="root">${render(route)}</div>`)

  const out = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, html)
  console.log(`+ ${route} (${(html.length / 1024).toFixed(0)} Ko)`)
}
fs.rmSync(SSR, { recursive: true, force: true })
