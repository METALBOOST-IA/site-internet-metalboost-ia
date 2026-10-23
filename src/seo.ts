// Métadonnées par page. Utilisé par le pré-rendu (scripts/prerender.mjs, via entry-server)
// et par RouteSeo pour mettre à jour l'onglet lors de la navigation dans le site.

export const SITE_URL = "https://metalboost-ia.fr";

export interface PageSeo {
  title: string;
  description: string;
}

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "METALBOOST IA Consulting | Conseil IA & NoCode pour l'industrie des métaux",
    description:
      "Conseil en IA, automatisation NoCode et marketing digital pour les industriels de la transformation des métaux. Optimisez vos processus, générez plus de leads.",
  },
  "/offres": {
    title: "Offres IA et NoCode pour la métallerie | METALBOOST IA",
    description:
      "Audit, automatisation et marketing digital : des solutions concrètes pour les industriels de la métallerie, de la tôlerie et de la chaudronnerie.",
  },
  "/ia-automatisation": {
    title: "IA et automatisation NoCode pour l'industrie | METALBOOST IA",
    description:
      "Automatisez les tâches répétitives de votre atelier et de votre bureau avec l'IA et le NoCode : relance de devis, saisie, suivi, alertes.",
  },
  "/marketing-digital": {
    title: "Marketing digital B2B pour l'industrie | METALBOOST IA",
    description:
      "Générez des leads B2B qualifiés pour votre entreprise de métallerie : site, contenu, référencement et prospection ciblée.",
  },
  "/methodologie": {
    title: "Notre méthodologie : du diagnostic aux résultats | METALBOOST IA",
    description:
      "Une approche structurée, du diagnostic à la mesure des résultats, adaptée aux réalités des ateliers et des PME industrielles.",
  },
  "/a-propos": {
    title: "À propos : un consultant qui parle le langage de l'atelier | METALBOOST IA",
    description:
      "Plus de 28 ans d'expérience dans l'industrie et les logiciels de CFAO, au service des industriels de la transformation des métaux.",
  },
  "/contact": {
    title: "Contact : échangeons sur votre projet | METALBOOST IA",
    description:
      "Parlez-nous de votre projet d'automatisation ou d'IA. Un premier échange gratuit pour identifier ce qui peut vous faire gagner du temps.",
  },
  "/mentions-legales": {
    title: "Mentions légales | METALBOOST IA",
    description: "Mentions légales du site metalboost-ia.fr.",
  },
  "/politique-confidentialite": {
    title: "Politique de confidentialité | METALBOOST IA",
    description: "Politique de confidentialité et protection des données personnelles du site metalboost-ia.fr.",
  },
};

export const canonicalFor = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);
