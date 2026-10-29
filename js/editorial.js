/* Renderizador editorial de la actividad BETA. Lee los datos de js/data.js (actividad con editorial:true).
   IMÁGENES: cada espacio busca assets/img/actividad/<nombre>.jpg (o .webp/.png/.jpeg). Solo guarda tu archivo con ese nombre. */
(function () {
  window.CANANA_ERR = function (img) {
    const e = ["jpg", "webp", "png", "jpeg"], m = img.src.match(/\.(\w+)(\?.*)?$/), n = e.indexOf(m && m[1]) + 1;
    if (n > 0 && n < e.length) img.src = img.src.replace(/\.\w+(\?.*)?$/, "." + e[n]); else img.style.display = "none";
  };
  window.CANANA_EDITORIAL = function (a, R, main, acts, idx) {
    const d = document, body = d.body; body.classList.add("ed");
    let fig = 0;
    const cred = a.creditos || {}, esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
    const slot = (n, r, lab, c = "") => {
      const k = ++fig, x = cred[n] || {}, ok = !!x.nombre, src = x.url ? `<a href="${x.url}" target="_blank" rel="noopener">${esc(x.fuente || x.url)}</a>` : esc(x.fuente || "autor.com");
      return `<figure class="slot ${c}" style="--r:${r}"><div class="fr"><div class="ph"><i>Fig. ${String(k).padStart(2, "0")}</i><b>Imagen por incorporar</b><code>${n}</code><small>${lab} · ${r.replace("/", ":")}</small></div><img src="${R}assets/img/actividad/${n}.jpg" alt="${esc(x.nombre || lab)}" loading="lazy" onerror="CANANA_ERR(this)"></div><figcaption class="cap${ok ? "" : " pend"}"><b>Nota.</b> Figura ${k}. <i>${esc(x.nombre || "Nombre de la foto")}</i>. Tomado de: ${src} (${esc(x.anio || "2026")}).</figcaption></figure>`;
    };
    const head = (num, id, t, k) => `<div class="ed-h ed-rv"><span class="ed-num" aria-hidden="true">${num}</span><div><p class="ed-k">${k}</p><h2 id="${id}-t">${t}</h2></div></div>`;
    const C = a.concepto, E = a.estaciones, CU = a.cultura, CA = a.carrera, AR = a.arq;
    const secs = [["concepto", "Concepto"], ["instalacion", "Instalación"], ["cultura", "Cultura digital"], ["carrera", "Diseño digital"], ["arquitectura", "Arquitectura efímera"], ["referencias", "Referencias"]];
    const glyph = [
      `<path d="M10 66h100M18 66C18 30 40 12 60 12s42 18 42 54" fill="#F2B705"/><path d="M60 40v-14m-6 6l6-8 6 8" />`,
      `<path d="M14 62l40-44M54 62L14 18M54 62l40-44M94 62L54 18M14 62h80" fill="none"/><circle cx="54" cy="40" r="4" fill="#F2B705"/>`,
      `<path d="M8 60C30 20 50 70 70 30s30 20 42 6M8 70l40-6 64-30" fill="none"/><path d="M8 60C30 20 50 70 70 30" fill="#F2B705" opacity=".6"/>`,
      `<path d="M30 60L50 14M70 66L90 18M20 30L86 52M44 70L100 38" fill="none"/><circle cx="30" cy="60" r="4" fill="#F2B705"/><circle cx="90" cy="18" r="4" fill="#F2B705"/>`,
      `<path d="M16 66V24h24M104 66V24H80M16 24h88" fill="none"/><path d="M40 24l10-10h20l10 10-10 10H50z" fill="#F2B705"/>`,
      `<rect x="10" y="40" width="64" height="22" fill="#F2B705"/><path d="M74 46h22l10 10v6H74M18 40V20h40l16 20" fill="none"/><circle cx="28" cy="66" r="6" fill="#fff"/><circle cx="90" cy="66" r="6" fill="#fff"/>`
    ];
    const dots = (n) => `<span class="dots" role="img" aria-label="${n} de 5">${"●".repeat(n)}<s>${"●".repeat(5 - n)}</s></span>`;
    const stY = [118, 218, 318, 418];
    const plan = `<svg class="plan" viewBox="0 0 360 540" role="img" aria-label="Planta conceptual de BETA con cuatro estaciones en secuencia"><rect class="hall" x="8" y="8" width="344" height="524" rx="6"/><text x="180" y="32" class="pl" text-anchor="middle">ENTRADA</text><path class="pa" d="M180 38v18"/><rect class="mem" x="110" y="64" width="140" height="410"/>${[64, 132, 200, 268, 336, 404, 472].map(y => `<line class="arch" x1="98" x2="262" y1="${y}" y2="${y}"/>`).join("")}<path class="pa dash" d="M180 70V470"/>${E.map((s, i) => `<g class="st${i ? "" : " on"}" data-i="${i}"><circle cx="180" cy="${stY[i]}" r="22"/><text x="180" y="${stY[i] + 6}" text-anchor="middle" class="sn">${i + 1}</text><text x="${i % 2 ? 268 : 92}" y="${stY[i] + 5}" text-anchor="${i % 2 ? "start" : "end"}" class="sl">${s.n.toUpperCase()}</text></g>`).join("")}<path class="pa" d="M180 480v26"/><text x="180" y="524" class="pl" text-anchor="middle">SALIDA</text></svg>`;
    const spk = (t) => t;
    const prev = acts[idx - 1], next = acts[idx + 1];

    main.innerHTML = `
<header class="ed-hero">
  <svg class="ed-arcs" viewBox="0 0 600 600" aria-hidden="true"><g fill="none" stroke="#F2B705" stroke-width="2">${[290, 240, 190, 140, 90].map(r => `<path d="M${300 - r} 600V${300}a${r} ${r} 0 0 1 ${2 * r} 0V600"/>`).join("")}</g></svg>
  <div class="ed-hero-in">
    <div class="ed-hero-t">
      <p class="ed-eye">Tercer corte · TDC-IV · ${a.fecha}</p>
      <h1><span class="ed-mega" aria-hidden="true">${C.nombre}</span><span class="sr-only">${C.nombre}: ${a.titulo}</span></h1>
      <p class="ed-lema">${C.lema}</p>
      <p class="ed-sub">Instalación universitaria para descubrir el Diseño Digital · cultura digital · arquitectura efímera</p>
      <a class="ed-go" href="#concepto">Entrar a la beta <span aria-hidden="true">↓</span></a>
    </div>
    ${slot("imagen-portada", "4/5", "Portada: vista de la instalación", "arch")}
  </div>
</header>
<div class="ed-nav" role="navigation" aria-label="Secciones de la actividad"><div class="ed-prog" aria-hidden="true"><i></i></div><ol>${secs.map((s, i) => `<li><a href="#${s[0]}"><span>0${i + 1}</span>${s[1]}</a></li>`).join("")}</ol></div>

<section id="concepto" class="ed-sec" aria-labelledby="concepto-t">
  ${head("01", "concepto", "El concepto", "Producto-experiencia")}
  <div class="ed-concept ed-rv"><p class="ed-big">${C.parrafo}</p></div>
  <div class="ed-wide ed-rv">${slot("imagen-concepto-instalacion", "21/9", "Concepto: BETA en el entorno universitario")}</div>
  <dl class="ed-ficha ed-rv">${C.ficha.map(f => `<div><dt>${f[0]}</dt><dd>${f[1]}</dd></div>`).join("")}</dl>
</section>

<section id="instalacion" class="ed-sec ed-dark" aria-labelledby="instalacion-t">
  ${head("02", "instalacion", "La instalación", "Presentación de diseño conceptual")}
  <p class="ed-note ed-rv">Representación conceptual: BETA es una propuesta, no una instalación construida.</p>
  <div class="ed-wide ed-rv">${slot("imagen-esquema-instalacion", "16/9", "Vista conceptual de la instalación", "on-dark")}</div>
  <div class="ed-stage ed-rv">
    <div class="ed-planbox">${plan}</div>
    <div class="ed-panel">
      <div role="tablist" aria-label="Estaciones del recorrido" class="ed-tabs">${E.map((s, i) => `<button role="tab" id="st-t${i}" aria-controls="st-p${i}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}"><span>${i + 1}</span>${s.n}</button>`).join("")}</div>
      ${E.map((s, i) => `<div role="tabpanel" id="st-p${i}" aria-labelledby="st-t${i}" ${i ? "hidden" : ""}>
        ${slot(s.img, "4/3", "Estación " + (i + 1) + ": " + s.n, "on-dark")}
        <dl class="ed-ln"><dt>Qué ve</dt><dd>${s.ve}</dd><dt>Qué hace</dt><dd>${s.hace}</dd><dt>Qué descubre</dt><dd>${s.d}</dd></dl></div>`).join("")}
    </div>
  </div>
  <h3 class="ed-h3 ed-rv">Mapa de experiencia</h3>
  <ol class="ed-rail ed-rv">${a.fases.map((f, i) => `<li><span>${i + 1}</span><b>${f.t}</b><p>${f.d}</p></li>`).join("")}</ol>
  <div class="ed-split ed-rv">
    ${slot("imagen-componentes-instalacion", "4/5", "Detalle de componentes", "on-dark")}
    <div><h3 class="ed-h3">Componentes</h3><ol class="ed-list">${a.componentes.map(c => `<li><b>${c.t}</b><span>${c.d}</span></li>`).join("")}</ol></div>
  </div>
  <h3 class="ed-h3 ed-rv">Integración en el campus</h3>
  <div class="ed-cols3 ed-rv">${a.integracion.map(c => `<div><b>${c.t}</b><p>${c.d}</p></div>`).join("")}</div>
</section>

<section id="cultura" class="ed-sec" aria-labelledby="cultura-t">
  ${head("03", "cultura", "Cultura digital", "Evolución · categorías · tendencias")}
  <div class="ed-split rev ed-rv">
    ${slot("imagen-cultura-digital", "4/5", "Cultura digital", "blob")}
    <div><p class="ed-lead">${CU.def}</p>
    <h3 class="ed-h3">Categorías</h3><ul class="ed-terms">${CU.categorias.map(c => `<li><b>${c.t}</b><span>${c.d}</span></li>`).join("")}</ul></div>
  </div>
  <h3 class="ed-h3 ed-rv">Línea de tiempo</h3>
  <div class="ed-tl ed-rv" tabindex="0" role="region" aria-label="Línea de tiempo de la cultura digital, desplazable">${CU.hitos.map(h => `<article><b>${h.a}</b><h4>${h.t}</h4><p>${h.d}</p></article>`).join("")}</div>
  <h3 class="ed-h3 ed-rv">Cinco principios de los nuevos medios</h3>
  <ol class="ed-rail pr ed-rv">${CU.principios.map((p, i) => `<li><span>${i + 1}</span><b>${p.t}</b><p>${p.d}</p></li>`).join("")}</ol>
  <div class="ed-band ed-rv"><p class="ed-k">Tendencias</p><ul>${CU.tendencias.map(t => `<li>${t}</li>`).join("")}</ul></div>
</section>

<section id="carrera" class="ed-sec ed-tint" aria-labelledby="carrera-t">
  ${head("04", "carrera", "Diseño digital como carrera", "Perfil · competencias · proyección")}
  <div class="ed-split ed-rv"><div><p class="ed-lead">${CA.def}</p>
    <h3 class="ed-h3">Ruta formativa</h3><ol class="ed-steps">${CA.ruta.map(r => `<li><b>${r.t}</b><span>${r.d}</span></li>`).join("")}</ol></div>
    ${slot("imagen-diseno-digital", "3/4", "Diseño digital como profesión", "arch")}</div>
  <h3 class="ed-h3 ed-rv">Competencias</h3>
  <div class="ed-grid6 ed-rv">${CA.competencias.map((c, i) => `<div><span>0${i + 1}</span><b>${c.t}</b><p>${c.d}</p></div>`).join("")}</div>
  <div class="ed-wide ed-rv">${slot("imagen-campos-accion", "21/9", "Campos de acción")}</div>
  <h3 class="ed-h3 ed-rv">Campos de acción</h3>
  <ul class="ed-chips ed-rv">${CA.campos.map(c => `<li>${c}</li>`).join("")}</ul>
  <h3 class="ed-h3 ed-rv">Transformaciones de la disciplina</h3>
  <div class="ed-shift ed-rv">${CA.transformaciones.map(t => `<div><p><s>${t.de}</s><span aria-hidden="true"> → </span><b><span class="sr-only">hacia </span>${t.a}</b></p><small>${t.d}</small></div>`).join("")}</div>
</section>

<section id="arquitectura" class="ed-sec" aria-labelledby="arquitectura-t">
  ${head("05", "arquitectura", "Arquitectura efímera", "Seis tipologías para eventos feriales")}
  <div class="ed-split ed-rv"><p class="ed-lead">${AR.def}</p>${slot("imagen-arquitectura-efimera", "4/3", "Arquitectura efímera en eventos", "blob")}</div>
  <ul class="ed-fund ed-rv">${AR.fundamentos.map((f, i) => `<li><span>${i + 1}</span>${f}</li>`).join("")}</ul>
  <div class="ed-types ed-rv">
    <div role="tablist" aria-label="Tipologías" aria-orientation="vertical" class="ed-tt">${AR.tipologias.map((t, i) => `<button role="tab" id="tp-t${i}" aria-controls="tp-p${i}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}"><span>${i + 1}</span>${t.t}</button>`).join("")}</div>
    <div class="ed-tp">${AR.tipologias.map((t, i) => `<article role="tabpanel" id="tp-p${i}" aria-labelledby="tp-t${i}" ${i ? "hidden" : ""}>
      <svg class="gl" viewBox="0 0 120 80" aria-hidden="true" stroke="#5C0A0A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${glyph[i]}</svg>
      <h3>${t.t}</h3><p class="ed-res">${t.res}</p>
      ${slot("imagen-" + t.id, "16/10", t.t)}
      <dl class="ed-spec"><div><dt>Funcionamiento</dt><dd>${t.f}</dd></div><div><dt>Características</dt><dd>${t.c}</dd></div><div class="pos"><dt>Ventajas</dt><dd>${t.v}</dd></div><div class="neg"><dt>Limitaciones</dt><dd>${t.l}</dd></div><div><dt>Aplicaciones</dt><dd>${t.a}</dd></div></dl></article>`).join("")}</div>
  </div>
  <h3 class="ed-h3 ed-rv">Comparativa rápida</h3>
  <div class="ed-tablewrap ed-rv" tabindex="0" role="region" aria-label="Tabla comparativa, desplazable"><table class="ed-cmp"><thead><tr><th>Tipología</th>${AR.criterios.map(c => `<th>${c}</th>`).join("")}</tr></thead><tbody>${AR.tipologias.map(t => `<tr><th scope="row">${t.t}</th>${t.r.map(n => `<td>${dots(n)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
  <p class="ed-note ed-rv">Valoración cualitativa orientativa elaborada por el equipo; 5 es el nivel más alto de cada criterio.</p>
  <div class="ed-apply ed-rv"><p class="ed-k">Aplicación</p><p class="ed-big">${a.aplicacion}</p>${slot("imagen-aplicacion-beta", "16/9", "Estructura de BETA", "on-dark")}</div>
</section>

<section id="referencias" class="ed-sec ed-end" aria-labelledby="referencias-t">
  ${head("06", "referencias", "Referencias", "Cierre editorial")}
  <div class="ed-split ed-rv"><div><p class="ed-statement">Toda beta se mejora con fuentes. Aquí está el rastro de lo que consultamos.</p>
    <a class="ed-btn" href="${R}${a.pdf}" target="_blank" rel="noopener">Consultar referencias bibliográficas APA 7 <span aria-hidden="true">PDF ↗</span></a></div>
    ${slot("imagen-cierre", "3/2", "Cierre: equipo o instalación", "blob")}</div>
  <p class="pager ed-rv"><a class="btn ghost" href="index.html">← Tercer corte</a>${prev ? `<a class="btn ghost" href="actividad.html?id=${prev.id}">Anterior</a>` : ""}${next ? `<a class="btn" href="actividad.html?id=${next.id}">Siguiente</a>` : ""}</p>
</section>`;

    /* Pestañas accesibles (estaciones y tipologías) */
    const tabs = (list, pre, onSel) => {
      const bt = [...main.querySelectorAll(list + " [role=tab]")];
      const sel = (i, f) => { bt.forEach((b, j) => { b.setAttribute("aria-selected", j === i); b.tabIndex = j === i ? 0 : -1; d.getElementById(pre + j).hidden = j !== i; }); if (f) bt[i].focus(); onSel && onSel(i); };
      bt.forEach((b, i) => { b.onclick = () => sel(i); b.onkeydown = (e) => { const k = e.key, n = bt.length; if (["ArrowRight", "ArrowDown"].includes(k)) { e.preventDefault(); sel((i + 1) % n, 1); } else if (["ArrowLeft", "ArrowUp"].includes(k)) { e.preventDefault(); sel((i + n - 1) % n, 1); } }; });
      return sel;
    };
    const selSt = tabs(".ed-tabs", "st-p", (i) => main.querySelectorAll(".plan .st").forEach((g, j) => g.classList.toggle("on", i === j)));
    main.querySelectorAll(".plan .st").forEach((g, i) => g.onclick = () => selSt(i));
    tabs(".ed-tt", "tp-p");

    /* El menú de categorías se ancla justo debajo del encabezado principal */
    let oculto = false, last = scrollY;
    const hd = d.getElementById("site-header"), sh = () => d.documentElement.style.setProperty("--hh", (oculto ? 0 : hd.offsetHeight) + "px");
    const ver = (v) => { if (v === oculto) return; oculto = v; hd.classList.toggle("hd-hide", v); sh(); };
    sh(); addEventListener("resize", sh); if (window.ResizeObserver) new ResizeObserver(sh).observe(hd);
    addEventListener("scroll", () => { const y = scrollY, dy = y - last; if (y < 80) ver(false); else if (dy > 6 && !d.querySelector("#nav.open")) ver(true); else if (dy < -6) ver(false); last = y; }, { passive: true });
    hd.addEventListener("focusin", () => ver(false));
    /* Progreso de lectura, sección activa y revelado (solo con movimiento permitido) */
    const bar = main.querySelector(".ed-prog i"), links = [...main.querySelectorAll(".ed-nav a")];
    let t = 0; const upd = () => { const h = d.documentElement; bar.style.transform = `scaleX(${Math.min(1, scrollY / Math.max(1, h.scrollHeight - innerHeight))})`; t = 0; };
    addEventListener("scroll", () => { if (!t) t = requestAnimationFrame(upd); }, { passive: true }); upd();
    const spy = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.toggleAttribute("aria-current", l.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-35% 0px -60% 0px" });
    main.querySelectorAll(".ed-sec").forEach(s => spy.observe(s));
    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      body.classList.add("edjs");
      const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
      main.querySelectorAll(".ed-rv").forEach(el => io.observe(el));
    }
  };
})();
