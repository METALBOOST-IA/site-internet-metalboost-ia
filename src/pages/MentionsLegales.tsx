import Layout from "@/components/Layout";
const MentionsLegales = () => {
  return <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container-industrial">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Mentions légales
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Informations légales relatives au site METALBOOST IA Consulting.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-industrial max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Éditeur */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Éditeur du site
              </h2>
              <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                <p className="text-foreground"><strong>Raison sociale :</strong> METALBOOST IA Consulting affilié à la couveuse d'entreprise AUXIME SAS</p>
                <p className="text-foreground"><strong>Forme juridique :</strong> En contrat CAPE jusqu'au 30/11/2026</p>
                <p className="text-foreground"><strong>Siège social :</strong> 9 Quai Jean Moulin, 69001 Lyon</p>
                <p className="text-foreground"><strong>SIRET :</strong> 404 328 510 00023</p>
                <p className="text-foreground"><strong>Numéro TVA intracommunautaire :</strong> FR57 404 328 510</p>
                <p className="text-foreground"><strong>Responsable de la publication :</strong> Gregory Rota</p>
                <p className="text-foreground"><strong>Email :</strong> contact@metalboost-ia.fr</p>
                <p className="text-foreground"><strong>Téléphone :</strong> 06 58 93 46 07</p>
              </div>
            </div>

            {/* Hébergeur */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Hébergement
              </h2>
              <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                <p className="text-foreground"><strong>Hébergeur :</strong>Hébergeur : LIGNES WEB SERVICES</p>
                <p className="text-foreground"><strong>Adresse :</strong>Adresse : 10, rue de Penthievre - 75008 PARIS</p>
                <p className="text-foreground"><strong>Téléphone :</strong>Téléphone : 08 92 70 04 79</p>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de METALBOOST IA Consulting ou de ses partenaires, à l'exception 
                des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, 
                même partielle, de ces différents éléments est strictement interdite sans l'accord exprès 
                par écrit de METALBOOST IA Consulting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une 
                contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                METALBOOST IA Consulting s'efforce d'assurer au mieux de ses possibilités l'exactitude 
                et la mise à jour des informations diffusées sur ce site. Toutefois, METALBOOST IA Consulting 
                ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à 
                disposition sur ce site.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En conséquence, METALBOOST IA Consulting décline toute responsabilité pour toute 
                imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                METALBOOST IA Consulting ne pourra être tenu responsable de tout dommage direct ou 
                indirect résultant de l'accès ou de l'utilisation de ce site.
              </p>
            </div>

            {/* Liens externes */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Liens hypertextes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ce site peut contenir des liens vers d'autres sites internet ou d'autres sources 
                Internet. METALBOOST IA Consulting ne dispose d'aucun moyen pour contrôler ces 
                sites et sources externes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                METALBOOST IA Consulting ne saurait être tenu pour responsable de la disponibilité 
                ou du contenu de ces sites et sources externes, et ne peut être tenu responsable 
                de tout dommage, de quelque nature que ce soit, résultant du contenu de ces sites 
                ou sources externes.
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser 
                des statistiques de visites. En poursuivant votre navigation, vous acceptez 
                l'utilisation de cookies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Pour plus d'informations sur l'utilisation des cookies et vos droits, veuillez 
                consulter notre <a href="/politique-confidentialite" className="text-primary hover:underline">
                politique de confidentialité</a>.
              </p>
            </div>

            {/* Droit applicable */}
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Droit applicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le présent site et les mentions légales sont soumis au droit français. 
                En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>;
};
export default MentionsLegales;
