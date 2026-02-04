import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-metalboost.png";
const navigation = [{
  name: "Accueil",
  href: "/"
}, {
  name: "Offres",
  href: "/offres"
}, {
  name: "IA & Automatisation",
  href: "/ia-automatisation"
}, {
  name: "Marketing Digital",
  href: "/marketing-digital"
}, {
  name: "Méthodologie",
  href: "/methodologie"
}, {
  name: "À propos",
  href: "/a-propos"
}];
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;
  return <header className="bg-primary sticky top-0 z-50 shadow-industrial">
      {/* Top bar */}
      <div className="hidden lg:block border-b border-primary-foreground/10">
        <div className="container-industrial py-2">
          <div className="flex justify-end items-center gap-6 text-sm text-primary-foreground/80">
            <a href="tel:+33658934607" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>06 58 93 46 07</span>
            </a>
            <a href="mailto:contact@metalboost-ia.fr" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail className="h-4 w-4" />
              <span>contact@metalboost-ia.fr</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-industrial py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="METALBOOST IA Consulting" className="h-20 md:h-24 w-auto brightness-110 contrast-125 drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive(item.href) ? "text-primary-foreground bg-primary-foreground/10" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"}`}>
                {item.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contactez-moi</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="xl:hidden p-2 text-primary-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && <div className="xl:hidden mt-4 pb-4 border-t border-primary-foreground/10 pt-4">
            <div className="flex flex-col gap-2">
              {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive(item.href) ? "text-primary-foreground bg-primary-foreground/10" : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"}`}>
                  {item.name}
                </Link>)}
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Contactez-moi
                  </Link>
                </Button>
              </div>
            </div>
          </div>}
      </nav>
    </header>;
};
export default Header;