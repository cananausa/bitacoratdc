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
      ] },
    { id: "concepto-cultura-arquitectura", semana: "", fecha: "29 oct 2026",
      titulo: "Pregón: concepto, cultura digital, diseño digital y arquitectura efímera",
      resumen: "Registro conceptual de un nuevo producto-experiencia ferial y síntesis de cultura digital, diseño digital como carrera y seis tipologías de arquitectura efímera.",
      bloques: [
        { tipo: "texto", titulo: "1. Concepto y nuevo producto-experiencia: Pregón",
          texto: `<strong>Pregón</strong> es un pabellón ferial efímero y modular que convierte las voces del comercio callejero del Caribe colombiano (el vendedor de mango, el pregón del raspao, la copla) en una experiencia interactiva de patrimonio sonoro. Aborda una oportunidad clara: los estands feriales suelen montarse, admirarse y desecharse, mientras la oralidad cotidiana que da identidad a ciudades como Santa Marta casi no tiene espacios contemporáneos donde ser escuchada, archivada y reinterpretada. Se dirige a visitantes de ferias culturales y de diseño, a gestores de patrimonio y a estudiantes, y se diferencia por articular tres capas: un esqueleto de perfiles de aluminio modular y reutilizable, una cubierta de membrana tensada que es a la vez techo, pantalla de proyección y caja de resonancia, y seis nodos sonoros táctiles donde cada pregón grabado en comunidad se escucha, se mezcla y se suma a una composición colectiva que la membrana traduce en luz y color. Desde el pensamiento estratégico de diseño, que equilibra la racionalidad analítica con la sensibilidad empática (Brown, 2008), el proyecto parte de entrevistas y grabaciones en campo y las convierte en un sistema coherente; y propone una nueva relación entre objeto, sujeto y contexto: el visitante deja de ser espectador para ser coautor, la estructura deja de ser un contenedor neutro para ser instrumento, y el territorio deja de ser decorado para ser contenido vivo. En unos diez minutos el visitante entra, elige un pregón, lo mezcla con otros y se lleva un código QR a la bitácora digital con su composición: una forma de meterle caña a las ideas con raíz local.` },
        { tipo: "esquema", pie: "Esquema 1. Componentes y relaciones de Pregón. Las flechas indican el flujo de voces, interacción y luz; la línea punteada, el apoyo estructural.",
          markup: `<svg viewBox="0 0 420 540" role="img" aria-labelledby="pgt pgd" xmlns="http://www.w3.org/2000/svg"><title id="pgt">Esquema de componentes de Pregón</title><desc id="pgd">El territorio aporta voces a seis nodos sonoros; el visitante toca y mezcla en los nodos, que envían señal a la membrana; la membrana devuelve luz y eco al visitante; el visitante se lleva su composición a la bitácora digital; la estructura Octanorm sostiene todo.</desc>
<defs><marker id="pgA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#5C0A0A"/></marker></defs>
<g font-family="Thicker,system-ui,sans-serif" text-anchor="middle" fill="#5C0A0A">
<rect x="60" y="8" width="300" height="64" rx="22" fill="#E58B70" stroke="#5C0A0A" stroke-width="2"/><text x="210" y="37" font-family="Marvin,Georgia,serif" font-size="19">TERRITORIO</text><text x="210" y="58" font-size="14">Pregones grabados en campo</text>
<line x1="210" y1="74" x2="210" y2="110" stroke="#5C0A0A" stroke-width="2.5" marker-end="url(#pgA)"/><text x="224" y="98" font-size="14" text-anchor="start">voces</text>
<rect x="60" y="114" width="300" height="70" rx="22" fill="#F2B705" stroke="#5C0A0A" stroke-width="2"/><text x="210" y="145" font-family="Marvin,Georgia,serif" font-size="19">6 NODOS SONOROS</text><text x="210" y="167" font-size="14">Postes táctiles con NFC</text>
<rect x="10" y="238" width="150" height="70" rx="22" fill="#263F50" stroke="#5C0A0A" stroke-width="2"/><text x="85" y="269" font-family="Marvin,Georgia,serif" font-size="19" fill="#fff">VISITANTE</text><text x="85" y="291" font-size="14" fill="#fff">coautor</text>
<line x1="80" y1="236" x2="105" y2="188" stroke="#5C0A0A" stroke-width="2.5" marker-end="url(#pgA)"/><text x="8" y="214" font-size="14" text-anchor="start">toca y mezcla</text>
<rect x="260" y="238" width="150" height="70" rx="22" fill="#5C0A0A"/><text x="335" y="269" font-family="Marvin,Georgia,serif" font-size="19" fill="#fff">MEMBRANA</text><text x="335" y="291" font-size="14" fill="#fff">pantalla y eco</text>
<line x1="300" y1="188" x2="325" y2="234" stroke="#5C0A0A" stroke-width="2.5" marker-end="url(#pgA)"/><text x="330" y="214" font-size="14" text-anchor="start">señal</text>
<line x1="258" y1="273" x2="164" y2="273" stroke="#5C0A0A" stroke-width="2.5" marker-end="url(#pgA)"/><text x="211" y="263" font-size="14">luz y eco</text>
<line x1="85" y1="310" x2="85" y2="348" stroke="#5C0A0A" stroke-width="2.5" marker-end="url(#pgA)"/><text x="97" y="335" font-size="14" text-anchor="start">QR</text>
<rect x="10" y="352" width="150" height="64" rx="22" fill="#fff" stroke="#5C0A0A" stroke-width="2"/><text x="85" y="381" font-family="Marvin,Georgia,serif" font-size="19">BITÁCORA</text><text x="85" y="402" font-size="14">composición propia</text>
<line x1="335" y1="446" x2="335" y2="312" stroke="#5C0A0A" stroke-width="2.5" stroke-dasharray="7 6" marker-end="url(#pgA)"/>
<rect x="10" y="450" width="400" height="76" rx="20" fill="#FFF3D6" stroke="#5C0A0A" stroke-width="2" stroke-dasharray="7 6"/><text x="210" y="483" font-family="Marvin,Georgia,serif" font-size="19">ESTRUCTURA MODULAR OCTANORM</text><text x="210" y="507" font-size="14">aluminio reutilizable · soporta nodos y membrana</text>
</g></svg>` },
        { tipo: "cita", texto: "El visitante deja de mirar el patrimonio: lo toca, lo mezcla y se lo lleva." },
        { tipo: "tarjetas", titulo: "Ficha rápida del concepto",
          items: [
            { t: "Oportunidad", d: "Dar un espacio contemporáneo a la oralidad callejera del Caribe, hoy poco archivada." },
            { t: "Público", d: "Visitantes de ferias culturales y de diseño, gestores de patrimonio y estudiantes." },
            { t: "Diferenciadores", d: "Estructura modular reutilizable, membrana que proyecta y resuena, nodos sonoros colaborativos." },
            { t: "Experiencia", d: "Escuchar, mezclar y llevarse una composición propia en unos diez minutos." }
          ] },

        { tipo: "texto", titulo: "2. Cultura digital",
          texto: `La cultura digital es el conjunto de prácticas, lenguajes, valores y formas de organización que surgen cuando las tecnologías digitales y las redes median cómo nos comunicamos, aprendemos, trabajamos y creamos. No se reduce al uso de dispositivos: Gere (2002) la ubica en una historia más larga que la del computador personal; Castells (1996) la vincula con la sociedad red, donde la información circula en estructuras en red; y Manovich (2001) identifica principios propios de los nuevos medios que explican por qué un contenido digital puede copiarse, modificarse y recombinarse con facilidad.` },
        { tipo: "linea", titulo: "Historia: hitos para comprender su evolución",
          hitos: [
            { a: "1945", t: "El memex", d: "Vannevar Bush imagina en «As We May Think» una máquina para enlazar documentos, antecedente intelectual del hipertexto." },
            { a: "1969", t: "ARPANET", d: "Primer enlace entre computadores de universidades de EE. UU., germen de Internet." },
            { a: "1984", t: "Interfaz gráfica y ciberespacio", d: "Llega el Macintosh al público masivo y Neuromancer, de William Gibson, populariza el término «ciberespacio»." },
            { a: "1991–1993", t: "World Wide Web", d: "Tim Berners-Lee crea la Web en el CERN y el navegador Mosaic (1993) hace de la navegación una práctica cotidiana." },
            { a: "2004–2007", t: "Web 2.0 y móvil", d: "Redes sociales y contenido generado por usuarios (Facebook, YouTube) y el iPhone (2007) llevan la red al bolsillo." },
            { a: "2020", t: "Digitalización acelerada", d: "La pandemia de COVID-19 traslada educación, trabajo y cultura a la pantalla." },
            { a: "2022", t: "IA generativa", d: "El lanzamiento de ChatGPT (noviembre) populariza la generación de texto e imágenes con inteligencia artificial." }
          ] },
        { tipo: "tarjetas", titulo: "Categorías principales",
          items: [
            { t: "Comunicación y redes", d: "Mensajería, redes sociales y comunidades en línea." },
            { t: "Creación y remix", d: "Memes, mashups, fan art y cultura participativa." },
            { t: "Economía y trabajo", d: "Plataformas, comercio electrónico y trabajo remoto." },
            { t: "Conocimiento y educación", d: "Acceso abierto, cursos en línea y archivos digitales." },
            { t: "Entretenimiento", d: "Videojuegos, streaming y experiencias interactivas." },
            { t: "Identidad y ciudadanía", d: "Presencia en línea, privacidad y derechos digitales." }
          ] },
        { tipo: "tarjetas", titulo: "Cinco principios de los nuevos medios (Manovich, 2001)",
          items: [
            { t: "Representación numérica", d: "Todo objeto digital se describe con números." },
            { t: "Modularidad", d: "Los elementos conservan su identidad dentro de un conjunto." },
            { t: "Automatización", d: "Procesos creativos y de edición pueden delegarse al software." },
            { t: "Variabilidad", d: "Un mismo objeto existe en múltiples versiones." },
            { t: "Transcodificación", d: "Lo cultural y lo computacional se influyen mutuamente." }
          ] },
        { tipo: "tarjetas", titulo: "Tendencias relevantes",
          items: [
            { t: "IA generativa", d: "Creatividad asistida que exige criterio de autoría y ética." },
            { t: "Realidad extendida", d: "Espacios híbridos entre lo físico y lo digital." },
            { t: "Cultura de creadores", d: "Remix y creación colectiva como motor cultural." },
            { t: "Datos y privacidad", d: "Debate sobre vigilancia, consentimiento y propiedad de datos." },
            { t: "Brecha digital", d: "El acceso desigual condiciona quién participa y quién es representado." },
            { t: "Patrimonio digital", d: "Archivar y reinterpretar cultura local con medios digitales, como propone Pregón." }
          ] },

        { tipo: "texto", titulo: "3. El diseño digital como carrera profesional",
          texto: `El diseño digital aplica la tecnología al arte y al diseño para crear piezas gráficas, interactivas y multimedia con ingenio y creatividad (El Heraldo, 2021a). En la Universidad Sergio Arboleda se presenta como un campo que se distingue de la programación y del diseño gráfico, con los que suele confundirse, y que no se limita al dominio de programas sino a preguntarse por el potencial creador de las herramientas (El Heraldo, 2021b).` },
        { tipo: "tarjetas", titulo: "Contenidos formativos",
          intro: "Según el plan de estudios publicado por la universidad (Universidad Sergio Arboleda, 2021):",
          items: [
            { t: "Núcleo proyectual", d: "Introducción al diseño y Talleres de Diseño Conceptual I a IV, con talleres de diseño e investigación." },
            { t: "Lenguajes digitales", d: "Lógica para el mundo digital, gráfica digital, fotografía digital y narrativa digital." },
            { t: "Interfaz y gestión", d: "Diseño e interfaz y gestión de proyectos de diseño." },
            { t: "Énfasis en objetos", d: "Modelado digital, fábrica digital FabLab, ergonomía y diseño sostenible." },
            { t: "Énfasis en videojuegos", d: "Textura y escultura digital y diseño de videojuegos I a III." },
            { t: "Cultura y estética digital", d: "Semiótica, materialidad digital, diseño interactivo, mashup y cultura digital." }
          ] },
        { tipo: "tarjetas", titulo: "Competencias y perfil profesional",
          items: [
            { t: "Proyectual", d: "Domina el proceso de diseño de productos digitales: objetos, contenidos y videojuegos." },
            { t: "Técnica", d: "Modelado 3D, web, plataformas informáticas, fabricación digital, multimedia y comunicación transmediática." },
            { t: "Narrativa", d: "Usa lenguajes y narrativas digitales para crear nuevos formatos y contenidos." },
            { t: "Gestión y liderazgo", d: "Formula, planea y dirige proyectos interdisciplinares con componente digital." },
            { t: "Social", d: "Media procesos de diseño digital para el desarrollo social." },
            { t: "Estratégica", d: "Actúa como consultor creativo en nuevos formatos de la cultura digital." }
          ] },
        { tipo: "tarjetas", titulo: "Campos de acción y proyección",
          items: [
            { t: "Experiencia e interfaces", d: "Diseño de interacción, UX y UI para productos y servicios." },
            { t: "Videojuegos", d: "Diseño, arte y narrativa de experiencias interactivas." },
            { t: "Producto y fabricación digital", d: "Modelado, prototipado y manufactura asistida." },
            { t: "Contenido transmedia", d: "Producción audiovisual y narrativas en múltiples plataformas." },
            { t: "Gestión y consultoría", d: "Dirección de proyectos y asesoría creativa a organizaciones." },
            { t: "Cultura y territorio", d: "Proyectos de patrimonio, comunidades y experiencias culturales." }
          ] },
        { tipo: "tarjetas", titulo: "Transformaciones y oportunidades",
          items: [
            { t: "De la herramienta al pensamiento", d: "El valor está en el criterio de diseño, más que en el manejo de un software (El Heraldo, 2021b)." },
            { t: "De la pantalla al objeto", d: "La fabricación digital y los entornos híbridos acercan el diseño digital al mundo físico." },
            { t: "IA como colaboradora", d: "Automatiza tareas y abre oportunidades en dirección creativa, curaduría y diseño de experiencias." },
            { t: "Diseño con comunidades", d: "Crece la demanda de propuestas centradas en el usuario y en su contexto cultural." }
          ] },

        { tipo: "texto", titulo: "4. Arquitectura efímera para eventos feriales",
          texto: `La arquitectura efímera produce espacios pensados para existir durante un tiempo limitado: el de una feria, un festival o una exposición. Su lógica se invierte respecto a la construcción permanente: se diseña desde el montaje y el desmontaje, y se mide en rapidez, ligereza, reutilización, claridad de marca y seguridad bajo el uso intensivo. Un ejemplo de esa mentalidad es el Warnowturm, una torre de 49 m construida en solo diez días para la Feria Internacional de Jardinería de 2003 (Micheletti y Podio-Guidugli, 2022).` },
        { tipo: "tarjetas", titulo: "Fundamentos",
          items: [
            { t: "Temporalidad", d: "El diseño asume desde el inicio un ciclo corto de vida." },
            { t: "Montaje y desmontaje", d: "Pocas piezas, uniones simples y tiempos de armado predecibles." },
            { t: "Ligereza y transporte", d: "Materiales livianos y volúmenes compactos reducen costos logísticos." },
            { t: "Modularidad y reutilización", d: "Los componentes se reconfiguran para distintos eventos." },
            { t: "Seguridad y normativa", d: "Verificar cargas de viento, aforo y evacuación según la normativa local." }
          ] },
        { tipo: "tipologias", titulo: "Seis tipologías de estructuras efímeras",
          intro: "Despliega cada tipología para ver su funcionamiento, características, ventajas, limitaciones y aplicaciones.",
          items: [
            { t: "Estructuras neumáticas", res: "Espacios definidos por aire a presión dentro de una envolvente flexible (Herzog, 1976).",
              f: "En las soportadas por aire, un ventilador mantiene el interior a una presión ligeramente mayor que la exterior y la membrana se sostiene sola; en las de elementos inflados, tubos o arcos presurizados forman el esqueleto.",
              c: "Envolvente de membrana, sistema de ventilación continuo, accesos con esclusa y anclajes al suelo.",
              v: "Montaje muy rápido, mínimo volumen de transporte, grandes luces sin apoyos interiores, translucidez.",
              l: "Dependen del suministro de aire y de energía, son sensibles a perforaciones y al viento, y su aislamiento térmico y acústico es limitado.",
              a: "Carpas y domos de exposición, escenarios y pabellones inflables, publicidad y eventos de gran formato." },
            { t: "Estructuras escualizables, abatibles o plegables", res: "Sistemas articulados que cambian de tamaño: se recogen para transportarse y se abren para usarse (Escrig, 1985).",
              f: "Barras unidas en tijera (pantógrafos) o paneles con bisagras se despliegan por geometría articulada hasta alcanzar su forma final, donde se bloquean.",
              c: "Piezas articuladas, geometría modular, bloqueos de seguridad y, a veces, membranas integradas.",
              v: "Armado en minutos, formato compacto, reutilización frecuente y buena movilidad.",
              l: "Las articulaciones exigen mantenimiento, la rigidez final es menor y las formas posibles están limitadas por el mecanismo.",
              a: "Estands emergentes, carpas plegables, mamparas abatibles y cubiertas retráctiles de membrana articulada en tijera." },
            { t: "Cubiertas de membranas", res: "Superficies textiles pretensadas que resisten cargas por tracción (Forster y Mollaert, 2004).",
              f: "La tela se tensa entre mástiles, arcos y cables; su doble curvatura (anticlástica o sinclástica) le da rigidez, y la forma se obtiene mediante un cálculo de búsqueda de forma.",
              c: "Tejidos recubiertos o láminas poliméricas, pretensado, curvaturas opuestas, bordes de cable y mástiles de soporte.",
              v: "Gran cobertura con poco material, ligereza, luz natural y una superficie ideal para imagen de marca y proyección.",
              l: "Requieren diseño y patronaje especializados, son sensibles a viento y acumulación de agua, y aíslan poco del sonido y del calor.",
              a: "Cubiertas de escenarios, carpas feriales, pabellones y parasoles de plazas." },
            { t: "Tensegridad (Tensegrity)", res: "Principio estructural de «islas de compresión en un mar de tensión» (Micheletti y Podio-Guidugli, 2022).",
              f: "Barras que no se tocan entre sí se mantienen estables gracias a una red continua de cables pretensados; el equilibrio nace de la tensión interna (Designing Buildings, s. f.).",
              c: "Compresión discontinua, tensión continua, pretensado y aspecto ligero que parece flotar. El término lo acuñó Buckminster Fuller.",
              v: "Gran impacto visual, poco peso, posibilidad de desplegarse o cambiar de forma.",
              l: "Rigidez baja, geometría y comportamiento mecánico complejos, y menor eficiencia que las estructuras convencionales para cargas grandes.",
              a: "Torres e instalaciones escultóricas, cubiertas como las cúpulas de Fuller y pasarelas desplegables experimentales." },
            { t: "Sistema modular Octanorm", res: "Sistema de perfiles de aluminio extruido de sección octogonal, lanzado en 1969 para construir estands feriales (OCTANORM, s. f.).",
              f: "Perfiles y nodos estandarizados se ensamblan con piezas de conexión para formar paredes, soportes y cielos rasos; los paneles y la gráfica se añaden sobre el esqueleto.",
              c: "Aluminio reciclable, medidas modulares, conexiones rápidas y accesorios como iluminación y mobiliario integrados.",
              v: "Montaje ágil, alta reutilización, personalización con gráfica y una amplia red de proveedores.",
              l: "Su apariencia puede verse estándar sin diseño adicional, requiere piezas compatibles de un mismo sistema y tiene límites en grandes luces o voladizos.",
              a: "Estands de ferias, muros expositivos, displays, tiendas temporales y diseño de interiores." },
            { t: "Escenarios rodantes", res: "Plataformas sobre remolque o vehículo que se transportan armadas y se abren en el lugar del evento.",
              f: "El camión o remolque llega al sitio, se nivela, y sus laterales, cubierta y piso se despliegan mediante sistemas hidráulicos o mecánicos.",
              c: "Chasis móvil, cubierta y laterales plegables, piso técnico y puntos de anclaje para sonido e iluminación.",
              v: "Puesta en marcha en pocas horas, autonomía logística y facilidad para itinerar entre plazas y municipios.",
              l: "Tamaño limitado por las normas de tránsito, requieren terreno nivelado, acceso vehicular y permisos de circulación.",
              a: "Giras musicales, festivales populares, ferias municipales y eventos culturales en espacio público." }
          ] },
        { tipo: "texto", titulo: "Aplicación al concepto Pregón",
          texto: `Pregón combina tres de estas tipologías: perfiles Octanorm para el esqueleto reutilizable, una cubierta de membrana tensada que sirve de pantalla y resonador, y uniones desmontables inspiradas en los sistemas plegables para optimizar el transporte desde el taller hasta la feria.` },
        { tipo: "refs", titulo: "Referencias (APA 7)",
          items: [
            `Brown, T. (2008). Design thinking. <em>Harvard Business Review, 86</em>(6), 84–92. <a href="https://hbr.org/2008/06/design-thinking" target="_blank" rel="noopener">https://hbr.org/2008/06/design-thinking</a>`,
            `Castells, M. (1996). <em>The rise of the network society</em>. Blackwell.`,
            `Designing Buildings. (s. f.). <em>Tensegrity structural systems</em>. <a href="https://www.designingbuildings.co.uk/wiki/Tensegrity_structural_systems" target="_blank" rel="noopener">https://www.designingbuildings.co.uk/wiki/Tensegrity_structural_systems</a>`,
            `El Heraldo. (2021a, 2 de noviembre). <em>Diseño digital, el nuevo programa de la Sergio Arboleda en Barranquilla</em>. <a href="https://www.elheraldo.co/informes-comerciales/2021/11/02/diseno-digital-el-nuevo-programa-de-la-sergio-arboleda-en-barranquilla-862283/" target="_blank" rel="noopener">https://www.elheraldo.co/informes-comerciales/2021/11/02/diseno-digital-el-nuevo-programa-de-la-sergio-arboleda-en-barranquilla-862283/</a>`,
            `El Heraldo. (2021b, 17 de diciembre). <em>Diseño digital: una carrera que busca humanizar las tecnologías</em>. <a href="https://www.elheraldo.co/informes-comerciales/2021/12/17/diseno-digital-una-carrera-que-busca-humanizar-las-tecnologias-873889/" target="_blank" rel="noopener">https://www.elheraldo.co/informes-comerciales/2021/12/17/diseno-digital-una-carrera-que-busca-humanizar-las-tecnologias-873889/</a>`,
            `Escrig, F. (1985). Expandable space structures. <em>International Journal of Space Structures, 1</em>(2), 79–91.`,
            `Forster, B., y Mollaert, M. (Eds.). (2004). <em>European design guide for tensile surface structures</em>. TensiNet. <a href="https://repository.lincoln.ac.uk/articles/chapter/Introduction_European_design_guide_for_tensile_surface_structures_/24333712" target="_blank" rel="noopener">Registro del libro (University of Lincoln)</a>`,
            `Gere, C. (2002). <em>Digital culture</em>. Reaktion Books.`,
            `Herzog, T. (1976). <em>Pneumatic structures: A handbook of inflatable architecture</em>. Oxford University Press.`,
            `Manovich, L. (2001). <em>The language of new media</em>. MIT Press.`,
            `Micheletti, A., y Podio-Guidugli, P. (2022). Seventy years of tensegrities (and counting). <em>Archive of Applied Mechanics, 92</em>(9), 2525–2548. <a href="https://doi.org/10.1007/s00419-022-02192-4" target="_blank" rel="noopener">https://doi.org/10.1007/s00419-022-02192-4</a>`,
            `OCTANORM. (s. f.). <em>About octanorm</em>. <a href="https://www.octanorm.com/about-octanorm/" target="_blank" rel="noopener">https://www.octanorm.com/about-octanorm/</a>`,
            `Universidad Sergio Arboleda. (2021). <em>Diseño digital</em> [Plegable del programa]. <a href="https://www.usergioarboleda.edu.co/barranquilla/wp-content/uploads/2021/09/DISENO-DIGITAL.pdf" target="_blank" rel="noopener">https://www.usergioarboleda.edu.co/barranquilla/wp-content/uploads/2021/09/DISENO-DIGITAL.pdf</a>`
          ] }
      ] }
  ]
  /* FIN: ACTIVIDADES DEL TERCER CORTE */
};
