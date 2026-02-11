import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Search, Target, Wrench, BarChart3, CheckCircle2, Clock, Users, Lightbulb, Rocket } from "lucide-react";
const steps = [{
  number: "01",
  icon: Search,
  title: "Diagnostic global",
  duration: "1 à 2 semaines",
  description: "J'analyse votre situation actuelle pour comprendre vos enjeux et identifier les opportunités.",
  details: ["Entretiens avec les équipes clés (direction, production, commercial, ADV)", "Analyse des processus actuels et des outils utilisés", "Audit de votre présence digitale et positionnement marché", "Identification des points de friction et des gisements de valeur", "Benchmark des pratiques sectorielles"],
  deliverable: "Rapport de diagnostic avec cartographie des processus et opportunités identifiées"
}, {
  number: "02",
  icon: Target,
  title: "Plan d'actions priorisé",
  duration: "1 semaine",
  description: "Nous définissons ensemble une feuille de route claire, priorisée selon l'impact et la faisabilité.",
  details: ["Définition des objectifs mesurables (KPIs)", "Priorisation des actions selon le ratio effort/impact", "Identification des quick wins à court terme", "Planning de déploiement réaliste", "Estimation budgétaire et ROI attendu"],
  deliverable: "Feuille de route détaillée avec planning, budget et indicateurs de succès"
}, {
  number: "03",
  icon: Wrench,
  title: "Déploiement progressif",
  duration: "Variable selon le projet",
  description: "je mets en œuvre les solutions par étapes, en commençant par les gains rapides.",
  details: ["Mise en place des automatisations et outils", "Formation des équipes concernées", "Accompagnement au changement", "Tests et ajustements en conditions réelles", "Documentation des processus"],
  deliverable: "Solutions opérationnelles, équipes formées, documentation complète"
}, {
  number: "04",
  icon: BarChart3,
  title: "Mesure et optimisation",
  duration: "Suivi continu",
  description: "Je mesure les résultats et optimise en continu pour maximiser la valeur générée.",
  details: ["Suivi des KPIs définis", "Reporting régulier et transparent", "Identification des axes d'amélioration", "Ajustements basés sur les retours terrain", "Accompagnement sur la durée"],
  deliverable: "Tableaux de bord, rapports d'avancement, recommandations d'optimisation"
}];
const principles = [{
  icon: Lightbulb,
  title: "Pragmatisme",
  description: "Je ne propose que des solutions qui apportent un gain mesurable et s'intègrent à votre réalité."
}, {
  icon: Clock,
  title: "Quick wins d'abord",
  description: "Je commence par les actions à fort impact et effort raisonnable pour des résultats rapides."
}, {
  icon: Users,
  title: "Co-construction",
  description: "Vos équipes sont impliquées à chaque étape. Les solutions sont construites avec vous, pas pour vous."
}, {
  icon: Rocket,
  title: "Autonomie",
  description: "Mon objectif : vous rendre autonomes. Formation, documentation, transfert de compétences."
}];
const Methodologie = () => {
  return <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Méthodologie
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Une approche structurée, des résultats mesurables
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">Du diagnostic à la mesure des résultats, je vous accompagne avec une méthode éprouvée, adaptée aux réalités industrielles.</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Nos principes</span>
            <h2 className="section-title">Ce qui guide mon approche</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => <div key={index} className="card-industrial text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Les étapes</span>
            <h2 className="section-title">Notre méthodologie en 4 phases</h2>
            <p className="section-subtitle mx-auto">
              Un processus clair et transparent pour transformer votre entreprise.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4">
                      <div className="text-5xl font-bold text-secondary/20">
                        {step.number}
                      </div>
                      <div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                          <step.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {step.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-4">{step.description}</p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-1">
                    <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                      Ce que nous faisons
                    </h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{detail}</span>
                        </li>)}
                    </ul>
                  </div>

                  {/* Deliverable */}
                  <div className="lg:col-span-1">
                    <h4 className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                      Livrable
                    </h4>
                    <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                      <p className="text-sm text-foreground">{step.deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Commençons par un diagnostic
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Échangeons sur votre situation et vos objectifs. Nous identifierons
              ensemble les meilleures opportunités pour votre entreprise.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Réserver un diagnostic gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Methodologie;
