import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import logo from "@/assets/logo-metalboost.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      {/* Main footer */}
      <div className="container-industrial py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="METALBOOST IA Consulting" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Un consultant IA & NoCode qui parle le langage de l'atelier.
            </p>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Conseil en IA, automatisation NoCode et marketing digital pour les industriels de la transformation des métaux.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Nos services</h4>
            <ul className="space-y-3">
              {[{
              name: "IA & Automatisation",
              href: "/ia-automatisation"
            }, {
              name: "Marketing Digital Industriel",
              href: "/marketing-digital"
            }, {
              name: "Audit & Diagnostic",
              href: "/offres"
            }, {
              name: "Accompagnement sur mesure",
              href: "/methodologie"
            }].map(item => <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Navigation</h4>
            <ul className="space-y-3">
              {[{
              name: "Accueil",
              href: "/"
            }, {
              name: "Cas d'usage",
              href: "/cas-usage"
            }, {
              name: "À propos",
              href: "/a-propos"
            }, {
              name: "Contact",
              href: "/contact"
            }].map(item => <li key={item.name}>
                  <Link to={item.href} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.name}</span>
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-primary-foreground">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+33658934607" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>06 58 93 46 07</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@metalboost-ia.fr" className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>contact@metalboost-ia.fr</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>France – Interventions sur site ou à distance</span>
                </div>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gregoryrota/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-industrial py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} METALBOOST IA Consulting. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;