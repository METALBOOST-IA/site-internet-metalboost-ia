import Layout from "@/components/Layout";

const PolitiqueConfidentialite = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="container-industrial">
          <h1 className="text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-4">
            Politique de confidentialité
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Protection de vos données personnelles conformément au RGPD.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-industrial max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                METALBOOST IA Consulting accorde une grande importance à la protection de vos données 
                personnelles. La présente politique de confidentialité vous informe sur la manière dont 
                nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) 
                et à la loi Informatique et Libertés.
              </p>
            </div>

            {/* Responsable du traitement */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Responsable du traitement
              </h2>
              <div className="bg-muted/30 rounded-lg p-6 space-y-2">
                <p className="text-foreground"><strong>Raison sociale :</strong> METALBOOST IA Consulting affilié à la couveuse d'entreprise AUXIME SAS</p>
                <p className="text-foreground"><strong>Responsable de la publication :</strong> Gregory Rota</p>
                <p className="text-foreground"><strong>Adresse :</strong> 9 Quai Jean Moulin, 69001 Lyon</p>
                <p className="text-foreground"><strong>Email :</strong> contact@metalboost-ia.fr</p>
                <p className="text-foreground"><strong>Téléphone :</strong> 06 58 93 46 07</p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Données personnelles collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Données d'identification :</strong> nom, prénom, fonction, société</li>
                <li><strong>Données de contact :</strong> adresse email, numéro de téléphone</li>
                <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées</li>
                <li><strong>Données de correspondance :</strong> messages envoyés via le formulaire de contact</li>
              </ul>
            </div>

            {/* Finalités */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Finalités du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Répondre à vos demandes de contact et de rendez-vous</li>
                <li>Vous fournir des informations sur nos services</li>
                <li>Améliorer notre site et nos services</li>
                <li>Établir des statistiques de fréquentation</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </div>

            {/* Base légale */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Base légale du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le traitement de vos données personnelles repose sur :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Votre consentement :</strong> pour les cookies non essentiels et les communications marketing</li>
                <li><strong>L'exécution d'un contrat :</strong> pour la fourniture de nos services</li>
                <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services et la prospection commerciale B2B</li>
                <li><strong>Les obligations légales :</strong> pour le respect de la réglementation applicable</li>
              </ul>
            </div>

            {/* Destinataires */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Destinataires des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont destinées exclusivement à METALBOOST IA Consulting et ne 
                sont pas transmises à des tiers, sauf :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Prestataires techniques (hébergement, maintenance)</li>
                <li>Autorités compétentes en cas d'obligation légale</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Nous ne vendons ni ne louons vos données personnelles à des tiers.
              </p>
            </div>

            {/* Durée de conservation */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Durée de conservation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Données contractuelles :</strong> durée du contrat + 5 ans</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Cookies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Notre site utilise des cookies pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour mesurer l'audience et améliorer le site</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Vous pouvez configurer votre navigateur pour refuser les cookies. Cela peut toutefois 
                affecter certaines fonctionnalités du site.
              </p>
            </div>

            {/* Droits */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Vos droits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pour exercer ces droits, contactez-nous à : <strong>contact@metalboost-ia.fr</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En cas de réclamation, vous pouvez contacter la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
              </p>
            </div>

            {/* Sécurité */}
            <div className="mb-12">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Sécurité des données
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour 
                protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction. Notre site utilise le protocole HTTPS pour sécuriser 
                les échanges de données.
              </p>
            </div>

            {/* Modifications */}
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Modifications de la politique
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                Les modifications prennent effet dès leur publication sur le site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Dernière mise à jour :</strong> Février 2025
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
