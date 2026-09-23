import type { Metadata } from "next";
import Header from "@/components/header";
import { Footer } from "@/components/site";
import "./globals.css";
export const metadata: Metadata = {title:{default:"Relio — Votre voiture arrive. Votre journée continue.",template:"%s | Relio"},description:"Convoyage automobile pour particuliers et professionnels. Préparez votre trajet, en France ou à l’international.",robots:{index:false,follow:false}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu</a><Header/><main id="contenu">{children}</main><Footer/></body></html>}
