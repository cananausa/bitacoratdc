/* Renderizador de «Procesos de Co-Creación». Lee la actividad con cocreacion:true de js/data.js.
   IMÁGENES: cada espacio busca assets/img/cocreacion/<nombre>.jpg (o .webp/.png/.jpeg). Solo guarda tu archivo con ese nombre. */
(function () {
  const ERR = window.CANANA_ERR || function (img) {
    const e = ["jpg", "webp", "png", "jpeg"], m = img.src.match(/\.(\w+)(\?.*)?$/), n = e.indexOf(m && m[1]) + 1;
    if (n > 0 && n < e.length) img.src = img.src.replace(/\.\w+(\?.*)?$/, "." + e[n]); else img.style.display = "none";
  };
  window.CANANA_ERR = ERR;
  window.CANANA_COCREACION = function (a, R, main, acts, idx) {
    const d = document; d.body.classList.add("cc");
    const E = a.encuesta, TAGS = { adoptada: "Adoptada", adaptada: "Adaptada", descartada: "Descartada", interior: "Va al interior", libreta: "En la libreta" };
    let fig = 0;
    const slot = (n, r, lab, c = "") => { const k = ++fig; return `<figure class="cc-slot ${c}" style="--r:${r}"><div class="cc-fr"><div class="cc-ph"><i>Fig. ${String(k).padStart(2, "0")}</i><b>Imagen por incorporar</b><code>${a.carpeta}${n}.jpg</code><small>${lab} · proporción ${r.replace("/", ":")}</small></div><img src="${R}${a.carpeta}${n}.jpg" alt="${lab}" loading="lazy" onerror="CANANA_ERR(this)"></div><figcaption><b>Fig. ${k}.</b> ${lab}</figcaption></figure>`; };
    const head = (num, id, t, k) => `<div class="cc-h cc-rv"><span class="cc-num" aria-hidden="true">${num}</span><div><p class="cc-k">${k}</p><h2 id="${id}-t">${t}</h2></div></div>`;
    const bar = (l, v, c = "") => `<div class="cc-bar ${c}"><span>${l}</span><div class="cc-trk"><i style="--v:${v}%"></i></div><b>${v}%</b></div>`;
    const tag = (t) => `<span class="cc-tag t-${t}">${TAGS[t]}</span>`;
    const note = `<p class="cc-met">n = ${E.n} · margen de error ≈ ±22 pts · ${E.lectura.split(". ")[0]}.</p>`;
    const secs = [["porque", "Por qué"], ["prueba", "La V3"], ["conversar", "A conversar"], ["entrevistas", "Entrevistas"], ["encuesta", "Encuesta"], ["decisiones", "Decisiones"], ["resultado", "Resultado"], ["interior", "Interior"]];
    const btn = (u, l, c = "") => u ? `<a class="btn ${c}" href="${u.startsWith("http") ? u : R + "tercer-corte/" + u.replace(/^tercer-corte\//, "")}"${u.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${l}</a>` : `<span class="btn off" aria-disabled="true">${l} · enlace pendiente</span>`;
    const P = a.porque, T = a.prueba, C = a.conversar;

    /* ---- Visualizaciones de cada decisión ---- */
    const VIZ = {
      votos: () => `<div class="cc-viz"><p class="cc-vt">¿Cuál es «la mejor»? (n = 20)</p>${bar("V3 mando inflable", 45, "v3")}${bar("V2 arcos", 40, "v2")}${bar("V1 túnel", 10, "v1")}${bar("Ninguna", 5, "vn")}</div>`,
      caras: () => `<div class="cc-viz"><p class="cc-vt">Las dos caras del inflable</p><div class="cc-faces" data-f="a"><div class="cc-sw" role="group" aria-label="Elegir cara"><button class="on" data-f="a" aria-pressed="true">Cara A · el mando</button><button data-f="b" aria-pressed="false">Cara B · la pantalla</button></div>
        <svg viewBox="0 0 300 150" role="img" aria-label="Esquema de las dos caras del inflable"><g class="fa"><rect x="40" y="30" width="220" height="90" rx="44" fill="#5C0A0A"/><path d="M85 60v30M70 75h30" stroke="#F2B705" stroke-width="8" stroke-linecap="round"/><circle cx="205" cy="62" r="9" fill="#F2B705"/><circle cx="228" cy="82" r="9" fill="#E58B70"/><circle cx="182" cy="82" r="9" fill="#E58B70"/></g><g class="fb"><rect x="40" y="25" width="220" height="100" rx="8" fill="#263F50"/><path d="M70 50l16 12-7 2 5 10-5 2-5-10-5 5z" fill="#F2B705"/><rect x="120" y="48" width="70" height="5" fill="#E58B70"/><rect x="104" y="58" width="40" height="5" fill="#F2B705" opacity=".8"/><rect x="170" y="86" width="60" height="5" fill="#E58B70" opacity=".8"/><rect x="60" y="100" width="50" height="5" fill="#F2B705"/></g></svg>
        <p class="cc-cap" data-a="Conserva la referencia al mando de videojuegos.">Conserva la referencia al mando de videojuegos.</p></div></div>`,
      recorrido: () => `<div class="cc-viz"><p class="cc-vt">Recorrido bilateral: dos puertas</p><svg viewBox="0 0 360 160" role="img" aria-label="Plano esquemático: dos puertas, cada una con mesa y estudiante; por ambas se entra y se sale"><defs><marker id="ar" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0L8 4L0 8z" fill="#E58B70"/></marker></defs>
        <rect x="100" y="30" width="160" height="100" rx="30" fill="#5C0A0A"/><text x="180" y="86" text-anchor="middle" fill="#F2B705" font-size="13" font-family="Marvin,serif">INFLABLE</text>
        <path d="M44 80H98" stroke="#E58B70" stroke-width="4" marker-start="url(#ar)" marker-end="url(#ar)"/><path d="M316 80H262" stroke="#E58B70" stroke-width="4" marker-start="url(#ar)" marker-end="url(#ar)"/>
        <rect x="8" y="104" width="26" height="30" fill="#F2B705"/><rect x="326" y="104" width="26" height="30" fill="#F2B705"/><circle cx="21" cy="94" r="7" fill="#263F50"/><circle cx="339" cy="94" r="7" fill="#263F50"/>
        <text x="21" y="148" text-anchor="middle" font-size="9" fill="#5C0A0A">mesa A</text><text x="339" y="148" text-anchor="middle" font-size="9" fill="#5C0A0A">mesa B</text>
        <text x="70" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#5C0A0A">PUERTA A</text><text x="290" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#5C0A0A">PUERTA B</text><text x="70" y="102" text-anchor="middle" font-size="9" fill="#5C0A0A">entra · sale</text><text x="290" y="102" text-anchor="middle" font-size="9" fill="#5C0A0A">entra · sale</text></svg>
        <p class="cc-cap">Esquema conceptual. Dos puertas, no cuatro: por ambas se entra y se sale. Cada una con proyección, mesa y estudiante.</p></div>`,
      cortina: () => `<div class="cc-viz"><p class="cc-vt">¿Lámina transparente o cortina opaca?</p><div class="cc-two"><div class="x"><svg viewBox="0 0 120 90" aria-hidden="true"><rect x="8" y="10" width="104" height="70" fill="none" stroke="#5C0A0A" stroke-width="3" stroke-dasharray="6 4"/><circle cx="60" cy="45" r="12" fill="#E58B70"/></svg><b>Transparente</b><small>Se ve el fondo y entra la luz. No cumple.</small></div><div class="ok"><svg viewBox="0 0 120 90" aria-hidden="true"><rect x="8" y="10" width="104" height="70" fill="#263F50"/><rect x="8" y="10" width="104" height="8" fill="#F2B705"/><path d="M30 50h60M40 36h40M40 62h40" stroke="#F2B705" stroke-width="4"/></svg><b>Opaca de retroproyección + blackout</b><small>Recibe la imagen y oculta lo de atrás.</small></div></div></div>`,
      mesas: () => `<div class="cc-viz"><p class="cc-vt">Mesas conectadas al inflable</p><svg viewBox="0 0 360 150" role="img" aria-label="Dos mesas conectadas al inflable por ductos y cables"><rect x="120" y="30" width="120" height="70" rx="30" fill="#5C0A0A"/><rect x="10" y="80" width="70" height="40" fill="#F2B705"/><rect x="280" y="80" width="70" height="40" fill="#F2B705"/><path d="M80 95C100 95 110 80 124 80" stroke="#E58B70" stroke-width="5" fill="none"/><path d="M280 95C260 95 250 80 236 80" stroke="#263F50" stroke-width="3" stroke-dasharray="4 3" fill="none"/><text x="45" y="104" text-anchor="middle" font-size="9" fill="#5C0A0A">Insuflado*</text><text x="315" y="104" text-anchor="middle" font-size="9" fill="#5C0A0A">Control / luz</text><text x="180" y="70" text-anchor="middle" font-size="11" fill="#F2B705" font-family="Marvin,serif">BETA</text><text x="180" y="130" text-anchor="middle" font-size="9" fill="#5C0A0A">Conexiones, controles, iluminación y proyecciones</text></svg><p class="cc-cap">*Una de las mesas podría alojar el insuflado y conectarse con conductos. Las mesas no generan aire ni energía por sí solas.</p></div>`,
      paleta: () => `<div class="cc-viz"><p class="cc-vt">Paleta que queda</p><div class="cc-pal"><i style="--c:#7B3FE4"><b>Morado</b></i><i style="--c:#2F6BFF"><b>Azul</b></i><i style="--c:#E8FF2E;color:#263F50"><b>Amarillo neón</b></i><i style="--c:#5C0A0A"><b>Tonos Sergio</b></i></div><p class="cc-cap">Morado, azul y amarillo neón junto a los tonos institucionales.</p></div>`,
      efimero: () => `<div class="cc-viz"><p class="cc-vt">El filtro de lo efímero</p><ul class="cc-chk"><li class="y"><b>Estructura neumática</b> Montaje fácil, maleable, espacio libre amplio.</li><li class="n"><b>Aire acondicionado artesanal</b> Componentes cerámicos: no es fácil de instalar, desmontar ni transportar.</li></ul></div>`
    };

    main.innerHTML = `
<header class="cc-hero"><div class="cc-blob" aria-hidden="true"></div>
  <div class="cc-hero-in"><div class="cc-hero-t"><p class="cc-eye">Tercer corte · TDC-IV · ${a.semana} · ${a.fecha}</p>
    <h1><span class="cc-mega">Procesos de</span><span class="cc-mega y">Co-Creación</span></h1>
    <p class="cc-lema">${a.lema}</p><p class="cc-sub">Cómo una versión de BETA que pusimos a prueba terminó cambiando todo.</p>
    <a class="cc-go" href="#porque">Empezar el recorrido <span aria-hidden="true">↓</span></a></div>
    ${slot("portada", "4/5", "Portada: el inflable en forma de mando (primer boceto de la V3)", "cc-arch")}</div>
  <ul class="cc-cifras">${a.cifras.map(c => `<li class="cc-rv"><b>${c.v}</b><span>${c.t}</span></li>`).join("")}</ul></header>
<div class="cc-nav" role="navigation" aria-label="Secciones de la actividad"><div class="cc-prog" aria-hidden="true"><i></i></div><ol>${secs.map((s, i) => `<li><a href="#${s[0]}"><span>0${i + 1}</span>${s[1]}</a></li>`).join("")}</ol></div>

<section id="porque" class="cc-sec" aria-labelledby="porque-t">${head("01", "porque", "¿Por qué volvimos a diseñar BETA?", "Contexto")}
  <div class="cc-two-c cc-rv"><p class="cc-big">${P.intro}</p><p>${P.giro}</p></div>
  <ol class="cc-steps">${P.pasos.map((p, i) => `<li class="cc-rv${i === 2 ? " last" : ""}"><span class="cc-st-k">${p.k}</span><h3>${p.t}</h3><p>${p.d}</p></li>`).join("")}</ol>
  <aside class="cc-callout cc-rv"><b>Del tutor</b><p>${P.tutor}</p></aside></section>

<section id="prueba" class="cc-sec cc-dark" aria-labelledby="prueba-t">${head("02", "prueba", "La propuesta que pusimos a prueba", "Versión 3")}
  <div class="cc-wide cc-rv">${slot("boceto-v3-mando", "16/9", "Primer boceto de la tercera versión: el inflable con forma de mando de videojuegos")}</div>
  <div class="cc-two-c cc-rv"><p class="cc-big">${T.intro}</p><div><h3>Qué conservaba de las versiones anteriores</h3><ul class="cc-ul">${T.conserva.map(x => `<li>${x}</li>`).join("")}</ul></div></div>
  <p class="cc-intent cc-rv">${T.intencion}</p></section>

<section id="conversar" class="cc-sec" aria-labelledby="conversar-t">${head("03", "conversar", "Sacamos la propuesta a conversar", "Método")}
  <p class="cc-big cc-rv">${C.intro}</p>
  <div class="cc-meth cc-rv"><article><span class="cc-n">7</span><h3>Entrevistas</h3><p>Con ${C.actores.join("; ")}.</p></article><article><span class="cc-n">20</span><h3>Personas en la encuesta</h3><p>Seleccionadas para recoger opiniones sobre la propuesta, su funcionamiento y sus posibilidades.</p></article></div>
  <div class="cc-grid3 cc-rv">${slot("proceso-conversacion", "4/3", "Foto del proceso: conversando la propuesta")}${slot("tablero-canva", "4/3", "Captura del tablero de Canva con las notas adhesivas")}${slot("encuesta-captura", "4/3", "Captura de un fragmento de la encuesta")}</div>
  <p class="cc-callout cc-rv"><b>Ojo</b> ${C.nota}</p></section>

<section id="entrevistas" class="cc-sec cc-tint" aria-labelledby="entrevistas-t">${head("04", "entrevistas", "Lo que nos contaron: las entrevistas", "Siete entrevistas · siete voces")}
  <p class="cc-lead cc-rv">Elige una entrevista para ver qué destacó, qué cuestionó y qué ideas dejó cada persona. Son resúmenes, no transcripciones.</p>
  <div class="cc-ent"><div class="cc-tabs" role="tablist" aria-label="Entrevistados">${a.entrevistas.map((e, i) => `<button role="tab" id="tb-${e.id}" aria-controls="pn-${e.id}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}"><span>${i + 1}</span><b>${e.nombre}</b><small>${e.perfil}</small></button>`).join("")}</div>
  <div class="cc-panels">${a.entrevistas.map((e, i) => `<article class="cc-pn" role="tabpanel" id="pn-${e.id}" aria-labelledby="tb-${e.id}" ${i ? "hidden" : ""}>
    <div class="cc-pn-top">${slot("entrevista-" + e.id, "3/4", "Foto de la entrevista con " + e.nombre, "cc-sm")}<div><p class="cc-k">Entrevista ${i + 1} de 7</p><h3>${e.nombre}</h3><p class="cc-perfil">${e.perfil}</p><dl class="cc-meta"><div><dt>Entrevistó</dt><dd>${e.por}</dd></div><div><dt>Vio</dt><dd>${e.vio}</dd></div></dl>${e.aviso ? `<p class="cc-aviso">${e.aviso}</p>` : ""}${btn(e.video, "▶ Ver el video de la entrevista")}</div></div>
    <div class="cc-cols"><section><h4>Lo que destacó</h4><ul>${e.destaco.map(x => `<li>${x}</li>`).join("")}</ul></section><section><h4>Lo que cuestionó</h4><ul>${e.cuestiono.map(x => `<li>${x}</li>`).join("")}</ul></section><section><h4>Ideas que dejó</h4><ul>${e.ideas.map(x => `<li>${x}</li>`).join("")}</ul></section></div>
    <div class="cc-read"><div><h4>Cómo lo leímos</h4><p>${e.lectura}</p></div><div>${tag(e.tag)}<p>${e.decision}</p></div></div></article>`).join("")}</div></div></section>

<section id="encuesta" class="cc-sec cc-dark" aria-labelledby="encuesta-t">${head("05", "encuesta", "Lo que encontramos en la encuesta", "20 personas · " + E.fecha)}
  <p class="cc-met cc-rv">${E.lectura}</p>
  <div class="cc-bigs cc-rv"><div><b>59%</b><span>de acuerdo promedio con la V3 (V2: 43%, V1: 35%)</span></div><div><b>45%</b><span>elige la V3 como «la mejor» (V2: 40%, V1: 10%)</span></div><div><b>89%</b><span>conservaría la consola en alguna forma</span></div><div><b>55%</b><span>quiere un espacio interior más amplio</span></div></div>
  <div class="cc-btnrow cc-rv">${btn(a.encuestaUrl, "Abrir la encuesta original", "alt")}</div>

  <h3 class="cc-h3 cc-rv">Comparador V1 · V2 · V3</h3>
  <div class="cc-cmp cc-rv"><div class="cc-crit" role="group" aria-label="Criterio">${E.criterios.map((c, i) => `<button data-c="${c.id}" aria-pressed="${i === 0}" class="${i ? "" : "on"}">${c.t}</button>`).join("")}<button data-c="prom" aria-pressed="false">Promedio general</button></div>
    <div class="cc-cmpv" aria-live="polite"></div><label class="cc-chkl" hidden><input type="checkbox"> Sin las 2 respuestas atípicas (#6 y #8)</label>
    <p class="cc-met">% de acuerdo (4-5) y puntaje medio 1-5 · n = 20</p></div>
  <p class="cc-chip cc-rv">Ninguna versión pasa de 50% en «se entiende» · la V3 iguala o supera a las otras en todo</p>

  <h3 class="cc-h3 cc-rv">¿Cuál está mejor resuelta?</h3>
  <div class="cc-stack cc-rv">${E.resuelta.map(r => `<div class="cc-srow"><span>${r.t}</span><div class="cc-sbar">${r.v.map((v, i) => v ? `<i class="s${i}" style="--w:${v}%" title="${["V1", "V2", "V3", "Ninguna"][i]} ${v}%"><b>${v}%</b></i>` : "").join("")}</div></div>`).join("")}<p class="cc-leg"><i class="s0"></i>V1 <i class="s1"></i>V2 <i class="s2"></i>V3 <i class="s3"></i>Ninguna</p></div>

  <div class="cc-2g"><div class="cc-rv"><h3 class="cc-h3">¿Qué hace atractiva a la favorita?</h3>${E.atractivo.map(x => bar(x[0], x[1])).join("")}<p class="cc-chip">Enamora la envolvente exterior, no el interior</p></div>
  <div class="cc-rv"><h3 class="cc-h3">Semáforo de componentes</h3><p class="cc-met">Base 19 · verde oscuro: conservar · verde claro: ajustar</p>${E.componentes.map(c => `<div class="cc-bar sem"><span>${c.t}</span><div class="cc-trk"><i style="--v:${c.c}%"></i><u style="--v:${c.aj || 0}%;--o:${c.c}%"></u></div><b>${c.c}%</b></div>`).join("")}</div></div>
  <div class="cc-zn cc-rv">${E.zonas.map(z => `<article class="z-${z.c}"><h4>${z.t}</h4><ul>${z.items.map(i => `<li>${i}</li>`).join("")}</ul></article>`).join("")}</div>

  <h3 class="cc-h3 cc-rv">La consola: conservar, pero integrada</h3>
  <div class="cc-bigs cc-rv">${E.consola.map(c => `<div><b>${c[0]}</b><span>${c[1]}</span></div>`).join("")}</div>
  <p class="cc-chip cc-rv">${E.consolaNota}</p>
  <div class="cc-rv"><h4 class="cc-h4">Problemas con lo tecnológico</h4>${E.problemas.map(x => bar(x[0], x[1])).join("")}</div>

  <h3 class="cc-h3 cc-rv">Estructura y prioridades</h3>
  <div class="cc-bigs cc-rv">${E.estructura.map(c => `<div><b>${c[0]}</b><span>${c[1]}</span></div>`).join("")}</div>
  <div class="cc-2g"><div class="cc-rv"><h4 class="cc-h4">¿Qué cambiarías?</h4>${E.cambiarias.map(x => bar(x[0], x[1])).join("")}</div><div class="cc-rv"><h4 class="cc-h4">¿Qué cambiar primero?</h4>${E.primero.map(x => bar(x[0], x[1])).join("")}</div></div>

  <h3 class="cc-h3 cc-rv">Voz de los encuestados</h3>
  <div class="cc-bub cc-rv" role="list">${E.voces.map(v => `<span role="listitem" style="--s:${v[1]}"><b>${v[1]}</b>${v[0]}</span>`).join("")}</div>
  <p class="cc-met cc-rv">Número de comentarios abiertos (de 20) que tocan cada tema · cifras aproximadas · ≈6 sin comentarios</p>
  <p class="cc-chip cc-rv">El problema de fondo es comunicativo: una de cada tres personas no entiende qué es</p>

  <h3 class="cc-h3 cc-rv">Datos curiosos</h3><ul class="cc-cur cc-rv">${E.curiosos.map(c => `<li><b>${c[0]}</b>${c[1]}</li>`).join("")}</ul>

  <h3 class="cc-h3 cc-rv">Tres pilares y qué tan firme es la evidencia</h3>
  <div class="cc-pil cc-rv">${E.pilares.map(p => `<article><span class="cc-lvl" role="img" aria-label="Solidez ${p.l} de 3">${[1, 2, 3].map(n => `<i class="${n <= p.l ? "on" : ""}"></i>`).join("")}</span><span class="cc-ev">${p.e}</span><h4>${p.t}</h4><p>${p.d}</p></article>`).join("")}</div>
  <p class="cc-met cc-rv">Porcentajes sobre 20 respuestas (la decisión por componente, sobre 19). «De acuerdo» incluye «Totalmente de acuerdo».</p></section>

<section id="decisiones" class="cc-sec" aria-labelledby="decisiones-t">${head("06", "decisiones", "De las opiniones a las decisiones", "El corazón de la actividad")}
  <p class="cc-lead cc-rv">Escuchar no fue obedecer: unas ideas se adoptaron, otras se adaptaron y otras se descartaron.</p>
  <h3 class="cc-h3 cc-rv">¿Qué pasó con cada idea?</h3>
  <div class="cc-filt cc-rv" role="group" aria-label="Filtrar aportes"><button class="on" data-t="todas" aria-pressed="true">Todas</button>${Object.keys(TAGS).map(k => `<button data-t="${k}" aria-pressed="false">${TAGS[k]}</button>`).join("")}</div>
  <ul class="cc-led">${a.aportes.map(x => `<li data-t="${x.tag}">${tag(x.tag)}<div><h4>${x.t}</h4><p class="cc-q">${x.de}</p><p class="cc-do">→ ${x.d}</p></div></li>`).join("")}</ul>
  <h3 class="cc-h3 cc-rv">Los siete hallazgos</h3><p class="cc-lead cc-rv">Qué escuchamos → qué interpretamos → qué decidimos.</p>
  <div class="cc-hall">${a.hallazgos.map((h, i) => `<details class="cc-hz cc-rv" id="${h.id}" ${i === 0 ? "open" : ""}><summary><span class="cc-hn">${String(h.n).padStart(2, "0")}</span><h3>${h.t}</h3></summary>
    <div class="cc-hb"><div class="cc-hcols"><section class="c1"><h4>① Qué escuchamos</h4><div class="cc-cif"><b>${h.cifra[0]}</b><span>${h.cifra[1]}</span></div><ul>${h.oimos.map(x => `<li>${x}</li>`).join("")}</ul></section><section class="c2"><h4>② Qué interpretamos</h4><p>${h.interpretamos}</p></section><section class="c3"><h4>③ Qué decidimos</h4><p>${h.decidimos}</p></section></div>${VIZ[h.viz]()}${h.n === 4 ? slot("cortina-proyeccion", "16/9", "Referencia o render de la proyección tipo cortina en la puerta") : ""}${h.n === 5 ? slot("mesa-plegable", "16/9", "Render o boceto de la mesa plegable (evolución del mando)") : ""}${h.n === 2 ? `<div class="cc-grid2">${slot("cara-a-mando", "4/3", "Vista de la cara A: el mando")}${slot("cara-b-pantalla", "4/3", "Vista de la cara B: pantalla con cursor y glitch")}</div>` : ""}</div></details>`).join("")}</div></section>

<section id="resultado" class="cc-sec cc-neon" aria-labelledby="resultado-t">${head("07", "resultado", "Así cambió la propuesta", "Resultado general")}
  <p class="cc-lead cc-rv">Mueve el interruptor: la V3 que pusimos a prueba frente a BETA hoy.</p>
  <div class="cc-ba cc-rv" data-s="ahora"><div class="cc-sw" role="group" aria-label="Versión"><button data-s="antes" aria-pressed="false">Antes · V3 a prueba</button><button class="on" data-s="ahora" aria-pressed="true">Ahora · BETA</button></div>
    <dl class="cc-bal"></dl></div>
  <div class="cc-grid4 cc-rv">${slot("resultado-cara-a", "4/3", "Cara A: el mando")}${slot("resultado-cara-b", "4/3", "Cara B: pantalla con cursor y glitch")}${slot("resultado-mesas", "4/3", "Las mesas plegables junto al inflable")}${slot("resultado-recorrido", "4/3", "El recorrido bilateral: dos puertas, entrada y salida por ambas")}</div>
  <div class="cc-chain cc-rv">${a.hallazgos.map(h => `<a href="#${h.id}"><span>${String(h.n).padStart(2, "0")}</span>${h.t}</a>`).join("")}</div>
  <p class="cc-big cc-rv">${a.cambio.cierre}</p></section>

<section id="interior" class="cc-sec" aria-labelledby="interior-t">${head("08", "interior", "¿Y qué pasó con el interior?", "Lo que sigue")}
  <div class="cc-two-c cc-rv"><p class="cc-big">El recorrido interior y la consola proyectada también cambiaron por todo esto. Para no repetirnos, ese detalle vive en la actividad de Desarrollo formal.</p><div class="cc-btnrow">${btn(a.formalUrl, "Ir a Desarrollo formal →", "alt")}</div></div></section>
<nav class="cc-pager" aria-label="Navegación entre actividades"><a class="btn ghost" href="index.html">← Tercer corte</a>${acts[idx - 1] ? `<a class="btn ghost" href="actividad.html?id=${acts[idx - 1].id}">Anterior</a>` : ""}</nav>`;

    /* ---- Interactividad ---- */
    const $ = (s, r = main) => r.querySelector(s), $$ = (s, r = main) => [...r.querySelectorAll(s)];
    /* Entrevistas: pestañas accesibles */
    const tabs = $$(".cc-tabs [role=tab]");
    const sel = (t, f) => { tabs.forEach(x => { const on = x === t; x.setAttribute("aria-selected", on); x.tabIndex = on ? 0 : -1; d.getElementById(x.getAttribute("aria-controls")).hidden = !on; }); if (f) t.focus(); };
    tabs.forEach((t, i) => { t.onclick = () => sel(t); t.onkeydown = (e) => { const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (k) { e.preventDefault(); sel(tabs[(i + k + tabs.length) % tabs.length], 1); } }; });
    /* Comparador */
    const cv = $(".cc-cmpv"), chk = $(".cc-chkl"), chkI = $("input", chk), V = ["V1 túnel", "V2 arcos", "V3 mando"]; let cur = E.criterios[0].id;
    const drawCmp = () => {
      if (cur === "prom") { const m = chkI.checked ? E.promedio.sin : E.promedio.m; cv.innerHTML = `<p class="cc-vt">Puntaje medio general (1-5)${chkI.checked ? " · sin atípicas" : ""}</p><div class="cc-cols3">${m.map((v, i) => `<div class="cc-col v${i + 1}"><i style="--h:${v / 5 * 100}%"></i><b>${v.toFixed(2)}</b><span>${V[i]}</span></div>`).join("")}</div><p class="cc-met">Acuerdo promedio con las afirmaciones: V1 ${E.promedio.acuerdo[0]}% · V2 ${E.promedio.acuerdo[1]}% · V3 ${E.promedio.acuerdo[2]}%.</p>`; chk.hidden = false; }
      else { const c = E.criterios.find(x => x.id === cur); chk.hidden = true; cv.innerHTML = `<p class="cc-vt">${c.t}: % de acuerdo</p><div class="cc-cols3">${c.a.map((v, i) => `<div class="cc-col v${i + 1}"><i style="--h:${v}%"></i><b>${v}%</b><span>${V[i]}<small>media ${c.m[i].toFixed(2)}</small></span></div>`).join("")}</div>`; }
      requestAnimationFrame(() => cv.classList.add("in"));
    };
    $$(".cc-crit button").forEach(b => b.onclick = () => { cur = b.dataset.c; $$(".cc-crit button").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); }); cv.classList.remove("in"); drawCmp(); });
    chkI.onchange = () => { cv.classList.remove("in"); drawCmp(); }; drawCmp();
    /* Filtro del tablero */
    $$(".cc-filt button").forEach(b => b.onclick = () => { $$(".cc-filt button").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); }); $$(".cc-led li").forEach(li => li.hidden = b.dataset.t !== "todas" && li.dataset.t !== b.dataset.t); });
    /* Caras */
    $$(".cc-faces").forEach(f => $$("button", f).forEach(b => b.onclick = () => { f.dataset.f = b.dataset.f; $$("button", f).forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); }); $(".cc-cap", f).textContent = b.dataset.f === "a" ? "Conserva la referencia al mando de videojuegos." : "Parece una pantalla con un cursor y un efecto de glitch: así no reducimos Diseño Digital solo a los videojuegos."; }));
    /* Antes / ahora */
    const ba = $(".cc-ba"), bal = $(".cc-bal"), drawBA = (s) => { ba.dataset.s = s; bal.innerHTML = a.cambio[s].map(r => `<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join(""); $$("button", ba).forEach(x => { x.classList.toggle("on", x.dataset.s === s); x.setAttribute("aria-pressed", x.dataset.s === s); }); };
    $$("button", ba).forEach(b => b.onclick = () => drawBA(b.dataset.s)); drawBA("ahora");
    /* Progreso, nav activa y revelado */
    const prog = $(".cc-prog i"), links = $$(".cc-nav a"), secEls = secs.map(s => d.getElementById(s[0]));
    const onS = () => { const h = d.documentElement.scrollHeight - innerHeight; prog.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`; let k = 0; secEls.forEach((s, i) => { if (s && s.getBoundingClientRect().top < innerHeight * .4) k = i; }); links.forEach((l, i) => l.classList.toggle("on", i === k)); };
    let tk = 0; addEventListener("scroll", () => { if (!tk) tk = requestAnimationFrame(() => { onS(); tk = 0; }); }, { passive: true }); onS();
    const rv = $$(".cc-rv, .cc-bar, .cc-sbar, .cc-cmpv");
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) rv.forEach(e => e.classList.add("in"));
    else { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 }); rv.forEach(e => io.observe(e)); }
    $$(".cc-hz").forEach(x => x.addEventListener("toggle", () => $$(".cc-bar", x).forEach(b => b.classList.add("in"))));
    if (location.hash) { const t = d.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 50); }
  };
})();
