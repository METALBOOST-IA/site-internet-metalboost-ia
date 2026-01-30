import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Search,
  Target,
  Users,
  TrendingUp,
  Globe,
  MousePointer,
  BarChart3,
  CheckCircle2,
  Eye,
  MessageSquare,
  FileSearch,
} from "lucide-react";
import marketingImage from "@/assets/marketing-digital.jpg";

const services = [
  {
    icon: Search,
    title: "SEO / GEO Industriel",
    description: "Positionnez-vous sur les recherches de vos prospects. SEO technique, contenu métier, référencement local.",
    features: [
      "Audit SEO complet",
      "Stratégie de mots-clés métier",
      "Optimisation technique",
      "Contenu industriel qualifié",
    ],
  },
  {
    icon: Globe,
    title: "Site web B2B performant",
    description: "Un site qui génère des leads, pas une simple vitrine. Conversion, crédibilité, acquisition.",
    features: [
      "Design professionnel industriel",
      "Parcours de conversion optimisé",
      "Formulaires qualifiants",
      "Intégration CRM",
    ],
  },
  {
    icon: Target,
    title: "Génération de leads B2B",
    description: "Attirez des prospects qualifiés grâce à une stratégie de contenu et d'acquisition ciblée.",
    features: [
      "Campagnes LinkedIn Ads",
      "Content marketing industriel",
      "Landing pages optimisées",
      "Lead nurturing",
    ],
  },
  {
    icon: MousePointer,
    title: "Optimisation de la conversion",
    description: "Transformez plus de visiteurs en contacts qualifiés. Analyse, tests, amélioration continue.",
    features: [
      "Analyse du parcours utilisateur",
      "A/B testing",
      "Optimisation des formulaires",
      "Amélioration des taux de conversion",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Audit de votre présence digitale",
    description: "Analyse de votre site, positionnement SEO, concurrence, opportunités.",
  },
  {
    step: "02",
    title: "Stratégie sur mesure",
    description: "Définition des objectifs, cibles prioritaires, canaux d'acquisition adaptés.",
  },
  {
    step: "03",
    title: "Mise en œuvre progressive",
    description: "Déploiement par étapes avec des quick wins rapides et des actions structurantes.",
  },
  {
    step: "04",
    title: "Mesure et optimisation",
    description: "Suivi des KPIs, reporting régulier, ajustements basés sur les données.",
  },
];

const stats = [
  { value: "85%", label: "des acheteurs B2B recherchent en ligne" },
  { value: "70%", label: "du parcours d'achat fait avant contact" },
  { value: "3x", label: "plus de leads avec le SEO vs pub" },
];

const MarketingDigital = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={marketingImage}
            alt="Marketing digital industriel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="relative container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Marketing Digital Industriel
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Générez des leads B2B qualifiés pour votre industrie
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Vos prospects vous cherchent en ligne. Êtes-vous visible ?
              SEO industriel, génération de leads, optimisation de conversion :
              une stratégie digitale adaptée au B2B.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Auditer ma visibilité en ligne
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-muted">
        <div className="container-industrial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-industrial mb-4">Le constat</span>
              <h2 className="section-title">
                Le marketing industriel a changé
              </h2>
              <p className="text-muted-foreground mb-6">
                Les acheteurs industriels font leurs recherches en ligne bien avant de contacter
                un fournisseur. Si vous n'êtes pas visible, vous perdez des opportunités
                au profit de concurrents mieux positionnés.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Eye, text: "Vos prospects vous cherchent sur Google" },
                  { icon: FileSearch, text: "Ils comparent avant de contacter" },
                  { icon: MessageSquare, text: "Ils veulent des preuves, pas des promesses" },
                  { icon: BarChart3, text: "La décision se prend en équipe, avec du contenu" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-elevated border border-border/50">
              <h3 className="text-xl font-semibold text-primary mb-6">
                Ce qu'attendent vos prospects
              </h3>
              <ul className="space-y-4">
                {[
                  "Un site professionnel qui inspire confiance",
                  "Des informations claires sur vos capacités",
                  "Des preuves de votre expertise (cas clients)",
                  "Un moyen simple de vous contacter",
                  "Une réponse rapide à leurs demandes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Nos services</span>
            <h2 className="section-title">
              Une stratégie digitale complète
            </h2>
            <p className="section-subtitle mx-auto">
              Du référencement à la conversion, nous couvrons l'ensemble
              du parcours d'acquisition de vos prospects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-industrial">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Méthodologie</span>
            <h2 className="section-title">Notre approche en 4 étapes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="card-industrial h-full">
                  <div className="text-4xl font-bold text-secondary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à développer votre visibilité en ligne ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Analysons ensemble votre présence digitale et identifions
            les opportunités de croissance pour votre entreprise.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Demander un audit gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingDigital;
