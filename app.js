(() => {
"use strict";
const projects=window.PORTFOLIO_PROJECTS||[], categories=window.PORTFOLIO_CATEGORIES||[];
const q=(s,p=document)=>p.querySelector(s), qa=(s,p=document)=>Array.from(p.querySelectorAll(s));
const esc=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cat=id=>(categories.find(x=>x.id===id)||{}).label||"Proyek";
const safeLink=x=>typeof x==="string"&&/^https:\/\//.test(x)?x:"";
function cover(p,extra=""){
  const name=esc(p.name);
  if(p.image)return `<div class="project-cover image-cover ${extra}"><img src="${esc(p.image)}" alt="Cuplikan ${name}" loading="lazy" onerror="this.closest('.project-cover').classList.add('missing-image');this.remove()"><span class="cover-caption">PREVIEW DARI CV · ASET PENDING</span></div>`;
  return `<div class="project-cover concept-cover concept-${esc(p.accent||'lime')} ${extra}" role="img" aria-label="Ilustrasi konseptual ${name}"><div class="concept-grid"></div><div class="concept-panel concept-main"><span class="concept-kicker">SMI / DIGITAL LAB</span><span class="concept-title">${esc(p.kind)}</span><span class="concept-bars"><i></i><i></i><i></i></span></div><div class="concept-panel concept-secondary"><span class="concept-ring"></span></div><span class="cover-caption">ILUSTRASI KONSEP</span></div>`;
}
function card(p){return `<article class="work-card"><a class="work-card-media" href="project.html?id=${encodeURIComponent(p.id)}" aria-label="Detail ${esc(p.name)}">${cover(p)}</a><div class="work-card-content"><div class="card-meta"><span>${esc(cat(p.category))}</span><span class="status-tag">${esc(p.status)}</span></div><h3><a href="project.html?id=${encodeURIComponent(p.id)}">${esc(p.name)}</a></h3><p>${esc(p.short)}</p><div class="card-bottom"><span>${esc(p.kind)}</span><a href="project.html?id=${encodeURIComponent(p.id)}">Lihat studi kasus ↗</a></div></div></article>`}
function home(){
 const f=q("#featured-projects");if(f)f.innerHTML=projects.filter(p=>p.featured).slice(0,6).map(card).join("");
 const e=q("#professional-projects");if(e)e.innerHTML=["google-ads-diagnostic","ai-reporting","marketing-monitoring"].map(id=>projects.find(p=>p.id===id)).filter(Boolean).map(card).join("");
 const c=q("#projects-count");if(c)c.textContent=String(projects.length).padStart(2,"0");
}
function listing(){
 const grid=q("#projects-grid");if(!grid)return;const p=new URLSearchParams(location.search);
 let active=categories.some(c=>c.id===p.get("category"))?p.get("category"):"all";let search="";
 const control=q("#category-filters"),input=q("#project-search"),title=q("#collection-title"),desc=q("#collection-desc"),count=q("#visible-count");
 if(control)control.innerHTML=categories.map(c=>`<button type="button" data-category="${esc(c.id)}" aria-pressed="false">${esc(c.label)}</button>`).join("");
 function refresh(){
   qa("button[data-category]",control).forEach(b=>{const on=b.dataset.category===active;b.classList.toggle("is-active",on);b.setAttribute("aria-pressed",String(on));});
   const category=categories.find(c=>c.id===active);if(title)title.textContent=category?.label||"Semua Karya";if(desc)desc.textContent=category?.description||"";
   const selected=projects.filter(p=>(active==="all"||p.category===active)&&[p.name,p.short,p.kind,...p.technologies].join(" ").toLowerCase().includes(search));
   grid.innerHTML=selected.length?selected.map(card).join(""):'<div class="empty-state"><h3>Tidak ditemukan</h3><p>Coba kata lain atau pilih Semua Karya.</p></div>';if(count)count.textContent=`${selected.length} karya ditampilkan`;
 }
 control?.addEventListener("click",e=>{const b=e.target.closest("button[data-category]");if(!b)return;active=b.dataset.category;const u=new URL(location.href);if(active==="all")u.searchParams.delete("category");else u.searchParams.set("category",active);history.replaceState({},"",u);refresh();});
 input?.addEventListener("input",()=>{search=input.value.trim().toLowerCase();refresh()});refresh();
}
function detail(){
 const root=q("#project-detail");if(!root)return;const id=new URLSearchParams(location.search).get("id");const p=projects.find(x=>x.id===id);
 if(!p){root.innerHTML='<div class="wrap section-pad"><h1>Proyek tidak ditemukan</h1><a href="projects.html">Kembali ke katalog</a></div>';return;}
 document.title=p.name+" | Sultan Muhammad Iqbal Portofolio";
 const links=[safeLink(p.demo)?`<a class="button button-primary" href="${esc(p.demo)}" target="_blank" rel="noopener noreferrer">Lihat Demo ↗</a>`:"",safeLink(p.repo)?`<a class="button button-outline" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">GitHub Repository ↗</a>`:""].filter(Boolean).join("");
 root.innerHTML=`<div class="detail-intro wrap"><a class="text-back" href="projects.html?category=${esc(p.category)}">← Kembali ke ${esc(cat(p.category))}</a><p class="eyebrow">${esc(cat(p.category))} / ${esc(p.kind)}</p><div class="detail-top"><h1>${esc(p.name)}</h1><p>${esc(p.short)}</p></div><div class="detail-meta"><span>${esc(p.role)}</span><span>${esc(p.status)}</span><span>${esc(p.evidence)}</span></div></div><div class="detail-visual wrap">${cover(p,"detail-cover")}<p class="image-note">${esc(p.previewNote)}</p></div><div class="wrap detail-content"><div class="detail-body"><section><p class="section-id">01 / THE CHALLENGE</p><h2>Masalah yang ingin diselesaikan</h2><p>${esc(p.problem)}</p></section><section><p class="section-id">02 / THE APPROACH</p><h2>Bagaimana sistem dibangun</h2><p>${esc(p.approach)}</p></section><section><p class="section-id">03 / THE OUTCOME</p><h2>Hasil dan batasan</h2><p>${esc(p.outcome)}</p></section></div><aside class="detail-aside"><div class="aside-card"><p class="section-id">AT A GLANCE</p><h3>Project information</h3><dl><dt>Kategori</dt><dd>${esc(cat(p.category))}</dd><dt>Status</dt><dd>${esc(p.status)}</dd><dt>Sumber</dt><dd>${esc(p.evidence)}</dd></dl><p class="small-label">TOOLS / METODE</p><div class="tag-wrap">${p.technologies.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div><div class="aside-links">${links||'<p>Belum tersedia tautan publik.</p>'}</div>${p.demo?'<p class="aside-note">Status ketersediaan demo belum diverifikasi.</p>':""}</div></aside></div><section class="next-project wrap"><p>Jelajahi karya lainnya</p><a class="button button-primary" href="projects.html">Seluruh proyek ↗</a></section>`;
}
const toggle=q(".menu-toggle"),menu=q(".main-nav");
toggle?.addEventListener("click",()=>{const open=menu?.classList.toggle("open");toggle.setAttribute("aria-expanded",String(!!open))});
document.addEventListener("keydown",e=>{if(e.key==="Escape")menu?.classList.remove("open")});
qa("[data-current-year]").forEach(el=>el.textContent=String(new Date().getFullYear()));
home();listing();detail();
})();