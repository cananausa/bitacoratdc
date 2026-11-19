/* Diseño de la imagen corporativa del programa · interacciones y recursos gráficos generados.
   Sin dependencias. Respeta prefers-reduced-motion. */
(function () {
  "use strict";
  var d = document, $ = function (s, r) { return (r || d).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";
  var COL = { az: "#013E6D", mo: "#A111B5", am: "#FEFD10", bl: "#ffffff" };

  /* ---------- generador pseudoaleatorio con semilla (resultados estables) ---------- */
  function rng(seed) { var s = seed >>> 0 || 1; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  /* ---------- recursos gráficos: trama de árbol, píxeles, play, Bauhaus ---------- */
  function ink(el) {
    var s = el.closest("section") || el.closest(".tile") || el, c = s.className || "", bg = el.closest(".tile") ? el.closest(".tile").style.background : "";
    if (bg.indexOf("--az") > -1 || bg.indexOf("1, 62, 109") > -1 || /s-az/.test(c)) return { tree: "#2c78b5", px: COL.am, a: COL.mo, b: COL.am };
    if (/s-mo/.test(c) || bg.indexOf("--mo") > -1 || bg.indexOf("161, 17, 181") > -1) return { tree: "#ffffff", px: COL.am, a: COL.am, b: COL.az };
    return { tree: COL.az, px: COL.mo, a: COL.mo, b: COL.az };
  }
  function tree(svg, W, H, c, seed) {
    var r = rng(seed), g = "";
    for (var i = 0; i < 16; i++) {
      var x = (i + .5) * W / 16 + (r() - .5) * 14, y1 = H * (.08 + r() * .25), y2 = H * (.55 + r() * .35), cx = (r() - .5) * 30;
      g += '<path d="M' + x + " " + y1 + " Q " + (x + cx) + " " + (y1 + y2) / 2 + " " + x + " " + y2 + '" />';
      if (r() > .45) { var yy = y2 - 20 - r() * 40; g += '<path d="M' + x + " " + yy + " l " + (r() > .5 ? 38 : -38) + " " + (-14 - r() * 18) + '" />'; }
    }
    for (var k = 0; k < 5; k++) { var yy2 = H * (.7 + k * .05), xx = W * (.1 + r() * .5); g += '<path d="M' + xx + " " + yy2 + " h " + (50 + r() * 110) + '" />'; }
    svg.innerHTML = '<g fill="none" stroke="' + c.tree + '" stroke-width="7" stroke-linecap="round" opacity=".55">' + g + "</g>";
  }
  function pixels(svg, c, corner, seed) {
    var r = rng(seed), n = 10, cell = 10, out = "";
    for (var i = 0; i < n; i++) for (var j = 0; j < n; j++) {
      var dx = corner.x ? (n - 1 - i) : i, dy = corner.y ? (n - 1 - j) : j, dist = Math.sqrt(dx * dx + dy * dy) / 12.7;
      if (r() > 1 - dist * 1.15 + .12) continue;
      var o = (1 - dist) * .9, s = 5 + r() * 4.2;
      out += '<rect x="' + (i * cell + (cell - s) / 2) + '" y="' + (j * cell + (cell - s) / 2) + '" width="' + s + '" height="' + s + '" rx="1.2" fill="' + c.px + '" style="--o:' + o.toFixed(2) + ";animation-delay:-" + (r() * 4).toFixed(2) + 's" opacity="' + o.toFixed(2) + '"/>';
    }
    svg.setAttribute("viewBox", "0 0 100 100"); svg.innerHTML = out;
  }
  function play(svg, c) {
    var r = rng(7), o = "";
    for (var i = 0; i < 14; i++) { var x = r() * 280 + 10, y = r() * 380 + 10, s = 20 + r() * 50, a = r() * 360, f = [COL.am, COL.az, COL.bl][i % 3]; o += '<path d="M0 -' + s / 2 + " L" + s * .9 + " 0 L0 " + s / 2 + 'Z" fill="' + f + '" transform="translate(' + x + " " + y + ") rotate(" + a + ')" opacity=".95"/>'; }
    o += '<circle cx="150" cy="200" r="46" fill="' + COL.am + '"/><path d="M138 176 L178 200 L138 224Z" fill="' + COL.mo + '"/>';
    svg.innerHTML = o;
  }
  function bauhaus(svg) {
    svg.innerHTML = '<circle cx="90" cy="110" r="70" fill="' + COL.mo + '"/><path d="M150 0 H300 V150 A150 150 0 0 1 150 0Z" fill="' + COL.am + '"/><path d="M0 400 V250 A150 150 0 0 1 150 400Z" fill="' + COL.az + '"/><path d="M170 380 L300 250 V380Z" fill="' + COL.mo + '"/><circle cx="215" cy="215" r="34" fill="none" stroke="' + COL.az + '" stroke-width="14"/><rect x="40" y="215" width="70" height="14" fill="' + COL.az + '"/><circle cx="215" cy="215" r="8" fill="' + COL.am + '"/>';
  }
  $$("[data-gen]").forEach(function (el, n) {
    var kind = el.dataset.gen, svg = el;
    if (el.tagName.toLowerCase() !== "svg") { svg = d.createElementNS(NS, "svg"); svg.setAttribute("aria-hidden", "true"); el.appendChild(svg); }
    var c = ink(el), cls = el.className || "";
    if (kind === "tree") { var W = 800, H = 600; if (el.tagName.toLowerCase() === "svg") { W = 300; H = 400; } svg.setAttribute("viewBox", "0 0 " + W + " " + H); svg.setAttribute("preserveAspectRatio", "xMidYMid slice"); tree(svg, W, H, c, 11 + n); }
    else if (kind === "pixels") pixels(svg, c, { x: /\b(tr|br)\b/.test(cls) || el.tagName.toLowerCase() === "svg", y: /\b(br|bl)\b/.test(cls) }, 5 + n);
    else if (kind === "play") play(svg, c);
    else if (kind === "bauhaus") bauhaus(svg);
  });

  /* ---------- marquesina ---------- */
  var words = ["Diseño Digital", "▶", "Universidad Sergio Arboleda", "▶", "COM+ID", "▶", "Imagen corporativa", "▶"];
  $("#marq").innerHTML = (words.map(function (w) { return w === "▶" ? "<b>▶</b>" : "<span>" + w + "</span>"; }).join("")).repeat(4);

  /* ---------- navegación lateral, progreso y parallax ---------- */
  var secs = $$("section[data-n]"), nav = $(".dots");
  nav.innerHTML = secs.map(function (s) { return '<a href="#' + s.id + '" aria-label="' + s.dataset.n + '"><span>' + s.dataset.n + "</span></a>"; }).join("");
  var dots = $$("a", nav), bar = $(".prog i"), root = d.documentElement, tick = 0;
  function onScroll() {
    var h = root.scrollHeight - innerHeight; bar.style.transform = "scaleX(" + (h > 0 ? Math.min(1, scrollY / h) : 0) + ")";
    if (!reduce) root.style.setProperty("--y", scrollY);
    var k = 0; secs.forEach(function (s, i) { if (s.getBoundingClientRect().top < innerHeight * .45) k = i; });
    dots.forEach(function (a, i) { a.classList.toggle("on", i === k); if (i === k) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
    tick = 0;
  }
  addEventListener("scroll", function () { if (!tick) tick = requestAnimationFrame(onScroll); }, { passive: true }); onScroll();

  /* ---------- revelado ---------- */
  var rv = $$(".rv");
  if (reduce || !("IntersectionObserver" in window)) rv.forEach(function (e) { e.classList.add("in"); });
  else { var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: .1 }); rv.forEach(function (e) { io.observe(e); }); }
  /* contadores */
  $$(".count").forEach(function (c) {
    var to = +c.dataset.to, done = 0, o = new IntersectionObserver(function (es) { if (es[0].isIntersecting && !done) { done = 1; var t0 = performance.now(); (function f(t) { var p = Math.min(1, (t - t0) / 1400); c.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0); } }, { threshold: .5 });
    if (reduce) c.textContent = to; else o.observe(c);
  });

  /* ---------- portada: inclinación con el puntero ---------- */
  var hero = $(".hero-logo");
  if (hero && !reduce && matchMedia("(pointer:fine)").matches) $("#portada").addEventListener("pointermove", function (e) {
    var x = (e.clientX / innerWidth - .5), y = (e.clientY / innerHeight - .5);
    hero.style.transform = "perspective(900px) rotateY(" + x * 10 + "deg) rotateX(" + -y * 8 + "deg)";
  });

  /* ---------- 02 imagotipo paso a paso ---------- */
  var steps = $$(".step"), hs = $$(".hs"), stage = $("#stage");
  function setStep(i) {
    steps.forEach(function (s, k) { s.classList.toggle("on", k === i); s.setAttribute("aria-expanded", k === i); });
    hs.forEach(function (h) { h.classList.toggle("on", h.dataset.h.split(" ").indexOf(String(i)) > -1); });
    stage.dataset.k = i; var sw = $(".swap"); if (sw) sw.classList.toggle("go", i === 0);
  }
  steps.forEach(function (s, i) { s.addEventListener("click", function () { setStep(i); }); s.addEventListener("mouseenter", function () { if (matchMedia("(pointer:fine)").matches) setStep(i); }); });
  setStep(0);

  /* ---------- 03 lupa y «o» ---------- */
  var lupa = $("#lupa"), lens = $(".lens", lupa), li = $("img", lupa), Z = 3.2;
  function moveLens(e) {
    var r = li.getBoundingClientRect(), pr = lupa.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    if (x < 0 || y < 0 || x > r.width || y > r.height) { lupa.classList.remove("hov"); return; }
    lupa.classList.add("hov"); var s = lens.offsetWidth;
    lens.style.left = (e.clientX - pr.left - s / 2) + "px"; lens.style.top = (e.clientY - pr.top - s / 2) + "px";
    lens.style.backgroundImage = "url(" + li.currentSrc + ")"; lens.style.backgroundSize = (r.width * Z) + "px " + (r.height * Z) + "px";
    lens.style.backgroundPosition = (-(x * Z - s / 2)) + "px " + (-(y * Z - s / 2)) + "px";
  }
  lupa.addEventListener("pointermove", moveLens); lupa.addEventListener("pointerleave", function () { lupa.classList.remove("hov"); });
  var ob = $("#oBtn"); ob.addEventListener("click", function () { ob.setAttribute("aria-pressed", ob.getAttribute("aria-pressed") !== "true"); });

  /* ---------- 04 versiones ---------- */
  var V = {
    am: { bg: "#FEFD10", src: "logo-dd-azul.png", f: "v", t: "Sobre amarillo, el logotipo vertical lleva el texto en azul y el imagotipo completo: es la versión que usamos en la portada del manual." },
    az: { bg: "#013E6D", src: "logo-dd-horizontal-amarillo.png", f: "h", t: "Sobre azul, usamos la versión horizontal con el texto en amarillo y conservamos el círculo morado del imagotipo." },
    mo: { bg: "#A111B5", src: "logo-dd-horizontal-amarillo.png", f: "h", t: "Sobre morado, también usamos la versión horizontal con texto amarillo; el imagotipo se resuelve con el computador y el play." },
    bl: { bg: "#FFFFFF", src: "logo-dd-azul.png", f: "v", t: "Sobre blanco, el texto va en azul: dejamos que el blanco respire entre los colores fuertes del símbolo." }
  };
  var vs = $("#vstage"), vi = $("#vimg"), vc = $("#vcap");
  function setV(k) {
    var v = V[k]; vs.style.background = v.bg; vs.dataset.f = v.f; vc.textContent = v.t;
    vi.style.animation = "none"; void vi.offsetWidth; vi.style.animation = ""; vi.src = "img/logos/" + v.src;
    vi.alt = "Logotipo de Diseño Digital sobre fondo " + { am: "amarillo", az: "azul", mo: "morado", bl: "blanco" }[k];
    $$(".vtabs button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.v === k); });
  }
  $$(".vtabs button").forEach(function (b) { b.addEventListener("click", function () { setV(b.dataset.v); }); }); setV("am");

  /* ---------- 05 reserva y proporción ---------- */
  var RZ = [{ c: 9, r: 8, src: "imagotipo-dd.png" }, { c: 17, r: 10, src: "logo-dd-azul.png" }, { c: 16, r: 2, src: "logo-dd-horizontal-azul.png" }];
  var rz = $("#rz"), rzi = $("#rzimg");
  function setRz(i) {
    var v = RZ[i]; rz.style.setProperty("--c", v.c); rz.style.setProperty("--r", v.r); rzi.src = "img/logos/" + v.src;
    $("#dw").textContent = v.c + "x"; $("#dh").textContent = v.r + "x";
    $$("[data-ver]").forEach(function (b) { b.setAttribute("aria-pressed", +b.dataset.ver === i); });
  }
  $$("[data-ver]").forEach(function (b) { b.addEventListener("click", function () { setRz(+b.dataset.ver); }); });
  $$("[data-lay]").forEach(function (b) { b.addEventListener("click", function () { var on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", on); rz.classList.toggle("show-" + b.dataset.lay, on); }); });
  setRz(0); rz.classList.add("show-res"); $("[data-lay=res]").setAttribute("aria-pressed", "true");

  /* ---------- 06 copiar HEX ---------- */
  $$(".sw").forEach(function (s) {
    s.addEventListener("click", function () {
      var hx = s.dataset.hex; function ok() { s.classList.add("ok"); setTimeout(function () { s.classList.remove("ok"); }, 1500); }
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(hx).then(ok, ok); else ok();
    });
  });

  /* ---------- 07 probador de tipografías ---------- */
  var tt = $("#ttxt"), ts = $("#tsz"), pv = $("#pvt");
  function pt() { pv.textContent = tt.value || "Diseño Digital"; pv.style.fontSize = ts.value + "px"; }
  tt.addEventListener("input", pt); ts.addEventListener("input", pt); pt();

  /* ---------- 09 conjuntos institucionales ---------- */
  var LK = {
    azu: '<div class="lk azu"><img class="dd" src="img/logos/logo-dd-amarillo.png" alt="Diseño Digital"><span class="div"></span><img src="img/logos/comid.png" alt="COM+ID"><span class="div"></span><img src="img/logos/usa-negativo.png" alt="Universidad Sergio Arboleda"></div>',
    pur: '<div class="lk pur"><img class="dd" src="img/logos/logo-dd-amarillo.png" alt="Diseño Digital"><span class="div"></span><img src="img/logos/comid.png" alt="COM+ID"></div>',
    bla: '<div class="lk-img"><img src="img/laminas/p-03.jpg" alt="Diseño Digital junto a Universidad Sergio Arboleda sobre fondo blanco"></div>'
  };
  function setL(k) { $("#lkbox").innerHTML = LK[k]; $$(".lk-tabs button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.l === k); }); }
  $$(".lk-tabs button").forEach(function (b) { b.addEventListener("click", function () { setL(b.dataset.l); }); }); setL("azu");

  /* ---------- 10 galería + lightbox ---------- */
  var L = [["01", "Portada · logotipo sobre amarillo"], ["02", "Diseño Digital + COM+ID"], ["03", "Diseño Digital + Universidad Sergio Arboleda"], ["04", "Imagotipo · concepto"], ["05", "Logotipo · la «o» con play"], ["06", "Versiones sobre amarillo, azul y morado"], ["07", "Área de reserva"], ["08", "Proporción"], ["09", "Paleta de color"], ["10", "Tipografías"], ["11", "Conjunto institucional sobre azul"]];
  var gal = $("#gal"), lb = $("#lb"), cur = 0;
  gal.innerHTML = L.map(function (l, i) { return '<button data-i="' + i + '" aria-label="Ampliar: ' + l[1] + '"><img src="img/laminas/p-' + l[0] + '.jpg" alt="' + l[1] + '" loading="lazy"><span>' + l[0] + " / " + l[1] + "</span></button>"; }).join("");
  function show(i) { cur = (i + L.length) % L.length; $("img", lb).src = "img/laminas/p-" + L[cur][0] + ".jpg"; $("img", lb).alt = L[cur][1]; $("p", lb).textContent = "Lámina " + L[cur][0] + " de 11 / " + L[cur][1]; }
  gal.addEventListener("click", function (e) { var b = e.target.closest("button"); if (!b) return; show(+b.dataset.i); lb.showModal ? lb.showModal() : lb.setAttribute("open", ""); });
  $$("[data-d]", lb).forEach(function (b) { b.addEventListener("click", function () { show(cur + +b.dataset.d); }); });
  $(".x", lb).addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener("keydown", function (e) { if (e.key === "ArrowRight") show(cur + 1); if (e.key === "ArrowLeft") show(cur - 1); });

  /* ---------- visor integrado del PDF ---------- */
  var pd = $("#pdfd"), loaded = false;
  $("#pdfView").addEventListener("click", function () {
    if (!loaded) { var f = d.createElement("iframe"); f.src = "doc/Nueva_Imagen_Diseno_Digital.pdf#view=FitH"; f.title = "Manual de identidad (PDF)"; $(".in", pd).appendChild(f); loaded = true; }
    pd.showModal ? pd.showModal() : pd.setAttribute("open", "");
  });
  $(".x", pd).addEventListener("click", function () { pd.close(); });
  pd.addEventListener("click", function (e) { if (e.target === pd) pd.close(); });
})();
