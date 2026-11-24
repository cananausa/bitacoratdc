/* ATLAS DE REFERENTES · Tercer corte · Cañaña
   Mapamundi ilustrado e interactivo que va ANTES de todo el contenido de "Análisis de referentes".

   DATOS: no hay nada escrito a mano aquí. Se leen de window.CANANA_REFERENTES_DATA (que exporta js/referentes.js):
     · REF  → por referente: nombre y país (pais, código ISO de 2 letras)
     · APR  → lista de aprendizajes (t = frase). El aprendizaje de un referente es el primer APR cuya lista r lo incluye.

   GEOMETRÍA: los contornos de TODOS los países se descargan al abrir la página (Natural Earth vía world-atlas).
     Orden de intentos: CDN 110 m → unpkg 110 m → archivo local assets/data/mundo.json (TopoJSON o GeoJSON).
     Para que funcione sin internet, guarda cualquiera de esos archivos con ese nombre y ruta. */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const FUENTES = [
    "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json",
    "https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
  ];
  const LOCAL = "assets/data/mundo.json";

  /* ISO 3166 numérico → alfa-2 (el TopoJSON trae el numérico; los referentes usan alfa-2) */
  const ISO = "004AF008AL010AQ012DZ016AS020AD024AO028AG031AZ032AR036AU040AT044BS048BH050BD051AM052BB056BE060BM064BT068BO070BA072BW074BV076BR084BZ086IO090SB092VG096BN100BG104MM108BI112BY116KH120CM124CA132CV136KY140CF144LK148TD152CL156CN158TW162CX166CC170CO174KM175YT178CG180CD184CK188CR191HR192CU196CY203CZ204BJ208DK212DM214DO218EC222SV226GQ231ET232ER233EE234FO238FK239GS242FJ246FI248AX250FR254GF258PF260TF262DJ266GA268GE270GM275PS276DE288GH296KI300GR304GL308GD312GP316GU320GT324GN328GY332HT334HM336VA340HN344HK348HU352IS356IN360ID364IR368IQ372IE376IL380IT384CI388JM392JP398KZ400JO404KE408KP410KR414KW417KG418LA422LB426LS428LV430LR434LY438LI440LT442LU446MO450MG454MW458MY462MV466ML470MT474MQ478MR480MU484MX492MC496MN498MD499ME500MS504MA508MZ512OM516NA520NR524NP528NL531CW533AW534SX535BQ540NC548VU554NZ558NI562NE566NG570NU578NO580MP581UM583FM584MH585PW586PK591PA598PG600PY604PE608PH612PN616PL620PT624GW626TL630PR634QA638RE642RO643RU646RW652BL654SH659KN660AI662LC663MF666PM670VC674SM678ST682SA686SN688RS690SC694SL702SG703SK704VN705SI706SO710ZA716ZW724ES728SS729SD732EH740SR744SJ748SZ752SE756CH760SY762TJ764TH768TG772TK776TO780TT784AE788TN792TR795TM796TC798TV800UG804UA807MK818EG826GB831GG832JE833IM834TZ840US850VI854BF858UY860UZ862VE876WF882WS887YE894ZM";
  const N2A = {}, A2N = {};
  ISO.replace(/(\d{3})([A-Z]{2})/g, (m, n, a) => { N2A[+n] = a; A2N[a] = +n; return m; });

  /* Nombres cortos en español para que quepan en el mapa (el resto sale de Intl.DisplayNames) */
  const CORTO = { CD: "R. D. del Congo", CG: "Congo", CF: "R. Centroafricana", AE: "Emiratos Árabes", MM: "Myanmar", BA: "Bosnia y Herz.", DO: "Rep. Dominicana", GQ: "Guinea Ecuatorial", SS: "Sudán del Sur", CI: "Costa de Marfil", TF: "Tierras Australes", FK: "Islas Malvinas", PS: "Palestina", EH: "Sahara Occ.", MK: "Macedonia del N.", KP: "Corea del Norte", KR: "Corea del Sur", AQ: "Antártida", TL: "Timor Oriental", SB: "Islas Salomón", XK: "Kosovo", GB: "Reino Unido", US: "Estados Unidos", RU: "Rusia", CZ: "Chequia", SZ: "Esuatini", TW: "Taiwán", VA: "Vaticano", AG: "Antigua y Barb.", KN: "San Cristóbal y N.", VC: "San Vicente y Gran.", ST: "Santo Tomé y P.", GS: "Georgias del Sur", HM: "Islas Heard", UM: "Islas menores EE. UU." };
  let DN = null; try { DN = new Intl.DisplayNames(["es"], { type: "region" }); } catch (e) { /* navegador antiguo: se usa el nombre en inglés */ }
  const nombreEs = (a2, fb) => { if (a2 && CORTO[a2]) return CORTO[a2]; if (a2 && DN) { try { const n = DN.of(a2); if (n && n !== a2) return n; } catch (e) { /* nada */ } } return fb || a2 || ""; };

  const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const f1 = (n) => Math.round(n * 10) / 10;

  /* ---------- Proyección Natural Earth (Šavrič et al.) ---------- */
  const W = 2000, PAD = 62;
  const nx = (l, p) => { const p2 = p * p, p4 = p2 * p2; return l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))); };
  const ny = (p) => { const p2 = p * p, p4 = p2 * p2; return p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))); };
  const XM = nx(Math.PI, 0), YM = ny(Math.PI / 2);
  const S = (W - 2 * PAD) / (2 * XM), H = Math.round(2 * YM * S + 2 * PAD), CX = W / 2, CY = H / 2;
  const proj = (lon, lat) => { const l = lon * Math.PI / 180, p = lat * Math.PI / 180; return [CX + nx(l, p) * S, CY - ny(p) * S]; };

  /* ---------- Lectura de TopoJSON / GeoJSON → [{id, name, polys:[[anillo,...],...]}] ---------- */
  function leerMundo(t) {
    const out = [];
    const push = (id, name, geom) => {
      if (!geom) return;
      const polys = geom.type === "Polygon" ? [geom.rings] : geom.type === "MultiPolygon" ? geom.rings : [];
      if (polys.length) out.push({ id: id == null || id === "" ? null : parseInt(id, 10), name: name || "", polys });
    };
    if (t.type === "Topology") {
      const tr = t.transform;
      const arcs = t.arcs.map((a) => { let x = 0, y = 0; return a.map((p) => { x += p[0]; y += p[1]; return tr ? [x * tr.scale[0] + tr.translate[0], y * tr.scale[1] + tr.translate[1]] : [x, y]; }); });
      const ring = (idx) => { const r = []; idx.forEach((i) => { const a = i < 0 ? arcs[~i].slice().reverse() : arcs[i]; (r.length ? a.slice(1) : a).forEach((p) => r.push(p)); }); return r; };
      const obj = t.objects.countries || t.objects[Object.keys(t.objects)[0]];
      (obj.geometries || []).forEach((g) => {
        const n = g.properties && (g.properties.name || g.properties.NAME || g.properties.ADMIN);
        if (g.type === "Polygon") push(g.id, n, { type: "Polygon", rings: g.arcs.map(ring) });
        else if (g.type === "MultiPolygon") push(g.id, n, { type: "MultiPolygon", rings: g.arcs.map((poly) => poly.map(ring)) });
      });
    } else if (t.type === "FeatureCollection") {
      t.features.forEach((ft) => {
        const p = ft.properties || {}, g = ft.geometry; if (!g) return;
        const id = ft.id != null ? ft.id : (p.iso_n3 || p.ISO_N3 || p.id), n = p.name || p.NAME || p.ADMIN;
        if (g.type === "Polygon") push(id, n, { type: "Polygon", rings: g.coordinates });
        else if (g.type === "MultiPolygon") push(id, n, { type: "MultiPolygon", rings: g.coordinates });
      });
    }
    return out;
  }

  /* Trazo de un anillo ya proyectado (descarta puntos casi idénticos para aligerar el SVG) */
  function ringD(ring) {
    let d = "", px = null, py = null; const n = ring.length;
    for (let i = 0; i < n; i++) {
      const q = proj(ring[i][0], ring[i][1]), x = q[0], y = q[1];
      if (px === null) { d += "M" + f1(x) + " " + f1(y); px = x; py = y; continue; }
      const dx = x - px, dy = y - py;
      if (i < n - 1 && dx * dx + dy * dy < 1.2) continue;
      d += (Math.abs(dx) > W * 0.85 ? "M" : "L") + f1(x) + " " + f1(y); px = x; py = y;
    }
    return d + "Z";
  }
  /* Área, centroide y caja del polígono más grande (para pin y etiqueta) */
  function medir(poly) {
    const r = poly[0].map((p) => proj(p[0], p[1])); let a = 0, cx = 0, cy = 0, x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (let i = 0, n = r.length; i < n; i++) {
      const p = r[i], q = r[(i + 1) % n], c = p[0] * q[1] - q[0] * p[1]; a += c; cx += (p[0] + q[0]) * c; cy += (p[1] + q[1]) * c;
      x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]);
    }
    a /= 2; if (Math.abs(a) < 1e-6) { return { area: 0, x: (x0 + x1) / 2, y: (y0 + y1) / 2, w: x1 - x0, h: y1 - y0 }; }
    return { area: Math.abs(a), x: cx / (6 * a), y: cy / (6 * a), w: x1 - x0, h: y1 - y0 };
  }

  /* ---------- Ilustraciones del océano ---------- */
  const rosa = (x, y, r) => {
    const L = r * 1.18, w = r * .2;
    const k = (rot, c1, c2, len, ww) => `<g transform="rotate(${rot})"><path d="M0 ${-len}L${ww} 0L0 0Z" fill="${c1}"/><path d="M0 ${-len}L${-ww} 0L0 0Z" fill="${c2}"/></g>`;
    return `<g class="mp-art" transform="translate(${x} ${y})" aria-hidden="true">
      <circle r="${r}" fill="#0d1b24" fill-opacity=".35" stroke="#ffe99a" stroke-opacity=".55" stroke-width="2.4"/>
      <circle r="${r * .84}" fill="none" stroke="#ffe99a" stroke-opacity=".35" stroke-width="1" stroke-dasharray="2 7"/>
      ${k(45, "#E58B70", "#a3261c", L * .62, w * .8)}${k(135, "#E58B70", "#a3261c", L * .62, w * .8)}${k(225, "#E58B70", "#a3261c", L * .62, w * .8)}${k(315, "#E58B70", "#a3261c", L * .62, w * .8)}
      ${k(0, "#F2B705", "#b87400", L, w)}${k(90, "#F2B705", "#b87400", L, w)}${k(180, "#F2B705", "#b87400", L, w)}${k(270, "#F2B705", "#b87400", L, w)}
      <circle r="${r * .1}" fill="#5C0A0A" stroke="#ffe99a" stroke-width="2"/>
      <text y="${-L - 10}" text-anchor="middle" font-family="Marvin,Georgia,serif" font-size="${r * .42}" fill="#ffe99a">N</text></g>`;
  };
  const barco = (x, y, s, rot) => `<g class="mp-art" transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${s})" aria-hidden="true">
      <path d="M-10 96q10-9 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" fill="none" stroke="#fffaf0" stroke-opacity=".55" stroke-width="3"/>
      <path d="M45 70V8M88 70V20" stroke="#ffe99a" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M47 12Q86 30 47 62Z" fill="#fffaf0" stroke="#5C0A0A" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M90 22Q122 36 90 62Z" fill="#fdf0c7" stroke="#5C0A0A" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M45 8L45-4L66 2Z" fill="#E58B70" stroke="#5C0A0A" stroke-width="2"/>
      <path d="M4 66L132 66Q118 94 92 94H42Q16 94 4 66Z" fill="#7d1612" stroke="#F2B705" stroke-width="3" stroke-linejoin="round"/>
      <path d="M12 76H124" stroke="#F2B705" stroke-width="2.5" opacity=".8"/></g>`;
  const ballena = (x, y, s, flip) => `<g class="mp-art" transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" aria-hidden="true">
      <path d="M60 14q-4-16-18-22M64 14q4-16 18-22M62 14V-6" fill="none" stroke="#bfe7ea" stroke-opacity=".85" stroke-width="3" stroke-linecap="round"/>
      <path d="M0 44C14 14 80 8 112 30C124 38 140 30 152 12C154 30 148 46 140 52C152 58 158 68 162 80C146 74 134 66 124 60C90 80 28 78 0 44Z" fill="#3a6079" stroke="#bfe7ea" stroke-opacity=".7" stroke-width="3" stroke-linejoin="round"/>
      <path d="M8 50C40 68 90 70 120 58C100 76 44 78 8 50Z" fill="#a9d4de" opacity=".75"/>
      <circle cx="30" cy="40" r="3.6" fill="#101e28"/>
      <path d="M-14 100q10-9 20 0t20 0t20 0t20 0t20 0t20 0t20 0t20 0" fill="none" stroke="#fffaf0" stroke-opacity=".5" stroke-width="3"/></g>`;
  const pez = (x, y, s, flip, c) => `<g class="mp-art" transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" aria-hidden="true"><path d="M0 0C14-14 34-14 48 0C34 14 14 14 0 0ZM46 0L66-14L62 0L66 14Z" fill="${c || "#E58B70"}" stroke="#fffaf0" stroke-opacity=".6" stroke-width="2.2" stroke-linejoin="round"/><circle cx="11" cy="-2" r="2.6" fill="#101e28"/></g>`;
  const oceanoTxt = (x, y, t, rot, sz) => `<text class="mp-ot" x="${x}" y="${y}" transform="rotate(${rot || 0} ${x} ${y})" text-anchor="middle" font-size="${sz || 34}" aria-hidden="true">${t}</text>`;

  /* ---------- Estilos ---------- */
  const CSS = `
.mp{--vino:#5C0A0A;--mostaza:#F2B705;--petrol:#263F50;--coral:#E58B70;--crema:#fffaf0;position:relative;background:var(--vino);color:var(--crema);isolation:isolate;overflow:hidden}
.mp::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(900px 420px at 8% 0,rgba(242,183,5,.22),transparent 70%),radial-gradient(800px 420px at 100% 100%,rgba(229,139,112,.2),transparent 70%)}
.mp-head{display:flex;flex-wrap:wrap;gap:1.2rem 3rem;align-items:flex-end;justify-content:space-between;padding:clamp(2rem,5vw,3.6rem) max(1.2rem,calc((100% - 1180px)/2)) clamp(1.4rem,3vw,2.2rem)}
.mp-eye{font:1rem Marvin,Georgia,serif;color:var(--coral);margin:0 0 .7rem;letter-spacing:.04em}
.mp-title{margin:0;font:400 clamp(2.4rem,7.2vw,5.6rem)/.88 Marvin,Georgia,serif;color:var(--mostaza)}
.mp-title .o{display:block;color:transparent;-webkit-text-stroke:2px var(--mostaza)}
.mp-side{max-width:25rem}
.mp-side p{margin:0 0 1rem;font-size:clamp(1rem,1.6vw,1.15rem);line-height:1.5}
.mp-btn{display:inline-flex;align-items:center;gap:.6rem;font:1.05rem Marvin,Georgia,serif;padding:.7rem 1.3rem;border:2px solid var(--mostaza);border-radius:2rem .5rem 2rem .5rem;background:var(--mostaza);color:var(--vino);text-decoration:none;transition:transform .25s}
.mp-btn:hover{transform:translateY(-2px) rotate(-1deg)}
.mp-stage{position:relative;width:100%;aspect-ratio:${W}/${H};background:#101e28;border-top:5px solid var(--mostaza);border-bottom:5px solid var(--mostaza);box-shadow:0 -10px 0 var(--coral),0 10px 0 var(--coral);margin:10px 0;overflow:hidden;user-select:none;-webkit-user-select:none}
.mp-svg{position:absolute;inset:0;width:100%;height:100%;display:block;cursor:grab;touch-action:pan-y;shape-rendering:optimizeSpeed;text-rendering:optimizeSpeed;-webkit-tap-highlight-color:transparent}
.mp-svg.drag{cursor:grabbing}
.mp-svg *{outline:none}
.mp-load,.mp-fail{position:absolute;inset:0;display:grid;place-items:center;text-align:center;padding:2rem;font:clamp(1.3rem,3vw,2rem) Marvin,Georgia,serif;color:#ffe99a;z-index:3;pointer-events:none;background:radial-gradient(circle at 50% 45%,rgba(16,30,40,.2),rgba(16,30,40,.75))}
.mp-fail{pointer-events:auto}.mp-fail small{display:block;font:1rem/1.4 system-ui,sans-serif;color:#fffaf0;margin-top:.8rem}
.mp-load i{display:inline-block;width:.7em;height:.7em;border-radius:50%;background:var(--mostaza);margin:0 .12em;animation:mpdot 1s infinite ease-in-out}
.mp-load i:nth-child(2){animation-delay:.15s}.mp-load i:nth-child(3){animation-delay:.3s}
@keyframes mpdot{0%,80%,100%{transform:scale(.4);opacity:.5}40%{transform:scale(1);opacity:1}}
.mp-tools{position:absolute;right:clamp(.6rem,1.6vw,1.4rem);top:clamp(.6rem,1.6vw,1.4rem);display:flex;flex-direction:column;gap:.4rem;z-index:4}
.mp-tools button{width:2.5rem;height:2.5rem;border-radius:50% 12% 50% 12%;border:2px solid var(--vino);background:var(--crema);color:var(--vino);font:1.35rem/1 Marvin,Georgia,serif;cursor:pointer;box-shadow:3px 3px 0 var(--mostaza);transition:transform .2s,background .2s}
.mp-tools button:hover,.mp-tools button:focus-visible{transform:translateY(-2px) rotate(-6deg);background:var(--mostaza)}
.mp-hint{position:absolute;left:clamp(.6rem,1.6vw,1.4rem);bottom:clamp(.6rem,1.6vw,1.2rem);z-index:4;background:rgba(92,10,10,.92);color:var(--crema);border:1.5px solid rgba(242,183,5,.7);border-radius:2rem;padding:.35rem .9rem;font:.82rem/1.2 system-ui,sans-serif;pointer-events:none}
.mp-m{display:none}@media(pointer:coarse){.mp-m{display:inline}.mp-d{display:none}}
.mp-hint b{color:var(--mostaza);font-weight:700}

/* Capas del mapa */
.mp-land path{stroke:#7a2a1f;stroke-opacity:.6;stroke-width:1;stroke-linejoin:round;cursor:default}
.mp-land path:hover{fill-opacity:.78}
.mp-hl{cursor:pointer}
.mp-hl .hp{fill:url(#mpHot);stroke:#F2B705;stroke-width:3.5;stroke-linejoin:round;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
.mp-hl .hh{fill:url(#mpHatch);stroke:none;pointer-events:none;transition:transform .3s cubic-bezier(.3,1.6,.5,1)}
.mp-hl .hs{fill:#2a0404;fill-opacity:.45;pointer-events:none}
.mp-hl.hot .hp,.mp-hl.hot .hh,.mp-hl.on .hp,.mp-hl.on .hh{transform:translateY(-5px)}
.mp-hl.hot .hp,.mp-hl.on .hp{stroke:#fff3b0;stroke-width:5}
.mp-lab text{font-family:Thicker,Marvin,system-ui,sans-serif;fill:#4a0808;text-anchor:middle;paint-order:stroke;stroke:#fff6dc;stroke-opacity:.85;stroke-linejoin:round;pointer-events:none;font-size:calc(15px * var(--ls,1));stroke-width:calc(3.4px * var(--ls,1));letter-spacing:.01em}
.mp-lab text.off{display:none}
.mp-lab text.ft{font-family:Marvin,Georgia,serif;fill:#fffaf0;stroke:#4a0808;stroke-opacity:.95;font-size:calc(21px * var(--ls,1));stroke-width:calc(5px * var(--ls,1))}
.mp-cont text{font-family:Marvin,Georgia,serif;fill:#5C0A0A;fill-opacity:.2;text-anchor:middle;letter-spacing:.35em;pointer-events:none}
.mp-ot{font-family:Georgia,"Times New Roman",serif;font-style:italic;fill:#ffe99a;fill-opacity:.62;letter-spacing:.42em}

/* Pins */
.pin{transform:translate(var(--x),var(--y)) scale(var(--ps,1));cursor:pointer}
.pin .pi{transform-origin:0 0;opacity:0}
.mp-go .pin .pi{animation:mpdrop .7s cubic-bezier(.3,1.5,.5,1) both;animation-delay:calc(var(--i)*.13s + .25s)}
@keyframes mpdrop{0%{transform:translateY(-70px) scale(.6);opacity:0}60%{opacity:1}100%{transform:none;opacity:1}}
.pin .pb{fill:#F2B705;stroke:#5C0A0A;stroke-width:3.2;stroke-linejoin:round;transition:fill .2s}
.pin .pc{fill:#5C0A0A}
.pin .pn{font:400 15px Marvin,Georgia,serif;fill:#ffe99a;text-anchor:middle;pointer-events:none}
.pin .ps{fill:rgba(0,0,0,.35);transform-origin:0 0}
.pin.hot .pi,.pin.on .pi{animation:mpbounce .55s cubic-bezier(.3,1.6,.5,1) both;opacity:1}
@keyframes mpbounce{0%{transform:none}45%{transform:translateY(-12px) scale(1.2)}100%{transform:scale(1.22)}}
.pin.hot .pb,.pin.on .pb{fill:#fff3b0}
.pin:focus-visible .pb{stroke:#E58B70;stroke-width:5}
.pdot{fill:#F2B705;stroke:#5C0A0A;stroke-width:2;pointer-events:none}
.pleader{stroke:#5C0A0A;stroke-width:2.2;stroke-dasharray:3 4;pointer-events:none;opacity:.8}
.pring{fill:#F2B705;fill-opacity:.25;stroke:#F2B705;stroke-width:2.5;stroke-opacity:.8;pointer-events:none}

/* Mini-card */
.mp-card{position:absolute;z-index:6;width:min(290px,calc(100% - 16px));left:0;top:0;background:var(--crema);color:var(--vino);border:2.5px solid var(--vino);border-radius:1.3rem .4rem 1.3rem .4rem;padding:1rem 1.1rem 1.05rem;box-shadow:6px 6px 0 var(--mostaza);pointer-events:auto;transform-origin:var(--tx,50%) var(--oy,100%);animation:mppop .38s cubic-bezier(.3,1.5,.5,1) both;overflow:visible}
.mp-card[hidden]{display:none}
.mp-card::before{content:"";position:absolute;right:0;top:0;width:58px;height:58px;border-radius:0 .3rem 0 100%;background:radial-gradient(circle at 100% 0,var(--coral) 0 16px,var(--mostaza) 17px 30px,transparent 31px);opacity:.9;pointer-events:none}
.mp-card::after{content:"";position:absolute;left:var(--tx,50%);width:18px;height:18px;margin-left:-9px;background:var(--crema);border:2.5px solid var(--vino);border-top:0;border-left:0;bottom:-11px;transform:rotate(45deg)}
.mp-card.abajo::after{bottom:auto;top:-11px;transform:rotate(225deg)}
.mp-card h3{margin:0 1.6rem .55rem 0;font:400 1.45rem/1.02 Marvin,Georgia,serif;color:var(--vino)}
.mp-card p{margin:0;font:1.02rem/1.38 Thicker,system-ui,sans-serif;color:#3b0c0c;position:relative}
.mp-card p::before{content:"";display:block;width:2.4rem;height:4px;border-radius:4px;background:var(--coral);margin-bottom:.6rem}
@keyframes mppop{0%{transform:scale(.72) translateY(10px);opacity:0}100%{transform:none;opacity:1}}
.mp-legend{display:flex;flex-wrap:wrap;gap:.5rem 1.4rem;align-items:center;padding:.9rem max(1.2rem,calc((100% - 1180px)/2)) 1.4rem;font:.95rem system-ui,sans-serif;color:#ffe99a}
.mp-legend span{display:inline-flex;align-items:center;gap:.5rem}
.mp-legend svg{width:1.4rem;height:1.6rem}
.mp-legend .sw{width:1.5rem;height:1rem;border-radius:.3rem;border:2px solid var(--mostaza);background:linear-gradient(135deg,#c13a2a,#5C0A0A)}
.mp-legend .sw.n{background:#e9b97c;border-color:#7a2a1f}
@media(max-width:700px){.mp-stage{aspect-ratio:5/6}.mp-hint{font-size:.72rem}.mp-card h3{font-size:1.25rem}}
@media(prefers-reduced-motion:reduce){.mp *,.mp *::before,.mp *::after{animation:none!important;transition:none!important}.pin .pi{opacity:1}}
`;

  window.CANANA_MAPA_REFERENTES = function (a, R, main) {
    const DATA = window.CANANA_REFERENTES_DATA;
    if (!DATA || !main || !main.parentNode || document.getElementById("mapa-referentes")) return;

    /* --- Datos del JS original: nombre, país y aprendizaje (frase exacta de APR) --- */
    const items = DATA.REF.map((r) => {
      const l = DATA.APR.find((x) => (x.r || []).indexOf(r.n) > -1);
      return { n: r.n, nombre: r.nombre, a2: r.pais, frase: l ? l.t : "" };
    }).filter((x) => x.a2 && x.frase);
    if (!items.length) return;
    const porPais = {}; items.forEach((it) => { (porPais[it.a2] = porPais[it.a2] || []).push(it); });
    const paises = Object.keys(porPais);

    /* --- Estilos y esqueleto --- */
    if (!document.getElementById("mp-css")) { const st = document.createElement("style"); st.id = "mp-css"; st.textContent = CSS; document.head.appendChild(st); }
    const sec = document.createElement("section");
    sec.className = "mp"; sec.id = "mapa-referentes"; sec.setAttribute("aria-label", "Mapamundi de referentes");
    sec.innerHTML = `
      <div class="mp-head">
        <div><p class="mp-eye">Puerta de entrada · Análisis de referentes</p>
          <h2 class="mp-title">Un mundo de<span class="o">referentes</span></h2></div>
        <div class="mp-side"><p>${items.length} proyectos de ${paises.length} ${paises.length === 1 ? "país" : "países"} que nos enseñaron algo para BETA. Toca un pin y descubre qué aprendimos de cada uno.</p>
          <a class="mp-btn" href="#main" data-saltar>Ir al análisis <span aria-hidden="true">↓</span></a></div>
      </div>
      <div class="mp-stage" id="mp-stage">
        <div class="mp-load" role="status"><span>Dibujando el mundo <i></i><i></i><i></i></span></div>
        <div class="mp-tools" role="group" aria-label="Zoom del mapa"><button type="button" data-z="in" aria-label="Acercar">+</button><button type="button" data-z="out" aria-label="Alejar">−</button><button type="button" data-z="0" aria-label="Ver todo el mundo">⌂</button></div>
        <div class="mp-hint"><b>Arrastra</b> para explorar · <span class="mp-m"><b>pellizca</b> o usa los botones para acercar</span><span class="mp-d"><b>Ctrl + rueda</b> o los botones para acercar</span></div>
        <div class="mp-card" hidden role="dialog" aria-live="polite"></div>
      </div>
      <div class="mp-legend"><span><svg viewBox="-16 -40 32 44" aria-hidden="true"><path d="M0 0C-4-10-15-18-15-28A15 15 0 1 1 15-28C15-18 4-10 0 0Z" fill="#F2B705" stroke="#5C0A0A" stroke-width="3"/><circle cy="-28" r="6" fill="#5C0A0A"/></svg>Un referente</span><span><i class="sw"></i>País con referente</span><span><i class="sw n"></i>Resto del mundo</span></div>`;
    main.parentNode.insertBefore(sec, main);
    sec.querySelector("[data-saltar]").addEventListener("click", (e) => { e.preventDefault(); main.scrollIntoView({ behavior: "smooth", block: "start" }); });

    const stage = sec.querySelector("#mp-stage"), card = sec.querySelector(".mp-card");
    let cancelado = false;

    cargar().then((t) => { if (!cancelado) dibujar(leerMundo(t)); }).catch(() => {
      stage.querySelector(".mp-load").remove();
      stage.insertAdjacentHTML("beforeend", `<div class="mp-fail"><span>No pudimos dibujar el mundo<small>Revisa tu conexión y recarga la página. Para uso sin internet, guarda el archivo de países en <b>${LOCAL}</b>.</small></span></div>`);
    });

    function cargar() {
      const lista = FUENTES.concat([R + LOCAL]);
      return lista.reduce((p, u) => p.catch(() => fetch(u).then((r) => { if (!r.ok) throw new Error(u); return r.json(); })), Promise.reject());
    }

    /* =============================== DIBUJO =============================== */
    function dibujar(mundo) {
      const reducir = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const movil = () => stage.clientWidth < 700;

      /* Geometría por país */
      const P = mundo.map((c, idx) => {
        const a2 = c.id != null ? N2A[c.id] : (/^kosovo$/i.test(c.name) ? "XK" : null);
        const d = c.polys.map((poly) => poly.map(ringD).join("")).join("");
        let mayor = null; c.polys.forEach((poly) => { const m = medir(poly); if (!mayor || m.area > mayor.area) mayor = m; });
        return { i: idx, id: c.id, a2, name: nombreEs(a2, c.name), d, m: mayor, antartida: a2 === "AQ" };
      }).filter((c) => c.d && c.m);

      /* Esfera (óvalo del mundo) */
      let sph = ""; for (let la = 90; la >= -90; la -= 3) { const q = proj(180, la); sph += (sph ? "L" : "M") + f1(q[0]) + " " + f1(q[1]); }
      for (let la = -90; la <= 90; la += 3) { const q = proj(-180, la); sph += "L" + f1(q[0]) + " " + f1(q[1]); }
      sph += "Z";

      /* Retícula */
      let grat = ""; const linea = (pts) => pts.map((q, k) => (k ? "L" : "M") + f1(q[0]) + " " + f1(q[1])).join("");
      for (let lo = -180; lo <= 180; lo += 30) { const pts = []; for (let la = -90; la <= 90; la += 5) pts.push(proj(lo, la)); grat += linea(pts); }
      for (let la = -60; la <= 60; la += 30) { const pts = []; for (let lo = -180; lo <= 180; lo += 5) pts.push(proj(lo, la)); grat += linea(pts); }
      const especial = (la) => { const pts = []; for (let lo = -180; lo <= 180; lo += 5) pts.push(proj(lo, la)); return linea(pts); };
      const ecuador = especial(0), tropicos = especial(23.44) + especial(-23.44), polares = especial(66.56) + especial(-66.56);

      const colores = ["#f4d98c", "#eab27c", "#e39a86", "#cfc88e", "#f0c46a", "#d9a679", "#b9cf9e", "#e8b8a0", "#f6c9a0", "#dcb878"];
      const hash = (s) => { let h = 7; for (let k = 0; k < s.length; k++) h = (h * 31 + s.charCodeAt(k)) | 0; return Math.abs(h); };
      const colorDe = (c) => c.antartida ? "url(#mpHielo)" : colores[hash(String(c.id != null ? c.id : c.name)) % colores.length];

      const destacados = P.filter((c) => c.a2 && porPais[c.a2]);
      const landIds = P.map((c) => `<path id="mpc${c.i}" d="${c.d}"/>`).join("");
      const landPaths = P.map((c) => `<path d="${c.d}" fill="${colorDe(c)}" data-a2="${c.a2 || ""}"/>`).join("");

      /* Pins: ancla en el centroide del polígono mayor; separación suave para que no se solapen */
      const pins = []; destacados.forEach((c) => { const arr = porPais[c.a2]; arr.forEach((it, j) => { const off = (j - (arr.length - 1) / 2) * 26; pins.push({ it, c, ax: c.m.x, ay: c.m.y, x: c.m.x + off, y: c.m.y }); }); });
      for (let iter = 0; iter < 160; iter++) {
        for (let p = 0; p < pins.length; p++) for (let q = p + 1; q < pins.length; q++) {
          const A = pins[p], B = pins[q]; let dx = B.x - A.x, dy = (B.y - A.y) * 0.9; const dd = Math.hypot(dx, dy) || .01, min = 46;
          if (dd < min) { const k = (min - dd) / 2 / dd; dx *= k; dy *= k; A.x -= dx; B.x += dx; A.y -= dy; B.y += dy; }
        }
        pins.forEach((p) => { p.x += (p.ax - p.x) * .015; p.y += (p.ay - p.y) * .015; });
      }

      /* Etiquetas */
      const nombresDest = {}; destacados.forEach((c) => { nombresDest[c.i] = 1; });
      const labels = P.filter((c) => c.a2 !== "AQ" || true).map((c) => {
        const ft = !!nombresDest[c.i];
        const ly = ft ? c.m.y + 26 : c.m.y;
        return `<text class="off${ft ? " ft" : ""}" x="${f1(c.m.x)}" y="${f1(ly)}" data-w="${f1(c.m.w)}" data-h="${f1(c.m.h)}" data-n="${esc(c.name.length)}" data-ft="${ft ? 1 : 0}" dy=".35em">${esc(c.name)}</text>`;
      }).join("");

      /* Posiciones de ilustraciones (lon, lat → mapa) */
      const at = (lo, la) => proj(lo, la);
      const q1 = at(-33, -36), q2 = at(-44, 36), q3 = at(-142, -24), q4 = at(82, -30), q5 = at(-150, 24), q6 = at(172, -42), q7 = at(-128, -52), q8 = at(-10, 62), q9 = at(60, 12), q10 = at(150, 8), q11 = at(-60, -52);
      const to = (lo, la, t, rot, sz) => { const q = at(lo, la); return oceanoTxt(f1(q[0]), f1(q[1]), t, rot, sz); };
      const cont = (lo, la, t, sz) => { const q = at(lo, la); return `<text x="${f1(q[0])}" y="${f1(q[1])}" font-size="${sz}">${t}</text>`; };

      const svg = document.createElementNS(NS, "svg");
      svg.setAttribute("class", "mp-svg"); svg.setAttribute("viewBox", `0 0 ${W} ${H}`); svg.setAttribute("role", "group"); svg.setAttribute("aria-label", "Mapamundi con los países de cada referente");
      svg.innerHTML = `
<defs>
  <radialGradient id="mpOc" cx="50%" cy="46%" r="75%"><stop offset="0" stop-color="#2f8aa0"/><stop offset=".38" stop-color="#25667f"/><stop offset=".72" stop-color="#1a3f58"/><stop offset="1" stop-color="#0f2233"/></radialGradient>
  <radialGradient id="mpSol" cx="12%" cy="8%" r="55%"><stop offset="0" stop-color="#F2B705" stop-opacity=".5"/><stop offset="1" stop-color="#F2B705" stop-opacity="0"/></radialGradient>
  <radialGradient id="mpCor" cx="92%" cy="96%" r="50%"><stop offset="0" stop-color="#E58B70" stop-opacity=".42"/><stop offset="1" stop-color="#E58B70" stop-opacity="0"/></radialGradient>
  <radialGradient id="mpDeep" cx="50%" cy="50%" r="50%"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#06121b" stop-opacity=".55"/></radialGradient>
  <linearGradient id="mpHot" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e2492f"/><stop offset=".5" stop-color="#a3261c"/><stop offset="1" stop-color="#5C0A0A"/></linearGradient>
  <linearGradient id="mpHielo" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#a9d6df"/></linearGradient>
  <pattern id="mpHatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(40)"><rect width="9" height="9" fill="none"/><path d="M0 0V9" stroke="#F2B705" stroke-opacity=".38" stroke-width="2.6"/></pattern>
  <pattern id="mpWave" width="46" height="22" patternUnits="userSpaceOnUse"><path d="M0 12q11.5-12 23 0t23 0" fill="none" stroke="#bfe7ea" stroke-width="1.3" stroke-opacity=".2"/></pattern>
  <pattern id="mpMarco" width="26" height="26" patternUnits="userSpaceOnUse"><rect width="26" height="26" fill="#3d0707"/><circle cx="13" cy="13" r="3" fill="#F2B705" fill-opacity=".55"/><circle cx="0" cy="0" r="2" fill="#E58B70" fill-opacity=".5"/><circle cx="26" cy="26" r="2" fill="#E58B70" fill-opacity=".5"/><circle cx="26" cy="0" r="2" fill="#E58B70" fill-opacity=".5"/><circle cx="0" cy="26" r="2" fill="#E58B70" fill-opacity=".5"/></pattern>
  <pattern id="mpPunto" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#5C0A0A" fill-opacity=".22"/><circle cx="5.5" cy="5.5" r=".8" fill="#fffaf0" fill-opacity=".22"/></pattern>
  <clipPath id="mpEsfera"><path d="${sph}"/></clipPath>
  <g id="mpTierra">${landIds}</g>
</defs>

<rect x="-40" y="-40" width="${W + 80}" height="${H + 80}" fill="#3d0707"/>
<g clip-path="url(#mpEsfera)">
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#mpOc)"/>
  <path d="${grat}" fill="none" stroke="#dff4f2" stroke-opacity=".16" stroke-width="1.2"/>
  <path d="${polares}" fill="none" stroke="#bfe7ea" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="3 9"/>
  <path d="${tropicos}" fill="none" stroke="#F2B705" stroke-opacity=".4" stroke-width="1.6" stroke-dasharray="10 8"/>
  <path d="${ecuador}" fill="none" stroke="#ffe99a" stroke-opacity=".55" stroke-width="2" stroke-dasharray="2 8" stroke-linecap="round"/>
  <g class="mp-water">
    <use href="#mpTierra" fill="none" stroke="#8fdcde" stroke-opacity=".16" stroke-width="22" stroke-linejoin="round"/>
    <use href="#mpTierra" fill="none" stroke="#d5fbf7" stroke-opacity=".32" stroke-width="7" stroke-linejoin="round"/>
  </g>
  <g aria-hidden="true">
    ${to(-148, 6, "OCÉANO PACÍFICO", -6, 40)}${to(-36, 8, "OCÉANO ATLÁNTICO", -62, 32)}${to(80, -18, "OCÉANO ÍNDICO", 0, 34)}${to(55, 79, "OCÉANO ÁRTICO", 0, 22)}${to(-120, -63, "OCÉANO AUSTRAL", 0, 22)}
    ${rosa(q1[0], q1[1], 78)}${rosa(q5[0], q5[1], 44)}
    ${barco(q2[0] - 60, q2[1] - 50, 1.05, -4)}${barco(q4[0] - 50, q4[1] - 40, .85, 5)}${barco(q10[0], q10[1], .6, -3)}
    ${ballena(q3[0] - 70, q3[1] - 40, .95, false)}${ballena(q9[0] - 20, q9[1] + 64, .6, true)}${ballena(q8[0] - 60, q8[1] + 6, .5, false)}
    ${pez(q6[0], q6[1], .9, false)}${pez(q6[0] + 56, q6[1] + 22, .6, false, "#F2B705")}${pez(q6[0] + 20, q6[1] + 54, .7, false, "#fffaf0")}
    ${pez(q7[0], q7[1], .8, true, "#F2B705")}${pez(q7[0] - 50, q7[1] - 22, .6, true)}${pez(q11[0], q11[1], .6, true, "#fffaf0")}
  </g>
</g>

<use href="#mpTierra" fill="#05101a" fill-opacity=".38" transform="translate(5 8)" pointer-events="none"/>
<g class="mp-land">${landPaths}</g>
<use href="#mpTierra" fill="none" stroke="#fff6d8" stroke-opacity=".5" stroke-width="1.6" transform="translate(-1.2 -1.4)" pointer-events="none"/>
<g class="mp-cont" aria-hidden="true">${cont(-102, 52, "NORTEAMÉRICA", 70)}${cont(-60, -12, "SUDAMÉRICA", 64)}${cont(18, 8, "ÁFRICA", 84)}${cont(14, 53, "EUROPA", 44)}${cont(96, 52, "ASIA", 96)}${cont(134, -26, "OCEANÍA", 46)}</g>
<g class="mp-lab" aria-hidden="true">${labels}</g>

<g class="mp-hls">${destacados.map((c) => `<g class="mp-hl" data-a2="${c.a2}"><path class="hs" d="${c.d}" transform="translate(4 7)"/><path class="hp" d="${c.d}"/><path class="hh" d="${c.d}"/></g>`).join("")}</g>

<g class="mp-pins">
  ${pins.map((p, i) => {
    const mov = Math.hypot(p.x - p.ax, p.y - p.ay) > 4;
    return `${mov ? `<line class="pleader" x1="${f1(p.ax)}" y1="${f1(p.ay)}" x2="${f1(p.x)}" y2="${f1(p.y)}"/>` : ""}
    <circle class="pdot" cx="${f1(p.ax)}" cy="${f1(p.ay)}" r="4.5"/>
    <g class="pin" data-a2="${p.it.a2}" data-n="${p.it.n}" tabindex="0" role="button" aria-label="${esc(p.it.nombre)}" style="--x:${f1(p.x)}px;--y:${f1(p.y)}px;--i:${i}">
            <ellipse class="ps" cx="0" cy="1" rx="11" ry="3.6"/>
      <g class="pi"><path class="pb" d="M0 0C-4-10-16-18-16-30A16 16 0 1 1 16-30C16-18 4-10 0 0Z"/><circle class="pc" cy="-30" r="10.5"/><text class="pn" y="-24.6">${p.it.n}</text></g>
      <rect x="-22" y="-52" width="44" height="54" fill="transparent"/>
    </g>`;
  }).join("")}
</g>

<rect x="14" y="14" width="${W - 28}" height="${H - 28}" rx="6" fill="none" stroke="#F2B705" stroke-width="3" stroke-opacity=".85" pointer-events="none"/>
<rect x="28" y="28" width="${W - 56}" height="${H - 56}" rx="3" fill="none" stroke="#E58B70" stroke-width="1.4" stroke-opacity=".7" pointer-events="none"/>
<path d="${sph}" fill="none" stroke="#F2B705" stroke-width="5" stroke-linejoin="round" pointer-events="none"/>
<path d="${sph}" fill="none" stroke="#5C0A0A" stroke-width="2" stroke-linejoin="round" stroke-dasharray="1 9" stroke-linecap="round" pointer-events="none"/>`;

      stage.querySelector(".mp-load").remove();
      stage.insertBefore(svg, stage.firstChild);

      /* ---------- Vista: zoom y desplazamiento ---------- */
      let k = 1, cx = W / 2, cy = H / 2; const KMAX = 9;
      const labs = Array.from(svg.querySelectorAll(".mp-lab text"));
      const pinEls = Array.from(svg.querySelectorAll(".pin")), hlEls = Array.from(svg.querySelectorAll(".mp-hl"));
      let raf = 0, kEt = -1;
      function vista() {
        const cw = stage.clientWidth || 1, ch = stage.clientHeight || 1, asp = cw / ch;
        let vw = W / k, vh = vw / asp;
        const mx = 30, minx = -mx, maxx = W + mx, miny = -mx, maxy = H + mx;
        cx = vw >= maxx - minx ? W / 2 : Math.max(minx + vw / 2, Math.min(maxx - vw / 2, cx));
        cy = vh >= maxy - miny ? H / 2 : Math.max(miny + vh / 2, Math.min(maxy - vh / 2, cy));
        svg.setAttribute("viewBox", `${f1(cx - vw / 2)} ${f1(cy - vh / 2)} ${f1(vw)} ${f1(vh)}`);
        svg.style.setProperty("--ps", (1 / Math.pow(k, .72)).toFixed(3));
        svg.style.setProperty("--ls", (1 / k).toFixed(3));
        svg.style.touchAction = k > 2.4 ? "none" : "pan-y";
        if (!raf) raf = requestAnimationFrame(() => { raf = 0; if (kEt !== k) { kEt = k; etiquetar(); } colocar(); });
      }
      function etiquetar() {
        const esc2 = stage.clientWidth / (W / k); /* px de pantalla por unidad del mapa */
        labs.forEach((t) => {
          const ft = t.dataset.ft === "1", w = parseFloat(t.dataset.w), n = parseFloat(t.dataset.n);
          const fs = ft ? 21 : 15, necesita = n * fs * (ft ? .5 : .46) * (1 / k);
          const mostrar = ft ? (k >= 2.2 || w >= necesita * 1.6) : (w >= necesita && parseFloat(t.dataset.h) * k > 6);
          t.classList.toggle("off", !mostrar);
        });
        void esc2;
      }
      function zoomEn(factor, sx, sy) {
        const cw = stage.clientWidth, ch = stage.clientHeight, vw = W / k, vh = vw / (cw / ch);
        const mx = cx - vw / 2 + (sx / cw) * vw, my = cy - vh / 2 + (sy / ch) * vh;
        k = Math.max(1, Math.min(KMAX, k * factor));
        const nvw = W / k, nvh = nvw / (cw / ch);
        cx = mx - (sx / cw - .5) * nvw; cy = my - (sy / ch - .5) * nvh; vista();
      }
      function inicio() {
        if (movil()) { k = 2.35; const q = proj(8, 40); cx = q[0]; cy = q[1]; } else { k = 1; cx = W / 2; cy = H / 2; }
        vista();
      }
      inicio();
      new ResizeObserver(() => vista()).observe(stage);
      sec.querySelector(".mp-tools").addEventListener("click", (e) => {
        const b = e.target.closest("button"); if (!b) return; const z = b.dataset.z, cw = stage.clientWidth, ch = stage.clientHeight;
        if (z === "in") zoomEn(1.6, cw / 2, ch / 2); else if (z === "out") zoomEn(1 / 1.6, cw / 2, ch / 2); else { cerrar(); inicio(); }
      });
      svg.addEventListener("wheel", (e) => { if (!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); const r = stage.getBoundingClientRect(); zoomEn(e.deltaY < 0 ? 1.25 : .8, e.clientX - r.left, e.clientY - r.top); }, { passive: false });

      /* Arrastre y pellizco (un dedo vertical a k bajo deja pasar el scroll de la página) */
      const ptrs = new Map(); let movido = false, pd = 0, d0 = 0;
      svg.addEventListener("pointerdown", (e) => { ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY }); movido = false; if (ptrs.size === 2) { const v = Array.from(ptrs.values()); d0 = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y); } });
      svg.addEventListener("pointermove", (e) => {
        const p = ptrs.get(e.pointerId); if (!p) return;
        const dx = e.clientX - p.x, dy = e.clientY - p.y;
        if (ptrs.size === 1) {
          if (!movido && Math.hypot(e.clientX - p.sx, e.clientY - p.sy) < 6) return;
          if (!movido) { movido = true; svg.classList.add("drag"); try { svg.setPointerCapture(e.pointerId); } catch (er) { /* nada */ } }
          const vw = W / k, f = vw / stage.clientWidth; cx -= dx * f; cy -= dy * f; p.x = e.clientX; p.y = e.clientY; vista();
        } else if (ptrs.size === 2) {
          p.x = e.clientX; p.y = e.clientY; const v = Array.from(ptrs.values()), d = Math.hypot(v[0].x - v[1].x, v[0].y - v[1].y);
          if (d0 > 0) { const r = stage.getBoundingClientRect(); movido = true; zoomEn(d / d0, (v[0].x + v[1].x) / 2 - r.left, (v[0].y + v[1].y) / 2 - r.top); } d0 = d;
        }
      });
      const fin = (e) => { ptrs.delete(e.pointerId); if (!ptrs.size) { svg.classList.remove("drag"); pd = Date.now(); } d0 = 0; };
      svg.addEventListener("pointerup", fin); svg.addEventListener("pointercancel", fin);

      /* ---------- Mini-card ---------- */
      let cur = null;
      const datosDe = (n) => items.find((x) => x.n === n);
      function abrir(n) {
        const it = datosDe(n); if (!it) return;
        cerrar(true); cur = n;
        card.innerHTML = `<h3>${esc(it.nombre)}</h3><p>${esc(it.frase)}</p>`;
        card.hidden = false; card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
        pinEls.forEach((p) => p.classList.toggle("on", +p.dataset.n === n));
        hlEls.forEach((h) => h.classList.toggle("on", h.dataset.a2 === it.a2));
        colocar();
      }
      function cerrar(silencioso) {
        if (cur == null && card.hidden) return;
        cur = null; card.hidden = true; pinEls.forEach((p) => p.classList.remove("on")); hlEls.forEach((h) => h.classList.remove("on"));
        void silencioso;
      }
      function colocar() {
        if (cur == null) return;
        const pin = pinEls.find((p) => +p.dataset.n === cur), head = pin && pin.querySelector(".pc"); if (!head) return;
        const hr = head.getBoundingClientRect(), sr = stage.getBoundingClientRect();
        const w = card.offsetWidth, h = card.offsetHeight, x = hr.left + hr.width / 2 - sr.left;
        let left = Math.max(8, Math.min(sr.width - w - 8, x - w / 2)), top = hr.top - sr.top - h - 22, abajo = false;
        if (top < 8) { top = hr.bottom - sr.top + 30; abajo = true; }
        card.classList.toggle("abajo", abajo);
        card.style.left = f1(left) + "px"; card.style.top = f1(top) + "px";
        card.style.setProperty("--tx", f1(Math.max(22, Math.min(w - 22, x - left))) + "px"); card.style.setProperty("--oy", abajo ? "0%" : "100%");
      }
      window.addEventListener("resize", colocar);

      /* ---------- Eventos ---------- */
      const caliente = (a2, on) => { pinEls.forEach((p) => { if (p.dataset.a2 === a2) p.classList.toggle("hot", on); }); hlEls.forEach((h) => { if (h.dataset.a2 === a2) h.classList.toggle("hot", on); }); };
      svg.addEventListener("pointerover", (e) => { const t = e.target.closest(".pin,.mp-hl"); if (t) caliente(t.dataset.a2, true); });
      svg.addEventListener("pointerout", (e) => { const t = e.target.closest(".pin,.mp-hl"); if (t) caliente(t.dataset.a2, false); });
      svg.addEventListener("click", (e) => {
        if (movido) { movido = false; return; }
        const pin = e.target.closest(".pin"), hl = e.target.closest(".mp-hl");
        if (pin) { e.stopPropagation(); abrir(+pin.dataset.n); return; }
        if (hl) { e.stopPropagation(); const arr = porPais[hl.dataset.a2]; if (arr) abrir(arr[0].n); return; }
        cerrar();
      });
      pinEls.forEach((p) => p.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(+p.dataset.n); } }));
      document.addEventListener("click", (e) => { if (cur == null) return; if (Date.now() - pd < 60) return; if (e.target.closest(".pin,.mp-hl,.mp-card")) return; if (stage.contains(e.target) && !e.target.closest(".mp-svg") && !e.target.closest(".mp-tools")) return; cerrar(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && cur != null) { const p = pinEls.find((x) => +x.dataset.n === cur); cerrar(); if (p) p.focus({ preventScroll: true }); } });

      /* Entrada animada cuando el mapa entra en pantalla */
      if (reducir || !("IntersectionObserver" in window)) stage.classList.add("mp-go");
      else { const io = new IntersectionObserver((es) => { if (es[0].isIntersecting) { stage.classList.add("mp-go"); io.disconnect(); } }, { threshold: .25 }); io.observe(stage); }
    }
  };
})();
