/* ===== DATOS EDITABLES DE LA BITÁCORA =====
   Todo el contenido vive aquí. Los textos "PENDIENTE" son campos por completar. */
window.CANANA = {
  /* INICIO: IDENTIDAD Y RECURSOS DE MARCA */
  agencia: {
    nombre: "Cañaña",
    slogan: "Meterle caña a las ideas.", // EDITABLE: tomado del concepto de marca; reemplazar si hay slogan oficial
    frase: "Un grupo de mentes singulares que impulsa el diseño colombiano con perrenque.",
    contexto: "Diseño Digital · Universidad Sergio Arboleda, sede Santa Marta · Taller de Diseño Conceptual IV (TDC-IV)",
    concepto: [
      "Cañaña nace como un grupo de mentes singulares destinadas a meterle caña a las ideas y proyectos de diseño capaces de crear y romper los paradigmas del sector de diseño colombiano, generando un crecimiento total en la cultura innovadora de cualquier ambiente.",
      "Al partir de una palabra tan callejera, cargada de perrenque e identidad colombiana, buscamos trasladar esa fuerza al diseño de experiencias culturales memorables, capaces de conectar con las personas desde sus realidades, necesidades y formas de vivir. Nos mueve comprender los contextos que nos rodean, reconocer su diversidad cultural y transformar esos hallazgos en propuestas creativas centradas en el usuario, donde lo cotidiano se convierte en una oportunidad para diseñar experiencias significativas y auténticas."
    ],
    proposito: "Porque las personas y comunidades necesitan experiencias de diseño que comprendan sus necesidades, reconozcan sus contextos y respondan a sus formas de vivir, para transformar sus ideas y realidades en soluciones centradas en el usuario, capaces de generar conexiones significativas y experiencias culturales memorables.",
    
mision: [
  "En CAÑAÑA somos un colectivo creativo de diseño que busca comprender las realidades, necesidades y formas de vivir de las personas para desarrollar propuestas de diseño centradas en el usuario y experiencias culturales memorables, conectadas con nuestra identidad colombiana y nuestro entorno.",
  "Trabajamos desde la investigación, la exploración conceptual, la colaboración y la experimentación para transformar hallazgos en soluciones creativas que generen conexiones significativas entre las personas, su cultura y el mundo que habitan."
],

vision: [
  "Ser un colectivo creativo reconocido por diseñar experiencias culturales memorables que conecten a las personas con su identidad, su territorio y su entorno, demostrando el valor del diseño centrado en el usuario para crear propuestas auténticas, relevantes y significativas.",
  "En cinco años, buscamos consolidarnos como un referente emergente del diseño de experiencias culturales en el Caribe colombiano, proyectando nuestra perspectiva hacia otros territorios y demostrando que comprender las particularidades de las personas y sus contextos permite desarrollar propuestas de diseño con identidad, propósito e impacto."
],

    principios: [
      { t: "Meterle caña", d: "Energía y perrenque para impulsar ideas locales." },
      { t: "Raíz local", d: "Proyectos únicos y caseros que dan significado al diseño colombiano." },
      { t: "Centrado en las personas", d: "Comprender necesidades, contextos y formas de vivir." },
      { t: "Experiencias memorables", d: "Conexiones significativas y cultura digital." }
    ]
  },
  recursos: {
    manual: "assets/manual-de-marca.pdf",        // PDF al que enlaza el logo del header
    logo: "assets/img/logo_amarillo.svg",        // logotipo (header y hero, sobre burdeos)
    imagotipo: "assets/img/imagotipo_amarillo.svg",
    imagotipoRojo: "assets/img/imagotipo_rojo.svg",
    favicon: "assets/img/logo_circular.png"
  },
  /* FIN: IDENTIDAD Y RECURSOS DE MARCA */

  /* INICIO: INTEGRANTES (editar cada uno por separado)
     foto: ruta en assets/img/ ("" = muestra marcador). ejercicio: ruta/URL ("" = botón "pendiente"). */
  integrantes: [
    { nombre: "Nicole Salas", rol: "Diseñadora y estratega", foto: "assets/img/1.png", fotoAlt: "Fotografía de Integrante 1",
      bio: "Nicole es una estudiante de diseño nacida en Santa Marta y con una trayectoria que combina empirismo con prácticas en la urbanidad. Es una persona creativa y curiosa, que disfruta aprender cosas nuevas, explorar ideas y encontrar diferentes formas de expresarse. Se caracteriza por su imaginación y por buscar inspiración en lo que la rodea.",
      fortalezas: ["Fortalezas: Empatía, cercanía con las comunidades, expresión, creatividad", "Intereses: Le gusta la música, bailar, jugar videojuegos y leer."], aporte: "Se destaca en la maquetación, la planificación de estrategias y la creación de propuestas visuales. Además, disfruta trabajar en equipo, aprender de los demás y aportar diferentes perspectivas para desarrollar proyectos originales.",
      ejercicio: "assets/ejercicio_nicole.pdf" },
    { nombre: "Juan Domingo Vilá", rol: "Director Creativo", foto: "assets/img/2.png", fotoAlt: "Fotografía de Integrante 2",
      bio: "Juando es un estudiante de diseño nacido en Bogotá y con experiencia en diferentes áreas, desde la fotografía hasta la programación y el Content Management. Es una persona disciplinada, comprometida y eficiente que disfruta de involucrarse en proyectos de alto impacto y aprender de ellos para mejorar su concepto creativo personal. Es conocido por su talento y concepto de marca.",
      fortalezas: ["Fortalezas: Diseño gráfico, visión artística, manejo de softwares.", "Intereses: Disfruta de la lectura, la ornitología, y el tiempo en familia."], aporte: "Se destaca en el branding, la colorimetría y la grabación de contenido digital. Además se esfuerza por liderar equipos de trabajo competentes y capaces de construir proyectos de alta repercusión.",
      ejercicio: "assets/ejercicio_juan.pdf" },
    { nombre: "Víctor Viadett", rol: "Diseñador e ilustrador", foto: "assets/img/3.png", fotoAlt: "Fotografía de Integrante 3",
      bio: "Víctor es un estudiante de diseño nacido en Maicao con un profundo apego por las técnicas de expresión análogas y el estilo visual del cómic. Es una persona estructurada, resiliente y dedicada a aportar a sus equipos de trabajo lo mejor de sí mismo, aprendiendo a la vez que construye un ambiente óptimo de trabajo. Se le conoce por su sentido del humor y la dedicación con la que emprende proyectos nuevos.",
      fortalezas: ["Fortalezas: Disciplina, creatividad, ilustración digital.", "Intereses: Es fanático del fútbol, los videojuegos y el anime."], aporte: "Se destaca en la creación de ilustraciones originales, el soporte técnico en trabajos de campo y de sistemas y el marketing de los productos diseñados.",
      ejercicio: "assets/ejercicio_victor.pdf" }
  ],
  /* FIN: INTEGRANTES */

  /* INICIO: ACTIVIDADES DEL TERCER CORTE
     Agrega un objeto por actividad (ver LEEME.md). Se crea sola su página:
     tercer-corte/actividad.html?id=<id>. bloques: texto | imagen | galeria | cita */
  actividades: [
    { id: "demo", demo: true, semana: "Semana X", fecha: "", titulo: "Ejemplo de plantilla de actividad",
      resumen: "DEMOSTRACIÓN del formato. No es una actividad académica real.",
      bloques: [
        { tipo: "texto", titulo: "Objetivo", texto: "Texto de ejemplo. Reemplaza por el objetivo real de la actividad." },
        { tipo: "imagen", src: "assets/img/logo_circular.png", alt: "Imagen de ejemplo", pie: "Pie de imagen de ejemplo." },
        { tipo: "cita", texto: "Reflexión o decisión de diseño destacada." },
        { tipo: "galeria", imagenes: [{ src: "assets/img/imagotipo_rojo.svg", alt: "Ejemplo 1", nota: "Anotación: por qué se eligió." }] }
      ] }
  ]
  /* FIN: ACTIVIDADES DEL TERCER CORTE */
};
