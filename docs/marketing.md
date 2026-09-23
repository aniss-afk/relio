# Relio — stratégie éditoriale et lancement

## Particuliers

Situation prioritaire : achat d'une voiture à distance. Désir : récupérer sa voiture sans prendre une journée ni organiser le retour. Alternatives : train puis conduite, aide d'un proche, transport sur camion. Objections : qui conduit, état du véhicule, assurance, prix complet, kilomètres ajoutés, vendeur disponible.

Accroche de marque validée : « Votre voiture arrive. Votre journée continue. » Sous-texte concret sur le conducteur et le temps gagné. Les trois cas d'usage envoient un besoin prérempli au devis. La page explique le convoyage avant les garanties, puis le prix et la FAQ. Aucun prix d'appel fictif.

## Professionnels

Concessions/marchands VO : transfert, reprise, livraison à l'acheteur ; protéger le temps de l'équipe et la qualité de remise. Loueurs/flottes : disponibilité locale, coordination et mouvements entre sites. L'entrée commerciale proposée est une mission ponctuelle ou un renfort, sans exiger de changer de fournisseur.

CTA commun : préparer une demande. Branche récurrente : fréquence, volume estimatif, entreprise, véhicules. Les mécanismes décrits restent prudents tant que les procédures et l'assurance ne sont pas contractualisées.

## Expérience

- Navigation particuliers / professionnels clairement séparée.
- Formulaire en trois étapes, conservation des données entre étapes, préremplissage depuis le hero.
- Dates flexibles et téléphone facultatif pour réduire la friction.
- Pas de faux témoignages, faux chiffres ou fausse géolocalisation.
- Photos générées illustratives, signalées dans les mentions légales.
- Mobile : menu repliable, formulaire lisible et FAQ native accessible.

## Avant mise en production

1. Confirmer les coordonnées, identité légale et l'hébergement.
2. Faire correspondre les textes à l'assurance, au contrat, à la sélection des partenaires et à la procédure d'état des lieux réels.
3. Finaliser les mentions, conditions contractuelles, confidentialité, destinataires et durées de conservation.
4. Brancher un endpoint HTTPS de réception email/CRM fiable, avec anti-abus et déduplication ; configurer QUOTE_WEBHOOK_URL et éventuellement QUOTE_WEBHOOK_TOKEN côté serveur.
5. Activer QUOTE_LIVE et LEGAL_READY seulement après vérification des points précédents ; tester le chemin réel jusqu'à réception. Le webhook doit confirmer la prise en charge durable du message.
6. Ajouter une limitation de débit persistante/edge avant l'ouverture publique du formulaire. Origine, honeypot, taille, validation et timeout sont déjà présents, mais ne remplacent pas cette protection.
7. Retirer noindex au lancement et configurer domaine/canonical/sitemap. Aucune publication effectuée dans ce travail.
8. Recueillir de vrais témoignages et exemples de mission après les premières prestations.

## Mesure

Suivre source → demande qualifiée → devis → mission acceptée → marge après acquisition. Tester les angles achat à distance / gain de temps / clarté de prise en charge séparément. Aucune hypothèse de coût par lead garanti. Aucun pixel ni suivi marketing installé.

## Images

Images générées par l'outil intégré imagegen, à partir de la DA approuvée pour le hero.
- public/images/hero.webp : scène parisienne au crépuscule, break argent, remise des clés, sans UI ni texte, issue de la référence approuvée.
- public/images/road.webp : route côtière française, lumière dorée, break argent, photographie éditoriale sans texte.

Prompts complets : voir image-prompts.md.
