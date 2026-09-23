import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Convoyage pour professionnels",
  description: "Transferts entre sites, récupérations et livraisons clients pour concessions, marchands VO, loueurs et flottes.",
};
export default function ProfessionalsPage() {
  return <section className="hero">
    <p className="eyebrow">Relio pour les professionnels</p>
    <h1>Le convoyage de vos véhicules professionnels.</h1>
    <p className="intro">Transferts entre sites, récupérations et livraisons à vos clients. Une offre dédiée aux concessions, marchands VO, loueurs et gestionnaires de flotte.</p>
    <p className="status">Site en préparation. Le parcours de demande professionnel sera dédié à vos missions ponctuelles et à vos besoins réguliers.</p>
  </section>;
}
