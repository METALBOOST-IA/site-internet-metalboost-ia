import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Search,
  Wrench,
  BarChart3,
  Users,
  Zap,
  TrendingUp,
  Settings,
  Target,
  CheckCircle2,
} from "lucide-react";

const mainServices = [
  {
    icon: Search,
    title: "Audit & Diagnostic IA",
    description: "Analyse complète de vos processus pour identifier les opportunités d'automatisation et de digitalisation.",
    features: [
      "Cartographie des processus actuels",
      "Identification des tâches automatisables",
      "Évaluation du potentiel IA",
      "Recommandations priorisées",
    ],
    link: "/ia-automatisation",
  },
  {
    icon: Zap,
    title: "Automatisation des processus",
    description: "Déployez des solutions NoCode pour automatiser vos tâches répétitives et vous libérer du temps.",
    features: [
      "Génération automatique de devis",
      "Relances clients automatisées",
      "Synchronisation ERP / CRM",
      "Tableaux de bord temps réel",
    ],
    link: "/ia-automatisation",
  },
  {
    icon: TrendingUp,
    title: "Marketing digital industriel",
    description: "Attirez des leads B2B qualifiés grâce à une stratégie digitale adaptée aux industriels.",
    features: [
      "SEO / GEO industriel",
      "Optimisation de conversion",
      "Génération de leads qualifiés",
      "Positionnement marché",
    ],
    link: "/marketing-digital",
  },
  {
    icon: Settings,
    title: "Outils NoCode sur mesure",
    description: "Développement d'applications métier adaptées à vos besoins sans programmation complexe.",
    features: [
      "Configurateurs de produits",
      "Portails clients",
      "Applications de suivi",
      "Intégrations sur mesure",
    ],
    link: "/ia-automatisation",
  },
];

const accompagnement = [
  {
    icon: Target,
    title: "Diagnostic global",
    description: "Analyse de votre situation actuelle : processus, outils, présence digitale, performance commerciale.",
  },
  {
    icon: BarChart3,
    title: "Plan d'actions priorisé",
    description: "Feuille de route claire avec les actions à plus fort impact et le meilleur retour sur investissement.",
  },
  {
    icon: Wrench,
    title: "Déploiement progressif",
    description: "Mise en place par étapes, formation des équipes, accompagnement au changement.",
  },
  {
    icon: Users,
    title: "Suivi des résultats",
    description: "Mesure des gains, ajustements continus, accompagnement sur la durée.",
  },
];

const Offres = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Nos offres
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Des solutions concrètes pour votre industrie
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Audit, automatisation, marketing digital : des prestations adaptées
              aux réalités des PME industrielles de la transformation des métaux.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <h2 className="section-title">Nos prestations</h2>
            <p className="section-subtitle mx-auto">
              Des services modulables selon vos besoins et votre maturité digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="card-industrial">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-secondary font-medium hover:gap-2 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Notre approche</span>
            <h2 className="section-title">Un accompagnement complet</h2>
            <p className="section-subtitle mx-auto">
              Du diagnostic initial au suivi des résultats, nous vous accompagnons
              à chaque étape de votre transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accompagnement.map((item, index) => (
              <div key={index} className="relative">
                <div className="card-industrial text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-secondary">{index + 1}</span>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {index < accompagnement.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-5 w-5 text-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Discutons de vos besoins
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Chaque entreprise est unique. Prenez rendez-vous pour un premier échange
              gratuit et sans engagement.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Offres;
