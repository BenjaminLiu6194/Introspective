import test from 'node:test';import assert from 'node:assert/strict';import{validate,historicalQuotes}from './interpret.mjs';
const text='I miss the flowers by her window.';const valid=()=>({title:'A memory',shape:'flower',reason:'The flowers hold the memory.',concepts:[{label:'flowers',excerpt:'flowers by her window'}],links:[{from:0,to:0,meaning:'Returning to a memory'}],quote:{text,kind:'journal',author:'Your journal',concepts:[0]}});
test('accepts traceable journal art',()=>assert.equal(validate(valid(),text).shape,'flower'));
test('rejects invented journal evidence',()=>{const a=valid();a.concepts[0].excerpt='something never written';assert.throws(()=>validate(a,text))});
test('rejects fabricated journal quotation',()=>{const a=valid();a.quote.text='This was not in the entry';assert.throws(()=>validate(a,text))});
test('rejects unverified historical attribution',()=>{const a=valid();a.quote.kind='historical';assert.throws(()=>validate(a,text))});
test('rejects invalid relationship index',()=>{const a=valid();a.links[0].to=9;assert.throws(()=>validate(a,text))});
test('accepts an original reflection',()=>{const a=valid();a.quote.kind='original';a.quote.text='Some memories bloom again.';assert.equal(validate(a,text).quote.kind,'original')});

test('historical source comes only from verified catalog',()=>{const a=valid();Object.assign(a.quote,historicalQuotes[0],{kind:'historical',source:'https://untrusted.example'});assert.equal(validate(a,text).quote.source,historicalQuotes[0].source)});

test('the supplied journal lighthouse is fully grounded in the actual entry',async()=>{const {readFile}=await import('node:fs/promises');const source=await readFile(new URL('../sample.ts',import.meta.url),'utf8');const js=source.replace(/^import type.*;\n/,'').replace('interpretation:Interpretation','interpretation');const {journal,interpretation}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));assert.equal(validate(interpretation,journal).shape,'lighthouse');assert.equal(interpretation.quote.text,'I want to inspire people.');});
