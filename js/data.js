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
        "imagen-estacion-mira": { nombre: "Esquema Básico secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-arma": { nombre: "Esquema Básico secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-descubre": { nombre: "Esquema Básico secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-estacion-llevate": { nombre: "Esquema Básico secundario", fuente: "Cañaña", anio: "2026", url: "" },
        "imagen-componentes-instalacion": { nombre: "Esquema Básico", fuente: "Cañaña", anio: "2026", url: "" },
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
        parrafo: `<strong>BETA</strong> es una instalación semipermanente de 3 × 2 metros que inicia como una tabla plana y se levanta hasta transformarse en un stand, pensado para instalarse en cualquier espacio abierto de la Universidad Sergio Arboleda, sede RNL o Centro (Santa Marta). Convierte la pregunta «¿qué es el diseño digital?» en un recorrido que se atraviesa con el cuerpo y la mente: una tabla que se transforma en un túnel de arcos triangulares cubiertos por un tragaluz, funcionando como umbral, mobiliario y arquitectura efímera y viva. Responde a una doble oportunidad: la carrera de Diseño Digital suele confundirse con programación o diseño gráfico, por lo que sus posibilidades requieren un espacio único para darse a conocer, mientras que los estudiantes de grado 11° de colegios samarios necesitan experimentar por sí mismos qué se aprende y qué se puede lograr. Dirigida a estos estudiantes durante sus visitas a la sede, la instalación propone cuatro momentos: «Llegada», donde el usuario aprecia el diseño innovador del mueble; «Mirada», donde encuentra folletos con la identidad visual de la carrera y se lleva información clave; «Descubre», donde un pendón grande y visual muestra imágenes, el concepto de la carrera e ideas que facilitan su comprensión; y «Conversa», donde se acerca a un voluntario para resolver dudas cara a cara. Desde el pensamiento estratégico de diseño, BETA equilibra la racionalidad de un sistema modular, repetible y medible con la sensibilidad, el diseño y la sorpresa, redefiniendo la relación entre objeto, sujeto y contexto: la estructura es un túnel experiencial y medio de comunicación, el visitante es coautor del mensaje y el campus se convierte en el escenario donde la carrera se demuestra en lugar de explicarse. Su nombre alude a la versión beta: un producto que se prueba, se ajusta y se mejora.`,
        ficha: [
          ["Nombre", "BETA"],
          ["Idea rectora", "La carrera se comprende al adentrarse en su propia forma de comunicación."],
          ["¿Quién?", "Jóvenes entre los 15 y 19 años, estudiantes de grado 11° de los colegios de Santa Marta."],
          ["Oportunidad", "Explicar de forma tangible qué es Diseño Digital y qué se puede crear con él."],
          ["Propósito", "Despertar interés por la carrera y conducir al visitante hacia más información."],
          ["Diferenciadores", "Recorrido físico, diseño disruptivo, resultado que el visitante se lleva."],
          ["¿Dónde?", "Sobre la cancha de fútbol a las afueras del Bloque D, con suficiente espacio para la circulación y expectación."]
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
    },
    { id: "analisis-de-referentes", referentes: true, semana: "", fecha: "9 nov 2026",
      titulo: "Análisis de referentes",
      resumen: "Matriz de doce referentes, conclusiones y decisiones para BETA, e inventario de recursos TIC con su clasificación.",
      pdf: "assets/documentos/matriz-referentes.pdf" },

    { id: "desarrollo-formal", formal: true, semana: "12", fecha: "8 de Noviembre de 2026",
      titulo: "DESARROLLO FORMAL: bitácora de evolución de BETA",
      resumen: "Bitácora cronológica por semanas con bocetos, dibujos, decisiones y comparaciones que muestran cómo la propuesta BETA se transforma y se perfecciona.",
      lema: "La forma de BETA se decide, se prueba y se corrige semana a semana.",
      intro: "Aquí queda el rastro del proceso: bocetos, dibujos, pruebas y las decisiones que fueron moviendo la propuesta de una versión a la siguiente.",
      evolucionTexto: "Cada semana registra qué se quería resolver, qué se decidió, qué cambió frente a la versión anterior y qué problemas quedaron por resolver. La secuencia y la matriz muestran de un vistazo cómo se transforma la propuesta.",
      cierre: "Toda beta se mejora. Esta bitácora conserva el rastro de cada versión de BETA.",
      carpeta: "assets/img/formal/",
      ejes: [
        { id: "forma", t: "Forma y volumen" },
        { id: "espacio", t: "Distribución espacial" },
        { id: "materiales", t: "Materiales" },
        { id: "tecnologia", t: "Tecnología e interacción" }
      ],
      semanas: [
               { n: 1, id: "semana-01", periodo: "28 de Octubre al 4 de Noviembre de 2026", titulo: "Esquema básico",
          objetivo: "Al iniciar este proyecto, el objetivo era plasmar una idea desde la nada y eso hicimos: un mobiliario efímero tipo stand que se arma y desarma en una sola pieza, aplicando fuerza de abajo hacia arriba para que quede de pie con un túnel inferior en forma de triángulo. La idea de esta etapa es sentar las bases para construir el proyecto en las semanas siguientes.",
          decisiones: [
            { t: "Estructura base. ", d: "Stand efímero de una sola pieza con túnel inferior triangular, como se describe en el objetivo." },
            { t: "Tragaluz. ", d: "Abertura superior con tablas superpuestas." },
            { t: "Información para el visitante. ", d: "Un pendón interior con un QR, además de volantes." },
            { t: "Cierre del recorrido. ", d: "Un estudiante al final que guía a nuestro público objetivo: estudiantes de 11° que quieren conocer la carrera de Diseño Digital de la Sergio." }
          ],
          cambios: ["No hay cambios: es la primera concepción (incluso una preconcepción)."],
          problemas: [
            { p: "La carrera necesita venderse de forma más clara, y la Sergio tiene varias sedes y necesita un espacio para ferias y semanas culturales que pueda transportarse y promocionar la carrera.",
              s: "Diseñamos un stand desmontable y transportable que, con un diseño extravagante y una lógica funcional tipo túnel, invita a los jóvenes a aventurarse a lo desconocido y conocer algo de la carrera." }
          ],
          resultados: "Como resultado tenemos el primer esquema básico, con la estructura más o menos clara. Como conclusión, sabemos que inicia la parte dura: contrastar nuestro proyecto con fuentes secundarias (referentes) y primarias (co-creación) para desarrollar el proceso de diseño debido y ver cómo debe evolucionar.",
          ejes: ["forma", "espacio"],
          galeria: [
            { tipo: "Esquema Básico", pie: "BETA armado." },
            { tipo: "BETA desarmado", pie: "En forma de tabla (una sola pieza)." },
            { tipo: "Transición", pie: "BETA pasa de tabla a stand en un solo paso." }
          ] },
        { n: 2, id: "semana-02", periodo: "4-11 de Noviembre de 2026", titulo: "Después de los referentes",
          objetivo: "Hacer un análisis de 12 referentes internacionales relacionados con arquitectura, arquitectura efímera, stands publicitarios y cualquier propuesta de mobiliario que sirviera de marco inspirativo para mejorar nuestra propuesta, importando conceptos de innovación y creatividad de otros lugares.",
          decisiones: [
            { t: "Consola de proyección con QR. ", d: "Para explorar intereses, proyectos y énfasis académicos." },
            { t: "Cascada de píxeles en la entrada. ", d: "Proyecta las respuestas de los estudiantes mediante un sensor de movimiento." },
            { t: "Arcos desmontables. ", d: "Se rediseñan con tres tablas unidas con piezas metálicas y tornillos, para facilitar el transporte, el ensamblaje y la estabilidad." },
            { t: "Plantas sintéticas. ", d: "Se añaden para dar color al exterior del mueble." },
            { t: "Techo modular. ", d: "Se rediseña con una estructura modular de triángulos que permite armar, desarmar y trasladar fácilmente, igual que los pilares laterales." }
          ],
          cambios: [
            "Se abandonan los recursos análogos (pendones y folletos informativos): se reemplazan por proyecciones digitales e interactivas que comunican la información y facilitan la participación de los estudiantes.",
            "Se modifica el diseño del techo y de los pilares principales.",
            "Se mantiene la figura del estudiante guía al final del recorrido, como acompañamiento y conexión directa con los visitantes."
          ],
          problemas: [
            { p: "La falta de usos digitales: la carrera pretende incentivar e innovar en este campo, por lo que incorporar estos recursos era necesario como solución integral.",
              s: "Se incorporan la consola de proyección con QR y la cascada de píxeles." },
            { p: "Aunque era modular, el montaje y desmontaje se hacía en un solo paso y la tabla original era enorme.",
              s: "Ahora es más fácil: el techo también se puede desarmar (arcos de tres tablas y techo modular de triángulos)." }
          ],
          resultados: "La propuesta evoluciona hacia una experiencia más dinámica e interactiva, sustituyendo los recursos impresos por herramientas digitales que facilitan la exploración y la participación de los estudiantes. Los ajustes estructurales simplifican el montaje, el transporte y el almacenamiento, sin perder la identidad espacial del túnel.",
          ejes: ["forma", "espacio", "materiales", "tecnologia"],
          galeria: [
            { tipo: "Rediseño de BETA", pie: "Con plantas y techo modular." },
            { tipo: "Interior de BETA", pie: "Con la consola interactiva proyectada en la pared." },
            { tipo: "Exterior de BETA", pie: "Con cortina holográfica proyectada que se actualiza con la información que va poniendo el estudiante." }
          ],
          comparacion: { antes: "semana-01/01", despues: "semana-02/01", etiquetaAntes: "Semana 1", etiquetaDespues: "Semana 2", nota: "Del esquema básico de una sola pieza al rediseño con arcos de tres tablas, techo modular, plantas y proyecciones digitales." } },
        { n: 3, id: "semana-03", periodo: "11-15 de Noviembre de 2026", titulo: "Después de la co-creación",
          objetivo: "Salir a conversar BETA con profesores, estudiantes y otras personas (7 entrevistas y una encuesta a 20 personas) para ver qué funcionaba y qué no, y con eso transformar la propuesta de fondo. Antes armamos una versión 3 (un inflable con forma de mando) solo para ponerla a prueba.",
          decisiones: [
            { t: "Estructura inflable. ", d: "Cambiamos los arcos, el techo y los pilares de tablas por una estructura neumática inspirada en el mando. Se monta fácil, es liviana y deja un interior mucho más amplio." },
            { t: "Dos caras. ", d: "Una es el mando; la otra, una pantalla con cursor y glitch. Así BETA no queda como si Diseño Digital fuera solo videojuegos." },
            { t: "Dos puertas holográficas. ", d: "Por ambas se entra y se sale. Cada una tiene su proyección, su mesa y un estudiante que recibe y despide." },
            { t: "Cortina de proyección. ", d: "La imagen de la entrada usa una proyección holográfica con respaldo blackout, para que la luz de afuera no la dañe y no se vea lo de atrás." },
            { t: "Una mesa plegable por puerta. ", d: "Sirve para recibir y dar información, y también guarda las conexiones, los controles, la luz y el sistema de insuflado del inflable." },
            { t: "Color y luz. ", d: "Morado, azul y amarillo neón junto a los tonos de la universidad, con luz neón alrededor para que se vea de lejos." },
            { t: "Interior con realidad virtual. ", d: "Adentro, a oscuras, un estudiante se pone el visor y recorre los tres énfasis (Videojuegos, Creación de contenido y Diseño de objetos). Los demás lo ven en una pared gracias a un proyector." },
            { t: "Recuerdo y galería. ", d: "Al final escanean un QR, descargan lo que crearon y, si quieren, publican su experiencia. Se proyecta en tiempo real en las puertas, con filtro de palabras y solo nombre o apodo, porque son menores de edad." }
          ],
          cambios: [
            "Se abandonan los arcos de tres tablas, el techo modular y los pilares: la estructura ahora es inflable.",
            "Se pasa de una sola entrada a dos puertas, y de un solo estudiante al final a uno por puerta.",
            "La consola proyectada con QR se reemplaza por una experiencia de realidad virtual donde los visitantes crean cosas.",
            "El mando deja de ser la fachada única y pasa a ser una de las dos caras. Su idea también se vuelve mesa plegable.",
            "Se cambia el gris por morado, azul y amarillo neón, con luz ambiental."
          ],
          problemas: [
            { p: "Ninguna versión pasó de 50% en «se entiende», y el mando solo encasillaba la carrera en videojuegos.",
              s: "Le sumamos una segunda cara (pantalla con cursor y glitch), y el interior con realidad virtual muestra los tres énfasis." },
            { p: "El túnel quedaba estrecho, la estructura daba miedo de caerse y el armado era complicado.",
              s: "Pasamos a una estructura inflable: más espacio libre, montaje y desmontaje fáciles, y más segura." },
            { p: "La luz de afuera arruinaba las proyecciones y la entrada no era clara.",
              s: "Entrada con proyección holográfica con tecnología opaca con blackout y dos puertas donde se entra y se sale, cada una con su estudiante." },
            { p: "La consola atraía, pero se veía aislada y reducía la carrera a un videojuego.",
              s: "Mesa plegable por puerta y un interior donde los visitantes crean, se llevan su recuerdo y ven su experiencia proyectada en la entrada." }
          ],
          resultados: "BETA dio un giro grande: pasó de una idea básica a una propuesta con criterio y argumentos. Ahora es un inflable de dos caras, con dos puertas holográficas, mesas de apoyo y un interior de realidad virtual que enseña qué se puede hacer en Diseño Digital. Escuchar no fue obedecer: algunas ideas se adoptaron, otras se adaptaron y otras se descartaron. El detalle está en la actividad de Procesos de co-creación.",
          ejes: ["forma", "espacio", "materiales", "tecnologia"],
          galeria: [
            { tipo: "Resultado final neumático", pie: "BETA después de la co-creación." },
            { tipo: "Primer boceto antes de la co-creación", pie: "La versión 3 que pusimos a prueba." },
            { tipo: "Lado A", pie: "Una de las dos caras del inflable." },
            { tipo: "Lado B", pie: "La otra cara del inflable." },
            { tipo: "Vista superior y lateral del recorrido", pie: "Cómo se mueven los visitantes por las dos puertas." },
            { tipo: "Interior de la estructura", pie: "El espacio por dentro, donde ocurre la experiencia." }
          ],
          montaje: {
            kicker: "Procedimiento · mesa plegable", titulo: "Montaje y desmontaje de la mesa",
            intro: "Cada puerta tiene su mesa plegable: recibe a los visitantes y guarda las conexiones, los controles, la luz y el sistema de insuflado. Estos tres momentos muestran cómo pasa de pieza guardada a mesa lista para usar; para desmontarla se recorre el mismo camino a la inversa.",
            pasos: [
              { tipo: "Mesa plegada", pie: "Punto de partida: la mesa guardada, lista para transportarse." },
              { tipo: "Despliegue", pie: "El paso central: la mesa se abre hasta alcanzar su forma de trabajo." },
              { tipo: "Mesa montada", pie: "Mesa lista en la puerta; el desmontaje repite estos pasos en sentido contrario." }
            ] },
          comparacion: { antes: "semana-02/01", despues: "semana-03/01", etiquetaAntes: "Semana 2", etiquetaDespues: "Semana 3", nota: "De los arcos de tablas con techo modular al inflable de dos caras, con dos puertas, mesas plegables, color neón y un interior de realidad virtual." } },
        { n: 4, id: "semana-04", periodo: "", titulo: "Configuración definitiva del mobiliario inflable",
          objetivo: "Consolidar la forma final de BETA: un mobiliario inflable de tres caras, con la mesa integrada como extensión de la estructura, la fuente de poder resuelta detrás de la cara principal, una cara nueva para el énfasis de Creación de Objetos 3D y una pared de membrana translúcida que lleva las proyecciones interiores al exterior.",
          decisiones: [
            { t: "Planimetría de tres caras. ", d: "La distribución en planta ordena las caras, sus entradas y la relación entre componentes." },
            { t: "Mesa integrada. ", d: "Deja de montarse por separado: es una extensión del inflable, ubicada en una esquina de cada cara." },
            { t: "Fuente de poder. ", d: "Se ubica detrás de la cara principal, oculta a la lectura estética del diseño." },
            { t: "Tercera cara: Objetos 3D. ", d: "Diseño propio, entrada independiente y portafolio gráfico del énfasis de Creación de Objetos 3D." },
            { t: "Membrana translúcida. ", d: "Una cara se transforma en pared que deja ver desde afuera las proyecciones del interior." }
          ],
          cambios: [
            "La mesa plegable independiente se integra al inflable.",
            "Se pasa de dos caras a tres, con una entrada propia para cada énfasis representado.",
            "Una de las caras pasa a ser membrana translúcida: la superficie se vuelve medio de comunicación.",
            "Se incorpora la identidad institucional (paleta y logotipos de la Universidad Sergio Arboleda) en las caras."
          ],
          problemas: [
            { p: "La mesa como objeto aparte complicaba el montaje y rompía la unidad del conjunto.", s: "Se integra a una esquina de cada cara, como parte de la estructura." },
            { p: "Las proyecciones interiores solo se veían desde adentro.", s: "Una cara de membrana translúcida las hace visibles desde el exterior." },
            { p: "El componente técnico de alimentación podía afectar la lectura estética.", s: "La fuente de poder queda detrás de la cara principal." }
          ],
          resultados: "BETA llega a su configuración definitiva: un inflable de tres caras con identidad institucional, una cara propia para Objetos 3D, mesas integradas y una superficie que comunica. Además queda documentada la secuencia de montaje, desmontaje, transporte y empaque de la instalación itinerante.",
          ejes: ["forma", "espacio", "materiales", "tecnologia"],
          portada: 0,
          galeria: [{ tipo: "Planimetría", pie: "Vista superior del mobiliario.", archivo: "semana-04/planimetria" }],
          dev: {
            plano: { k: "Referencia general · vista superior", t: "Planimetría del mobiliario", texto: "Todo el sistema formal se lee desde aquí: las tres caras, sus entradas, la disposición de los componentes y cómo se relacionan en el espacio.", tipo: "Planimetría", pie: "Vista superior: tres caras, entradas y componentes.",
              leyenda: [
                { t: "Cara 1 · institucional", d: "Paleta y logotipos de la Sergio.", a: "caras" },
                { t: "Cara 2 · institucional", d: "Segunda cara, misma identidad gráfica.", a: "caras" },
                { t: "Cara 3 · Objetos 3D", d: "Diseño y entrada propios.", a: "cara3" },
                { t: "Pared de membrana", d: "Proyección visible desde afuera.", a: "membrana" },
                { t: "Fuente de poder", d: "Detrás de la cara principal.", a: "poder" },
                { t: "Mesas integradas", d: "Una esquina de cada cara.", a: "caras" }
              ] },
            caras: { k: "Caras 1 y 2 · identidad institucional", t: "La mesa deja de ser un objeto aparte",
              texto: "Las dos primeras caras usan la paleta cromática de la Universidad Sergio Arboleda y sus logotipos. El cambio conceptual del proyecto: la mesa ya no se monta por separado, sino que es una extensión del propio inflable, ubicada en una esquina de cada cara.",
              c1: { tipo: "Cara 1", pie: "Identidad institucional y mesa integrada en la esquina." },
              c2: { tipo: "Cara 2", pie: "Segunda cara, con su mesa en una esquina." },
              cambioT: "Del artefacto independiente a la extensión integrada",
              cambio: "Antes, la mesa plegable se montaba aparte. Ahora nace del inflable y permanece unida a la estructura principal en una esquina de cada cara." },
            poder: { k: "Componente técnico", t: "Fuente de poder detrás de la cara principal",
              texto: "La fuente de poder se ubica detrás de la cara principal: alimenta el inflable sin aparecer en la lectura estética del diseño.", tipo: "Fuente de poder", pie: "Ubicación detrás de la cara principal." },
            cara3: { k: "Cara 3 · énfasis de Diseño Digital", t: "Creación de Objetos 3D",
              texto: "No es una variación decorativa de las otras caras: es una tercera propuesta formal, con diseño, entrada y portafolio gráfico propios sobre el modelado de objetos tridimensionales.", tipo: "Cara de Creación de Objetos 3D", pie: "Entrada independiente y portafolio gráfico.",
              datos: [
                { t: "Entrada propia", d: "Acceso independiente, con su forma y volumen." },
                { t: "Portafolio gráfico", d: "Comunica el trabajo de creación y modelado 3D." },
                { t: "Lenguaje de objetos y aire", d: "Relación entre los objetos 3D y la arquitectura neumática." }
              ] },
            membrana: { k: "Cara de membrana translúcida", t: "La superficie como medio de comunicación",
              texto: "Una de las caras se transforma en pared de membrana translúcida. Las proyecciones audiovisuales del interior se ven también desde el exterior, y el inflable pasa a ser pantalla.", tipo: "Pared de membrana translúcida", pie: "La proyección interior se lee desde afuera.",
              flujo: ["Adentro: se proyecta la experiencia audiovisual.", "En la superficie: la membrana deja pasar y difunde la imagen.", "Afuera: el público ve la proyección y se acerca."] },
            logistica: { k: "Itinerancia", t: "Secuencia técnica: montaje, desmontaje, transporte y empaque",
              intro: "BETA está pensada para viajar: se arma, se desarma, se traslada y se vuelve a instalar en otro lugar. Cada momento tiene su propia secuencia; desplázala con las flechas, el teclado o con el dedo.",
              momentos: [
                { id: "montaje", t: "Montaje y desmontaje", intro: "Cómo se arma la instalación, cómo se desarma y cómo se deja lista para reinstalarse en otro lugar.", reqT: "Qué se necesita", req: ["Espacio despejado y nivelado", "Toma eléctrica para la fuente de poder", "Planimetría a la mano"],
                  slides: [
                    { fase: "Montaje", t: "Preparar el sitio", pie: "Área despejada y huella marcada.", d: "Se despeja y nivela el área y se ubica la huella de las tres caras según la planimetría." },
                    { fase: "Montaje", t: "Conectar la fuente de poder", pie: "Conexión detrás de la cara principal.", d: "La fuente de poder se ubica detrás de la cara principal y se conecta al sistema de insuflado antes de inflar." },
                    { fase: "Montaje", t: "Insuflado", pie: "La estructura se levanta.", d: "El inflable se llena de aire y se levanta; se verifica que las tres caras y sus entradas queden alineadas." },
                    { fase: "Montaje", t: "Mesas y proyección", pie: "Mesas integradas y equipos listos.", d: "Se despliegan las mesas de las esquinas y se conectan la proyección y la luz." },
                    { fase: "Desmontaje", t: "Apagado y desinsuflado", pie: "Equipos apagados, aire liberado.", d: "Se apagan los equipos, se desconecta la proyección y se libera el aire." },
                    { fase: "Desmontaje", t: "Plegado de la estructura", pie: "Plegado cara por cara.", d: "Con la estructura vacía se pliega cara por cara, cuidando las zonas con logotipos y portafolio." },
                    { fase: "Reinstalación", t: "Listo para otro lugar", pie: "Piezas revisadas y rotuladas.", d: "Se revisan y rotulan las piezas para repetir el montaje en un nuevo espacio." }
                  ] },
                { id: "transporte", t: "Transporte", intro: "Cómo se traslada BETA entre espacios y qué condiciones se necesitan para hacerlo.", reqT: "Condiciones", req: ["Vehículo cubierto y seco", "Acceso libre al lugar de instalación", "Personas suficientes para cargar y descargar"],
                  slides: [
                    { fase: "Carga", t: "Orden de carga", pie: "Lo más pesado, abajo.", d: "Se carga en un orden definido, con los contenedores más pesados primero." },
                    { fase: "Carga", t: "Aseguramiento", pie: "Carga asegurada para el viaje.", d: "La carga se asegura para evitar movimientos durante el trayecto." },
                    { fase: "Traslado", t: "Condiciones del trayecto", pie: "Protección frente a humedad y golpes.", d: "El traslado se hace protegiendo los componentes de la humedad y los golpes." },
                    { fase: "Llegada", t: "Descarga", pie: "Descarga junto al sitio de montaje.", d: "Se descarga cerca del sitio de instalación, listo para iniciar el montaje." }
                  ] },
                { id: "empaque", t: "Empaque", intro: "Cómo se organizan, protegen y disponen los componentes para guardarlos y trasladarlos.", reqT: "Principios", req: ["Cada componente con su lugar", "Protección de superficies gráficas", "Rotulado para el siguiente montaje"],
                  slides: [
                    { fase: "Estructura", t: "Inflable plegado", pie: "Estructura plegada y protegida.", d: "La estructura se pliega y se protege antes de guardarla." },
                    { fase: "Componentes", t: "Mesas y equipos", pie: "Mesas, fuente de poder y cables.", d: "Mesas, fuente de poder, proyección y cables se agrupan por función." },
                    { fase: "Gráfica", t: "Logotipos y portafolio", pie: "Piezas gráficas protegidas.", d: "Las piezas con identidad institucional y portafolio se guardan sin dobleces." },
                    { fase: "Almacenamiento", t: "Contenedores rotulados", pie: "Todo rotulado y listo.", d: "Cada contenedor queda rotulado para su almacenamiento y traslado." }
                  ] }
              ] }
          },
          comparacion: { antes: "semana-03/01", despues: "semana-04/planimetria", etiquetaAntes: "Semana 3", etiquetaDespues: "Semana 4", nota: "De un inflable de dos caras con mesas plegables a un mobiliario de tres caras, con mesas integradas, membrana translúcida y fuente de poder resuelta." } }
      ]
    }
,
    { id: "procesos-de-co-creacion", cocreacion: true, semana: "Semana 3 del proyecto", fecha: "11 al 15 de Noviembre de 2026",
      titulo: "Procesos de co-creación: de las opiniones a las decisiones de BETA",
      resumen: "Sacamos una tercera versión de BETA (un inflable con forma de mando) a conversar con profesores, estudiantes y otras personas: 7 entrevistas y una encuesta a 20 personas. Esto fue lo que escuchamos y lo que cambiamos.",
      lema: "Escuchar no es obedecer: es contrastar, interpretar y decidir.",
      /* ENLACES REALES: pega aquí las URL. Mientras estén vacías, el botón aparece como «enlace pendiente». */
      encuestaUrl: "https://tally.so/r/QoevkY",
      formalUrl: "actividad.html?id=desarrollo-formal",
      carpeta: "assets/img/cocreacion/",
      cifras: [
        { v: "20", t: "personas respondieron la encuesta" },
        { v: "7", t: "entrevistas, cada una con su voz" },
        { v: "89%", t: "mantendría la consola (conservar, ajustar o reorganizar)" },
        { v: "55%", t: "quiere un espacio interior más amplio" }
      ],
      porque: {
        intro: "Estamos en la tercera semana. BETA ya había pasado por una etapa de preconcepción y por un análisis de referentes, y eso nos había movido algunas cosas. Pero nuestro tutor fue claro: la idea todavía era demasiado básica y necesitaba una transformación más profunda.",
        giro: "Entonces hicimos algo medio atrevido: antes de co-crear, armamos una tercera versión de BETA, completamente distinta de las anteriores, solo para ponerla frente a gente de afuera del equipo y ver si ese camino tenía potencial.",
        pasos: [
          { k: "Versión 1 · el «antes»", t: "Túnel triangular «Beta»", d: "La primera estructura: un túnel triangular plegable que se despliega aplicando fuerza desde abajo, con dinámicas e interactivos de la carrera. Se alzaba entre varias personas y la descartamos por peligrosa." },
          { k: "Versión 2", t: "Arcos desmontables", d: "Arcos desmontables con luces LED, plantas, QR, consola proyectada y holograma (cascada de píxeles) en la entrada." },
          { k: "Versión 3", t: "El inflable mando", d: "Una estructura efímera neumática con la silueta de un control de consola. Es la que pusimos a prueba." }
        ],
        tutor: "Las reservas del tutor fueron con la Versión 1, no con ninguna versión del mando. Esa fue la que consideró demasiado básica."
      },
      prueba: {
        intro: "La V3 es un inflable de gran formato con la silueta de un control de consola de videojuegos, un guiño a uno de los énfasis de Diseño Digital de la Universidad Sergio Arboleda. Medía 3 × 4 metros.",
        conserva: [
          "La proyección holográfica ubicada en la entrada.",
          "La experiencia interactiva durante el recorrido.",
          "La presencia de un estudiante al final de la experiencia."
        ],
        intencion: "La idea era probar algo más llamativo, más inmersivo y distinto a lo que habíamos planteado al inicio. No queríamos saber solo si gustaba: queríamos entender qué funcionaba, qué generaba dudas, qué había que conservar y qué decisiones podían transformar de verdad el mobiliario."
      },
      conversar: {
        intro: "Sacamos la propuesta a conversar por dos caminos que se complementan: conversaciones una por una y una encuesta para tener un panorama más amplio.",
        actores: ["Profesores", "Estudiantes de Diseño Digital de la Sergio Arboleda", "Otros actores con perspectivas relevantes (estudiantes de otras carreras y profesionales)"],
        nota: "Dos de las siete entrevistas (Joan y Byron) vieron solo la V1; el resto conoció la evolución completa o varias versiones. Lo avisamos en cada ficha para no ponerle a nadie opiniones que no dio."
      },
      entrevistas: [
        { id: "joan", nombre: "Joan Flores", perfil: "Estudiante de Marketing y Negocios Internacionales", por: "Víctor Viadett", vio: "Solo la V1 (túnel triangular Beta)", aviso: "", video: "https://youtu.be/TC1jqERGVxM?si=1GgBEhOmvp6FNnnR",
          destaco: ["Al principio le parece una estructura rara porque rompe con la arquitectura convencional, pero dice que el ojo se adapta rápido.", "Su forma innovadora asombra y despierta una curiosidad natural: la gente se acercaría a curiosear.", "Le encanta la idea de usarlo como kiosco cubierto con contenidos proyectados y juegos interactivos para promocionar la carrera."],
          cuestiono: ["Quitar tubos de soporte para abrir ventanas o rendijas: pondría en riesgo la estabilidad y la seguridad.", "El túnel se siente algo estrecho porque las bases de soporte están justo en el centro."],
          ideas: ["Alinear y organizar muy bien los estantes informativos dentro y alrededor de la figura.", "Curvar un poco el techo, mover las bases a las esquinas y escoger materiales más flexibles para ganar espacio sin perder firmeza."],
          lectura: "De Joan nos quedó una pregunta que nos persiguió todo el proceso: ¿cómo ganamos espacio adentro sin que la estructura se sienta insegura?",
          tag: "adaptada", decision: "Se refleja en el paso a la estructura neumática: más espacio libre interior y una forma menos atada a geometrías básicas." },
        { id: "byron", nombre: "Byron Ríos", perfil: "Estudiante de Marketing y Negocios Internacionales", por: "Víctor Viadett", vio: "Solo la V1 (túnel triangular Beta)", aviso: "", video: "https://youtu.be/7_g-vbQrzso?si=ouuZERN7LE0KzK87",
          destaco: ["Primera impresión muy buena: juvenil y tecnológica gracias al estilo neón y al contraste entre colores.", "No le cambiaría nada del colorido general.", "Un mobiliario así le daría intriga por saber qué hay adentro y lo animaría a acercarse."],
          cuestiono: ["Rechazó volver la entrada curva o cuadrada: la curva sería genérica y la cuadrada se ve en todos lados."],
          ideas: ["Aperturas o rendijas arriba o a los lados para que la gente «chismosee» hacia adentro.", "Un túnel largo, para caminar con paciencia y a su ritmo.", "Un recorrido interior en línea recta, sin caminos confusos."],
          lectura: "Byron nos confirmó que el neón y la curiosidad desde afuera funcionan. Las ventanas no las llevamos tal cual, pero la idea de que el exterior invite a mirar sí la tradujimos a otras cosas.",
          tag: "adaptada", decision: "El neón entra como recurso ambiental, el recorrido se mantiene claro y lineal (dos puertas, y por ambas se entra y se sale) y la curiosidad la despiertan las proyecciones y las dos caras, no ventanas." },
        { id: "santiago", nombre: "Santiago Sanjuan", perfil: "Estudiante de Diseño Digital", por: "Juan Domingo Vilá", vio: "V1, V2 y V3", aviso: "", video: "https://youtu.be/fxsPo7lOB4c?si=qasEfXreUu7yccHL",
          destaco: ["V1: le gustó el sistema de plegado, la experiencia inicial y el espacio triangular por dentro.", "V2: le pareció súper atractivo el holograma justo en la puerta de entrada.", "V3: le gustó mucho; la sintió curiosa y con bastante potencial para atraer público."],
          cuestiono: ["V1: demasiado simple y abstracta visualmente; no sería llamativa.", "V2: tanta planta adentro podía estorbar la dinámica del lugar.", "V3: verla tan gris en los dibujos."],
          ideas: ["Meter morados, verdes neón o negros en los botones para darle calor y vida.", "Cortina de tela con cremallera para que la luz exterior no arruine las pantallas.", "Que los botones del control reaccionaran con luces de colores al tocarlos.", "Variar lo proyectado con luces brillantes y elementos tipo videojuego.", "Un mini espacio de atención o una mesita en la zona trasera para organizar entrada y salida.", "Su camino ideal: la V3 con la puerta holográfica de la V2 en el ingreso, sin letreros tradicionales."],
          lectura: "Santiago fue el que más ideas concretas nos dejó, y casi todas terminaron en la mesa de decisiones: color, holograma tipo cortina blackout y mesa. La de los botones que reaccionan al tacto la dejamos de lado (más abajo contamos por qué).",
          tag: "adoptada", decision: "Elegimos la V3 como camino, el holograma de entrada se queda, el color cambia y aparece la mesa. La luz exterior la resolvemos con proyecciones opacas tipo cortina." },
        { id: "oscar", nombre: "Óscar Solano", perfil: "Profesor de Diseño Digital", por: "Juan Domingo Vilá", vio: "V1, V2 y V3", aviso: "", video: "https://youtu.be/JtrxbpT25mg?si=9hw43Y5zuMFzg5PC",
          destaco: ["V1: al principio la veía como la más práctica, factible y económica.", "V2: se volvió su preferida al saber que el presupuesto era ilimitado; ofrece una visión más amplia e integral del diseño. Le pareció un puntazo el holograma de entrada, la consola con QR y la realidad aumentada en los celulares."],
          cuestiono: ["V1: la imagen en 2D no le dejaba claro cómo funcionaba por dentro ni por arriba; pidió un modelo 3D.", "V3: la rechazó tajantemente. Dice que el mando encasilla la carrera y crea un sesgo en jóvenes de grado 11, que creerían que van a estudiar solo videojuegos. También le preocupan los efectos del juego excesivo (aislamiento, ansiedad, desnutrición)."],
          ideas: ["Poner una mesa adelante para recibir a la gente.", "Meterle la ficha al trasfondo de la experiencia más que a la forma exterior; todo diseño debe cumplir viabilidad, deseabilidad y factibilidad.", "Un aire acondicionado artesanal sin electricidad, con cilindros.", "Un video tipo documental con el detrás de cámaras de cómo construimos el stand, más hologramas o realidad aumentada de bienvenida."],
          lectura: "Óscar fue la voz más opuesta a la V3 y por eso mismo una de las que más nos movió. Su crítica nos obligó a preguntarnos cómo conservar el gancho del mando sin que sea la única cara de Diseño Digital. De su lista, la mesa pasó, el aire acondicionado no.",
          tag: "adaptada", decision: "Adaptada: el mando se queda, pero con una segunda cara que no es videojuego (pantalla con cursor y glitch). La mesa se adopta. El aire acondicionado se descarta por viabilidad. Lo del interior (QR, AR, documental) se revisa en Desarrollo formal." },
        { id: "maria", nombre: "María Victoria Noguera", perfil: "Auditora de sistemas", por: "Nicole Salas", vio: "La evolución completa: Versión 1, arcos con LED y holograma, e inflable mando", aviso: "", video: "https://youtu.be/fOlfWaEFjJM?si=tXYzfLuFg4bZ8wvz",
          destaco: ["El control es más llamativo para adolescentes.", "La altura le parece adecuada."],
          cuestiono: ["Escanear un QR y responder una pregunta le daría pereza a los estudiantes.", "La puerta con cascada de información en píxeles le pareció poco interesante y muy parecida a Matrix.", "Dejó una nota adhesiva en el tablero de Canva: para el público objetivo, lo propuesto todavía no llega al nivel que se desearía."],
          ideas: ["Con poca luz, dejar los LED dentro de la estructura y rodear el borde con una tira de luces blancas para que el exterior no pase desapercibido.", "Algo más experimental e inmersivo: un juego, interacción con inteligencia artificial, fotos modificadas con IA o realidad alterada.", "Proyectar en la puerta una animación con una figura, un muñeco o un anime que genere expectativa."],
          lectura: "María Victoria fue la más crítica y se lo agradecemos: esa nota adhesiva la tomamos como punto de partida. Su idea de que el borde se vea en la noche nos sirvió para pensar la luz como parte de la forma.",
          tag: "adaptada", decision: "La luz del borde inspira la iluminación neón como recurso ambiental. Lo de la experiencia interior (juego, IA, animación) se desarrolla en Desarrollo formal." },
        { id: "julia", nombre: "Julia Ulrich", perfil: "Estudiante de cine y audiovisuales, Universidad del Magdalena", por: "Nicole Salas", vio: "La evolución: Versión 1 y versión con arcos, plantas, QR y holograma", aviso: "", video: "https://youtu.be/irIxx183FvI?si=44wHsv6L46uZGtXW",
          destaco: ["Le gustó más la versión con plantas porque se ve más acogedora.", "Como estudiante de último grado entraría por pura curiosidad: las propuestas de otras universidades le parecían aburridas.", "El holograma le pareció súper llamativo y no lo quitaría.", "No le pareció pequeño el túnel: en el dibujo se ve buen espacio sobre la cabeza."],
          cuestiono: ["Su miedo principal era que la estructura se cayera."],
          ideas: ["Pintar el techo y las partes grises en color madera, que combina con las plantas y se vería futurista junto al holograma.", "Columnas aparte, como las de una carpa de camping, o triángulos rectos en vez de inclinados para ganar estabilidad.", "Maderas muy livianas o madera sintética (plástico mezclado, resistente y más amable con el ambiente), dato que nos pasó por su papá, que es maderero.", "Un abanico que proyecta fotos y videos con el giro de sus aspas, una tecnología que podríamos explorar (no del todo)."],
          lectura: "Julia nos recordó que el holograma es un imán y que la seguridad de la estructura no se puede dar por hecha. Sus ideas de materiales y del abanico las dejamos anotadas: son interesantes, pero con el giro al inflable cambiaron de contexto.",
          tag: "libreta", decision: "El holograma se queda. Las ideas de madera, columnas y abanico holográfico quedan en la libreta: no hay una decisión registrada sobre ellas." },
        { id: "raul", nombre: "Raúl Pérez", perfil: "Contador público y especialista en gerencia de gestión humana", por: "Nicole Salas", vio: "Versión triangular y el inflable con forma de control", aviso: "", video: "https://youtu.be/phVPvC59hUM?si=NQC92ZgIUmkOy-zv",
          destaco: ["El morado le parece acertado y muy llamativo, sobre todo por ser el color de la universidad.", "Eligió el inflable sobre la versión triangular (que le recordó a un museo, un jardín botánico o un coworking): despierta curiosidad, se monta y desmonta fácil y con sus luces LED transmite tecnología y futuro.", "No le cambiaría nada, ni siquiera los colores negro y gris."],
          cuestiono: ["La consola atrae sobre todo a hombres y deja de lado a las mujeres, aunque reconoce que eso ha ido cambiando. En su nota final dice que estaría excluyendo a parte del público objetivo.", "Las encuestas vocacionales pueden resultar tediosas."],
          ideas: ["Como es un pasillo que la gente recorre, debería haber cosas con las que interactuar y personas que orienten, más allá de los QR.", "Un demo por programa: un mini diseño hecho desde el celular (escudo, bandera, logo) o una versión beta de un videojuego para probar y comentar.", "Encuestas vocacionales muy visuales e interactivas.", "Jugar con los colores y las luces del inflable para no dejar a nadie por fuera.", "Un pasillo iluminado y lleno de información, no oscuro como una casa del terror."],
          lectura: "Raúl nos dio dos cosas: confirmó el morado y nos hizo ver que el mando por sí solo no le habla a todo el mundo. Y su idea de que haya personas que orienten fue casi literal una decisión de recorrido.",
          tag: "adoptada", decision: "Se adopta: un estudiante que orienta en cada puerta, el morado con los tonos institucionales y luz como recurso ambiental. Los demos y encuestas del interior se tratan en Desarrollo formal." }
      ],
      encuesta: {
        n: 20, fecha: "15 de noviembre de 2026",
        lectura: "n = 20 · cada respuesta pesa 5 puntos · margen de error ≈ ±22: sirve para ver tendencias, no diferencias finas.",
        criterios: [
          { id: "entiende", t: "Se entiende", a: [35, 25, 50], m: [2.85, 2.95, 3.25] },
          { id: "llamativa", t: "Forma llamativa", a: [45, 45, 65], m: [2.80, 3.25, 3.50] },
          { id: "proporciones", t: "Proporciones", a: [45, 40, 45], m: [2.95, 3.05, 3.25] },
          { id: "invita", t: "Invita a entrar", a: [30, 60, 70], m: [2.75, 3.50, 3.50] },
          { id: "comunica", t: "Comunica Dis. Digital", a: [20, 45, 65], m: [2.50, 3.15, 3.50] }
        ],
        promedio: { m: [2.77, 3.18, 3.40], sin: [2.91, 3.40, 3.67], acuerdo: [35, 43, 59] },
        resuelta: [
          { t: "Más atractiva", v: [5, 35, 60, 0] },
          { t: "Más coherente", v: [15, 35, 40, 10] },
          { t: "Invita a entrar", v: [10, 25, 65, 0] },
          { t: "Comunica Dis. Digital", v: [10, 35, 55, 0] },
          { t: "LA MEJOR", v: [10, 40, 45, 5] }
        ],
        atractivo: [["Silueta y forma", 75], ["Componentes tecnológicos", 50], ["Techo y luz", 45], ["Geometría triangular", 45], ["Forma de mando", 40], ["Color y plantas", 20], ["Espacio interior", 15], ["Estructura y arcos", 10]],
        componentes: [
          { t: "Estudiante guía", c: 74, aj: null },
          { t: "Tipografía y mensajes", c: 78, aj: 17 },
          { t: "Cascada / holograma", c: 74, aj: 11 },
          { t: "Consola + QR", c: 63, aj: 21 },
          { t: "Techo triangular", c: 50, aj: 28 },
          { t: "Mando / inflable (V3)", c: 50, aj: 28 },
          { t: "Arcos y uniones", c: 47, aj: 11 },
          { t: "Tragaluz", c: 47, aj: 21 },
          { t: "Plantas sintéticas", c: 39, aj: 22 },
          { t: "Pilares laterales", c: 37, aj: 26 }
        ],
        zonas: [
          { t: "Se conserva", c: "ok", items: ["Tipografía y mensajes 78%", "Cascada / holograma 74%", "Estudiante guía 74%", "Consola + QR 63%"] },
          { t: "Se ajusta", c: "mid", items: ["Techo triangular", "Pilares laterales", "Tragaluz", "Arcos y uniones"] },
          { t: "Opinión dividida", c: "bad", items: ["Plantas sintéticas: 39% conservar, 33% reemplazar o eliminar", "Mando / inflable: 50% conservar, 39% ajustar o simplificar, 11% eliminar"] }
        ],
        consola: [["89%", "mantendría la consola"], ["35%", "dice que no se integra (problema nº 1)"], ["30%", "ve el QR poco claro"], ["≈30%", "pide complementarla con otro elemento"]],
        consolaNota: "Atrae y es memorable, pero sola reduce Diseño Digital a un videojuego.",
        problemas: [["Ningún problema", 35], ["Consola poco integrada", 35], ["QR poco visible", 30], ["Holograma poco visible", 25], ["Textos pequeños", 20], ["Exceso de elementos", 20], ["Botones 1-2-3 poco claros", 15], ["Recursos innecesarios", 5]],
        estructura: [["70%", "considera conveniente un sistema desmontable"], ["50%", "ve la estructura estable (30% en desacuerdo)"], ["45%", "cree adecuada la cantidad de piezas"], ["35%", "ve convenientes las uniones"]],
        cambiarias: [["Espacio interior más amplio", 55], ["Simplificar piezas", 30], ["Cambiar materiales", 25], ["Simplificar techo", 25], ["Reorganizar arcos", 25], ["Reforzar uniones", 20], ["Proporciones del túnel", 15], ["No cambiaría nada", 15]],
        primero: [["Forma y proporciones exteriores", 55], ["Estructura y ensamblaje", 40], ["Techo y luz", 40], ["Elegir versión base", 35], ["Consola y QR", 25], ["Plantas y color", 25], ["Tipografía y mensajes", 15], ["Holograma y píxeles", 15], ["Recorrido y guía", 5]],
        voces: [["Falta claridad: qué es y para qué sirve", 7], ["La consola atrae pero no alcanza", 6], ["Seguridad, durabilidad y tamaño", 5], ["Modularidad y armado fácil", 5], ["Quitar plantas o estudiante guía", 4], ["Conectar interior y exterior", 4], ["Holograma / píxeles: impacto", 4], ["Más color, menos metálico", 3]],
        curiosos: [["35% → 63%", "La consola «no se integra» (35%), pero 63% la conservaría tal cual: gusta, pero se ve aislada."], ["9 de 9", "Quienes eligen la V3 como la mejor también la ven como la más atractiva."], ["50%", "V1 + V2 suman 50% de «la mejor»; la V3 sola, 45%."], ["15%", "Solo 15% no cambiaría nada de la estructura."]],
        pilares: [
          { t: "Consola como versión final, integrada", e: "CONFIRMADO", l: 3, d: "89% la conserva; es el problema nº 1." },
          { t: "Se necesita una mesa", e: "PLAUSIBLE · inferencia", l: 1, d: "Nadie la preguntó; una persona la pidió." },
          { t: "Descartar V1 y V2 como base", e: "V1 confirmado · V2 parcial", l: 2, d: "V1: solo 10% la elige. De la V2 se rescata holograma y montaje." }
        ]
      },
      aportes: [
        { tag: "adoptada", t: "Una mesa al frente", de: "Óscar, Santiago y la encuesta", d: "Una mesa plegable por puerta." },
        { tag: "adoptada", t: "Personas que orienten", de: "Raúl, Santiago · 74% conserva al guía", d: "Un estudiante por puerta." },
        { tag: "adoptada", t: "Quedarnos con la V3 y el holograma en la puerta", de: "Santiago, Raúl · 45% la elige", d: "Estructura neumática definitiva." },
        { tag: "adaptada", t: "Cortina contra la luz exterior", de: "Santiago", d: "Retroproyección opaca con blackout." },
        { tag: "adaptada", t: "Más color", de: "Santiago, Raúl · 15%", d: "Morado, azul y amarillo neón." },
        { tag: "adaptada", t: "Luz en el borde y ambiente futurista", de: "María Victoria, Santiago, Raúl", d: "Iluminación neón ambiental." },
        { tag: "adaptada", t: "No encasillar en videojuegos", de: "Óscar, Raúl · ≈30%", d: "Segunda cara: pantalla con cursor y glitch." },
        { tag: "adaptada", t: "Recorrido claro y recto", de: "Byron, Santiago", d: "Recorrido bilateral: dos puertas, ambas de entrada y salida." },
        { tag: "adaptada", t: "Ventanas para curiosear", de: "Byron · 20% pide conectar interior y exterior", d: "Lo resuelven las proyecciones y las dos caras." },
        { tag: "adoptada", t: "Más espacio interior", de: "Joan · 55%", d: "Estructura neumática." },
        { tag: "descartada", t: "Botones que reaccionan al tacto", de: "Santiago", d: "La luz es ambiental, no interactiva." },
        { tag: "descartada", t: "Aire acondicionado artesanal", de: "Óscar", d: "Componentes cerámicos: poco efímero." },
        { tag: "interior", t: "QR, juego, IA, demos, documental y AR", de: "María Victoria, Raúl, Óscar", d: "Ver Desarrollo formal." },
        { tag: "adoptada", t: "Seguridad y materiales del inflable", de: "25% · Julia", d: "Estructura neumática: más segura y fácil de montar." },
        { tag: "libreta", t: "Madera, columnas y abanico holográfico", de: "Julia", d: "Anotadas, sin decisión." }
      ],
      hallazgos: [
        { n: 1, id: "h1", t: "Lo que enamora no siempre es lo que funciona", viz: "votos", cifra: ["+1", "voto separa a la V3 de la V2 (9 vs 8)"], oimos: ["La V3 lidera los 5 criterios de agrado.", "Ningún criterio de «se entiende» pasa de 50%."], interpretamos: "Gana por impacto visual, no por solidez: es una base, no una respuesta.", decidimos: "Nos quedamos con el inflable y lo rodeamos de puertas, proyecciones, mesas y estudiantes que expliquen qué es." },
        { n: 2, id: "h2", t: "Una sola fachada se queda corta", viz: "caras", cifra: ["≈30%", "pide complementar la consola con otro elemento"], oimos: ["Óscar: el mando encasilla la carrera.", "Encuesta: sola, la consola reduce Diseño Digital a un videojuego.", "Raúl: atrae sobre todo a hombres."], interpretamos: "El mando es gancho, no identidad completa; y una sola fachada desperdicia la mitad del mobiliario.", decidimos: "Dos caras: el mando y una pantalla con cursor y glitch." },
        { n: 3, id: "h3", t: "Entrar y salir son dos momentos", viz: "recorrido", cifra: ["74%", "conserva al estudiante guía"], oimos: ["Santiago: organizar entrada y salida.", "Raúl: personas que orienten."], interpretamos: "Entrar y salir son dos momentos de la misma puerta. Y si hay dos caras, ambas necesitan función.", decidimos: "Recorrido bilateral con dos puertas. Cada puerta funciona a la vez como entrada y como salida: por ambas se puede entrar y salir. No son cuatro puertas. Cada una tiene su proyección, su mesa y un estudiante que recibe y despide." },
        { n: 4, id: "h4", t: "Queremos una cortina, no un vidrio", viz: "cortina", cifra: ["25%", "ve el holograma poco visible"], oimos: ["Santiago: la luz exterior arruina las pantallas.", "74% conserva la cascada / holograma."], interpretamos: "Gusta, pero debe verse bien y ocultar lo de atrás.", decidimos: "Las proyecciones de las puertas son cortinas visuales: superficie opaca de retroproyección con respaldo blackout, para que no se vea el fondo exterior y la imagen quede nítida." },
        { n: 5, id: "h5", t: "La mesa deja de ser un adorno", viz: "mesas", cifra: ["35%", "percibe la consola desconectada"], oimos: ["Óscar, Santiago y una persona de la encuesta pidieron mesa.", "QR (30%), textos (20%) y botones (15%) piden una superficie cómoda."], interpretamos: "El lenguaje del mando sirve a menor escala: recepción, información y apoyo. El informe la trata como hipótesis.", decidimos: "El antiguo mando pasa a ser una mesa plegable por puerta, atendida por un estudiante que recibe, explica y entrega información y materiales (folletos). Son módulos auxiliares: alojan y distribuyen conexiones eléctricas, controles, iluminación y proyecciones, y una aloja el sistema de insuflado, conectado al inflable con conductos. No generan aire ni energía por sí solas." },
        { n: 6, id: "h6", t: "Color y luz también son diseño", viz: "paleta", cifra: ["15%", "pide más color y menos aspecto metálico"], oimos: ["Santiago: se ve muy gris.", "Raúl: el morado es el de la universidad.", "María Victoria: que el borde se vea con luz."], interpretamos: "Color y luz hacen que se lea de lejos y que sea de la Sergio.", decidimos: "Morado, azul y amarillo neón con tonos institucionales, e iluminación neón ambiental. No reacciona al tacto." },
        { n: 7, id: "h7", t: "Lo efímero manda", viz: "efimero", cifra: ["70%", "ve conveniente un sistema desmontable"], oimos: ["Joan: las bases centrales estrechan el túnel.", "Óscar: aire acondicionado artesanal.", "Charla con el profesor Iván Darío sobre mobiliario efímero."], interpretamos: "Las estructuras neumáticas se montan fácil, son maleables, dan espacio libre amplio y permiten formas poco convencionales.", decidimos: "La estructura neumática es la propuesta definitiva; el aire acondicionado se descarta por viabilidad." }
      ],
      cambio: {
        antes: [
          ["Forma", "Inflable con la silueta de un control de consola, de 3 × 4 m."],
          ["Caras", "Una sola fachada."],
          ["Recorrido", "Unidireccional."],
          ["Entrada", "Una proyección holográfica."],
          ["Estudiantes", "Uno, al final de la experiencia."],
          ["Mesas", "Ninguna."],
          ["Color", "Se veía gris en los dibujos."],
          ["Interior", "Experiencia interactiva y consola proyectada."]
        ],
        ahora: [
          ["Forma", "Estructura neumática inspirada en el mando, transformada y con un interior más amplio."],
          ["Caras", "Dos: el mando y una pantalla con cursor y glitch."],
          ["Recorrido", "Bilateral: dos puertas; por ambas se entra y se sale."],
          ["Puertas", "Dos, cada una con una proyección tipo cortina visual (retroproyección opaca con blackout)."],
          ["Estudiantes", "Uno por puerta: recibe y despide."],
          ["Mesas", "Una mesa plegable por puerta, integrada al funcionamiento del inflable."],
          ["Color y luz", "Morado, azul y amarillo neón con tonos institucionales, más iluminación neón ambiental."],
          ["Interior", "Evolucionó: se explica en Desarrollo formal."]
        ],
        cierre: "La co-creación no fue el final del proceso: fue la etapa que nos permitió pasar de una idea básica a una propuesta más completa, con criterio y con argumentos."
      }
    },

         /* ACTIVIDAD EXTERNA: diseño de logo de diseño digital*/
    {
      id: "imagen-corporativa-dd",
      externa: true,
      url: "imagen-corporativa/index.html",
      semana: "Tercer corte",
      fecha: "19 de Noviembre de 2026",
      titulo: "Diseño de la imagen corporativa del programa",
      resumen: "Exposición interactiva de la nueva identidad visual del programa de Diseño Digital (Universidad Sergio Arboleda · COM+ID): concepto, imagotipo, logotipo, color, tipografía y sistema gráfico."
    }

  ]
   
  /* FIN: ACTIVIDADES DEL TERCER CORTE */
};
