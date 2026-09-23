import {normalizeQuote,validateQuote} from "@/lib/quote";
export async function POST(request:Request) {
 const origin=request.headers.get('origin');
 const expectedOrigin=process.env.SITE_ORIGIN || `${new URL(request.url).protocol}//${request.headers.get('host')}`;
 if(!origin||origin!==expectedOrigin) return Response.json({error:'Origine de la demande invalide.'},{status:403});
 if(!request.headers.get('content-type')?.startsWith('application/json')) return Response.json({error:'Format de demande invalide.'},{status:415});
 if(Number(request.headers.get('content-length')||0)>16384) return Response.json({error:'Demande trop volumineuse.'},{status:413});
 let value:unknown;
 try { const reader=request.body?.getReader(); if(!reader) throw new Error();let length=0;const chunks:Uint8Array[]=[];while(true){const {done,value:chunk}=await reader.read();if(done)break;length+=chunk.byteLength;if(length>16384){await reader.cancel();return Response.json({error:'Demande trop volumineuse.'},{status:413});}chunks.push(chunk);}const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}value=JSON.parse(new TextDecoder().decode(bytes)); } catch {return Response.json({error:'Demande illisible.'},{status:400});}
 const data=normalizeQuote(value);if(!data) return Response.json({error:'Vérifiez les informations du formulaire.'},{status:400});
 if(data.website) return Response.json({error:'Demande non acceptée.'},{status:400});
 const error=validateQuote(data);if(error) return Response.json({error},{status:400});
 if(process.env.QUOTE_LIVE!=='true'||process.env.LEGAL_READY!=='true'||!process.env.QUOTE_WEBHOOK_URL) return Response.json({error:'La réception des demandes n’est pas encore ouverte. Vous pouvez télécharger votre récapitulatif.'},{status:503});
 try {const target=new URL(process.env.QUOTE_WEBHOOK_URL);if(target.protocol!=='https:')throw new Error();const {website,...payload}=data;void website;const response=await fetch(target,{method:'POST',headers:{'Content-Type':'application/json',...(process.env.QUOTE_WEBHOOK_TOKEN?{Authorization:`Bearer ${process.env.QUOTE_WEBHOOK_TOKEN}`}:{})},body:JSON.stringify({...payload,receivedAt:new Date().toISOString()}),signal:AbortSignal.timeout(10000),redirect:'error'});if(!response.ok)throw new Error();return Response.json({ok:true});} catch {return Response.json({error:'La transmission n’a pas abouti. Vos informations restent dans le formulaire ; réessayez plus tard.'},{status:502});}
}
