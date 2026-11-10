/* DESARROLLO FORMAL · bitácora cronológica de la evolución de BETA.
   Lee la actividad con formal:true de js/data.js (semanas, galerías, comparaciones, ejes).
   IMÁGENES: guarda cada archivo en assets/img/formal/<id-semana>/NN.jpg (o .webp/.png/.jpeg), p. ej. semana-01/01.jpg.
   Mientras el archivo no exista se ve un marcador editable; no hay imágenes rotas. */
(function () {
  const EXT = ["jpg", "webp", "png", "jpeg"];
  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const pad = (n) => String(n).padStart(2, "0");

  window.CANANA_FM = {
    err(img) { /* prueba .jpg → .webp → .png → .jpeg; si ninguno existe, deja el marcador */
      const m = img.src.match(/\.(\w+)(\?.*)?$/), n = EXT.indexOf(m && m[1].toLowerCase()) + 1;
      if (n > 0 && n < EXT.length) img.src = img.src.replace(/\.\w+(\?.*)?$/, "." + EXT[n]); else img.remove();
    },
    ok(img) {
      img.parentElement.classList.add("ok");
      const t = img.closest(".df-tile");
      if (t) { t.classList.add("ok"); const b = t.querySelector(".df-open"); if (b) b.disabled = false; }
    }
  };

  window.CANANA_FORMAL = function (a, R, main, acts, idx) {
    const d = document, body = d.body;
    let done = 0; const go = () => { if (!done) { done = 1; build(); } };
    if (!d.getElementById("df-css")) {
      const l = d.createElement("link"); l.id = "df-css"; l.rel = "stylesheet"; l.href = R + "css/formal.css";
      l.onload = l.onerror = go; d.head.appendChild(l); setTimeout(go, 1500);
    } else go();

    function build() {
      body.classList.add("ed");
      const S = a.semanas || [], N = S.length, EJ = a.ejes || [], base = R + a.carpeta;
      const ext = (r) => /\.(jpe?g|png|webp)$/i.test(r) ? r : r + ".jpg";
      const imgTag = (ref) => `<img src="${base}${ext(ref)}" alt="" loading="lazy" onload="CANANA_FM.ok(this)" onerror="CANANA_FM.err(this)">`;
      const refOf = (s, k) => (s.galeria[k] && s.galeria[k].archivo) || `${s.id}/${pad(k + 1)}`;
      const filled = (s) => !!(s.titulo || s.objetivo);
      const doc = S.filter(filled).length;
      const pend = (t) => `<span class="df-pend">${t}</span>`;
      const list = (arr, f, vacio) => arr && arr.length ? `<ul class="df-ul">${arr.map(f).join("")}</ul>` : pend(vacio);
      const txt = (v, vacio) => v ? v : pend(vacio);
      let fig = 0;

      const tile = (ref, tipo, pie, g, etiqueta, sinNum) => {
        const k = sinNum ? 0 : ++fig, rot = sinNum ? esc(etiqueta) : "Fig. " + pad(k), t = esc(tipo || "Imagen por incorporar");
        return `<figure class="df-tile" data-g="${g}" data-tipo="${esc(tipo)}" data-pie="${esc(pie)}" data-ref="${esc(etiqueta)}">
          <button type="button" class="df-open" disabled aria-label="Ampliar: ${t} (${esc(etiqueta)})">
            <span class="ph"><i>${rot}</i><b>${t}</b><code>${a.carpeta}${ext(ref)}</code></span>${imgTag(ref)}</button>
          <figcaption class="df-cap${pie ? "" : " pend"}"><b>${rot}</b> · ${esc(tipo || "Imagen")}. ${pie ? esc(pie) : "Pie de imagen por completar."}</figcaption></figure>`;
      };
      const head = (num, id, t, k) => `<div class="ed-h ed-rv"><span class="ed-num" aria-hidden="true">${num}</span><div><p class="ed-k">${k}</p><h2 id="${id}-t">${t}</h2></div></div>`;

      /* Matriz de transformación: qué ejes del diseño se trabajan en cada semana y cómo se conectan */
      const matrix = () => {
        if (!EJ.length || !N) return "";
        const W = 900, x0 = N > 1 ? 300 : 570, sp = N > 1 ? 560 / (N - 1) : 0, top = 64, rh = 60, H = top + EJ.length * rh + 16;
        const X = (i) => x0 + sp * i, Y = (r) => top + r * rh + rh / 2;
        let hay = false;
        let s = `<svg class="df-mx" viewBox="0 0 ${W} ${H}" aria-labelledby="mx-t"><title id="mx-t">Matriz de transformación: ejes de diseño trabajados en cada semana</title>`;
        S.forEach((w, i) => { s += `<line class="gd" x1="${X(i)}" x2="${X(i)}" y1="44" y2="${H - 8}"/><a href="#${w.id}"><text x="${X(i)}" y="30" text-anchor="middle" class="hd">SEMANA ${i + 1}</text></a>`; });
        EJ.forEach((e, r) => {
          const act = S.map((w) => (w.ejes || []).includes(e.id)), pts = act.map((o, i) => o ? [X(i), Y(r)] : null).filter(Boolean);
          if (pts.length) hay = true;
          s += `<text x="10" y="${Y(r) + 6}" class="rl">${esc(e.t)}</text>`;
          if (N > 1) s += `<line class="gd" x1="${X(0)}" x2="${X(N - 1)}" y1="${Y(r)}" y2="${Y(r)}"/>`;
          if (pts.length > 1) s += `<path class="ln" d="M${pts.map((p) => p.join(" ")).join("L")}"/>`;
          S.forEach((w, i) => { s += `<a href="#${w.id}" aria-label="${esc(e.t)}, semana ${i + 1}: ${act[i] ? "trabajado" : "sin registro"}"><circle class="${act[i] ? "on" : "off"}" cx="${X(i)}" cy="${Y(r)}" r="${act[i] ? 13 : 9}"/></a>`; });
        });
        return `<div class="df-scroll" tabindex="0" role="region" aria-label="Matriz de transformación, desplazable">${s}</svg></div>
          <p class="ed-note">${hay ? "● Eje trabajado en la semana. Las líneas conectan las semanas en que ese aspecto de la propuesta se modificó." : "Aún no hay registros: marca los ejes de cada semana (campo «ejes» en js/data.js) y aquí se dibujará la línea de transformación."}</p>`;
      };

      /* Comparación antes / después con deslizador */
      const cmp = (s) => {
        const c = s.comparacion; if (!c) return "";
        const layer = (ref, cls, lab) => `<div class="df-layer ${cls}"><span class="ph"><b>${lab}</b><code>${a.carpeta}${ext(ref)}</code></span>${imgTag(ref)}<em class="df-tag">${lab}</em></div>`;
        return `<div class="df-cmpwrap ed-rv"><h3 class="ed-h3">Comparación con la versión anterior</h3>
          <div class="df-cmp" style="--p:50%">${layer(c.antes, "a", c.etiquetaAntes || "Antes")}${layer(c.despues, "b", c.etiquetaDespues || "Después")}<span class="df-grip" aria-hidden="true"></span>
          <input type="range" min="0" max="100" value="50" aria-label="Deslizar para comparar la versión anterior y la nueva de la semana ${s.n}"></div>
          <p class="df-cap${c.nota ? "" : " pend"}">${c.nota ? esc(c.nota) : "Nota de comparación por completar: qué cambió entre las dos versiones y por qué."}</p></div>`;
      };

      const week = (s, i) => {
        const n = i + 1, prev = S[i - 1], next = S[i + 1];
        const tiles = (s.galeria || []).map((it, k) => tile(refOf(s, k), it.tipo, it.pie, s.id, `Semana ${n} · ${pad(k + 1)}`)).join("");
        return `<section id="${s.id}" class="ed-sec df-week${n % 2 === 0 ? " ed-tint" : ""}${n % 2 === 0 ? " alt" : ""}" aria-labelledby="${s.id}-t">
          ${head(pad(n), s.id, esc(s.titulo) || pend("Título de la fase por definir"), `Semana ${n} · ${esc(s.periodo) || "Fecha por definir"}`)}
          <div class="df-wk">
            <div class="df-gal ed-rv">${tiles || pend("Galería por incorporar")}</div>
            <aside class="df-info ed-rv" aria-label="Registro de la semana ${n}"><dl>
              <dt>Objetivo de diseño</dt><dd>${txt(s.objetivo, "Objetivo por documentar")}</dd>
              <dt>Decisiones tomadas</dt><dd>${list(s.decisiones, (x) => `<li><b>${x.t}</b>${x.d || ""}</li>`, "Decisiones por documentar")}</dd>
              <dt>Cambios respecto a la versión anterior</dt><dd>${list(s.cambios, (x) => `<li>${x}</li>`, n === 1 ? "Versión de partida: sin cambios previos" : "Cambios por documentar")}</dd>
              <dt>Problemas y soluciones</dt><dd>${list(s.problemas, (x) => `<li><b>Problema</b>${x.p}<br><b>Solución</b>${x.s || "Por definir"}</li>`, "Problemas por documentar")}</dd>
              <dt>Resultados y conclusiones</dt><dd>${txt(s.resultados, "Resultados por documentar")}</dd>
            </dl></aside>
          </div>
          ${cmp(s)}
          <p class="df-wpager">${prev ? `<a href="#${prev.id}"><span aria-hidden="true">←</span> Semana ${n - 1}</a>` : `<a href="#evolucion"><span aria-hidden="true">↑</span> Evolución general</a>`}
            ${next ? `<a href="#${next.id}">Semana ${n + 1} <span aria-hidden="true">→</span></a>` : `<a href="#cierre">Cierre <span aria-hidden="true">↓</span></a>`}</p>
        </section>`;
      };

      const film = S.map((s, i) => `<li>${tile(refOf(s, 0), `Semana ${i + 1}`, s.titulo || "", "evo", `Semana ${i + 1} · 01`, 1)}<a class="df-film-l" href="#${s.id}">Ir a la semana ${i + 1} <span aria-hidden="true">→</span></a></li>`).join("");

      const secs = [["evolucion", "Evolución", "00"]].concat(S.map((s, i) => [s.id, `Semana ${i + 1}`, pad(i + 1)])).concat([["cierre", "Cierre", "→"]]);
      const prevA = acts[idx - 1], nextA = acts[idx + 1];

      main.innerHTML = `
<header class="ed-hero df-hero">
  <svg class="ed-arcs" viewBox="0 0 600 600" aria-hidden="true"><g fill="none" stroke="#F2B705" stroke-width="2">${[290, 240, 190, 140, 90].map((r) => `<path d="M${300 - r} 600V300a${r} ${r} 0 0 1 ${2 * r} 0V600"/>`).join("")}</g></svg>
  <div class="ed-hero-in">
    <div class="df-hero-t">
      <p class="ed-eye">Tercer corte · TDC-IV · Bitácora de proceso</p>
      <h1><span class="df-mega" aria-hidden="true"><span>Desarrollo</span><span>formal</span></span><span class="sr-only">${a.titulo}</span></h1>
      <p class="ed-lema">${a.lema}</p>
      <p class="ed-sub">${a.intro}</p>
      <p class="df-status"><b>${doc}</b> de <b>${N}</b> semanas documentadas</p>
      <a class="ed-go" href="#evolucion">Recorrer la evolución <span aria-hidden="true">↓</span></a>
    </div>
    <figure class="df-fig"><svg viewBox="0 0 360 310" role="img" aria-label="Esquema de la idea rectora de BETA: una tabla plana que se levanta hasta formar un túnel de arcos triangulares">
      <g fill="none" stroke="#F2B705" stroke-width="6" stroke-linejoin="round" stroke-linecap="round">
        <rect x="30" y="30" width="300" height="12" fill="#F2B705" stroke="none"/>
        <path d="M30 150H110L150 104L190 150L230 104L270 150H330"/>
        <g stroke-width="4">${[[140, 80], [112, 66], [84, 52], [56, 38], [28, 24]].map((p) => `<path d="M${180 - p[0]} 272L180 ${272 - p[1]}L${180 + p[0]} 272"/>`).join("")}</g>
        <g stroke-width="2.5"><path d="M180 56v14m-5-6l5 6 5-6"/><path d="M180 164v14m-5-6l5 6 5-6" transform="translate(0 -4)"/></g>
      </g>
      <g class="df-fl"><text x="30" y="66">01 · TABLA PLANA</text><text x="30" y="192">02 · SE LEVANTA</text><text x="30" y="300">03 · TÚNEL DE ARCOS TRIANGULARES</text></g></svg>
      
  </div>
</header>
<div class="ed-nav" role="navigation" aria-label="Semanas de la bitácora"><div class="ed-prog" aria-hidden="true"><i></i></div><ol>${secs.map((s) => `<li><a href="#${s[0]}"><span>${s[2]}</span>${s[1]}</a></li>`).join("")}</ol></div>

<section id="evolucion" class="ed-sec ed-tint" aria-labelledby="evolucion-t">
  ${head("00", "evolucion", "Evolución de la propuesta", "Vista general · línea de transformación")}
  <p class="ed-lead ed-rv">${a.evolucionTexto}</p>
  <h3 class="ed-h3 ed-rv">Secuencia de versiones</h3>
  <ol class="df-film ed-rv" tabindex="0" aria-label="Secuencia de versiones por semana, desplazable">${film}</ol>
  <h3 class="ed-h3 ed-rv">Qué se transforma cada semana</h3>
  <div class="ed-rv">${matrix()}</div>
</section>

${S.map(week).join("")}

<section id="cierre" class="ed-sec ed-end" aria-labelledby="cierre-t">
  ${head("→", "cierre", "Cierre", "Siguiente versión")}
  <p class="ed-statement ed-rv">${a.cierre}</p>
  <p class="pager ed-rv"><a class="btn ghost" href="index.html">← Tercer corte</a>${prevA ? `<a class="btn ghost" href="actividad.html?id=${prevA.id}">Anterior</a>` : ""}${nextA ? `<a class="btn" href="actividad.html?id=${nextA.id}">Siguiente</a>` : ""}</p>
</section>`;

      /* Comparador */
      main.querySelectorAll(".df-cmp input").forEach((inp) => inp.addEventListener("input", () => inp.parentElement.style.setProperty("--p", inp.value + "%")));

      /* Visor ampliado: navegación, zoom, pantalla completa, teclado y gestos */
      const lb = d.createElement("div"); lb.className = "df-lb"; lb.hidden = true;
      lb.setAttribute("role", "dialog"); lb.setAttribute("aria-modal", "true"); lb.setAttribute("aria-label", "Visor de imágenes");
      lb.innerHTML = `<div class="df-lb-top"><span class="df-lb-n" aria-live="polite"></span><span class="df-lb-btns"><button type="button" data-a="zoom" aria-pressed="false">Zoom</button><button type="button" data-a="fs">Pantalla completa</button><button type="button" data-a="x">Cerrar ✕</button></span></div>
        <button type="button" class="df-lb-nav p" data-a="prev" aria-label="Imagen anterior">←</button>
        <div class="df-lb-stage"><img alt=""></div>
        <button type="button" class="df-lb-nav n" data-a="next" aria-label="Imagen siguiente">→</button>
        <p class="df-lb-cap"></p>`;
      body.appendChild(lb);
      const im = lb.querySelector("img"), stage = lb.querySelector(".df-lb-stage"), cap = lb.querySelector(".df-lb-cap"), cnt = lb.querySelector(".df-lb-n"), fsb = lb.querySelector("[data-a=fs]");
      if (!lb.requestFullscreen) fsb.hidden = true;
      let L = [], cur = 0, opener = null;
      const show = (i) => {
        cur = (i + L.length) % L.length; const t = L[cur], s = t.querySelector("img");
        im.src = s.currentSrc || s.src; im.alt = t.dataset.tipo || "";
        cnt.textContent = `${cur + 1} / ${L.length}`;
        cap.innerHTML = `<b>${esc(t.dataset.ref)}</b> · ${esc(t.dataset.tipo)}${t.dataset.pie ? ". " + esc(t.dataset.pie) : ""}`;
        lb.classList.remove("zoom"); lb.querySelector("[data-a=zoom]").setAttribute("aria-pressed", "false"); stage.scrollTo(0, 0);
        lb.querySelectorAll(".df-lb-nav").forEach((b) => b.hidden = L.length < 2);
      };
      const close = () => { lb.hidden = true; body.classList.remove("df-lock"); if (d.fullscreenElement) d.exitFullscreen(); if (opener) opener.focus(); };
      const act = (a2) => {
        if (a2 === "x") close(); else if (a2 === "prev") show(cur - 1); else if (a2 === "next") show(cur + 1);
        else if (a2 === "zoom") { const z = lb.classList.toggle("zoom"); lb.querySelector("[data-a=zoom]").setAttribute("aria-pressed", z); stage.scrollTo(0, 0); }
        else if (a2 === "fs") d.fullscreenElement ? d.exitFullscreen() : lb.requestFullscreen();
      };
      lb.addEventListener("click", (e) => { const b = e.target.closest("[data-a]"); if (b) act(b.dataset.a); else if (e.target === stage || e.target === lb) close(); });
      main.addEventListener("click", (e) => {
        const b = e.target.closest(".df-open"); if (!b || b.disabled) return;
        const t = b.closest(".df-tile"); L = [...main.querySelectorAll(`.df-tile.ok[data-g="${t.dataset.g}"]`)]; opener = b;
        lb.hidden = false; body.classList.add("df-lock"); show(L.indexOf(t)); lb.querySelector("[data-a=x]").focus();
      });
      d.addEventListener("keydown", (e) => {
        if (lb.hidden) return;
        if (e.key === "Escape") close(); else if (e.key === "ArrowLeft") show(cur - 1); else if (e.key === "ArrowRight") show(cur + 1);
        else if (e.key === "Tab") { const f = [...lb.querySelectorAll("button")].filter((b) => !b.hidden), i = f.indexOf(d.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
      });
      let x0 = 0;
      stage.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
      stage.addEventListener("touchend", (e) => { const dx = e.changedTouches[0].clientX - x0; if (!lb.classList.contains("zoom") && Math.abs(dx) > 50 && L.length > 1) show(cur + (dx < 0 ? 1 : -1)); });

      /* Navegación: el menú se ancla bajo el encabezado, progreso de lectura y sección activa */
      let oculto = false, last = scrollY;
      const hd = d.getElementById("site-header"), sh = () => d.documentElement.style.setProperty("--hh", (oculto ? 0 : hd.offsetHeight) + "px");
      const ver = (v) => { if (v === oculto) return; oculto = v; hd.classList.toggle("hd-hide", v); sh(); };
      sh(); addEventListener("resize", sh); if (window.ResizeObserver) new ResizeObserver(sh).observe(hd);
      addEventListener("scroll", () => { const y = scrollY, dy = y - last; if (y < 80) ver(false); else if (dy > 6 && !d.querySelector("#nav.open")) ver(true); else if (dy < -6) ver(false); last = y; }, { passive: true });
      hd.addEventListener("focusin", () => ver(false));
      const bar = main.querySelector(".ed-prog i"), links = [...main.querySelectorAll(".ed-nav a")];
      let t = 0; const upd = () => { const h = d.documentElement; bar.style.transform = `scaleX(${Math.min(1, scrollY / Math.max(1, h.scrollHeight - innerHeight))})`; t = 0; };
      addEventListener("scroll", () => { if (!t) t = requestAnimationFrame(upd); }, { passive: true }); upd();
      const spy = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.forEach((l) => { const on = l.getAttribute("href") === "#" + e.target.id; l.toggleAttribute("aria-current", on); if (on) { const ol = l.closest("ol"); ol.scrollTo({ left: l.offsetLeft - ol.clientWidth / 2 + l.clientWidth / 2 }); } }); }), { rootMargin: "-35% 0px -60% 0px" });
      main.querySelectorAll(".ed-sec").forEach((s) => spy.observe(s));
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        body.classList.add("edjs");
        const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
        main.querySelectorAll(".ed-rv").forEach((el) => io.observe(el));
      }
      if (location.hash) { const el = d.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView(), 60); }
    }
  };
})();
