import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Bot,
  FileText,
  Mail,
  Calendar,
  BarChart3,
  RefreshCw,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Zap,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import automationImage from "@/assets/automation-industrial.jpg";

const useCases = [
 {
    icon: Mail,
    title: "Traitement automatique des mails",
    before: "Entre 2-3h/jour à trier/labelliser/répondre, boite mail surchargée, erreurs destinataires, retards dans les réponses",
    after: "Mails classés automatiquement par thèmes, réponses instantanées, intervention humaine uniquement sur exceptions",
    gain: "10 à 12h de temps économisé par semaine",
  },
  {
    icon: FileText,
    title: "Génération automatique de devis",
    before: "2h par devis complexe, ressaisies multiples, erreurs fréquentes",
    after: "Devis généré en 10 min, données pré-remplies, calculs automatiques",
    gain: "50% de temps gagné sur le chiffrage",
  },
  {
    icon: Mail,
    title: "Relances devis automatisées",
    before: "Relances manuelles oubliées, peu de suivi des devis, devis perdus importants",
    after: "Séquences de relance automatiques, suivi centralisé, alertes intelligentes",
    gain: "30% de taux de conversion en plus",
  },
  {
    icon: Calendar,
    title: "Planification et ordonnancement",
    before: "Planning Excel mis à jour manuellement, manque de visibilité",
    after: "Planning connecté à l'ERP, mises à jour automatiques, alertes retard",
    gain: "Visibilité temps réel sur la charge",
  },
  {
    icon: BarChart3,
    title: "Reporting et tableaux de bord",
    before: "Rapports mensuels fastidieux, données obsolètes",
    after: "Dashboards temps réel, KPIs automatisés, alertes proactives",
    gain: "Décisions basées sur des données fiables",
  },
  {
    icon: RefreshCw,
    title: "Synchronisation des outils",
    before: "ERP, CRM, Excel, CFAO, non connectés, double ou triple saisie",
    after: "Flux de données automatisés, source unique de vérité",
    gain: "Fin des ressaisies et des erreurs",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Libérez vos équipes des tâches répétitives pour se concentrer sur celles à fortes valeurs ajoutées.",
  },
  {
    icon: AlertTriangle,
    title: "Réduction des erreurs",
    description: "Éliminez les ressaisies manuelles et les oublis grâce à l'automatisation.",
  },
  {
    icon: TrendingUp,
    title: "Performance accrue",
    description: "Améliorez votre réactivité commerciale et votre efficacité opérationnelle.",
  },
  {
    icon: Zap,
    title: "ROI rapide",
    description: "Des résultats mesurables dès les premières semaines de déploiement.",
  },
];

const IaAutomatisation = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={automationImage}
            alt="Automatisation industrielle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>
        <div className="relative container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              IA & Automatisation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Automatisez vos processus, libérez votre potentiel
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              Des solutions IA et NoCode adaptées aux réalités de l'atelier.
              Devis, relances, planning, reporting : automatisez ce qui peut l'être,
              concentrez-vous sur ce qui compte.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Évaluer mon potentiel d'automatisation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-industrial text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 section-alt">
        <div className="container-industrial">
          <div className="text-center mb-12">
            <span className="badge-industrial mb-4">Cas d'usage concrets</span>
            <h2 className="section-title">Avant / Après : ce qui change</h2>
            <p className="section-subtitle mx-auto">
              Des exemples réels d'automatisation pour votre entreprise.
            </p>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">
                      {useCase.title}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Before */}
                  <div className="p-4 bg-destructive/5 rounded-lg border border-destructive/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="h-4 w-4 text-destructive" />
                      <span className="text-sm font-medium text-destructive">Avant</span>
                    </div>
                    <p className="text-sm text-foreground">{useCase.before}</p>
                  </div>

                  {/* After */}
                  <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="text-sm font-medium text-secondary">Après</span>
                    </div>
                    <p className="text-sm text-foreground">{useCase.after}</p>
                  </div>

                  {/* Gain */}
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Résultat</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{useCase.gain}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-industrial mb-4">Notre approche</span>
              <h2 className="section-title">
                Une méthode pragmatique, pas de gadgets
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous ne déployons pas de l'IA pour faire de l'IA. Chaque automatisation
                doit apporter un gain mesurable et s'intégrer naturellement dans vos
                processus existants.
              </p>
              <ul className="space-y-4">
                {[
                  "Audit de vos processus actuels",
                  "Identification des quick wins",
                  "Solutions NoCode sans développement lourd",
                  "Formation de vos équipes",
                  "Mesure des résultats",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-card rounded-xl p-8 shadow-elevated border border-border/50">
                <div className="flex items-center gap-4 mb-6">
                  <Bot className="h-10 w-10 text-primary" />
                  <div>
                    <div className="font-semibold text-primary">Technologies utilisées</div>
                    <div className="text-sm text-muted-foreground">Outils NoCode & IA</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Make / n8n", "Airtable / Baserow", "ChatGPT / Gemini / Mistral", "Notion / NoteBook LM", "Lovable / Bolt", "Google Sheets / Excel"].map((tool, idx) => (
                    <div key={idx} className="p-3 bg-muted/50 rounded-lg text-sm text-center">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à automatiser vos processus ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Identifions ensemble les opportunités d'automatisation dans votre entreprise
            et estimons le potentiel de gains.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Demander un diagnostic gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default IaAutomatisation;
