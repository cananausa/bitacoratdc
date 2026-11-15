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
            { tipo: "Exterior de BETA", pie: "Con cortina proyectada que se actualiza con la información que va poniendo el estudiante." }
          ],
          comparacion: { antes: "semana-01/01", despues: "semana-02/01", etiquetaAntes: "Semana 1", etiquetaDespues: "Semana 2", nota: "Del esquema básico de una sola pieza al rediseño con arcos de tres tablas, techo modular, plantas y proyecciones digitales." } },
        { n: 3, id: "semana-03", periodo: "", titulo: "", objetivo: "",
          decisiones: [], cambios: [], problemas: [], resultados: "", ejes: [],
          galeria: [
            { tipo: "Diagramas de funcionamiento", pie: "" },
            { tipo: "Modelo tridimensional", pie: "" },
            { tipo: "Renderizado", pie: "" }
          ],
          comparacion: { antes: "semana-02/01", despues: "semana-03/01", etiquetaAntes: "Semana 2", etiquetaDespues: "Semana 3", nota: "" } },
        { n: 4, id: "semana-04", periodo: "", titulo: "", objetivo: "",
          decisiones: [], cambios: [], problemas: [], resultados: "", ejes: [],
          galeria: [
            { tipo: "Prototipo", pie: "" },
            { tipo: "Pruebas de interacción", pie: "" },
            { tipo: "Renderizado final", pie: "" }
          ],
          comparacion: { antes: "semana-03/01", despues: "semana-04/01", etiquetaAntes: "Semana 3", etiquetaDespues: "Semana 4", nota: "" } }
      ]
    }
,
    { id: "procesos-de-co-creacion", cocreacion: true, semana: "Semana 3 del proyecto", fecha: "",
      titulo: "PROCESOS DE CO-CREACIÓN: de las opiniones a las decisiones de BETA",
      resumen: "Sacamos una tercera versión de BETA (un inflable con forma de mando) a conversar con profesores, estudiantes y otras personas: 7 entrevistas y una encuesta a 20 personas. Esto fue lo que escuchamos y lo que cambiamos.",
      lema: "Escuchar no es obedecer: es contrastar, interpretar y decidir.",
      /* ENLACES REALES: pega aquí las URL. Mientras estén vacías, el botón aparece como «enlace pendiente». */
      encuestaUrl: "",
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
          { k: "Antes", t: "Estructura inicial", d: "La primera estructura se alzaba entre varias personas y la descartamos por peligrosa." },
          { k: "V1", t: "Túnel triangular «Beta»", d: "Un túnel triangular plegable que se despliega aplicando fuerza desde abajo, con dinámicas e interactivos de la carrera." },
          { k: "V2", t: "Arcos desmontables", d: "Arcos desmontables con luces LED, plantas, QR, consola proyectada y holograma (cascada de píxeles) en la entrada." },
          { k: "V3", t: "El inflable mando", d: "Una estructura efímera neumática con la silueta de un control de consola. Es la que pusimos a prueba." }
        ],
        tutor: "El tutor también tuvo reservas con la primera propuesta del mando: le faltaba desarrollo conceptual. Lo tomamos como parte de la conversación, no como un portazo."
      },
      prueba: {
        intro: "La V3 es un inflable de gran formato con la silueta de un control de consola de videojuegos, un guiño a uno de los énfasis de Diseño Digital de la Universidad Sergio Arboleda. Según lo que le mostramos a las personas, medía 3 × 2 metros y llevaba un muñeco adentro para dar la escala.",
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
        { id: "joan", nombre: "Joan Flores", perfil: "Estudiante de Marketing y Negocios Internacionales", por: "Víctor Viadet", vio: "Solo la V1 (túnel triangular Beta)", aviso: "No conoció ni opinó sobre la V2 ni la V3.", video: "",
          destaco: ["Al principio le parece una estructura rara porque rompe con la arquitectura convencional, pero dice que el ojo se adapta rápido.", "Su forma innovadora asombra y despierta una curiosidad natural: la gente se acercaría a curiosear.", "Le encanta la idea de usarlo como kiosco cubierto con contenidos proyectados y juegos interactivos para promocionar la carrera."],
          cuestiono: ["Quitar tubos de soporte para abrir ventanas o rendijas: pondría en riesgo la estabilidad y la seguridad.", "El túnel se siente algo estrecho porque las bases de soporte están justo en el centro."],
          ideas: ["Alinear y organizar muy bien los estantes informativos dentro y alrededor de la figura.", "Curvar un poco el techo, mover las bases a las esquinas y escoger materiales más flexibles para ganar espacio sin perder firmeza."],
          lectura: "De Joan nos quedó una pregunta que nos persiguió todo el proceso: ¿cómo ganamos espacio adentro sin que la estructura se sienta insegura?",
          tag: "adaptada", decision: "Se refleja en el paso a la estructura neumática: más espacio libre interior y una forma menos atada a geometrías básicas." },
        { id: "byron", nombre: "Byron", perfil: "Estudiante de Diseño Digital", por: "Víctor Viadet", vio: "Solo la V1 (túnel triangular Beta)", aviso: "No conoció ni opinó sobre la V2 ni la V3.", video: "",
          destaco: ["Primera impresión muy buena: juvenil y tecnológica gracias al estilo neón y al contraste entre colores.", "No le cambiaría nada del colorido general.", "Un mobiliario así le daría intriga por saber qué hay adentro y lo animaría a acercarse."],
          cuestiono: ["Rechazó volver la entrada curva o cuadrada: la curva sería genérica y la cuadrada se ve en todos lados."],
          ideas: ["Aperturas o rendijas arriba o a los lados para que la gente «chismosee» hacia adentro.", "Un túnel largo, para caminar con paciencia y a su ritmo.", "Un recorrido interior en línea recta, sin caminos confusos."],
          lectura: "Byron nos confirmó que el neón y la curiosidad desde afuera funcionan. Las ventanas no las llevamos tal cual, pero la idea de que el exterior invite a mirar sí la tradujimos a otras cosas.",
          tag: "adaptada", decision: "El neón entra como recurso ambiental, el recorrido se mantiene claro y lineal (entras por un lado, sales por el otro) y la curiosidad la despiertan las proyecciones y las dos caras, no ventanas." },
        { id: "santiago", nombre: "Santiago", perfil: "Estudiante de Diseño Digital", por: "Juan Domingo Vilá", vio: "V1, V2 y V3", aviso: "", video: "",
          destaco: ["V1: le gustó el sistema de plegado, la experiencia inicial y el espacio triangular por dentro.", "V2: le pareció súper atractivo el holograma justo en la puerta de entrada.", "V3: le gustó mucho; la sintió curiosa y con bastante potencial para atraer público."],
          cuestiono: ["V1: demasiado simple y abstracta visualmente; no sería llamativa.", "V2: tanta planta adentro podía estorbar la dinámica del lugar.", "V3: verla tan gris en los dibujos."],
          ideas: ["Meter morados, verdes neón o negros en los botones para darle calor y vida.", "Cortina de tela con cremallera para que la luz exterior no arruine las pantallas.", "Que los botones del control reaccionaran con luces de colores al tocarlos.", "Variar lo proyectado con luces brillantes y elementos tipo videojuego.", "Un mini espacio de atención o una mesita en la zona trasera para organizar entrada y salida.", "Su camino ideal: la V3 con la puerta holográfica de la V2 en el ingreso, sin letreros tradicionales."],
          lectura: "Santiago fue el que más ideas concretas nos dejó, y casi todas terminaron en la mesa de decisiones: color, cortina, holograma y mesa. La de los botones que reaccionan al tacto la dejamos de lado (más abajo contamos por qué).",
          tag: "adoptada", decision: "Elegimos la V3 como camino, el holograma de entrada se queda, el color cambia y aparece la mesa. La luz exterior la resolvemos con proyecciones opacas tipo cortina." },
        { id: "oscar", nombre: "Óscar Solano", perfil: "Profesor de Diseño Digital", por: "Juan Domingo Vilá", vio: "V1, V2 y V3", aviso: "", video: "",
          destaco: ["V1: al principio la veía como la más práctica, factible y económica.", "V2: se volvió su preferida al saber que el presupuesto era ilimitado; ofrece una visión más amplia e integral del diseño. Le pareció un puntazo el holograma de entrada, la consola con QR y la realidad aumentada en los celulares."],
          cuestiono: ["V1: la imagen en 2D no le dejaba claro cómo funcionaba por dentro ni por arriba; pidió un modelo 3D.", "V3: la rechazó tajantemente. Dice que el mando encasilla la carrera y crea un sesgo en jóvenes de grado 11, que creerían que van a estudiar solo videojuegos. También le preocupan los efectos del juego excesivo (aislamiento, ansiedad, desnutrición)."],
          ideas: ["Poner una mesa adelante para recibir a la gente.", "Meterle la ficha al trasfondo de la experiencia más que a la forma exterior; todo diseño debe cumplir viabilidad, deseabilidad y factibilidad.", "Un aire acondicionado artesanal sin electricidad, con cilindros.", "Un video tipo documental con el detrás de cámaras de cómo construimos el stand, más hologramas o realidad aumentada de bienvenida."],
          lectura: "Óscar fue la voz más opuesta a la V3 y por eso mismo una de las que más nos movió. Su crítica nos obligó a preguntarnos cómo conservar el gancho del mando sin que sea la única cara de Diseño Digital. De su lista, la mesa pasó, el aire acondicionado no.",
          tag: "adaptada", decision: "Adaptada: el mando se queda, pero con una segunda cara que no es videojuego (pantalla con cursor y glitch). La mesa se adopta. El aire acondicionado se descarta por viabilidad. Lo del interior (QR, AR, documental) se revisa en Desarrollo formal." },
        { id: "maria", nombre: "María Victoria Noguera", perfil: "Auditora de sistemas", por: "Nicole Salas", vio: "La evolución completa: estructura inicial, arcos con LED y holograma, e inflable mando de 3 × 2 m con muñeco", aviso: "", video: "",
          destaco: ["El control es más llamativo para adolescentes.", "La altura le parece adecuada."],
          cuestiono: ["Escanear un QR y responder una pregunta le daría pereza a los estudiantes.", "La puerta con cascada de información en píxeles le pareció poco interesante y muy parecida a Matrix.", "Dejó una nota adhesiva en el tablero de Canva: para el público objetivo, lo propuesto todavía no llega al nivel que se desearía."],
          ideas: ["Con poca luz, dejar los LED dentro de la estructura y rodear el borde con una tira de luces blancas para que el exterior no pase desapercibido.", "Algo más experimental e inmersivo: un juego, interacción con inteligencia artificial, fotos modificadas con IA o realidad alterada.", "Proyectar en la puerta una animación con una figura, un muñeco o un anime que genere expectativa."],
          lectura: "María Victoria fue la más crítica y se lo agradecemos: esa nota adhesiva la tomamos como punto de partida. Su idea de que el borde se vea en la noche nos sirvió para pensar la luz como parte de la forma.",
          tag: "adaptada", decision: "La luz del borde inspira la iluminación neón como recurso ambiental. Lo de la experiencia interior (juego, IA, animación) se desarrolla en Desarrollo formal." },
        { id: "julia", nombre: "Julia", perfil: "Estudiante de cine y audiovisuales, Universidad del Magdalena", por: "Nicole Salas", vio: "La evolución: estructura inicial, y versión con arcos, plantas, QR y holograma", aviso: "", video: "",
          destaco: ["Le gustó más la versión con plantas porque se ve más acogedora.", "Como estudiante de último grado entraría por pura curiosidad: las propuestas de otras universidades le parecían aburridas.", "El holograma le pareció súper llamativo y no lo quitaría.", "No le pareció pequeño el túnel: en el dibujo se ve buen espacio sobre la cabeza."],
          cuestiono: ["Su miedo principal era que la estructura se cayera."],
          ideas: ["Pintar el techo y las partes grises en color madera, que combina con las plantas y se vería futurista junto al holograma.", "Columnas aparte, como las de una carpa de camping, o triángulos rectos en vez de inclinados para ganar estabilidad.", "Maderas muy livianas o madera sintética (plástico mezclado, resistente y más amable con el ambiente), dato que nos pasó por su papá, que es maderero.", "Un abanico que proyecta fotos y videos con el giro de sus aspas, una tecnología que podríamos explorar (no del todo)."],
          lectura: "Julia nos recordó que el holograma es un imán y que la seguridad de la estructura no se puede dar por hecha. Sus ideas de materiales y del abanico las dejamos anotadas: son interesantes, pero con el giro al inflable cambiaron de contexto.",
          tag: "libreta", decision: "El holograma se queda. Las ideas de madera, columnas y abanico holográfico quedan en la libreta: no hay una decisión registrada sobre ellas." },
        { id: "raul", nombre: "Raúl Pérez", perfil: "Contador público y especialista en gerencia de gestión humana", por: "Nicole Salas", vio: "Versión triangular y el inflable con forma de control", aviso: "", video: "",
          destaco: ["El morado le parece acertado y muy llamativo, sobre todo por ser el color de la universidad.", "Eligió el inflable sobre la versión triangular (que le recordó a un museo, un jardín botánico o un coworking): despierta curiosidad, se monta y desmonta fácil y con sus luces LED transmite tecnología y futuro.", "No le cambiaría nada, ni siquiera los colores negro y gris."],
          cuestiono: ["La consola atrae sobre todo a hombres y deja de lado a las mujeres, aunque reconoce que eso ha ido cambiando. En su nota final dice que estaría excluyendo a parte del público objetivo.", "Las encuestas vocacionales pueden resultar tediosas."],
          ideas: ["Como es un pasillo que la gente recorre, debería haber cosas con las que interactuar y personas que orienten, más allá de los QR.", "Un demo por programa: un mini diseño hecho desde el celular (escudo, bandera, logo) o una versión beta de un videojuego para probar y comentar.", "Encuestas vocacionales muy visuales e interactivas.", "Jugar con los colores y las luces del inflable para no dejar a nadie por fuera.", "Un pasillo iluminado y lleno de información, no oscuro como una casa del terror."],
          lectura: "Raúl nos dio dos cosas: confirmó el morado y nos hizo ver que el mando por sí solo no le habla a todo el mundo. Y su idea de que haya personas que orienten fue casi literal una decisión de recorrido.",
          tag: "adoptada", decision: "Se adopta: un estudiante que orienta en cada entrada y salida, el morado con los tonos institucionales y luz como recurso ambiental. Los demos y encuestas del interior se tratan en Desarrollo formal." }
      ],
      encuesta: {
        n: 20, fecha: "15 de noviembre de 2026",
        lectura: "Con n = 20, cada respuesta pesa 5 puntos porcentuales y el margen de error es de unos ±22 puntos. Los porcentajes sirven para ver tendencias, no diferencias finas. Los datos de este bloque salen del informe de hallazgos de la encuesta.",
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
          { t: "Zona de conservación (55% o más)", d: "Cascada/holograma (74%), tipografía y mensajes (78%), estudiante guía (74%) y consola + QR (63%). Son los elementos más aceptados." },
          { t: "Zona de ajuste", d: "Techo triangular, pilares, tragaluz y arcos: se aceptan, pero hay que afinarlos. Mensaje del informe: refinar la estructura, no reinventarla." },
          { t: "Zona dividida", d: "Plantas sintéticas (solo 39% conservar, 33% reemplazar o eliminar) y el mando/inflable (50% conservar, 39% ajustar o simplificar, 11% eliminar). Varios califican las plantas de innecesarias." }
        ],
        consola: [["89%", "mantendría la consola (conservar, ajustar o reorganizar)"], ["35%", "dice que no se integra con la estructura (problema nº 1)"], ["30%", "señala el QR como poco claro"], ["≈30%", "pide en abiertas complementarla con otro elemento"]],
        consolaNota: "La consola atrae y es memorable, pero por sí sola reduce el Diseño Digital a un videojuego. Sugieren integrarla con otro elemento de la carrera, cambiar la lógica de joystick por algo más cercano al código y los wireframes, o sumar proyecciones y elementos sensoriales hacia el exterior.",
        problemas: [["Ningún problema", 35], ["Consola poco integrada", 35], ["QR poco visible", 30], ["Holograma poco visible", 25], ["Textos pequeños", 20], ["Exceso de elementos", 20], ["Botones 1-2-3 poco claros", 15], ["Recursos innecesarios", 5]],
        estructura: [["70%", "considera conveniente un sistema desmontable"], ["50%", "ve la estructura estable (30% en desacuerdo)"], ["45%", "cree adecuada la cantidad de piezas"], ["35%", "ve convenientes las uniones"]],
        cambiarias: [["Espacio interior más amplio", 55], ["Simplificar piezas", 30], ["Cambiar materiales", 25], ["Simplificar techo", 25], ["Reorganizar arcos", 25], ["Reforzar uniones", 20], ["Proporciones del túnel", 15], ["No cambiaría nada", 15]],
        primero: [["Forma y proporciones exteriores", 55], ["Estructura y ensamblaje", 40], ["Techo y luz", 40], ["Elegir versión base", 35], ["Consola y QR", 25], ["Plantas y color", 25], ["Tipografía y mensajes", 15], ["Holograma y píxeles", 15], ["Recorrido y guía", 5]],
        voces: [
          ["Falta claridad sobre qué es y para qué sirve", "7 de 20 (35%)", "Piden una explicación breve y más ángulos del dibujo."],
          ["La consola es atractiva pero insuficiente", "6 de 20 (30%)", "Integrarla con otro elemento; ir más allá del joystick."],
          ["Seguridad, durabilidad y tamaño", "5 de 20 (25%)", "Inflable poco seguro, «tabla gigante peligrosa», espacio pequeño, ¿cuánta gente cabe?"],
          ["Valoran modularidad y armado fácil", "5 de 20 (25%)", "Plegable, modular, práctico de montar."],
          ["Quitar plantas sintéticas o estudiante guía", "4 de 20 (20%)", "Innecesarias o confusas; el guía sería prescindible."],
          ["Conectar interior y exterior", "4 de 20 (20%)", "Ventanas, proyecciones, letreros, placa informativa."],
          ["Valoran holograma / cascada de píxeles", "4 de 20 (20%)", "Genera impacto y motiva a entrar; falta explicarlo mejor."],
          ["Más color y menos aspecto metálico", "3 de 20 (15%)", "Recursos más coloridos; revisar la paleta."],
          ["Sin comentarios o «todo bien»", "≈6 de 20 (30%)", "Respuestas vacías o «ninguno»."]
        ],
        voz2: "Las cifras de comentarios abiertos son aproximadas: un mismo comentario puede tocar varios temas.",
        curiosos: [
          "Gusta, pero se percibe aislada: 35% dice que la consola no se integra y a la vez 63% la conservaría tal cual.",
          "Solo 35% dice no tener ningún problema con lo tecnológico: el rechazo a lo tecnológico es minoritario.",
          "Entre quienes eligen la V3 como la mejor (9 personas), el 100% también la considera la más atractiva.",
          "V1 + V2 suman 50% de «la mejor», más que la V3 sola (45%). No hay consenso absoluto.",
          "Solo 15% no cambiaría nada de la estructura."
        ],
        pilares: [
          { t: "Consola como versión final, integrada con otros elementos", e: "CONFIRMADO", d: "Solidez alta. 89% la conserva (63% tal cual, 21% con ajuste, 5% reorganizada); es el problema nº 1 (35% dice que no se integra) y unos 6 comentarios abiertos piden complementarla." },
          { t: "Se necesita una mesa", e: "PLAUSIBLE (inferencia)", d: "Solidez baja-media. La encuesta no preguntó por la mesa: una persona la pide explícitamente («hace falta una mesa afuera») y otra describió los dibujos como «una mesa de ping pong». Se sostiene de forma indirecta." },
          { t: "Descartar las versiones 1 y 2", e: "V1 CONFIRMADO · V2 PARCIAL", d: "La V1 es la peor en 5 de 5 criterios y solo 10% la elige. La V2 compite de cerca: se descarta como base, pero se rescatan su holograma, su modularidad y su aspecto natural." }
        ],
        mesaSenales: ["35% percibe la consola desconectada del resto: una mesa podría integrarla.", "20% pide más conexión interior-exterior: una mesa exterior sería punto de atención e información.", "Los problemas de QR (30%), botones (15%) y textos (20%) son de interacción: una mesa daría superficie a una altura cómoda."]
      },
      aportes: [
        { tag: "adoptada", t: "Una mesa al frente para recibir a la gente", q: "Óscar (mesa adelante), Santiago (mesita atrás) y una persona en la encuesta («hace falta una mesa afuera»)", d: "El antiguo mando se vuelve una mesa plegable complementaria; hay una por cada entrada." },
        { tag: "adoptada", t: "Personas que orienten a los visitantes", q: "Raúl, Santiago; 74% conserva al estudiante guía", d: "Un estudiante en cada entrada y otro atendiendo cada salida." },
        { tag: "adoptada", t: "Quedarnos con la V3 y llevar el holograma a la entrada", q: "Santiago, Raúl; 45% la elige como la mejor", d: "La estructura neumática es la propuesta definitiva, con proyección en las entradas." },
        { tag: "adaptada", t: "Una cortina para que la luz exterior no arruine las pantallas", q: "Santiago (cortina de tela con cremallera)", d: "Proyecciones de entrada como cortinas visuales: superficie opaca de retroproyección con respaldo blackout." },
        { tag: "adaptada", t: "Más color: morado, verde neón o negro", q: "Santiago; Raúl (el morado es el de la universidad); 15% pide más color", d: "Morado, azul y amarillo neón junto a los tonos institucionales de la Sergio." },
        { tag: "adaptada", t: "Luces para que la estructura se vea de noche y se sienta futurista", q: "María Victoria (borde iluminado), Santiago, Raúl", d: "Iluminación neón como recurso ambiental." },
        { tag: "adaptada", t: "No encasillar la carrera en videojuegos", q: "Óscar; ≈30% pide complementar la consola; Raúl (el mando atrae sobre todo a hombres)", d: "Dos caras: una con el mando y otra con una pantalla con cursor y glitch." },
        { tag: "adaptada", t: "Un recorrido claro y recto", q: "Byron; Santiago (organizar entrada y salida)", d: "Recorrido bilateral: entras por un lado y sales por el otro." },
        { tag: "adaptada", t: "Que desde afuera se despierte la curiosidad (ventanas, rendijas)", q: "Byron; 20% pide conectar interior y exterior", d: "No abrimos ventanas: la curiosidad la despiertan las proyecciones de las entradas y las dos caras." },
        { tag: "adoptada", t: "Más espacio interior", q: "Joan (túnel estrecho); 55% quiere más espacio", d: "La estructura neumática ofrece un espacio libre más amplio." },
        { tag: "descartada", t: "Botones del control que reaccionan al tacto con luces", q: "Santiago", d: "No hace falta que las luces reaccionen: su trabajo es dar presencia visual y atmósfera." },
        { tag: "descartada", t: "Aire acondicionado artesanal sin electricidad", q: "Óscar", d: "Según la solución planteada en la conversación, requería componentes cerámicos que no encajan con un mobiliario efímero, fácil de instalar, desmontar y transportar." },
        { tag: "interior", t: "Experiencias del interior: QR pesado, juego, IA, animación, demos, documental y AR", q: "María Victoria, Raúl, Óscar", d: "La experiencia interna y la consola proyectada también cambiaron; se explican en Desarrollo formal." },
        { tag: "validar", t: "Seguridad y materiales del inflable", q: "25% menciona seguridad, durabilidad o tamaño; 25% cambiaría materiales; Julia (miedo a que se caiga)", d: "Queda como punto de validación técnica antes de fabricar." },
        { tag: "libreta", t: "Madera, columnas tipo carpa y abanico holográfico", q: "Julia", d: "Ideas anotadas; no hay una decisión registrada sobre ellas." }
      ],
      hallazgos: [
        { n: 1, id: "h1", t: "Lo que enamora no siempre es lo que funciona", viz: "votos",
          oimos: ["La V3 lidera los 5 criterios de agrado, pero en el veredicto final le gana a la V2 por 1 voto (9 vs 8).", "Entre quienes la eligen la mejor, el 100% también la ve como la más atractiva.", "Ningún criterio de «se entiende» supera 50% (35 / 25 / 50)."],
          interpretamos: "La V3 gana por impacto visual, no por solidez. Es una buena base para arrancar, pero no una respuesta cerrada: se veía bien y todavía no se entendía bien.",
          decidimos: "Nos quedamos con el inflable y lo rodeamos de lo que lo hace funcionar: entradas, proyecciones, mesas y estudiantes que expliquen qué es." },
        { n: 2, id: "h2", t: "Una sola fachada se queda corta", viz: "caras",
          oimos: ["Óscar: el mando encasilla la carrera y crea un sesgo en jóvenes de grado 11.", "Encuesta: la consola atrae pero, sola, reduce el Diseño Digital a un videojuego (≈30%); piden un segundo elemento (código, wireframes, pantalla).", "Raúl: la consola atrae sobre todo a hombres."],
          interpretamos: "El mando es un gancho potente, pero no puede cargar con toda la identidad de Diseño Digital. Además, un mobiliario que solo se aprecia desde el frente desperdicia la mitad de su presencia.",
          decidimos: "El inflable tendrá dos caras visualmente distintas: una conserva la referencia al mando y la otra parece una pantalla con un cursor y un efecto de glitch." },
        { n: 3, id: "h3", t: "Entrar y salir son dos momentos de la experiencia", viz: "recorrido",
          oimos: ["Santiago: organizar bien el recorrido de entrada y salida con un mini espacio de atención atrás.", "Raúl: personas que orienten a quien recorre el pasillo.", "Encuesta: 74% conserva al estudiante guía; 35% no entiende bien qué es."],
          interpretamos: "Si el mobiliario tiene dos caras, las dos necesitan función. Y una experiencia con inicio y cierre claros se entiende mejor.",
          decidimos: "Recorrido bilateral: dos entradas y dos salidas. Cada entrada con su proyección y un estudiante que orienta; en cada salida, otro estudiante cierra la experiencia." },
        { n: 4, id: "h4", t: "Queremos una cortina, no un vidrio", viz: "cortina", validar: true,
          oimos: ["Santiago: la luz del exterior puede arruinar las pantallas; propone una cortina de tela con cremallera.", "Julia y otros: el holograma es súper llamativo. En la encuesta, 74% lo conserva o ajusta.", "Encuesta: 25% ve el holograma poco visible. María Victoria opinó que la cascada de píxeles se parece a Matrix."],
          interpretamos: "El holograma gusta, pero hay que verlo bien y puede servir de umbral: no queremos que se vea el fondo exterior a través de él, sino una cortina visual que haga más inmersivo el ingreso y oculte lo que pasa detrás.",
          decidimos: "Las dos proyecciones de entrada serán cortinas visuales. Propuesta conceptual: superficie opaca de retroproyección con respaldo blackout y una capa adecuada para recibir la imagen. Una lámina transparente dejaría ver el fondo y no cumpliría. Requiere validación técnica." },
        { n: 5, id: "h5", t: "La mesa deja de ser un adorno", viz: "mesas", validar: true,
          oimos: ["Óscar y Santiago pidieron una mesa (adelante o atrás); una persona en la encuesta dijo «hace falta una mesa afuera».", "35% percibe la consola desconectada; QR (30%), textos (20%) y botones (15%) son problemas de interacción.", "Algunas personas encontraron atractivo el mando inicial, otras lo vieron arriesgado y poco desarrollado; el tutor también tuvo reservas."],
          interpretamos: "El mando no merecía irse a la basura: su lenguaje formal sirve a menor escala. Una mesa da recepción, información y una superficie cómoda para lo que se manipula. Ojo: el informe trata la mesa como hipótesis, no como dato directo.",
          decidimos: "El antiguo mando se vuelve una mesa plegable complementaria, con el mismo concepto y el armado de la V1 de BETA pero en escala menor. Hay una por entrada, atendida por un estudiante; en la salida se entregan los últimos materiales (folletos). Las mesas se integran al funcionamiento: pueden alojar o distribuir conexiones eléctricas, controles, iluminación y proyecciones, y una podría alojar el sistema de insuflado conectado al inflable con conductos. Es una decisión de diseño por comprobar técnicamente; las mesas no generan aire ni energía por sí solas." },
        { n: 6, id: "h6", t: "Color y luz también son decisiones de diseño", viz: "paleta",
          oimos: ["Santiago: el inflable se ve muy gris; propone morados, verdes neón o negros.", "Raúl: el morado es acertado por ser el de la universidad; el pasillo debe ser iluminado, no una casa del terror.", "María Victoria: dejar el borde visible con luz. Encuesta: 15% pide más color y menos aspecto metálico."],
          interpretamos: "El color y la luz son lo que hace que el inflable se lea desde lejos y que sea del mundo de la Sergio. La luz no tiene que ser interactiva para cumplir su función.",
          decidimos: "Paleta de morado, azul y amarillo neón junto a los tonos institucionales. Iluminación neón como recurso ambiental para dar espectacularidad, resaltar la forma y reforzar la atmósfera futurista. No reacciona al tacto." },
        { n: 7, id: "h7", t: "Lo efímero manda: si no se monta y transporta fácil, no va", viz: "efimero",
          oimos: ["Joan: las bases centrales estrechan el túnel; quitar tubos pone en riesgo la seguridad.", "Óscar propuso aire acondicionado artesanal sin electricidad.", "Encuesta: 70% ve conveniente un sistema desmontable; 55% quiere más espacio; estabilidad dividida (50% de acuerdo, 30% en desacuerdo).", "Charla con el profesor Iván Darío sobre tipos de mobiliario efímero."],
          interpretamos: "En esa charla vimos que las estructuras neumáticas se montan fácil, son maleables, dan un espacio libre amplio y permiten formas poco convencionales. Nos pareció una solución más segura, más versátil y mucho más interesante para un espacio único.",
          decidimos: "La estructura neumática pasa a ser la propuesta definitiva. El aire acondicionado se descarta: es una decisión de viabilidad y coherencia con el carácter temporal del proyecto, no un rechazo a mejorar la comodidad térmica." }
      ],
      cambio: {
        antes: [
          ["Forma", "Inflable con la silueta de un control de consola, de 3 × 2 m."],
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
          ["Recorrido", "Bilateral: dos entradas, dos salidas."],
          ["Entrada", "Dos proyecciones tipo cortina visual (retroproyección opaca con blackout, por validar)."],
          ["Estudiantes", "Uno orientando cada entrada y otro en cada salida."],
          ["Mesas", "Dos mesas plegables complementarias que apoyan el funcionamiento (por validar)."],
          ["Color y luz", "Morado, azul y amarillo neón con tonos institucionales, más iluminación neón ambiental."],
          ["Interior", "Evolucionó: se explica en Desarrollo formal."]
        ],
        cierre: "La co-creación no fue el final del proceso: fue la etapa que nos permitió pasar de una idea básica a una propuesta más completa, con criterio y con argumentos."
      }
    }

  ]
  /* FIN: ACTIVIDADES DEL TERCER CORTE */
};
