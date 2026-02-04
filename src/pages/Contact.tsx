import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Send,
  Linkedin,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const subjects = [
  "Audit IA & automatisation",
  "Marketing digital industriel",
  "Accompagnement global",
  "Question générale",
  "Autre",
];

const benefits = [
  "Échange gratuit et sans engagement",
  "Diagnostic personnalisé de votre situation",
  "Recommandations concrètes et priorisées",
  "Estimation du potentiel de gains",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    function: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Je vous recontacte dans les plus brefs délais.",
    });

    setFormData({
      name: "",
      company: "",
      function: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-industrial">
          <div className="max-w-3xl">
            <span className="badge-industrial bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Échangeons sur votre projet
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Vous avez des questions ? Vous souhaitez un diagnostic de votre situation ?
              Prenez rendez-vous ou envoyez-moi un message.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="container-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom/Prénom *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom/prénom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Société *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="function">Fonction *</Label>
                    <Input
                      id="function"
                      name="function"
                      value={formData.function}
                      onChange={handleChange}
                      required
                      placeholder="Votre fonction"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="06 00 00 00 00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet *</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir un sujet" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet ou vos questions..."
                    rows={5}
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact info & Booking */}
            <div className="space-y-8">
              {/* Booking */}
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    Prendre rendez-vous
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Réservez directement un créneau pour un premier échange gratuit
                  de 30 minutes.
                </p>
                <ul className="space-y-3 mb-6">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                {/* Koalendar embed placeholder */}
                <div className="bg-muted/50 rounded-lg p-6 text-center border border-dashed border-border">
                  <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Intégration Koalendar
                  </p>
                  <Button variant="cta" size="lg" asChild>
                    <a
                      href="https://koalendar.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Réserver un créneau
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact info */}
              <div className="bg-card rounded-xl p-6 lg:p-8 shadow-card border border-border/50">
                <h3 className="text-xl font-semibold text-primary mb-6">
                  Coordonnées
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="tel:+33658934607"
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Téléphone</div>
                        <div className="font-medium">06 58 93 46 07</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:contact@metalboost-ia.fr"
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-medium">contact@metalboost-ia.fr</div>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Zone d'intervention</div>
                      <div className="font-medium">France – Sur site ou à distance</div>
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/gregoryrota/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Linkedin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">LinkedIn</div>
                        <div className="font-medium">Suivez-nous</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
