export type Quote = {
 profil: string; depart: string; arrivee: string; date: string; flexible: string;
 besoin: string; vehicule: string; energie: string; roulant: string;
 frequence: string; volume: string; entreprise: string;
 nom: string; email: string; telephone: string; notes: string; website: string; consent: boolean;
};
export function todayLocal() {const date=new Date();return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function validateQuote(data: Quote, stage=3): string | null {
 if(!['particulier','professionnel'].includes(data.profil)) return 'Choisissez votre profil.';
 if(!data.depart.trim() || !data.arrivee.trim()) return 'Indiquez les villes de départ et d’arrivée.';
 if(data.depart.trim().toLowerCase()===data.arrivee.trim().toLowerCase()) return 'Précisez deux lieux différents, avec leurs adresses si nécessaire.';
 if(!['oui','non'].includes(data.flexible)) return 'Précisez la flexibilité de la date.';
 if(data.date && (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date)) || new Date(data.date).toISOString().slice(0,10)!==data.date || data.date<todayLocal())) return 'Choisissez une date valide à partir d’aujourd’hui.';
 if(!data.date && data.flexible==='non') return 'Indiquez une date ou choisissez une date flexible.';
 if(stage===1) return null;
 if(!data.vehicule.trim()) return 'Indiquez le véhicule ou les types de véhicules.';
 if(!['thermique','electrique','hybride','inconnu'].includes(data.energie)) return 'Précisez l’énergie du véhicule.';
 if(!['oui','non','inconnu'].includes(data.roulant)) return 'Précisez si le véhicule peut circuler.';
 if(data.profil==='professionnel' && !data.entreprise.trim()) return 'Indiquez le nom de votre entreprise.';
 if(!['ponctuel','regulier'].includes(data.frequence)) return 'Précisez la fréquence de votre besoin.';
 if(stage===2) return null;
 if(!data.nom.trim()) return 'Indiquez votre nom.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Indiquez une adresse email valide.';
 if(data.telephone && !/^[+()\d .-]{6,30}$/.test(data.telephone)) return 'Vérifiez le numéro de téléphone.';
 if(!data.consent) return 'Veuillez confirmer avoir lu les informations de confidentialité.';
 return null;
}
export function normalizeQuote(value: unknown): Quote | null {
 if(!value || typeof value!=='object' || Array.isArray(value)) return null;
 const input=value as Record<string,unknown>;
 const fields=['profil','depart','arrivee','date','flexible','besoin','vehicule','energie','roulant','frequence','volume','entreprise','nom','email','telephone','notes','website'] as const;
 const result: Record<string,string|boolean>={consent:input.consent===true};
 for(const key of fields){if(typeof input[key]!=='string' || (input[key] as string).length>(key==='notes'?2000:200)) return null;result[key]=(input[key] as string).trim();}
 return result as Quote;
}
