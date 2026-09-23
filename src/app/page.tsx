import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Convoyage automobile pour particuliers",
  description: "Préparez le déplacement de votre voiture avec Relio : achat à distance, rapatriement et livraison.",
};
export default function HomePage() {
  return <section className="hero">
    <p className="eyebrow">Le convoyage automobile, simplement.</p>
    <h1>Votre voiture arrive.<br />Votre journée continue.</h1>
    <p className="intro">Achat à distance, rapatriement ou déplacement de votre voiture : préparez votre trajet avec Relio.</p>
    <p className="status">Site en préparation. Les demandes de devis ne sont pas encore ouvertes.</p>
  </section>;
}
