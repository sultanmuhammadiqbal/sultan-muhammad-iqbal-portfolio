import fs from 'node:fs';import assert from 'node:assert/strict';
const paths=['index.html','about.html','experience.html','projects.html','project.html','app.js','styles.css','data/projects.js'];for(const path of paths)assert.ok(fs.existsSync(path),path+' missing');let content=paths.map(p=>fs.readFileSync(p,'utf8')).join('\n');assert.ok(!/sidosermo|15 Januari 2000|Agama\\s*:\\s*islam/i.test(content),'Sensitive information in website');const data=fs.readFileSync('data/projects.js','utf8');const matches=[...data.matchAll(/"id": /g)];assert.equal(matches.length,30,'25 projects + 5 categories expected');console.log('Source checks passed.');

for(const file of ["index.html","about.html","experience.html","projects.html","project.html"]){const html=fs.readFileSync(file,"utf8");assert.ok(!html.includes("Prototype v0.1 / Review sebelum publikasi"),file+" contains outdated footer");}
assert.ok(fs.readFileSync("about.html","utf8").includes("assets/portrait.webp"),"About portrait missing");
assert.ok(fs.readFileSync("index.html","utf8").includes("https://wa.me/6282132268275"),"WhatsApp CTA missing");
