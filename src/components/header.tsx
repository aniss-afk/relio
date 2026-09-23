"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Header() {
 const path=usePathname(); const [open,setOpen]=useState(false); const pro=path.startsWith('/professionnels');
 const home=path==='/' || path==='/professionnels';
 return <header className={`site-header ${home?'over-hero':'solid-header'}`}>
  <Link href="/" className="logo" aria-label="Relio, accueil" onClick={()=>setOpen(false)}>relio<span>.</span></Link>
  <button className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?'Fermer':'Menu'} <span>{open?'−':'+'}</span></button>
  <nav id="main-nav" className={open?'is-open':''} aria-label="Navigation principale">
   <Link href="/" aria-current={path==='/'?'page':undefined} onClick={()=>setOpen(false)}>Particuliers</Link>
   <Link href="/professionnels" aria-current={pro?'page':undefined} onClick={()=>setOpen(false)}>Professionnels</Link>
   <Link href="/fonctionnement" aria-current={path==='/fonctionnement'?'page':undefined} onClick={()=>setOpen(false)}>Le convoyage</Link>
   <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
   <Link className="header-cta" href={pro?'/devis?profil=professionnel':'/devis'} onClick={()=>setOpen(false)}>Obtenir un devis <span aria-hidden="true">↗</span></Link>
  </nav>
 </header>;
}
