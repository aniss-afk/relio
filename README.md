# Relio

Site de convoyage automobile pour particuliers et professionnels.

## Architecture

- `/` : accueil particuliers, destination par défaut.
- `/professionnels` : page dédiée aux concessions, marchands VO, loueurs et flottes, accessible dans le menu.
- Navigation commune : Particuliers → `/`, Professionnels → `/professionnels`.
- À prévoir : `/devis` pour les particuliers et `/devis?profil=professionnel` pour le parcours professionnel. Ces parcours ne sont pas encore implémentés.

## Stack

Next.js App Router, React, TypeScript et Tailwind CSS. Pages rendues côté serveur par défaut. Pas de backend séparé à ce stade.

## Démarrage

Node.js 22 LTS recommandé.

```sh
npm install
npm run dev
```

Validation : `npm run typecheck` et `npm run build`.

## État

Socle technique avec deux pages et navigation. Le design final, les images, les formulaires et le déploiement restent à réaliser. Aucun formulaire ne simule une demande envoyée.

## Direction artistique et contenu

Conserver la DA Relio validée : photographie automobile immersive, noir et blanc, accent rouge, typographie affirmée. La mise en page initiale est provisoire.

Particuliers : achat à distance, rapatriement, déplacement d'un véhicule ; confiance et simplicité.
Professionnels : transferts entre sites, récupérations, livraisons clients ; coordination et disponibilité.

Ne pas inventer de témoignages, chiffres, garanties, couverture d'assurance, suivi GPS ou délais. Décrire le recours aux convoyeurs partenaires honnêtement. Les recherches internes et données personnelles restent hors de ce dépôt.
