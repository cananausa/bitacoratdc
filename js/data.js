/* ===== DATOS EDITABLES DE LA BITÁCORA =====
   Todo el contenido vive aquí. Los textos "PENDIENTE" son campos por completar. */
window.CANANA = {
  /* INICIO: IDENTIDAD Y RECURSOS DE MARCA */
  agencia: {
    nombre: "Cañaña",
    slogan: "Meterle caña a las ideas.", // EDITABLE: tomado del concepto de marca; reemplazar si hay slogan oficial
    frase: "Cañaña Agencia de Diseño es un grupo de mentes singulares que impulsa el diseño colombiano con perrenque.",
    contexto: "Diseño Digital · Universidad Sergio Arboleda, sede Santa Marta · Taller de Diseño Conceptual IV (TDC-IV)",
    concepto: [
      "Cañaña nace como un grupo de mentes singulares destinadas a meterle caña a las ideas y proyectos de diseño capaces de crear y romper los paradigmas dentro de la carrera de Diseño Digital de la Sergio, generando un crecimiento total en la cultura innovadora de cualquier ambiente.",
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
    { id: "concepto-cultura-arquitectura", editorial: true, semana: "", fecha: "29 oct 2026",
      titulo: "BETA: instalación para promocionar Diseño Digital, cultura digital y arquitectura efímera",
      resumen: "Una instalación universitaria interactiva que muestra qué se crea al estudiar Diseño Digital, con síntesis de cultura digital, la carrera y seis tipologías de arquitectura efímera.",
      pdf: "assets/documentos/referencias-apa7.pdf",
      /* PIES DE FOTO: completa nombre, fuente (autor.com), año y, si quieres, url. Figura x se numera sola.
         Formato final: Nota. Figura x. Nombre de la foto. Tomado de: autor.com (2026).
         Mientras "nombre" esté vacío, el pie se muestra atenuado como recordatorio. */
      creditos: {
        "imagen-portada": { nombre: "Pabellón de la Serpentine", fuente: "Arquitectura Viva", anio: "2016", url: "arquitecturaviva.com" },
        "imagen-concepto-instalacion": { nombre: "Esquema Básico", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-esquema-instalacion": { nombre: "Esquema Básico", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-mira": { nombre: "Boceto secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-arma": { nombre: "Boceto secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-descubre": { nombre: "Boceto secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-llevate": { nombre: "Boceto secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-componentes-instalacion": { nombre: "Boceto", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-cultura-digital": { nombre: "Grupo de Jóvenes", fuente: "Universimed", anio: "2025", url: "universimed.com" },
        "imagen-diseno-digital": { nombre: "Escuela de Diseño", fuente: "Arcos", anio: "2017", url: "arcos.cl" },
        "imagen-campos-accion": { nombre: "Collage Gráfico", fuente: "Gear Patrol", anio: "2022", url: "gearpatrol.com" },
        "imagen-arquitectura-efimera": { nombre: "Pabellón de la Serpentine", fuente: "Arquitectura Viva", anio: "2016", url: "arquitecturaviva.com" },
        "imagen-estructuras-neumaticas": { nombre: "Cúpula Geodésica", fuente: "Caos y Ciencia", anio: "2025", url: "caosyciencia.com" },
        "imagen-escualizables-abatibles-plegables": { nombre: "Cabaña Plegable", fuente: "Tinkercad", anio: "2022", url: "tinkercad.com" },
        "imagen-cubiertas-membranas": { nombre: "SkySong", fuente: "LDM", anio: "2026", url: "ldm.la" },
        "imagen-tensegridad": { nombre: "Needle Tower", fuente: "Wikipedia", anio: "2026", url: "wikipedia.org" },
        "imagen-sistema-octanorm": { nombre: "Stand Modulable", fuente: "CG Trader", anio: "2021", url: "cgtrader.com" },
        "imagen-escenarios-rodantes": { nombre: "Camión Móvil Husqvarna", fuente: "Doblemeventos", anio: "2019", url: "doblemeventos.com" },
        "imagen-aplicacion-beta": { nombre: "Esquema Básico", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-cierre": { nombre: "Universidad Sergio Arboleda", fuente: "El Informador", anio: "2021", url: "elinformador.com.co" }
      },
      concepto: {
        nombre: "BETA",
        lema: "Estudiar Diseño Digital es entrar a una versión beta de uno mismo.",
        parrafo: `<strong>BETA</strong> es una instalación semipermanente de 3 × 2 metros que inicia como una tabla plana y se levanta hasta que se pliega y transforma en un stand, pensada para instalarse en cualquier espacio abierto la Universidad Sergio Arbolede sede RNL o Centro (Santa Marta); y que convierte la pregunta «¿qué es el diseño digital?» en un recorrido que se atraviesa con el cuerpo y la mente: una tabla que se convierte en un túnel de arcos triangulares cubiertos por un tragaluz funciona a la vez como umbral, mobiliario y arquitectura efímera y viva. Responde a una oportunidad doble: la carrera de Diseño Digital suele confundirse con programación o con diseño gráfico y sus posibilidades requieren un espacio único para explicarlas, mientras que estudiantes de grado 11° de colegios samarios necesitan comprobar por sí mismos qué se aprende y qué se puede lograr. Dirigida a dichos estudiantes que visitan la sede, se proponen cuatro momentos dentro del mobiliario: «Llegada», donde la persona llega mirando el stand de frente, no hay nada que obstaculice y la idea es apreciar el diseño innovador del mueble. «Mirada», Dentro del stand el usuario encuentra folletos con la identidad visual de la carrera,toma uno y se lleva la información clave en la mano; «Descubre», El centro de atención absoluto del stand será un pendón grande, catchy visual, mostrando imágenes, el concepto de la carrera e ideas útiles para la comprensión del usuario; y «Conversa»,  El usuario sale del túnel, y se acerca a conversar con un voluntario de la carrera cara a cara y de pie. Es el momento perfecto para resolver dudas y entenderlo todo. Desde el pensamiento estratégico de diseño, equilibra la racionalidad de un sistema modular, repetible y medible con la sensibilidad del diseño y la sorpresa, y redefine la relación entre objeto, sujeto y contexto: la estructura es túnel experiencial y medio de comunicación, el visitante es coautor del mensaje y el campus es el escenario donde la carrera se demuestra en lugar de explicarse. Su nombre alude a la versión beta, el producto que se prueba, se ajusta y se mejora.`,
        ficha: [
          ["Nombre", "BETA"],
          ["Idea rectora", "La carrera se comprende al adentrarse en su propia forma de comunicación."],
          ["¿Quién?", "Jóvenes entre los 15 y 19 años, estudiantes de grado 11° de los colegios de Santa Marta."],
          ["Oportunidad", "Explicar de forma tangible qué es Diseño Digital y qué se puede crear con él."],
          ["Propósito", "Despertar interés por la carrera y conducir al visitante hacia más información."],
          ["Diferenciadores", "Recorrido físico, diseño disruptivo, resultado que el visitante se lleva."],
          ["¿Dónde?", "Zonas abiertas de los campus, como la fuente, mangales, Bloque H y alrededores."]
        ] },
      estaciones: [
        { n: "Llegada", img: "imagen-estacion-mira", ve: "Una construcción con un túnel triangular que parece una obra de Santiago Calatrava. Al acercarse, la lectura cambia: «¿Qué hay ahí?».", hace: "Caminar, rodear y mirar desde distintos ángulos.", d: "La carrera le metió tremendo esfuerzo a un stand creativo, aquí hay muchas herramientas que se superponen: arquitectura, diseño gráfico, comunicación visual, marketing." },
        { n: "Mirada", img: "imagen-estacion-arma", ve: "Los folletos con la información clave de la carrera, sujetos a un dispensador curioso y efectivo.", hace: "Puede tomar uno desplegable que le brinda todo tipo de datos curiosos interesantes", d: "El Diseño es mucho más que crear logos o juegos: Diseñar es tomar decisiones dentro de un sistema, con lógica y con expresión." },
        { n: "Descubre", img: "imagen-estacion-descubre", ve: "El pendón central roba totalmente su atención, generando intriga sobre las posibilidades de los 3 énfasis que ofrece la carrera.", hace: "Lee y aprecia el arte gráfico del pendón, escanea un QR para ver asignaturas, énfasis y campos de acción asociados.", d: "Lo que acaba de hacer conecta con experiencias, videojuegos, objetos y contenidos transmedia." },
        { n: "Conversa", img: "imagen-estacion-llevate", ve: "Sale del túnel inmersivo para encontrarse con un amable estudiante que le cuenta su experiencia en palabras sencillas y amenas.", hace: "Conoce el testimonio de un paisano suyo y genera empatía y expectativa por su futuro.", d: "Ya conociste las posibilidades del diseño digital, el siguiente paso es graduarte para ser un sergista." }
      ],
      fases: [
        { t: "Atención", d: "La silueta del túnel se distingue desde lejos entre los demás stands." },
        { t: "Intriga", d: "Lo que no se alcanza a ver desde afuera invita a acercarse." },
        { t: "Descubrimiento", d: "Cada visitante recorre a su ritmo y arma su propia idea de la carrera." },
        { t: "Identificación", d: "Escucha a un estudiante real y se imagina en su lugar." },
        { t: "Proyección", d: "Sale con el folleto y una imagen de sí mismo como futuro sergista." }
      ],
    componentes: [
  { t: "El tablero que se levanta", d: "Todo parte de una superficie plana que se pliega hacia arriba y se convierte en estructura: el mobiliario y la arquitectura del stand nacen de la misma pieza." },
  { t: "Arcos triangulares", d: "Una sucesión de arcos en forma de triángulo, sostenidos por palos plegados, que dan ritmo y profundidad al recorrido." },
  { t: "El túnel", d: "Centro de la experiencia: un paso inmersivo que separa el campus del mundo del diseño." },
  { t: "Tragaluz", d: "Una abertura con una especie de pérgola cóncava de tablas en lo alto del túnel que deja entrar luz." },
  { t: "Pendón central", d: "Pieza gráfica que domina el interior y concentra las posibilidades de los 3 énfasis de la carrera." },
  { t: "Dispensador de folletos", d: "Un gesto pequeño y curioso que entrega la información clave y deja algo físico en la mano del visitante." },
  { t: "Tipografía como señal", d: "Mensajes grandes y breves que guían el recorrido sin necesidad de explicarlo." }
],
integracion: [
  { t: "Dónde", d: "En los espacios abiertos de ambas sedes, en puntos de alto tránsito donde el mobiliario se vea desde lejos y la entrada y la salida del recorrido queden despejadas." },
  { t: "Cuándo", d: "En fechas admisión, Semana SOY Digital, Semana Cultural y en visitas de colegios, es decir, cuando llegan quienes aún no conocen la carrera." },
  { t: "Quién la opera", d: "Estudiantes de la carrera, que reciben a los visitantes y cierran el recorrido con su testimonio." }
],
      cultura: {
        def: `La cultura digital es el conjunto de prácticas, lenguajes, valores y formas de organización que surgen cuando las tecnologías digitales y las redes median cómo nos comunicamos, aprendemos, trabajamos y creamos. No se reduce al uso de dispositivos: se enlaza con una historia más larga que la del computador personal, con la sociedad red descrita por Castells y con principios propios de los nuevos medios que explican por qué un contenido digital puede copiarse, modificarse y recombinarse con facilidad.`,
        hitos: [
          { a: "1945", t: "El memex", d: "Vannevar Bush imagina una máquina para enlazar documentos, antecedente intelectual del hipertexto." },
          { a: "1969", t: "ARPANET", d: "Primer enlace entre computadores de universidades de EE. UU., germen de Internet." },
          { a: "1984", t: "Interfaz y ciberespacio", d: "Llega el Macintosh al público masivo y Neuromancer populariza el término «ciberespacio»." },
          { a: "1991", t: "World Wide Web", d: "Tim Berners-Lee crea la Web en el CERN; el navegador Mosaic (1993) la vuelve cotidiana." },
          { a: "2004", t: "Web 2.0 y móvil", d: "Redes sociales y contenido generado por usuarios; el iPhone (2007) lleva la red al bolsillo." },
          { a: "2020", t: "Digitalización acelerada", d: "La pandemia traslada educación, trabajo y cultura a la pantalla." },
          { a: "2022", t: "IA generativa", d: "ChatGPT populariza la generación de texto e imágenes con inteligencia artificial." }
        ],
        categorias: [
          { t: "Comunicación y redes", d: "Mensajería, redes sociales y comunidades en línea." },
          { t: "Creación y remix", d: "Memes, mashups y cultura participativa." },
          { t: "Economía y trabajo", d: "Plataformas, comercio electrónico y trabajo remoto." },
          { t: "Conocimiento y educación", d: "Acceso abierto, cursos en línea y archivos digitales." },
          { t: "Entretenimiento", d: "Videojuegos, streaming y experiencias interactivas." },
          { t: "Identidad y ciudadanía", d: "Presencia en línea, privacidad y derechos digitales." }
        ],
        principios: [
          { t: "Representación numérica", d: "Todo objeto digital se describe con números." },
          { t: "Modularidad", d: "Los elementos conservan su identidad dentro de un conjunto." },
          { t: "Automatización", d: "Procesos creativos pueden delegarse al software." },
          { t: "Variabilidad", d: "Un mismo objeto existe en múltiples versiones." },
          { t: "Transcodificación", d: "Lo cultural y lo computacional se influyen entre sí." }
        ],
        tendencias: ["IA generativa", "Realidad extendida", "Cultura de creadores", "Datos y privacidad", "Brecha digital", "Patrimonio digital"]
      },
      carrera: {
        def: `El diseño digital es la disciplina que crea experiencias, productos y contenidos para medios digitales, como interfaces, videojuegos, identidades visuales y narrativas transmedia, combinando creatividad, tecnología y comunicación visual. El diseño digital aplica la tecnología al arte y al diseño para crear piezas gráficas, interactivas y multimedia con ingenio y creatividad. En la Universidad Sergio Arboleda se presenta como un campo que se distingue de la programación y del diseño gráfico, con los que suele confundirse, y que no se limita al dominio de programas: se pregunta por el potencial creador de las herramientas.`,
        ruta: [
          { t: "Núcleo proyectual", d: "Introducción al diseño y Talleres de Diseño Conceptual I a IV, con talleres de diseño e investigación." },
          { t: "Lenguajes digitales", d: "Lógica para el mundo digital, gráfica digital, fotografía digital y narrativa digital." },
          { t: "Interfaz y gestión", d: "Diseño e interfaz y gestión de proyectos de diseño." },
          { t: "Énfasis", d: "Objetos (modelado digital), Creación de Contenidos Digitales, y Diseño de Videojuegos" },
          { t: "Cultura y estética digital", d: "Semiótica, materialidad digital, diseño interactivo, mashup y cultura digital." }
        ],
        competencias: [
          { t: "Proyectual", d: "Domina el proceso de diseño de productos digitales: objetos, contenidos y videojuegos." },
          { t: "Técnica", d: "Modelado 3D, web, plataformas, fabricación digital, multimedia y comunicación transmediática." },
          { t: "Narrativa", d: "Usa lenguajes y narrativas digitales para crear nuevos formatos y contenidos." },
          { t: "Gestión", d: "Formula, planea y dirige proyectos interdisciplinares con componente digital." },
          { t: "Social", d: "Media procesos de diseño digital para el desarrollo social." },
          { t: "Estratégica", d: "Actúa como consultor creativo en nuevos formatos de la cultura digital." }
        ],
        campos: ["Experiencia e interfaces (UX/UI)", "Videojuegos", "Producto y fabricación digital", "Contenido transmedia", "Gestión y consultoría creativa", "Cultura y territorio"],
        transformaciones: [
          { de: "La herramienta", a: "El pensamiento", d: "El valor está en el criterio de diseño, más que en el manejo de un software." },
          { de: "La pantalla", a: "El objeto", d: "La fabricación digital y los entornos híbridos acercan lo digital al mundo físico." },
          { de: "Hacer solo", a: "Co-crear con IA", d: "La IA automatiza tareas y abre oportunidades en dirección creativa y curaduría." },
          { de: "El usuario genérico", a: "La comunidad", d: "Crece la demanda de propuestas centradas en personas y contextos culturales." }
        ]
      },
      arq: {
        def: `La arquitectura efímera produce espacios pensados para existir durante un tiempo limitado: el de una feria, un festival o una exposición. Su lógica se invierte respecto a la construcción permanente: se diseña desde el montaje y el desmontaje, y se mide en rapidez, ligereza, reutilización, claridad de marca y seguridad bajo uso intensivo. Un ejemplo es el Serpentine Pavilion, un pabellón temporal que cada verano se construye en los jardines de las Serpentine Galleries, en Londres, y que desde el año 2000 se encarga a un arquitecto distinto, con Zaha Hadid como la primera.`,
        fundamentos: ["Temporalidad", "Montaje y desmontaje", "Ligereza y transporte", "Modularidad y reutilización", "Seguridad y normativa"],
        criterios: ["Montaje", "Movilidad", "Rigidez", "Luz libre"],
        tipologias: [
          { t: "Estructuras neumáticas", id: "estructuras-neumaticas", r: [5, 5, 2, 5], res: "Espacios definidos por aire a presión dentro de una envolvente flexible.",
            f: "En las soportadas por aire, un ventilador mantiene el interior a una presión ligeramente mayor que la exterior y la membrana se sostiene sola; en las de elementos inflados, tubos o arcos presurizados forman el esqueleto.",
            c: "Envolvente de membrana, ventilación continua, accesos con esclusa y anclajes al suelo.",
            v: "Montaje muy rápido, mínimo volumen de transporte, grandes luces sin apoyos interiores, translucidez.",
            l: "Dependen del suministro de aire y energía, son sensibles a perforaciones y al viento, y aíslan poco térmica y acústicamente.",
            a: "Carpas y domos de exposición, escenarios y pabellones inflables, publicidad y eventos de gran formato." },
          { t: "Estructuras escualizables, abatibles o plegables", id: "escualizables-abatibles-plegables", r: [5, 4, 3, 2], res: "Sistemas articulados que se recogen para transportarse y se abren para usarse.",
            f: "Barras unidas en tijera (pantógrafos) o paneles con bisagras se despliegan por geometría articulada hasta su forma final, donde se bloquean.",
            c: "Piezas articuladas, geometría modular, bloqueos de seguridad y, a veces, membranas integradas.",
            v: "Armado en minutos, formato compacto, reutilización frecuente y buena movilidad.",
            l: "Las articulaciones exigen mantenimiento, la rigidez final es menor y las formas están limitadas por el mecanismo.",
            a: "Estands emergentes, carpas plegables, mamparas abatibles y cubiertas retráctiles de membrana articulada en tijera." },
          { t: "Cubiertas de membranas", id: "cubiertas-membranas", r: [3, 4, 3, 5], res: "Superficies textiles pretensadas que resisten cargas por tracción.",
            f: "La tela se tensa entre mástiles, arcos y cables; su doble curvatura (anticlástica o sinclástica) le da rigidez, y su forma se obtiene mediante un cálculo de búsqueda de forma.",
            c: "Tejidos recubiertos o láminas poliméricas, pretensado, curvaturas opuestas, bordes de cable y mástiles.",
            v: "Gran cobertura con poco material, ligereza, luz natural y una superficie ideal para marca y proyección.",
            l: "Requieren diseño y patronaje especializados, son sensibles al viento y al agua acumulada, y aíslan poco del sonido y del calor.",
            a: "Cubiertas de escenarios, carpas feriales, pabellones y parasoles de plazas." },
          { t: "Tensegridad (Tensegrity)", id: "tensegridad", r: [2, 3, 2, 3], res: "Principio estructural de «islas de compresión en un mar de tensión».",
            f: "Barras que no se tocan entre sí se mantienen estables gracias a una red continua de cables pretensados; el equilibrio nace de la tensión interna.",
            c: "Compresión discontinua, tensión continua, pretensado y aspecto ligero que parece flotar. El término lo acuñó Buckminster Fuller.",
            v: "Gran impacto visual, poco peso y posibilidad de desplegarse o cambiar de forma.",
            l: "Rigidez baja, geometría y comportamiento mecánico complejos, y menor eficiencia que las estructuras convencionales con cargas grandes.",
            a: "Torres e instalaciones escultóricas, cubiertas como las cúpulas de Fuller y pasarelas desplegables experimentales." },
          { t: "Sistema modular Octanorm", id: "sistema-octanorm", r: [4, 4, 4, 2], res: "Perfiles de aluminio extruido de sección octogonal, lanzados en 1969 para estands feriales.",
            f: "Perfiles y nodos estandarizados se ensamblan con piezas de conexión para formar paredes, soportes y cielos rasos; paneles y gráfica se añaden sobre el esqueleto.",
            c: "Aluminio reciclable, medidas modulares, conexiones rápidas y accesorios como iluminación y mobiliario integrados.",
            v: "Montaje ágil, alta reutilización, personalización con gráfica y una amplia red de proveedores.",
            l: "Puede verse estándar sin diseño adicional, exige piezas compatibles del mismo sistema y tiene límites en grandes luces o voladizos.",
            a: "Estands de ferias, muros expositivos, displays, tiendas temporales y diseño de interiores." },
          { t: "Escenarios rodantes", id: "escenarios-rodantes", r: [5, 5, 5, 2], res: "Plataformas sobre remolque o vehículo que llegan armadas y se abren en el lugar del evento.",
            f: "El camión o remolque llega al sitio, se nivela, y sus laterales, cubierta y piso se despliegan con sistemas hidráulicos o mecánicos.",
            c: "Chasis móvil, cubierta y laterales plegables, piso técnico y puntos de anclaje para sonido e iluminación.",
            v: "Puesta en marcha en pocas horas, autonomía logística y facilidad para itinerar entre plazas y municipios.",
            l: "Tamaño limitado por normas de tránsito; requieren terreno nivelado, acceso vehicular y permisos de circulación.",
            a: "Giras musicales, festivales populares, ferias municipales y eventos culturales en espacio público." }
        ]
      },
    }
  ]
  /* FIN: ACTIVIDADES DEL TERCER CORTE */
};
