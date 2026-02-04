import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Factory,
  TrendingUp,
  Users,
  Target,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import consultantImage from "@/assets/consultant-about.jpg";

const parcours = [
  {
    period: "28+ ans",
    title: "Expérience industrielle et logicielle CFAO",
    description: "Direction commerciale et développement au service de l'industrie de la transformation des métaux.",
  },
  {
    period: "Terrain",
    title: "Connaissance métier",
    description: "Des années passées à cotoyer des ateliers, au contact des équipes de production, des méthodes, des BE et du commerce.",
  },
  {
    period: "Digital",
    title: "Expertise technologique",
    description: "Formation continue en IA, automatisation NoCode et marketing digital B2B.",
  },
];

const values = [
  {
    icon: Target,
    title: "Pragmatisme",
    description: "Des solutions qui marchent dans la vraie vie industrielle, pas des concepts théoriques.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un accompagnement humain, sur le terrain, au plus près de vos équipes.",
  },
  {
    icon: TrendingUp,
    title: "Résultats",
    description: "Des gains mesurables, un ROI quantifiable, des objectifs tenus.",
  },
  {
    icon: Lightbulb,
    title: "Innovation accessible",
    description: "L'IA et le digital au service de l'industrie, sans jargon ni usine à gaz.",
  },
];

const expertise = [
  "Tôlerie fine et industrielle",
  "Chaudronnerie",
  "Découpe laser, plasma, jet d'eau",
  "Pliage et formage",
  "Poinçonnage-grignotage",
  "Mécano-soudure",
  "Sous-traitance industrielle",
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              À propos
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Un consultant qui parle le langage de l'atelier
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Issu du monde industriel, je combine expertise terrain et maîtrise
              des outils digitaux pour accompagner les PME de la transformation des métaux (Sous-traitant découpe, Tôlerie, Chaudronnerie, Mécano-soudure).
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={consultantImage}
                alt="Consultant METALBOOST IA"
                className="rounded-xl shadow-elevated w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="section-title mb-6">Mon parcours</h2>
              <p className="text-muted-foreground mb-6">
                Après plus de 28 ans dans l'industrie de la transformation des métaux (Sous-traitant découpe, Tôlerie, Chaudronnerie, Mécano-soudure) –
                à proposer des logiciels pour optimiser la production, ou à vendre des pièces métalliques – j'ai créé METALBOOST IA
                pour aider les TPE et PME industrielles à tirer parti de l'IA et du digital.
              </p>
              <p className="text-muted-foreground mb-8">
                Je connais vos difficultés et enjeux de l'intérieur : la pression sur les délais,
                les marges serrées, les difficultés de recrutement, et une concurrence acharnée. C'est cette compréhension terrain qui guide
                mes recommandations.
              </p>
              <div className="space-y-4">
                {parcours.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0">
                      <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-industrial mb-4">Expertise métier</span>
              <h2 className="section-title mb-6">
                Spécialiste de la transformation des métaux
              </h2>
              <p className="text-muted-foreground mb-6">
                Je travaille exclusivement avec les industriels de la filière métallurgique.
                Cette spécialisation me permet de comprendre vos enjeux spécifiques
                et de proposer des solutions vraiment adaptées.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-primary" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-elevated border border-border/50">
              <h3 className="text-xl font-semibold text-primary mb-6">Ma vision</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'industrie française a un potentiel énorme. Mais trop de TPE/PME
                  restent à l'écart de la transformation digitale, faute de temps,
                  de compétences ou d'interlocuteurs qui comprennent leur métier.
                </p>
                <p>
                  Ma mission : rendre l'IA et le digital accessibles aux industriels,
                  avec des solutions pragmatiques, un accompagnement humain et des
                  résultats mesurables.
                </p>
                <p className="font-medium text-primary">
                  Pas de buzzwords, pas de gadgets. Juste des gains concrets pour
                  votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Mes valeurs</span>
            <h2 className="section-title">Ce qui guide mon travail</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-industrial text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Vous avez un projet de transformation digitale ou d'automatisation ? Vous souhaitez explorer
            les possibilités de l'IA pour votre entreprise ? Échangeons.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Prendre rendez-vous
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
