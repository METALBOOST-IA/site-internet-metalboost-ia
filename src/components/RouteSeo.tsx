import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageSeo, canonicalFor } from "@/seo";

// Met à jour titre, description et canonical lors de la navigation côté navigateur.
// Le HTML pré-rendu contient déjà les bonnes valeurs pour le chargement initial.
const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const seo = pageSeo[path];
    if (!seo) return;
    const url = canonicalFor(path);
    document.title = seo.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", seo.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", seo.description);
  }, [pathname]);

  return null;
};

export default RouteSeo;
