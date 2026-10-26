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
    <a href="${R}index.html">Home</a> · <a href="${R}tercer-corte/index.html">Tercer corte</a></p>`;

  const A = D.agencia;
  /* INICIO: COMPOSICIÓN DEL HOME (el texto sale de data.js; aquí solo se edita la forma) */
  const W = (v) => `<svg class="wv" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true"><path d="${v ? "M0 50C200 110 420 0 700 40S1180 100 1440 20V100H0Z" : "M0 30C260 -10 460 100 760 60S1220 0 1440 60V100H0Z"}" fill="currentColor"/></svg>`;
  const P = (v) => [].concat(v).map((t) => `<p>${t}</p>`).join("");
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
        <article class="blob b1 rv"><h3>Misión</h3>${P(A.mision)}</article>
        <article class="blob b2 rv"><h3>Visión</h3>${P(A.vision)}</article></div>
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
  if (page === "indice") main.innerHTML = `
    <nav class="crumbs" aria-label="Ruta"><a href="../index.html">Home</a> / Tercer corte</nav>
    <h1>Tercer corte</h1><p class="lead">Registro progresivo de actividades, investigaciones y ejercicios del periodo.</p>
    ${acts.some(a => !a.demo) ? "" : `<p class="card">Aún no hay actividades reales registradas. Se irán incorporando semana a semana.</p>`}
    <ul class="grid4">${acts.map(a => `<li class="card"><p class="eyebrow">${a.semana || ""} ${a.fecha || ""} ${a.demo ? '· <b>DEMOSTRACIÓN</b>' : ""}</p>
      <h2 class="h3"><a href="actividad.html?id=${a.id}">${a.titulo}</a></h2><p>${a.resumen || ""}</p></li>`).join("")}</ul>`;

  if (page === "actividad") {
    const id = new URLSearchParams(location.search).get("id"), i = acts.findIndex(a => a.id === id), a = acts[i];
    if (!a) main.innerHTML = `<h1>Actividad no encontrada</h1><a class="btn" href="index.html">Volver al Tercer corte</a>`;
    else {
      document.title = a.titulo + " · " + A.nombre;
      const blk = (b) => ({
        texto: `<section>${b.titulo ? `<h2>${b.titulo}</h2>` : ""}<p>${b.texto}</p></section>`,
        imagen: `<figure><img src="${R}${b.src}" alt="${b.alt || ""}" loading="lazy"><figcaption>${b.pie || ""}</figcaption></figure>`,
        cita: `<blockquote>${b.texto}</blockquote>`,
        galeria: `<div class="gallery">${(b.imagenes || []).map(g => `<figure><img src="${R}${g.src}" alt="${g.alt || ""}" loading="lazy"><figcaption>${g.nota || ""}</figcaption></figure>`).join("")}</div>`
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
