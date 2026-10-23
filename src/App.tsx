import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Offres from "./pages/Offres";
import IaAutomatisation from "./pages/IaAutomatisation";
import MarketingDigital from "./pages/MarketingDigital";
import Methodologie from "./pages/Methodologie";
import CasUsage from "./pages/CasUsage";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import NotFound from "./pages/NotFound";
import RouteSeo from "./components/RouteSeo";

const queryClient = new QueryClient();

// Le routeur (BrowserRouter côté navigateur, StaticRouter pour le pré-rendu) est fourni par l'appelant.
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RouteSeo />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/offres" element={<Offres />} />
        <Route path="/ia-automatisation" element={<IaAutomatisation />} />
        <Route path="/marketing-digital" element={<MarketingDigital />} />
        <Route path="/methodologie" element={<Methodologie />} />
        <Route path="/cas-usage" element={<CasUsage />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
