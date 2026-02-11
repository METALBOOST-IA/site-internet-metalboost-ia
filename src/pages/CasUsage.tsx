import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Factory,
  FileText,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  Quote,
} from "lucide-react";

const caseStudies = [
  {
    category: "Atelier",
    icon: Factory,
    title: "Automatisation du planning de production",
    client: "PME de tôlerie fine – 25 salariés",
    context: "Planning géré sur Excel, mise à jour manuelle chronophage, manque de visibilité sur la charge machine.",
    solution: [
      "Création d'un outil de planning connecté à l'ERP",
      "Alertes automatiques sur les retards et surcharges",
      "Tableau de bord temps réel pour le responsable production",
    ],
    results: [
      { metric: "4h/semaine", description: "économisées sur la mise à jour du planning" },
      { metric: "100%", description: "de visibilité sur la charge à J+15" },
      { metric: "-30%", description: "de retards livrés" },
    ],
    testimonial: "On a enfin une vision claire de notre charge. On anticipe au lieu de subir.",
  },
  {
    category: "Bureau",
    icon: FileText,
    title: "Génération automatique des devis",
    client: "Sous-traitant découpe laser – 40 salariés",
    context: "Devis complexes réalisés manuellement, 2h en moyenne par dossier, erreurs fréquentes de calcul.",
    solution: [
      "Configurateur de devis connecté aux tarifs et temps gammes",
      "Pré-remplissage automatique des informations client",
      "Génération PDF automatique et envoi direct",
    ],
    results: [
      { metric: "70%", description: "de temps gagné sur le chiffrage" },
      { metric: "0 erreur", description: "de calcul depuis la mise en place" },
      { metric: "+15%", description: "de devis envoyés par semaine" },
    ],
    testimonial: "Nos commerciaux passent leur temps à vendre, plus à saisir des données.",
  },
  {
    category: "Commerce",
    icon: Users,
    title: "Automatisation des relances clients",
    client: "Chaudronnier industriel – 18 salariés",
    context: "Relances faites « quand on y pense », suivi client dispersé, opportunités perdues.",
    solution: [
      "Séquences de relance automatiques après devis",
      "CRM simple avec vue pipeline",
      "Alertes pour les affaires à forte valeur",
    ],
    results: [
      { metric: "+25%", description: "de taux de transformation devis" },
      { metric: "100%", description: "des devis suivis systématiquement" },
      { metric: "2h/jour", description: "libérées pour la prospection" },
    ],
    testimonial: "On ne laisse plus filer d'affaires. Le suivi est devenu automatique.",
  },
  {
    category: "Marketing",
    icon: TrendingUp,
    title: "Refonte digitale et génération de leads",
    client: "Spécialiste du pliage CNC – 30 salariés",
    context: "Site web obsolète, aucune demande entrante, dépendance au bouche-à-oreille et aux commerciaux.",
    solution: [
      "Refonte complète du site web B2B",
      "Stratégie SEO sur les requêtes métier",
      "Mise en place d'un formulaire de demande de devis qualifiant",
    ],
    results: [
      { metric: "x3", description: "demandes de devis en 6 mois" },
      { metric: "Top 3", description: "Google sur « pliage tôle [région] »" },
      { metric: "5 nouveaux clients", description: "via le site la première année" },
    ],
    testimonial: "Notre site web est devenu notre meilleur commercial. Il travaille 24h/24.",
  },
];

const CasUsage = () => {
  useEffect(() => {
    // Add noindex meta tag for SEO
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Cas d'usage
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Des résultats concrets, des clients satisfaits
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Découvrez comment nous avons aidé des industriels comme vous
              à optimiser leurs processus et développer leur performance.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-card border border-border/50"
              >
                {/* Header */}
                <div className="bg-muted/50 px-6 lg:px-8 py-4 flex items-center gap-4 border-b border-border/50">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <study.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h3 className="text-lg font-semibold text-primary">{study.title}</h3>
                  </div>
                </div>

                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Context & Solution */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                          Client
                        </div>
                        <p className="text-foreground">{study.client}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                          Contexte
                        </div>
                        <p className="text-foreground">{study.context}</p>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-muted-foreground mb-2">
                          Solution mise en place
                        </div>
                        <ul className="space-y-2">
                          {study.solution.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <div className="flex items-start gap-3">
                          <Quote className="h-5 w-5 text-primary flex-shrink-0" />
                          <p className="italic text-foreground">{study.testimonial}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-1">
                      <div className="text-sm font-semibold text-muted-foreground mb-4">
                        Résultats obtenus
                      </div>
                      <div className="space-y-4">
                        {study.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="p-4 bg-secondary/5 rounded-lg border border-secondary/10"
                          >
                            <div className="text-2xl font-bold text-secondary mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Et vous, quel sera votre prochain gain ?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Chaque entreprise est unique. Discutons de votre situation
              et identifions les opportunités les plus pertinentes pour vous.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Échanger sur mon projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CasUsage;
