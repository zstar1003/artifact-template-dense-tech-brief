// Structural checks only. This helper does not infer or verify source facts.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const STATUSES=new Set(['used','not-used','unverified']);
const KINDS=new Set(['exported-api','internal-method','runtime-api','cpp-operation']);
const nonempty=x=>typeof x==='string'&&x.trim().length>0;
function requireText(value,label){if(!nonempty(value))throw new Error(`${label}: expected non-empty text`);}

export function buildMatrix(input){
 if(!input||typeof input!=='object')throw new Error('Expected a matrix object');
 requireText(input.scope,'scope');
 requireText(input.baseline,'baseline');
 if(!Array.isArray(input.scenarios)||input.scenarios.length<2)throw new Error('At least two comparison scenarios are required');
 const ids=new Set();
 input.scenarios.forEach((s,i)=>{
  requireText(s.id,`scenario ${i} id`);requireText(s.label,`scenario ${i} label`);
  if(ids.has(s.id))throw new Error(`Duplicate scenario: ${s.id}`);ids.add(s.id);
 });
 if(!Array.isArray(input.entries)||input.entries.length===0)throw new Error('entries must not be empty');
 const names=new Set();
 const rows=input.entries.map((r,index)=>{
  for(const field of ['owner','api','category','purpose','test'])requireText(r[field],`entry ${index} ${field}`);
  if(!KINDS.has(r.kind))throw new Error(`${r.api}: invalid kind`);
  if(r.special!==undefined&&typeof r.special!=='boolean')throw new Error(`${r.api}: special must be boolean`);
  if(names.has(r.api))throw new Error(`Duplicate API: ${r.api}`);names.add(r.api);
  if(!r.coverage||Object.keys(r.coverage).length!==ids.size||Object.keys(r.coverage).some(id=>!ids.has(id)))throw new Error(`${r.api}: coverage keys must match scenarios exactly`);
  const cells=input.scenarios.map(s=>{
   const c=r.coverage[s.id];
   if(!c||!STATUSES.has(c.status))throw new Error(`${r.api}/${s.id}: invalid status`);
   requireText(c.condition,`${r.api}/${s.id} condition`);
   if(c.evidence!==undefined&&(!Array.isArray(c.evidence)||c.evidence.some(p=>!nonempty(p))))throw new Error(`${r.api}/${s.id}: evidence must be non-empty strings`);
   if(c.status!=='unverified'&&!c.evidence?.length)throw new Error(`${r.api}/${s.id}: a used/not-used decision needs path evidence`);
   return {scenario:s.id,status:c.status,condition:c.condition,evidence:[...(c.evidence||[])]};
  });
  const used=cells.filter(c=>c.status==='used').length;
  let group,order;
  if(cells.some(c=>c.status==='unverified')){group='unverified';order=400;}
  else if(used===cells.length){group='shared';order=0;}
  else if(used===0){group='not-in-scope';order=500;}
  else if(r.special){group='special';order=300;}
  else if(used>1){group='partial';order=100;}
  else{const i=cells.findIndex(c=>c.status==='used');group=`specific:${cells[i].scenario}`;order=200+i/(cells.length+1);}
  return {...r,coverage:undefined,group,cells,marks:cells.map(c=>c.status==='used'?'✓':c.status==='not-used'?'—':'待核'),_order:order,_index:index};
 }).sort((a,b)=>a._order-b._order||a._index-b._index).map(({_order,_index,coverage,...r})=>r);
 const counts={};for(const r of rows)counts[r.group]=(counts[r.group]||0)+1;
 return {scope:input.scope,baseline:input.baseline,scenarios:input.scenarios.map(s=>({...s})),legend:'✓ 条件路径涉及；— 限定路径不使用；待核 缺少证据。不是每次必经。',counts,rows};
}

if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{
  if(!process.argv[2])throw new Error('Usage: node api-matrix.mjs <matrix.json>');
  const input=JSON.parse(await fs.readFile(process.argv[2],'utf8'));
  process.stdout.write(JSON.stringify(buildMatrix(input),null,2)+'\n');
 }catch(error){process.stderr.write(error.message+'\n');process.exitCode=1;}
}
