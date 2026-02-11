import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Target, Zap, TrendingUp, Clock, Shield, CheckCircle2, Factory, Cog, BarChart3, Users } from "lucide-react";
import heroImage from "@/assets/hero-workshop.jpg";
const stats = [{
  value: "30%",
  label: "Réduction du temps de chiffrage"
}, {
  value: "2x",
  label: "Plus de leads qualifiés"
}, {
  value: "50%",
  label: "Moins de tâches manuelles répétitives"
}];
const problems = [{
  icon: Clock,
  title: "Temps perdu sur les tâches répétitives",
  description: "Devis, relances, planning… vos équipes passent plus de temps à administrer qu'à produire."
}, {
  icon: Target,
  title: "Difficultés à capter de nouveaux clients",
  description: "Votre site web ne génère pas de demandes ? Vos commerciaux manquent de leads qualifiés ?"
}, {
  icon: Cog,
  title: "Outils dispersés et non connectés",
  description: "ERP, Excel, mails… les informations circulent mal et créent des erreurs."
}, {
  icon: BarChart3,
  title: "Manque de visibilité sur la performance",
  description: "Difficile de piloter sans tableaux de bord clairs et actualisés."
}];
const services = [{
  icon: Zap,
  title: "IA & Automatisation",
  description: "Automatisez vos processus internes : devis, relances, planning, reporting. Gagnez du temps, réduisez les erreurs.",
  href: "/ia-automatisation"
}, {
  icon: TrendingUp,
  title: "Marketing Digital Industriel",
  description: "Générez des leads B2B qualifiés. SEO industriel, positionnement, conversion de prospects en clients.",
  href: "/marketing-digital"
}, {
  icon: Shield,
  title: "Accompagnement sur mesure",
  description: "Diagnostic complet, plan d'actions priorisé, déploiement progressif et mesure des résultats.",
  href: "/methodologie"
}];
const benefits = ["Gains de temps mesurables dès les premières semaines", "Réduction des erreurs et des ressaisies", "Meilleure réactivité commerciale", "Visibilité accrue auprès de vos prospects", "Outils simples, adaptés à votre métier", "ROI quantifiable et suivi dans le temps"];
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Atelier industriel connecté" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-industrial py-20">
          <div className="max-w-2xl stagger-children">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Conseil IA & NoCode pour l'industrie
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Un consultant IA & NoCode qui parle le langage de l'atelier
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">Fort de 28 ans d’expérience dans la transformation des métaux, j’accompagne aujourd’hui les industriels dans l’optimisation de leurs processus, l’automatisation de leurs tâches et la génération de nouveaux clients grâce à des solutions concrètes et personnalisées.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/offres">Découvrir nos offres</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-8">
        <div className="container-industrial">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Vos défis quotidiens</span>
            <h2 className="section-title">
              Ces problématiques vous parlent ?
            </h2>
            <p className="section-subtitle mx-auto">Les industriels de la transformation des métaux font face à des défis communs. Je les connais et j'apporte les solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => <div key={index} className="card-industrial flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <problem.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Nos solutions</span>
            <h2 className="section-title">Comment je peux vous aider</h2>
            <p className="section-subtitle mx-auto">
              Une approche pragmatique combinant optimisation des processus internes
              et performance commerciale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => <Link key={index} to={service.href} className="card-industrial group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <span className="inline-flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-industrial mb-4">Pourquoi nous choisir</span>
              <h2 className="section-title">
                Des résultats concrets et mesurables
              </h2>
              <p className="section-subtitle mb-8">Je ne vends pas de la technologie, mais des gains de performance adaptés à votre réalité industrielle.</p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>)}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-2xl" />
              <div className="relative bg-card rounded-xl p-8 shadow-elevated border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Spécialiste métier</div>
                    <div className="text-sm text-muted-foreground">Transformation des métaux</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Tôlerie / Chaudronnerie</span>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Découpe laser / plasma / jet d'eau / poinçonnage /...</span>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Sous-traitance industrielle</span>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm text-muted-foreground">Pliage / Mecano-soudure</span>
                    <Users className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Osez l'IA Section */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="max-w-4xl mx-auto text-center">
            <span className="badge-industrial mb-4">Financement & Accompagnement</span>
            <h2 className="section-title">
              Osez l'IA : un dispositif pour accélérer votre transformation
            </h2>
            <p className="section-subtitle mx-auto mb-6">
              Le gouvernement français a lancé le programme <strong>"Osez l'IA"</strong> pour aider 
              les TPE, PME et ETI à intégrer l'intelligence artificielle dans leurs activités. 
              Ce dispositif offre un accompagnement personnalisé et des aides financières 
              pour faciliter votre transition vers des outils plus performants.
            </p>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              En tant que consultant spécialisé dans l'industrie, je peux vous accompagner 
              dans vos démarches pour bénéficier de ce programme et maximiser vos chances 
              de réussite dans l'intégration de l'IA au sein de votre entreprise.
            </p>
            <Button variant="cta" size="lg" asChild>
              <a 
                href="https://www.economie.gouv.fr/actualites/osez-lia-un-plan-pour-diffuser-lia-dans-toutes-les-entreprises#" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Découvrir le dispositif Osez l'IA
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à optimiser votre industrie ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Échangeons sur vos enjeux et découvrez comment l'IA et le marketing digital
            peuvent transformer votre entreprise.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Réserver un diagnostic gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>;
};
export default Index;
