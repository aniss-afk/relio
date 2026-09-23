# Relio

Site de convoyage automobile en Next.js, React, TypeScript et Tailwind CSS.

## Pages

- `/` : particuliers — achat à distance, déménagement et rapatriement.
- `/professionnels` : concessions, marchands VO, loueurs et flottes.
- `/fonctionnement` : étapes et préparation d'une mission.
- `/garanties` : état des lieux, organisation et couverture à confirmer.
- `/devis` : formulaire en trois étapes, avec parcours professionnel via `?profil=professionnel` et besoins réguliers via `&frequence=regulier`.
- `/contact`, `/mentions-legales`, `/confidentialite`.

## Utilisation

Node.js 22.18+ ou 24 LTS.

```sh
npm ci
npm run dev
```

```sh
npm test
npm run typecheck
npm run build
```

La compilation utilise Webpack pour éviter la restriction des ports de processus auxiliaires de Turbopack dans certains environnements locaux.

## Réception des demandes

Par défaut, le formulaire est en démonstration. Il valide les informations et télécharge un récapitulatif sur l'appareil, sans envoi, stockage serveur ou réservation simulée. Les données restent en mémoire dans la page ; aucun stockage persistant navigateur n'est utilisé.

L'API `/api/devis` est préparée pour transmettre les demandes à un endpoint HTTPS de réception email/CRM. Voir `.env.example` et `docs/marketing.md`. L'ouverture effective nécessite le paramétrage du destinataire, la finalisation des informations légales, une protection de débit persistante et un test réel de réception. Les flags `QUOTE_LIVE` et `LEGAL_READY` restent désactivés par défaut.

## Direction artistique

DA Relio approuvée : photographies immersives, noir/blanc cassé, accent rouge, mise en page éditoriale. Les deux images générées sont versionnées en WebP ; les originaux PNG restent locaux et sont ignorés par Git.

## Vérifications

Tests de validation : dates flexibles, dates impossibles/passées, profil professionnel, email, confidentialité, données malformées et limites de taille. Vérifications navigateur : navigation, mobile, préremplissage du trajet, étapes du formulaire et téléchargement en démonstration.

Le site reste `noindex` pendant sa préparation. Aucun outil publicitaire ni service tiers de mesure d'audience installé. Les coordonnées légales, l'assurance et les engagements opérationnels doivent être confirmés avant publication commerciale.
