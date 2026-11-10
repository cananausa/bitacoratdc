/* Renderiza header, footer y páginas desde js/data.js. No necesitas editar este archivo para añadir contenido. */
(function () {
  const D = window.CANANA, R = document.body.dataset.root || "", page = document.body.dataset.page;
  const $ = (s) => document.querySelector(s), main = $("#main");
  const btn = (url, label) => url ? `<a class="btn" href="${url.startsWith("http") ? url : R + url}">${label}</a>`
    : `<span class="btn off" aria-disabled="true">${label} · enlace pendiente</span>`;
  const acts = D.actividades;

  document.title = (page === "home" ? "" : document.title + " · ") + D.agencia.nombre + " · Bitácora digital";
  document.head.insertAdjacentHTML("beforeend", `<link rel="icon" href="${R}${D.recursos.favicon}">`);

  $("#site-header").innerHTML = `
    <a class="logo" href="${R}${D.recursos.manual}" target="_blank" rel="noopener" aria-label="Cañaña: abrir el manual de marca (PDF)">
      <img src="${R}${D.recursos.logo}" alt="Cañaña"></a>
    <button class="menu-btn" aria-expanded="false" aria-controls="nav">Menú</button>
    <nav id="nav" aria-label="Principal">
      <a href="${R}index.html" ${page === "home" ? 'aria-current="page"' : ""}>Home</a>
      <a href="${R}tercer-corte/index.html" ${page !== "home" ? 'aria-current="page"' : ""}>Tercer corte</a>
    </nav>`;
  const mb = $(".menu-btn");
  mb.onclick = () => { const o = $("#nav").classList.toggle("open"); mb.setAttribute("aria-expanded", o); };

  $("#site-footer").innerHTML = `
    <img src="${R}${D.recursos.imagotipo}" alt="" width="48">
    <p><strong>${D.agencia.nombre}</strong> · ${D.agencia.contexto}</p>
    <p><a href="${R}${D.recursos.manual}" target="_blank" rel="noopener">Manual de marca (PDF)</a> ·
    <a href="${R}index.html">Home</a> · <a href="${R}tercer-corte/index.html">Tercer corte</a></p>
    <img class="foot-banner" src="${R}assets/img/banner-materia.png" alt="Rótulo de la materia TDC-IV" loading="lazy">`;

  const A = D.agencia;
  /* INICIO: COMPOSICIÓN DEL HOME (el texto sale de data.js; aquí solo se edita la forma) */
  const W = (v) => `<svg class="wv" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d="${v ? "M0 50C200 110 420 0 700 40S1180 100 1440 20V100H0Z" : "M0 30C260 -10 460 100 760 60S1220 0 1440 60V100H0Z"}" fill="currentColor"/></svg>`;
  const slogan = A.slogan.replace(/caña/i, (m) => `<em>${m}</em>`);
  if (page === "home") main.innerHTML = `
    <section class="hero sec" style="--bg:var(--vino)">
      <div class="sun" aria-hidden="true"><img class="flame" src="${R}${D.recursos.imagotipoRojo}" alt=""></div>
      <div class="w"><div class="txt">
        <p class="eyebrow">Bitácora digital · TDC-IV</p>
        <h1><span class="sr-only">Cañaña. </span><img src="${R}${D.recursos.logo}" alt="" class="hero-logo"></h1>
        <p class="slogan">${slogan}</p><p class="lead">${A.frase}</p>
        <a class="btn alt" href="tercer-corte/index.html">Entrar al Tercer corte</a>
        <a class="btn ghost" href="#equipo">Conocer al equipo</a></div></div></section>

    <section class="sec concept" style="--bg:#fffaf0">${W(0)}
      <img class="mark" src="${R}${D.recursos.imagotipoRojo}" alt="">
      <div class="w"><h2 class="rv"><span class="xl">Concepto</span><span class="tag">de marca</span></h2>
        <div class="cols"><p class="rv drop">${A.concepto[0]}</p><p class="rv off">${A.concepto[1]}</p></div></div></section>

    <section class="sec why" style="--bg:var(--mostaza)">${W(1)}
      <div class="w"><h2 class="rv"><span class="a">¿Por qué hacemos</span><span class="b">lo que hacemos?</span></h2>
        <p class="big rv">${A.proposito}</p></div></section>

    <section class="sec mv" style="--bg:#fffaf0">${W(0)}
      <div class="w"><div class="blobs">
        <article class="blob b1 rv"><h3>Misión</h3><p>${A.mision}</p></article>
        <article class="blob b2 rv"><h3>Visión</h3><p>${A.vision}</p></article></div>
        <h3 class="sub rv">Principios</h3>
        <ul class="pebbles">${A.principios.map((p) => `<li class="pebble rv"><h4>${p.t}</h4><p>${p.d}</p></li>`).join("")}</ul></div></section>

    <section class="sec team-s" id="equipo" style="--bg:var(--coral)">${W(1)}
      <div class="w"><h2 class="rv"><span class="xl">El equipo</span></h2>
      <div class="team">${D.integrantes.map((m, i) => `
        <article class="member rv m${i % 3}"><div class="photo">${m.foto ? `<img src="${R}${m.foto}" alt="${m.fotoAlt}" loading="lazy">`
          : `<img class="ph" src="${R}${D.recursos.imagotipoRojo}" alt="${m.fotoAlt} (marcador provisional)">`}</div>
          <div class="mb"><h3>${m.nombre}</h3><p class="rol">${m.rol}</p><p>${m.bio}</p>
          <ul class="tags">${m.fortalezas.map((f) => `<li>${f}</li>`).join("")}</ul>
          <p><strong>Aporte al colectivo:</strong> ${m.aporte}</p>
          ${btn(m.ejercicio, "Ver ejercicio de rápido desarrollo")}</div></article>`).join("")}</div></div></section>

    <section class="sec petrol" style="--bg:var(--petrol)">${W(0)}
      <div class="w"><h2 class="rv"><span class="xl">La bitácora</span></h2>
      <p class="big rv">Un documento vivo: aquí registramos el proceso, no solo el resultado.</p>
      <a class="btn alt" href="tercer-corte/index.html">Tercer corte</a></div></section>`;
  /* FIN: COMPOSICIÓN DEL HOME */
    if (page === "indice") {
    /* Listado de actividades · rediseño. Usa solo campos que ya existen: titulo, resumen, semana, fecha, demo, id. */
    const PAL = [["var(--mostaza)", "var(--vino)", "var(--coral)", "var(--vino)"], ["var(--coral)", "var(--vino)", "var(--mostaza)", "var(--petrol)"], ["var(--petrol)", "#fffaf0", "var(--mostaza)", "var(--coral)"], ["var(--vino)", "var(--mostaza)", "var(--coral)", "var(--mostaza)"]];
    const ARCS = [150, 115, 80, 45].map((r) => `<path d="M${200 - r} 240V${240 - r}a${r} ${r} 0 0 1 ${2 * r} 0V240"/>`).join("");
    const DOTS = Array.from({ length: 32 }, (_, k) => { const x = k % 8, y = (k / 8) | 0; return x === 5 && y === 1 ? "" : `<circle cx="${50 + x * 43}" cy="${40 + y * 52}" r="7"/>`; }).join("");
    const ART = [
      `<g class="g" fill="none" stroke="var(--ac)" stroke-width="10">${ARCS}</g><circle class="f" cx="200" cy="170" r="22" fill="var(--fg)"/>`,
      `<circle class="g" cx="275" cy="108" r="82" fill="var(--ac)"/><circle class="g" cx="120" cy="150" r="52" fill="none" stroke="var(--fg)" stroke-width="9"/><circle class="f" cx="335" cy="204" r="18" fill="var(--fg)"/>`,
      `<g class="g"><path d="M0 150C60 100 120 190 200 150S340 100 400 150V240H0Z" fill="var(--ac)"/><path d="M0 185C70 145 130 225 215 185S350 150 400 190V240H0Z" fill="var(--fg)" opacity=".25"/></g><circle class="f" cx="310" cy="62" r="30" fill="var(--ac)"/>`,
      `<g class="g" stroke="var(--fg)" stroke-width="10" opacity=".35">${[-60, 10, 80, 150, 220, 290, 360].map((x) => `<path d="M${x} 240L${x + 130} 0"/>`).join("")}</g><circle class="f" cx="150" cy="120" r="62" fill="var(--ac)"/>`,
      `<g class="g" fill="var(--fg)" opacity=".4">${DOTS}</g><circle class="f" cx="265" cy="92" r="26" fill="var(--ac)"/>`,
      `<g class="g"><path d="M40 224L120 60L200 224Z" fill="var(--ac)"/><path d="M140 224L230 36L320 224Z" fill="none" stroke="var(--fg)" stroke-width="8" stroke-linejoin="round"/><path d="M250 224L310 118L370 224Z" fill="var(--fg)" opacity=".5"/></g><circle class="f" cx="352" cy="46" r="16" fill="var(--ac)"/>`
    ];
    const corto = (t) => t.split(/[:·–—]/)[0].trim();
    const marq = acts.map((a) => `<span>${corto(a.titulo)}</span>`).join("");
    const real = acts.some((a) => !a.demo);
    main.innerHTML = `
    <nav class="crumbs" aria-label="Ruta"><a href="../index.html">Home</a> / Tercer corte</nav>
    <div class="tc-hero">
      <div class="tc-sun" aria-hidden="true"></div>
      <svg class="tc-arcs" viewBox="0 0 400 240" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="3">${ARCS}</g></svg>
      <p class="eyebrow">Bitácora · TDC-IV</p>
      <h1><span>Tercer</span><span>corte</span></h1>
      <p class="lead">Registro progresivo de actividades, investigaciones y ejercicios del periodo.</p>
      <ul class="tc-stats"><li><b>${acts.length}</b> ${acts.length === 1 ? "actividad" : "actividades"}</li>${acts.length > 3 ? `<li><label class="tc-q"><span class="sr-only">Buscar actividad</span><input type="search" placeholder="Buscar actividad…" autocomplete="off"></label></li>` : ""}</ul>
    </div>
    <div class="tc-marq" aria-hidden="true"><div>${marq}${marq}${marq}${marq}</div></div>
    ${real ? "" : `<p class="card">Aún no hay actividades reales registradas. Se irán incorporando semana a semana.</p>`}
    <ul class="tc-list">${acts.map((a, i) => { const p = PAL[i % 4]; return `<li class="rv" style="transition-delay:${Math.min(i, 5) * 70}ms">
      <article class="tc-card" style="--bg:${p[0]};--fg:${p[1]};--ac:${p[2]};--sh:${p[3]}">
        <div class="tc-art"><svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ART[i % ART.length]}</svg><span class="tc-n" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span></div>
        <div class="tc-body">
          <p class="tc-meta">${[a.semana, a.fecha].filter(Boolean).join(" · ") || "Actividad"}${a.demo ? ' <b class="tc-demo">Demostración</b>' : ""}</p>
          <h2><a href="actividad.html?id=${a.id}">${a.titulo}</a></h2>
          <p class="tc-res">${a.resumen || ""}</p>
          <span class="tc-go" aria-hidden="true">Abrir actividad</span>
        </div></article></li>`; }).join("")}</ul>
    <p class="card tc-none" hidden>Ninguna actividad coincide con tu búsqueda.</p>`;
    const qi = main.querySelector(".tc-q input");
    if (qi) qi.addEventListener("input", () => {
      const q = qi.value.trim().toLowerCase(); let n = 0;
      main.querySelectorAll(".tc-list>li").forEach((li) => { const m = !q || li.textContent.toLowerCase().includes(q); li.hidden = !m; if (m) n++; });
      main.querySelector(".tc-none").hidden = n > 0;
    });
    /* Brillo que sigue al cursor (solo con puntero fino) */
    if (matchMedia("(pointer:fine)").matches) main.querySelectorAll(".tc-card").forEach((c) => c.addEventListener("pointermove", (e) => { const r = c.getBoundingClientRect(); c.style.setProperty("--mx", (e.clientX - r.left) + "px"); c.style.setProperty("--my", (e.clientY - r.top) + "px"); }, { passive: true }));
  }


  if (page === "actividad") {
    const id = new URLSearchParams(location.search).get("id"), i = acts.findIndex(a => a.id === id), a = acts[i];
    if (!a) main.innerHTML = `<h1>Actividad no encontrada</h1><a class="btn" href="index.html">Volver al Tercer corte</a>`;
        else if (a.referentes) {
      document.title = a.titulo + " · " + A.nombre;
      const s = document.createElement("script"); s.src = R + "js/referentes.js";
      s.onload = () => window.CANANA_REFERENTES(a, R, main, acts, i); document.body.appendChild(s);
    }
         else if (a.formal) {
      document.title = a.titulo + " · " + A.nombre;
      const s = document.createElement("script"); s.src = R + "js/formal.js";
      s.onload = () => window.CANANA_FORMAL(a, R, main, acts, i); document.body.appendChild(s);
    }     
    else if (a.editorial) {
      document.title = a.titulo + " · " + A.nombre;
      const s = document.createElement("script"); s.src = R + "js/editorial.js";
      s.onload = () => window.CANANA_EDITORIAL(a, R, main, acts, i); document.body.appendChild(s);
    } else {
      document.title = a.titulo + " · " + A.nombre;
      const blk = (b) => ({
        texto: `<section>${b.titulo ? `<h2>${b.titulo}</h2>` : ""}<p>${b.texto}</p></section>`,
        imagen: `<figure><img src="${R}${b.src}" alt="${b.alt || ""}" loading="lazy"><figcaption>${b.pie || ""}</figcaption></figure>`,
        cita: `<blockquote>${b.texto}</blockquote>`,
        galeria: `<div class="gallery">${(b.imagenes || []).map(g => `<figure><img src="${R}${g.src}" alt="${g.alt || ""}" loading="lazy"><figcaption>${g.nota || ""}</figcaption></figure>`).join("")}</div>`

      ,
      tarjetas: `<section>${b.titulo ? `<h2>${b.titulo}</h2>` : ""}${b.intro ? `<p>${b.intro}</p>` : ""}<ul class="tj">${(b.items || []).map(i => `<li><h3>${i.t}</h3><p>${i.d}</p></li>`).join("")}</ul></section>`,
      linea: `<section>${b.titulo ? `<h2>${b.titulo}</h2>` : ""}<ol class="tl">${(b.hitos || []).map(h => `<li><b>${h.a}</b><h3>${h.t}</h3><p>${h.d}</p></li>`).join("")}</ol></section>`,
      tipologias: `<section>${b.titulo ? `<h2>${b.titulo}</h2>` : ""}${b.intro ? `<p>${b.intro}</p>` : ""}<div class="tip">${(b.items || []).map((i, n) => `<details${n === 0 ? " open" : ""}><summary><span class="n">${n + 1}</span>${i.t}</summary><p class="res">${i.res}</p><dl><dt>Funcionamiento</dt><dd>${i.f}</dd><dt>Características</dt><dd>${i.c}</dd><dt>Ventajas</dt><dd>${i.v}</dd><dt>Limitaciones</dt><dd>${i.l}</dd><dt>Aplicaciones</dt><dd>${i.a}</dd></dl></details>`).join("")}</div></section>`,
      esquema: `<figure class="dg">${b.markup || ""}<figcaption>${b.pie || ""}</figcaption></figure>`,
      refs: `<section><h2>${b.titulo || "Referencias"}</h2><ol class="refs">${(b.items || []).map(r => `<li>${r}</li>`).join("")}</ol></section>`
      }[b.tipo] || "");
      const prev = acts[i - 1], next = acts[i + 1];
      main.innerHTML = `<nav class="crumbs" aria-label="Ruta"><a href="../index.html">Home</a> / <a href="index.html">Tercer corte</a> / ${a.titulo}</nav>
        <article class="doc"><p class="eyebrow">${a.semana || ""} ${a.fecha || ""} ${a.demo ? "· DEMOSTRACIÓN (no es una actividad real)" : ""}</p>
        <h1>${a.titulo}</h1>${a.bloques.map(blk).join("")}</article>
        <p class="pager"><a class="btn ghost" href="index.html">← Tercer corte</a>
        ${prev ? `<a class="btn ghost" href="actividad.html?id=${prev.id}">Anterior</a>` : ""}${next ? `<a class="btn" href="actividad.html?id=${next.id}">Siguiente</a>` : ""}</p>`;
    }
  }
  /* Movimiento: revelado al hacer scroll + parallax discreto. Se desactiva con "reducir movimiento". */
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const root = document.documentElement; root.classList.add("js");
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    let t = 0; addEventListener("scroll", () => { if (!t) t = requestAnimationFrame(() => { root.style.setProperty("--y", scrollY); t = 0; }); }, { passive: true });
  }
})();
