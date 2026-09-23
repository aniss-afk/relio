import type {Metadata} from "next";
import QuoteForm from "@/components/quote-form";
import {Eyebrow} from "@/components/site";
export const metadata:Metadata={title:"Préparer votre demande de convoyage"};
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}) {
 const params=await searchParams;const text=(key:string)=>typeof params[key]==='string'?(params[key] as string).slice(0,120):'';
 const pro=text('profil')==='professionnel';const allowed=['achat','demenagement','rapatriement','transfert','reprise','livraison'];
 const enabled=process.env.QUOTE_LIVE==='true'&&process.env.LEGAL_READY==='true'&&Boolean(process.env.QUOTE_WEBHOOK_URL);
 return <section className="section quote-page"><div className="quote-intro"><Eyebrow>{pro?'Relio / Professionnels':'Votre prochain trajet'}</Eyebrow><h1>{pro?<>Vos contraintes.<br/>Notre point de départ.</>:<>Quelques détails.<br/>Une route à préparer.</>}</h1><p>{pro?'Une mission ou des besoins réguliers : précisez le trajet, les véhicules et les particularités de votre organisation.':'Dites-nous où se trouve votre voiture et où elle doit arriver. Vous pouvez préparer votre demande même si la date reste à préciser.'}</p><div className="quote-aside"><p><span>01</span>Votre trajet et vos disponibilités</p><p><span>02</span>Le véhicule et ses particularités</p><p><span>03</span>Vos coordonnées et le récapitulatif</p></div></div><QuoteForm enabled={enabled} initial={{profil:pro?'professionnel':'particulier',depart:text('depart'),arrivee:text('arrivee'),date:/^\d{4}-\d{2}-\d{2}$/.test(text('date'))?text('date'):'',besoin:allowed.includes(text('besoin'))?text('besoin'):'autre',frequence:text('frequence')==='regulier'?'regulier':'ponctuel'}}/></section>;
}
