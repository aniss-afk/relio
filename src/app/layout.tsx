import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Relio — Convoyage automobile", template: "%s | Relio" },
  description: "Convoyage automobile pour particuliers et professionnels.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <header>
          <Link className="logo" href="/" aria-label="Relio, accueil particuliers">relio<span>.</span></Link>
          <nav aria-label="Navigation principale">
            <Link href="/">Particuliers</Link>
            <Link href="/professionnels">Professionnels</Link>
          </nav>
        </header>
        <main id="contenu">{children}</main>
        <footer>Relio — Convoyage automobile</footer>
      </body>
    </html>
  );
}
