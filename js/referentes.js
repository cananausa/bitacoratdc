/* ANÁLISIS DE REFERENTES · Tercer corte · Cañaña
   Este archivo contiene los DATOS (arriba) y el dibujo de la página (abajo).
   Para cambiar textos, edita solo los bloques entre "INICIO DATOS" y "FIN DATOS".
   IMÁGENES: guarda cada foto en assets/img/referentes/ con el nombre que aparece en su recuadro
   (por ejemplo referente-01-research-pavilion.jpg). Extras opcionales: añade -2 o -3 al nombre. */
(function () {
  "use strict";
  /* ===================== INICIO DATOS ===================== */
  const PDF = "assets/documentos/matriz-referentes.pdf"; // PDF de la matriz completa (guárdalo con este nombre)
  const IMG = "assets/img/referentes/";

  /* PIES DE FOTO: "Nota. Figura N. Nombre. Fotografía de X. Tomado de: sitio (año)."
     Cada línea apunta a una página real donde aparecen las fotos del proyecto. REVISA que la foto de tu matriz
     coincida con la de la página; si no, cambia nombre, autor, fuente, año y enlace por los de la página de tu foto. */
  const CREDITOS = {
    "referente-01-research-pavilion": { nombre: "ICD/ITKE Research Pavilion 2016-17", autor: "Laurian Ghinitoiu; Burggraf / Reichert; ICD-ITKE University of Stuttgart", fuente: "archdaily.com", anio: "2017", url: "https://www.archdaily.com/869450/icd-itke-research-pavilion-2016-17-icd-itke-university-of-stuttgart" },
    "referente-02-zoom-pavilion": { nombre: "Rafael Lozano-Hemmer and Krzysztof Wodiczko, Zoom Pavillion, 2015. Pseudomatismos, MUAC, Mexico, 2015", autor: "Antimodular Studio", fuente: "vice.com", anio: "2015", url: "https://www.vice.com/en/article/pseudomatisms-exhibition-finds-patterns-in-the-randomness" },
    "referente-03-buga-fibre-pavilion": { nombre: "BUGA Fibre Pavilion | ICD/ITKE University of Stuttgart", autor: "Roland Halbe", fuente: "arch2o.com", anio: "2019", url: "https://www.arch2o.com/?p=305284" },
    "referente-04-digital-water-pavilion": { nombre: "Digital Water Pavilion, a project by Carlo Ratti Associati", autor: "Ramak Fazal", fuente: "mab14.mediaarchitecture.org", anio: "2014", url: "https://mab14.mediaarchitecture.org/?p=1022" },
    "referente-05-poem-pavilion": { nombre: "UK Pavilion at Dubai Expo 2020 by Es Devlin", autor: "Ry Galloway y Alin Constantin", fuente: "dezeen.com", anio: "2021", url: "https://www.dezeen.com/2021/09/29/dubai-expo-2020-uk-pavilion-es-devlin/" },
    "referente-06-philips-pavilion": { nombre: "AD Classics: Expo '58 Philips Pavilion / Le Corbusier and Iannis Xenakis", autor: "Wouter Hagens", fuente: "archdaily.com", anio: "s. f.", url: "https://www.archdaily.com/157658/ad-classics-expo-58-philips-pavilion-le-corbusier-and-iannis-xenakis" },
    "referente-07-hive-pavilion": { nombre: "The Hive: A Human and Robot Collaborative Building Process", autor: "", fuente: "icd.uni-stuttgart.de", anio: "s. f.", url: "https://icd.uni-stuttgart.de/?p=15961" },
    "referente-08-seed-cathedral": { nombre: "UK Pavilion for Shanghai World Expo 2010 | Heatherwick Studio", autor: "Daniele Mattioli", fuente: "arch2o.com", anio: "2010", url: "https://www.arch2o.com/?p=72184" },
    "referente-09-future-space-pavilion": { nombre: "Future Space Pavilion in Milan", autor: "Oskar Da Riz", fuente: "e-architect.com", anio: "2018", url: "https://e-architect.com/milan/future-space-pavilion-in-milan" },
    "referente-10-hy-fi": { nombre: "Hy-Fi at MoMA PS1", autor: "Barkow Photo", fuente: "world-architects.com", anio: "2014", url: "https://www.world-architects.com/de/architecture-news/found/hy-fi-at-moma-ps1" },
    "referente-11-smart-police-station": { nombre: "A Smart Police Station in Dubai", autor: "Dubai Police (material suministrado)", fuente: "gulfnews.com", anio: "s. f.", url: "https://gulfnews.com/uae/16-smart-police-stations-now-operational-in-dubai-1.81194216" },
    "referente-12-we-design-pop-up": { nombre: "We Design Pop-Up", autor: "Ryan Pflaum", fuente: "ryan-id.com", anio: "s. f.", url: "https://ryan-id.com/we-design-pop-up" }
  };

  const EJES = { int: "Interacción y audiovisual", fab: "Fabricación y estructura", mat: "Material y exhibición" };

  /* Los 12 referentes salen de la matriz del PDF. a = atributos que coinciden · p = cualidades propias · c = características comunes */
  /* Los referentes #13 a #18 salen de una investigación adicional. Cambia false por true para mostrarlos. */
  const INCLUIR_INVESTIGACION_ADICIONAL = false;
  const REF_TODOS = [
    { n: 1, id: "research-pavilion", nombre: "Research Pavilion", anio: "2016–2017", lugar: "Stuttgart, Alemania", pais: "DE", eje: "fab",
      autor: "Estudiantes e investigadores del ICD/ITKE, Universidad de Stuttgart (arquitectos, ingenieros y biólogos)",
      tipo: "Pabellón experimental · stand demostrativo",
      concepto: "Pabellón que demuestra una forma de construir inspirada en las redes de seda de unas polillas. Dos robots y un dron colocan las fibras una por una, sin moldes.",
      tec: ["Fibra de vidrio y carbono", "2 robots + 1 dron", "Sin moldes"],
      forma: "Entramado ligero de fibras superpuestas que da sombra alargada; estructura abierta y de forma orgánica.",
      inter: "La gente lo usa como sombra o mobiliario mientras los robots siguen sumando capas: una demostración a través de la práctica.",
      pos: "Manufactura doblemente singular: forma y material inspirados en la naturaleza, y robots que se complementan para construirlo.",
      mej: "El resultado funciona como un «techo bonito»: no opera como stand ni como sitio específico de promoción.",
      a: "El mobiliario se arma frente a la gente, igual que el montaje de BETA; ambos dan sombra con un entramado y son proyectos universitarios que promocionan la innovación.",
      ap: "Mostrar el proceso de armado como parte de la experiencia y usar la superposición de piezas como recurso de diseño." },
    { n: 2, id: "zoom-pavilion", nombre: "Zoom Pavilion", anio: "2015", lugar: "Ciudad de México (creado en el MUAC)", pais: "MX", eje: "int",
      autor: "Rafael Lozano-Hemmer y Krzysztof Wodiczko",
      tipo: "Instalación interactiva · museo digital",
      concepto: "Instalación sobre la relación entre personas, tecnología y vigilancia: convierte un espacio físico en un entorno audiovisual donde los visitantes son parte de la obra.",
      tec: ["Algoritmos de reconocimiento facial", "Cámaras robóticas con zoom", "Proyección sobre 3 muros"],
      forma: "Tres muros de proyección rodean al visitante, en lugar de una sola pantalla frontal.",
      inter: "Detecta presencia y movimiento y proyecta a gran escala los rostros de los visitantes: dejan de ser observadores y pasan a ser protagonistas.",
      pos: "Intención crítica: reúne tecnología de punta y reflexión social, algo poco visto en el ámbito.",
      mej: "Su espacialidad es convencional (paredes a 90° como en los museos) y su proyección usa software de cine, sin un sistema propio.",
      a: "Ambos usan el espacio como medio de comunicación y hacen sentir al visitante cómo su recorrido queda registrado y representado.",
      ap: "Incorporar proyección en BETA para modernizar una propuesta hoy análoga, de modo que el espacio responda a quien lo recorre." },
    { n: 3, id: "buga-fibre-pavilion", nombre: "BUGA Fibre Pavilion", anio: "2019", lugar: "Bundesgartenschau, Heilbronn, Alemania", pais: "DE", eje: "fab",
      autor: "ICD/ITKE, Universidad de Stuttgart · Achim Menges y Jan Knippers",
      tipo: "Pabellón de exposición",
      concepto: "Espacio cubierto en un punto central de la feria, con una muestra adentro. Su forma parte de las alas de los escarabajos y lo fabricaron robots.",
      tec: ["Fibra de vidrio y carbono", "Robot de bobinado de fibras", "Membrana ETFE", "60 componentes a medida"],
      forma: "Cubierta translúcida que parece una tela con trazos oscuros; más de 23 m de luz libre y solo 7,6 kg por m².",
      inter: "El visitante entra, recorre y mira la exposición; la interacción es mínima.",
      pos: "Sin molde ni desperdicio de material, muy liviano (unas cinco veces menos que una estructura de acero) y resistente.",
      mej: "A simple vista parece un pabellón de feria corriente: la innovación está en cómo se fabricó y el visitante no la percibe.",
      a: "Imán de visitantes en un evento, diseño computacional, piezas que se repiten, estructura ligera y luz que entra al recorrido (el tragaluz de BETA).",
      ap: "Cambiar la construcción de los arcos: piezas más pequeñas, ligeras y transportables que se ensamblan en la universidad." },
    { n: 4, id: "digital-water-pavilion", nombre: "Digital Water Pavilion", anio: "2008", lugar: "Expo Zaragoza, España", pais: "ES", eje: "int",
      autor: "Carlo Ratti Associati (Carlo Ratti y Walter Nicolino), a partir de un concepto del MIT · Arup, Agence Ter, Siemens Madrid",
      tipo: "Pabellón de exposición",
      concepto: "Pabellón con paredes de agua: una hilera de válvulas controla la caída del agua como una impresora de tinta y dibuja patrones, imágenes y texto.",
      tec: ["Válvulas de agua tipo impresora", "Sensores de presencia", "Techo sobre pistones"],
      forma: "Cortinas de agua que separan espacios; lo único sólido es un techo que sube, baja o se pliega hasta el suelo. Geometría básica y rectangular.",
      inter: "Los sensores detectan a quien se acerca y abren la cortina para dejarlo pasar.",
      pos: "Primer intento de usar muros de agua a escala arquitectónica, como espacio cambiante y medio de comunicación.",
      mej: "Sin el agua, queda un edificio plano y de formas convencionales.",
      a: "Capacidad de cambiar de forma (el techo se aplana, la tabla de BETA se levanta), un umbral de entrada, una estructura que comunica y una zona informativa.",
      ap: "Una entrada que reacciona a quien llega. En BETA, esa entrada se propone como cascada de píxeles proyectada, no de agua." },
    { n: 5, id: "poem-pavilion", nombre: "The Poem Pavilion", anio: "2020", lugar: "Expo Dubái · Pabellón del Reino Unido", pais: "GB", eje: "int",
      autor: "Es Devlin (Studio Es Devlin, Londres) · Atelier One, Atelier Ten, Veretec, Avantgarde",
      tipo: "Pabellón-instalación con IA",
      concepto: "Pabellón en forma de cono, de madera contralaminada, donde cada visitante dona una palabra y un algoritmo de aprendizaje automático genera el poema colectivo que se ilumina en su fachada de 20 m de diámetro.",
      tec: ["Aprendizaje automático", "Fachada LED", "Madera contralaminada", "Inglés y árabe"],
      forma: "Cono de listones salientes que forma una fachada circular de 20 m de diámetro; por dentro, un vacío curvo con paredes de pantallas LED.",
      inter: "El visitante escribe palabras y las ve reflejadas en la fachada exterior, mientras disfruta del espacio interior.",
      pos: "Usa la IA para conectar pensamientos de una comunidad, no como simple demostración futurista; la arquitectura y la interactividad asombran por igual.",
      mej: "Elementos interiores estándar (barandas, baldosas, vidrio) y casetas simples a los lados; además, no es efímero ni fácil de mover.",
      a: "Instalación que funciona como centro experiencial para dar a conocer una propuesta; casi no se parece a BETA hoy, y ahí está la oportunidad.",
      ap: "Que los visitantes aporten contenido propio y que aparezca en tiempo real en la fachada del stand." },
    { n: 6, id: "philips-pavilion", nombre: "Philips Pavilion", anio: "1958", lugar: "Exposición Universal de Bruselas, Bélgica", pais: "BE", eje: "int",
      autor: "Iannis Xenakis (diseño) bajo la concepción de Le Corbusier · música de Edgard Varèse · encargo de Philips",
      tipo: "Pabellón corporativo · espectáculo audiovisual",
      concepto: "Un «poema electrónico»: música, imágenes proyectadas, luz y color integrados en una sola experiencia para mostrar el potencial de las nuevas tecnologías.",
      tec: ["Cientos de altavoces", "Proyección sobre las paredes", "Paneles prefabricados de concreto unidos por cables"],
      forma: "Forma irregular y curva; sus paredes servían además para proyectar imágenes y llevar el sonido. Funcionaba como caja negra.",
      inter: "Recorrido de entrada, exhibición y salida: el público quedaba envuelto unos minutos en luz y sonido.",
      pos: "Primer ambiente electrónico y espacial que combinó arquitectura, cine, luz y música; nació de una colaboración poco común entre arte y tecnología.",
      mej: "Caja negra con recorrido clásico; en el fondo era un gran stand publicitario de su empresa.",
      a: "La estructura es la experiencia, piezas prefabricadas que se repiten, imágenes con papel central (el pendón de BETA), arte con tecnología y carácter pasajero (se demolió en 1959).",
      ap: "Entender el recorrido como un poema que se vive y no solo como un mueble." },
    { n: 7, id: "hive-pavilion", nombre: "HIVE Pavilion", anio: "2015", lugar: "Las Vegas, Estados Unidos · Autodesk University", pais: "US", eje: "fab",
      autor: "Autodesk (Applied Research Lab, Research y The Living) · Institute for Computational Design (Universidad de Stuttgart) · Marcelo Coelho Studio",
      tipo: "Pabellón experimental",
      concepto: "Estructura de unos 3,7 m (12 pies) construida en vivo durante los tres días del evento por asistentes sin experiencia previa (más de cien voluntarios), junto con robots colaborativos.",
      tec: ["224 módulos de tensegridad", "Bambú y fibras de unión", "Robots colaborativos Universal Robots (UR10)"],
      forma: "Superficie curva formada por módulos distintos: el bambú trabaja a compresión y las fibras a tensión.",
      inter: "Humanos y robots colaboran: los visitantes participan en la construcción.",
      pos: "La colaboración entre personas y robots, y el bambú como material de innovación.",
      mej: "Sigue formas y recursos ya vistos en muchas propuestas (geometría básica circular, cúpula).",
      a: "Ambos nacen de organizar componentes estructurales (los arcos triangulares de BETA) y combinan pensamiento estratégico con soluciones estructurales; los dos invitan a entrar.",
      ap: "Hacer al visitante partícipe visual del ensamblaje y construir la instalación a partir de componentes." },
    { n: 8, id: "seed-cathedral", nombre: "Seed Cathedral", anio: "2010", lugar: "Expo Shanghái · Pabellón del Reino Unido", pais: "CN", eje: "mat",
      autor: "Thomas Heatherwick (Heatherwick Studio, Londres) · Adams Kara Taylor",
      tipo: "Pabellón nacional · museo",
      concepto: "Cubo de seis pisos del que salen unas 60.000 varillas de acrílico transparente con semillas incrustadas en la punta (unas 250.000).",
      tec: ["Varillas de acrílico de 7,5 m", "Luz natural como tecnología", "LED nocturnos"],
      forma: "Desde lejos parece un erizo y de cerca una colección de miles de piezas diminutas; las varillas se mueven con el viento.",
      inter: "Sin pantallas ni experiencias interactivas: la gente recorre un espacio que es a la vez escultura y colección.",
      pos: "Mensaje y construcción son lo mismo; ganó la medalla de oro de la Expo en diseño de pabellón y el premio Lubetkin del RIBA.",
      mej: "Es un pabellón nacional típico (cubo y recorrido guiado) y su estructura grande y pesada no es fácil de mover.",
      a: "Vistosidad como principal catalizador: ambos buscan impacto visual inmediato y que el usuario entre, no solo contemple.",
      ap: "Una sola idea puede resolver toda la instalación, atraer desde lejos y orientar cómo se entra." },
    { n: 9, id: "future-space-pavilion", nombre: "Future Space Pavilion", anio: "2018", lugar: "Fuorisalone, Milán · patio de Ca' Granda, Universidad de Milán", pais: "IT", eje: "fab",
      autor: "Peter Pichler Architecture (Peter Pichler, Gianluigi D'Aloisio y Daniele Colombati)",
      tipo: "Instalación arquitectónica",
      concepto: "Exploración de las posibilidades espaciales de la madera: unas 1.600 piezas que se repiten, rotan y cambian de altura dentro del patio de una universidad.",
      tec: ["Unas 1.600 piezas de abeto (≈ 12 t)", "Sistema modular", "Luz natural filtrada"],
      forma: "Tres estructuras que aumentan de altura y giran hasta formar una geometría piramidal; toma la geometría y la simetría renacentistas.",
      inter: "El visitante entra y recorre el interior para percibir el material desde distintas perspectivas; las sombras cambian durante el día.",
      pos: "Un material sencillo usado de forma poco común, integrado con el patio y su arquitectura.",
      mej: "Conserva simetría y proporción tradicionales, y la repetición de piezas no cambia su función.",
      a: "Destaca dentro de una universidad con una configuración distinta al mobiliario convencional y se descubre de forma progresiva, como los 4 momentos de BETA.",
      ap: "Un recorrido progresivo y una luz que atraviese la estructura refuerzan la curiosidad del visitante." },
    { n: 10, id: "hy-fi", nombre: "Hy-Fi", anio: "2014", lugar: "MoMA PS1, Nueva York, Estados Unidos", pais: "US", eje: "mat",
      autor: "The Living (David Benjamin) · Ecovative, 3M, Arup, Art Domantay Artworks, PMA Construction",
      tipo: "Pabellón temporal de verano",
      concepto: "Torre de unos 12 m (40 pies) hecha con cerca de 10.000 ladrillos de micelio y tallos de maíz, cultivados en cinco días y compostados al desmontarla.",
      tec: ["Micelio + residuo agrícola", "Película reflectante 3M", "Ladrillos modulares compostables"],
      forma: "Torre tubular delgada y porosa, abierta arriba con aberturas circulares; su forma de chimenea enfría el interior.",
      inter: "No tiene tecnología interactiva: es un espacio para entrar, sentarse y refugiarse del sol.",
      pos: "Un material vivo y un ciclo coherente: se arma, se usa un verano y se devuelve a la tierra.",
      mej: "Constructivamente es lo más básico: ladrillo sobre ladrillo, trabajando a compresión.",
      a: "Se construye repitiendo una misma pieza, es temporal, deja entrar luz por arriba, es un espacio al que se entra y nace de explorar algo nuevo.",
      ap: "Un sistema modular, repetible y desmontable puede ser la propia identidad del stand." },
    { n: 11, id: "smart-police-station", nombre: "Smart Police Station", anio: "2017", lugar: "Dubái, Emiratos Árabes Unidos", pais: "AE", eje: "int",
      autor: "Policía de Dubái · Departamento General de Inteligencia Artificial",
      tipo: "Quiosco de servicio",
      concepto: "Estación de policía sin policías que funciona las 24 horas: el usuario hace trámites en pantallas táctiles y, si debe denunciar, se conecta con un investigador.",
      tec: ["Pantallas táctiles", "Cámaras inteligentes", "Conexión por pantalla con un investigador", "Seis idiomas"],
      forma: "Quiosco compacto con varios formatos: estación, de paso en auto, de entrada peatonal y puntos suburbanos.",
      inter: "Ofrece 27 servicios vitales y 33 comunitarios; el 89,6 % de las transacciones se hace por esta vía digital.",
      pos: "No promociona un servicio: lo reemplaza, con trámites reales y resultados medibles.",
      mej: "Tiene los rasgos típicos de un quiosco de autoservicio y sigue dependiendo de personas detrás de la pantalla.",
      a: "Ambos son conceptos de promoción pese a sus diferencias; la propuesta digital se vuelve llamativa a través del minimalismo.",
      ap: "Servicios múltiples y conexión en tiempo real con un asesor son un marco para mejoras futuras de BETA." },
    { n: 12, id: "we-design-pop-up", nombre: "We Design Pop-up", anio: "2021", lugar: "Estados Unidos", pais: "US", eje: "mat",
      autor: "Ryan Pflaum · para la exposición We Design de Design Museum Everywhere",
      tipo: "Exposición itinerante",
      concepto: "Versión itinerante de la exposición We Design (Design Museum Everywhere) para llevarla a convenciones: un pop-up de cuatro módulos que se empaca plano y que dos personas instalan en menos de dos horas.",
      tec: ["4 módulos planos ensamblables", "Fotografías, videos e historias", "Montaje en menos de 2 h con 2 personas"],
      forma: "Mobiliario de tablones horizontales con carteles; de carácter rudimentario y convencional.",
      inter: "Los visitantes conocen trayectorias de diseñadores y exploran posibilidades laborales.",
      pos: "Mantiene su carácter interactivo y su calidad visual en una versión que se transporta y se monta rápido.",
      mej: "La modularidad sirve al creador, pero el visitante no la nota: falta impacto visual y una construcción única.",
      a: "Se empaca plano y se instala en otro lugar, inspira a jóvenes a explorar carreras creativas y usa fotos, videos e historias para explicar el campo.",
      ap: "Que el módulo sea una excusa para mostrar una construcción única, sin perder la facilidad de transporte." },
    { n: 13, id: "rain-room", nombre: "Rain Room", anio: "2012", lugar: "The Curve, Barbican, Londres, Reino Unido", pais: "GB", eje: "int", origen: "inv",
      autor: "Random International (Hannes Koch, Stuart Wood y Florian Ortkrass)",
      tipo: "Instalación inmersiva con sensores",
      concepto: "Campo de lluvia continua en el que el agua se detiene justo donde el sistema detecta a una persona: el visitante siente que controla la lluvia.",
      tec: ["Cámaras de seguimiento y sensores", "Software a medida", "Boquillas en el techo", "Agua filtrada y reciclada"],
      forma: "Sala oscura con una rejilla de lluvia en el techo; la luz se usa con mucha intención para dar forma a lo que el visitante espera ver.",
      inter: "El visitante camina y la lluvia se pausa donde está. Si se mueve muy rápido, se moja: la tecnología marca cómo se recorre el espacio.",
      pos: "Hace tangible la interacción: el propio cuerpo es el control. Tuvo tanta demanda en el MoMA (2013) que se formaron filas de horas.",
      mej: "No es perfecta (los movimientos rápidos pueden mojar) y es una instalación pensada para cada sitio, con agua y sensores a escala de sala; no es un stand portátil.",
      a: "Misma lógica que la cascada de píxeles de BETA: un efecto continuo que se interrumpe donde el sensor detecta a una persona.",
      ap: "Referente directo para el sensor de la entrada: probar con visitantes reales la velocidad y la sensibilidad de la respuesta antes del evento.",
      fuentes: [["NBC News", "https://www.nbcnews.com/tech/gadgets/walk-rain-without-getting-wet-new-art-installation-flna1c6341378"], ["Eye Magazine", "https://eyemagazine.com/blog/post/walk-between-the-raindrops"], ["Gulf News", "https://gulfnews.com/amp/story/uae%2Fgovernment%2Fsharjah-ruler-opens-rain-room-project-1.2213566"]] },
    { n: 14, id: "sketch-aquarium", nombre: "Sketch Aquarium", anio: "2013 en adelante", lugar: "Museos de Japón, Singapur y Estados Unidos, entre otros", pais: "JP", eje: "int", origen: "inv",
      autor: "teamLab (Tokio)",
      tipo: "Instalación digital interactiva",
      concepto: "Los visitantes colorean el dibujo de un animal marino, lo escanean y lo ven nadar en un acuario virtual proyectado en una pared, junto a las creaciones de los demás.",
      tec: ["Escáner de dibujos", "Proyección con mapping", "Interacción por toque"],
      forma: "Una pared completa convertida en fondo marino con corales y algas, en una sala en penumbra.",
      inter: "Colorear, escanear, ver nadar la propia obra y tocar la pantalla para que los peces cambien de dirección o comer.",
      pos: "El visitante es coautor: su creación se vuelve parte de una obra mayor que ven todos.",
      mej: "Está pensada para público infantil y para salas de museo; BETA es un recorrido al aire libre para jóvenes de 15 a 19 años.",
      a: "Convierte lo que aporta el visitante en contenido proyectado que otros ven, como la frase de 10 palabras de BETA.",
      ap: "Un flujo corto y claro de cuatro pasos (crear, enviar, ver, jugar): el de BETA puede ser elegir énfasis, escribir la frase y verla en la fachada.",
      fuentes: [["teamLab Future Park", "https://futurepark.teamlab.art/en/playinstallations/sketch_aquarium"], ["teamLab (Shiseido Tokyo Trend Report)", "https://www.teamlab.art/press/shiseido-1405/"], ["VRScout", "https://vrscout.com/news/sketch-squarium-interactive-digital-instillation"]] },
    { n: 15, id: "pabellon-colombia-expo-dubai", nombre: "Pabellón de Colombia · Expo Dubái 2020", anio: "2021–2022", lugar: "Dubái, Emiratos Árabes Unidos", pais: "AE", eje: "mat", origen: "inv",
      autor: "Pacheco Estudio de Arquitectura",
      tipo: "Pabellón nacional",
      concepto: "Pabellón pensado como un artefacto que cuenta, desde la música, las historias pasadas, presentes y futuras de la cultura colombiana, bajo el lema «El ritmo que conecta el futuro».",
      tec: ["Experiencias interactivas con los destinos del país", "Vegetación y agua", "Exhibición de diseño colombiano en cuatro pisos"],
      forma: "Un damero urbano tridimensional y blanco que se funde con una base vegetal e hídrica.",
      inter: "Recorrido con experiencias interactivas de los visitantes con los destinos del país.",
      pos: "Talento 100 % colombiano y tercer puesto en la categoría de interpretación temática de la Expo. Las fuentes dan cifras distintas de visitantes (cerca de 1 millón y 1,6 millones): conviene citar con cuidado.",
      mej: "Su escala (varios pisos) y su respaldo institucional no son comparables con un stand universitario; lo trasladable es la idea, no los recursos. Falta revisar su ficha técnica para conocer la tecnología exacta.",
      a: "Referente colombiano de promoción mediante experiencia: su ubicación, su fachada y su música atrajeron al público.",
      ap: "Un gancho sensorial propio que se perciba desde lejos: en BETA podrían cumplir ese papel la cascada de píxeles y las frases en la fachada.",
      fuentes: [["ArchDaily", "https://archdaily.com/975964/colombias-pavilion-at-expo-2020-dubai-a-fusion-of-geography-city-and-culture"], ["ABC Economía", "https://abceconomia.co/?p=32391"], ["Noticias Caracol", "https://www.noticiascaracol.com/colombia/pabellon-de-colombia-en-expo-dubai-2020-la-magia-del-pais-encanto-a-un-millon-de-visitantes"], ["El Universal", "https://www.eluniversal.com.co/economica/el-diseno-de-interiores-uno-de-los-protagonistas-de-colombia-en-expo-dubai-CI5318712"]] },
    { n: 16, id: "origami-pavilion-concentrico", nombre: "Origami Pavilion · Concéntrico 03", anio: "2017", lugar: "Logroño, España", pais: "ES", eje: "fab", origen: "inv",
      autor: "Manuel Bouzas Cavada, Manuel Bouzas Barcala y Clara Álvarez",
      tipo: "Pabellón temporal de festival",
      concepto: "Pabellón inspirado en el origami que demuestra que el contrachapado puede sostenerse solo: sin estructura portante, 39 tableros se unen y se apoyan entre sí.",
      tec: ["39 tableros de contrachapado", "Bisagras en las uniones", "Sin estructura portante"],
      forma: "Tableros plegados en distintos ángulos que dejan pasar la luz y forman patrones.",
      inter: "Busca despertar la curiosidad del visitante al mostrar que una superficie plana plegada se sostiene sola; no tiene elementos digitales.",
      pos: "Una idea clara y legible: plegar una superficie plana la convierte en estructura y en espacio.",
      mej: "Su mensaje es sobre el material y la estructura: no comunica una carrera ni invita a participar.",
      a: "Comparte el principio de BETA: una tabla plana de madera que se pliega hasta convertirse en espacio.",
      ap: "Probar con maquetas cómo plegar o angular tableros para que el túnel conserve la idea de «tabla que se levanta». Evaluar si bisagras o pernos ayudan más al montaje.",
      fuentes: [["Swedish Wood", "https://www.swedishwood.com/publications/wood-magazine/2017-4/sjalvbarande-genom-origami/"], ["MaterialDistrict", "https://materialdistrict.com/article/origami-architectural-projects-origami-day/"]] },
    { n: 17, id: "serpentine-pavilion-2016", nombre: "Serpentine Pavilion 2016", anio: "2016", lugar: "Kensington Gardens, Londres, Reino Unido", pais: "GB", eje: "fab", origen: "inv",
      autor: "Bjarke Ingels Group (BIG)",
      tipo: "Pabellón temporal de verano",
      concepto: "Un muro de ladrillo «abierto como una cremallera»: una línea que se transforma en espacio tridimensional. De día alojó un café y actividades familiares gratuitas.",
      tec: ["Cerca de 1.800 bloques huecos de fibra de vidrio", "Conectores metálicos y pernos", "Tres espesores de pared"],
      forma: "Estructura de 14 m de alto, curva y translúcida; la luz entra por los marcos y por los huecos entre las cajas.",
      inter: "El visitante entra a un espacio tipo cañón o cueva iluminado; no tiene interacción digital.",
      pos: "Una sola pieza repetida y unida con pernos, pensada para armarse y desarmarse; tras el verano se reinstaló de forma permanente en Vancouver.",
      mej: "Su escala y su material industrial (fibra de vidrio extruida) no se pueden replicar en un stand universitario.",
      a: "Es el tipo de pabellón que ya aparece como imagen de portada en la bitácora; coincide con BETA en lo modular, repetido y atornillado.",
      ap: "Respalda la decisión de arcos desmontables y la idea de transformar una línea (la tabla plana) en un espacio recorrible.",
      fuentes: [["Dezeen (proceso de fabricación)", "https://www.dezeen.com/?p=973041"], ["Dezeen (Vancouver)", "https://www.dezeen.com/?p=1064384"], ["Serpentine Galleries", "https://www.serpentinegalleries.org/whats-on/serpentine-pavilion-2016-designed-by-bjarke-ingels-group/"]] },
    { n: 18, id: "pinecone-siska", nombre: "Pinecone (Šiška)", anio: "2017", lugar: "Praga, República Checa", pais: "CZ", eje: "fab", origen: "inv",
      autor: "Atelier SAD y mmcité1",
      tipo: "Cenador móvil y aula al aire libre",
      concepto: "Cúpula autoportante de 109 escamas de contrachapado impermeable en siete niveles, pensada como refugio, aula o espacio de juego en lugares públicos.",
      tec: ["109 escamas de contrachapado", "Estructura de acero galvanizado", "Piezas cortadas por CNC", "Kit plano"],
      forma: "Aberturas entre las escamas que permiten ventilación y luz; tragaluz central en lo alto y banca circular.",
      inter: "Espacio para jugar, leer o dar clases; sin interacción digital. Las escamas pueden servir de tablero de dibujo para niños.",
      pos: "Producto y edificio a la vez: llega como kit plano, se arma y se desarma, y se puede instalar en un día.",
      mej: "Es un cenador de uso local: no comunica ni promociona nada por sí mismo.",
      a: "Coincide con BETA en el kit plano que se ensambla y se reensambla, y en el tragaluz central.",
      ap: "Pensar BETA también como un producto: kit con piezas identificadas, instrucciones simples y montaje en un día.",
      fuentes: [["Architonic", "https://www.architonic.com/en/p/mmcite-pinecone-or-gazebo-da-esterni-1487909"], ["Dezeen", "https://www.dezeen.com/2018/04/15/pinecone-pavilion-plywood-shingles-mmcite1-atelier-sad/amp/"], ["Archiweb", "https://archiweb.cz/en/n/home/mobilni-altan-pinecone-od-atelieru-sad"]] }
  ];


  /* REFERENCIAS APA 7 de cada referente. c = cita corta (autor, año). Cada ficha enlaza a estas entradas y viceversa. */
  const APA = {
    1: [
      { c: "ICD y ITKE, 2017", h: 'Institute for Computational Design and Construction y Institute of Building Structures and Structural Design. (2017). <i>ICD/ITKE Research Pavilion 2016–17</i>. University of Stuttgart. https://www.icd.uni-stuttgart.de/projects/icditke-research-pavilion-2016-17/' },
      { c: "The Building Centre, 2017", h: 'The Building Centre. (2017, 22 de abril). <i>ICD/ITKE Research Pavilion 2016-17</i>. https://buildingcentre.co.uk/news/articles/icditke-research-pavilion-2016-17' }
    ],
    2: [
      { c: "Lozano-Hemmer y Wodiczko, 2015", h: 'Lozano-Hemmer, R. y Wodiczko, K. (2015). <i>Zoom Pavilion</i> [Instalación interactiva]. https://lozano-hemmer.com/zoom_pavilion.php' },
      { c: "Lozano-Hemmer, 2015", h: 'Lozano-Hemmer, R. (2015). <i>Zoom Pavilion (2015)</i> [Manual técnico]. https://lozano-hemmer.com/texts/manuals/zoom_pavillion.pdf' }
    ],
    3: [
      { c: "ICD y ITKE, 2019", h: 'Institute for Computational Design and Construction y Institute of Building Structures and Structural Design. (2019, 9 de mayo). <i>BUGA Fibre Pavilion / ICD/ITKE University of Stuttgart</i>. ArchDaily. https://www.archdaily.com/916650/buga-fibre-pavilion-icd-itke-university-of-stuttgart' },
      { c: "Universität Stuttgart, 2019", h: 'Universität Stuttgart. (2019). <i>BUGA pavilions</i> [Comunicado de prensa]. https://www.uni-stuttgart.de/universitaet/aktuelles/presseinfo/document/025_b_19_BUGA_Pavillons_en.pdf' }
    ],
    4: [
      { c: "Carlo Ratti Associati, 2008", h: 'Carlo Ratti Associati. (2008). <i>Digital Water Pavilion</i>. https://carlorattiassociati.com/project/digital-water-pavilion/' },
      { c: "MIT Technology Review, 2007", h: 'MIT Technology Review. (2007, 15 de octubre). <i>Liquid pavilion</i>. https://www.technologyreview.com/s/408865/liquid-pavilion/' }
    ],
    5: [
      { c: "Dezeen, 2021", h: 'Dezeen. (2021, 29 de septiembre). <i>UK Pavilion at Dubai Expo 2020 by Es Devlin</i>. https://www.dezeen.com/2021/09/29/dubai-expo-2020-uk-pavilion-es-devlin/' },
      { c: "Dezeen, 2018b", h: 'Dezeen. (2018b, 27 de septiembre). <i>Es Devlin to design interactive Poem Pavilion for Dubai Expo 2020</i>. https://www.dezeen.com/2018/09/27/es-devlin-interactive-poem-pavilion-uk-pavilion-dubai-expo-2020-architecture/' }
    ],
    6: [
      { c: "Eye Filmmuseum, s. f.", h: 'Eye Filmmuseum. (s. f.). <i>Poème électronique, Le</i>. https://www.eyefilm.nl/en/whats-on/poeme-electronique-le/266898' },
      { c: "ArchDaily, s. f.", h: 'ArchDaily. (s. f.). <i>AD Classics: Expo \'58 Philips Pavilion / Le Corbusier and Iannis Xenakis</i>. https://www.archdaily.com/157658/ad-classics-expo-58-philips-pavilion-le-corbusier-and-iannis-xenakis' },
      { c: "Henken, s. f.", h: 'Henken, J. (s. f.). <i>Poème électronique</i>. Hollywood Bowl. https://www.hollywoodbowl.com/musicdb/pieces/2898/poeme-electronique' }
    ],
    7: [
      { c: "ICD, s. f.", h: 'Institute for Computational Design and Construction. (s. f.). <i>The Hive: A human and robot collaborative building process</i>. University of Stuttgart. https://icd.uni-stuttgart.de/?p=15961' },
      { c: "Universal Robots, 2015", h: 'Universal Robots. (2015, 24 de noviembre). <i>Universal Robots to build architectural scale pavilion in direct collaboration with attendees at Autodesk University</i>. Robotics Tomorrow. https://roboticstomorrow.com/news/2015/11/24/universal-robots-to-build-architectural-scale-pavilion-in-direct-collaboration-with-attendees-at-autodesk-university/7262' }
    ],
    8: [
      { c: "Heatherwick Studio, s. f.", h: 'Heatherwick Studio. (s. f.). <i>UK Pavilion</i>. https://heatherwick.com/project/uk-pavilion/' },
      { c: "Jordana, 2010", h: 'Jordana, S. (2010, 3 de mayo). <i>UK Pavilion for Shanghai World Expo 2010 / Heatherwick Studio</i>. ArchDaily. https://www.archdaily.com/58591/uk-pavilion-for-shanghai-world-expo-2010-heatherwick-studio/' }
    ],
    9: [
      { c: "Peter Pichler Architecture, 2018", h: 'Peter Pichler Architecture. (2018). <i>030 Future Space Pavillion</i>. https://peterpichler.eu/project/030-future-space-pavillion' },
      { c: "Dezeen, 2018a", h: 'Dezeen. (2018a, 16 de abril). <i>Peter Pichler builds pyramidal pavilion using 1,600 wooden beams</i>. https://www.dezeen.com/2018/04/16/peter-pichler-wooden-pyramid-pavilion-milan-design-week/' }
    ],
    10: [
      { c: "Stott, 2014", h: 'Stott, R. (2014, 27 de junio). <i>Hy-Fi, the organic mushroom-brick tower opens at MoMA\'s PS1 courtyard</i>. ArchDaily. https://www.archdaily.com/521266/hy-fi-the-organic-mushroom-brick-tower-opens-at-moma-s-ps1-courtyard' },
      { c: "Metropolis, 2014", h: 'Metropolis. (2014, 1 de julio). <i>How Arup engineered The Living\'s mushroom tower</i>. https://metropolismag.com/products/how-arup-engineered-the-livings-mushroom-tower/' }
    ],
    11: [
      { c: "Gulf Business, 2022", h: 'Gulf Business. (2022, 18 de septiembre). <i>Dubai\'s smart police stations serve over 2 million visitors since launch</i>. https://gulfbusiness.com/dubais-smart-police-stations-serve-over-2-million-visitors-since-launch/' },
      { c: "Dubai Media Office, 2021", h: 'Dubai Media Office. (2021, 1 de agosto). <i>Dubai Police inaugurates five smart police stations in 2020</i>. https://www.mediaoffice.ae/en/news/2021/august/01-08/dubai-police' },
      { c: "Gulf News, s. f.", h: 'Gulf News. (s. f.). <i>16 smart police stations now operational in Dubai</i>. https://gulfnews.com/uae/16-smart-police-stations-now-operational-in-dubai-1.81194216' }
    ],
    12: [
      { c: "Pflaum, s. f.", h: 'Pflaum, R. (s. f.). <i>We Design Pop-up: Design Museum exhibition</i>. https://ryan-id.com/we-design-pop-up' },
      { c: "CoDesign Collaborative, s. f.", h: 'CoDesign Collaborative. (s. f.). <i>We Design online exhibition</i>. https://designmuseumfoundation.org/we-design-online-exhibition/' }
    ]
  };
  REF_TODOS.forEach(r => { if (APA[r.n]) r.apa = APA[r.n]; });
  const REF = REF_TODOS.filter(r => INCLUIR_INVESTIGACION_ADICIONAL || r.origen !== "inv");

  /* RELACIONES: referentes (n) → aprendizajes → decisiones. Alimenta el diagrama de relaciones. */
  const DEC = [
    { id: "D1", st: "Incorporar", t: "Consola de proyección con QR",
      d: "Un proyector muestra la consola en la pared. El estudiante escanea el QR, registra su nombre y responde «¿Qué te gustaría crear?» (objetos 3D, contenidos digitales o videojuegos). La pantalla muestra proyectos, herramientas, asignaturas y campos profesionales. Al final escribe en 10 palabras por qué eligió ese énfasis." },
    { id: "D2", st: "Incorporar", t: "Cascada de píxeles en la entrada",
      d: "Proyección holográfica inteligente a 90° en la entrada del túnel, con sensor de movimiento: desaparece cuando entra un estudiante y muestra, con letras grandes, las respuestas de quienes están dentro: «Nombre prefiere – Énfasis – porque – respuesta»." },
    { id: "D3", st: "Rediseñar", t: "Arcos de tres tablas desmontables",
      d: "Cada arco se arma con tres tablas unidas en sus extremos con piezas metálicas y tornillos. Varios arcos se conectan con tablas largas que los mantienen estables. El túnel conserva su forma triangular, pero las piezas se transportan por separado y se ensamblan en la universidad." },
    { id: "D4", st: "Conservar", t: "Túnel y cuatro momentos",
      d: "Se mantienen la forma triangular, la tabla plana que se levanta y el recorrido en cuatro momentos: llegada, mirada, descubre y conversa." },
    { id: "D5", st: "Descartar", t: "Escala monumental no transportable",
      d: "Se toma la interactividad de los pabellones grandes, pero no su tamaño ni su peso: BETA debe poder armarse, desarmarse y moverse." }
  ];
  const APR = [
    { id: "L1", t: "La proyección responde al visitante", r: [2, 5, 13], d: ["D1"] },
    { id: "L2", t: "Lo que aporta el visitante se ve afuera", r: [5, 14], d: ["D1", "D2"] },
    { id: "L3", t: "Un umbral que reacciona a quien llega", r: [4, 13], d: ["D2"] },
    { id: "L4", t: "Contenido real y atención en tiempo real", r: [11, 12], d: ["D1"] },
    { id: "L5", t: "Piezas repetidas que se arman y desarman", r: [3, 9, 10, 12, 17, 18], d: ["D3"] },
    { id: "L6", t: "El armado también se ve", r: [1, 7], d: ["D3"] },
    { id: "L7", t: "La estructura es la experiencia", r: [6, 8], d: ["D4"] },
    { id: "L8", t: "Interactividad sí, escala monumental no", r: [5, 8], d: ["D5"] },
    { id: "L9", t: "Una superficie plana se vuelve espacio", r: [16, 17], d: ["D4"] },
    { id: "L10", t: "Un gancho sensorial atrae desde lejos", r: [15], d: ["D2"] }
  ];

  /* HALLAZGOS · OPORTUNIDADES (basados en la matriz y en las conclusiones del PDF) */
  const HALL = [
    "Hy-Fi, Seed Cathedral y BUGA no tienen interacción digital: su valor está en el material y en la estructura.",
    "Zoom Pavilion, Digital Water Pavilion, The Poem Pavilion y Smart Police Station sí hacen que la tecnología responda al visitante.",
    "La repetición de piezas modulares aparece en BUGA, HIVE, Hy-Fi, Philips, Future Space y We Design Pop-up.",
    "Philips, Hy-Fi y Seed Cathedral se desmontaron o demolieron; We Design Pop-up nace para viajar plano.",
    "We Design Pop-up es el referente más cercano en propósito (jóvenes y carreras creativas), pero le falta impacto visual.",
    "Investigación adicional: Rain Room y Sketch Aquarium logran interacciones de pocos pasos en las que el cuerpo o el dibujo del visitante cambian lo proyectado.",
    "Investigación adicional: Origami Pavilion, Serpentine 2016 y Pinecone muestran cómo piezas planas o repetidas se convierten en espacio y se ensamblan sin soldar ni fundir."
  ];
  const OPOR = [
    "Hoy la interacción de BETA depende de un pendón, algunos recursos gráficos y un QR: lo digital es un complemento, no parte activa del recorrido.",
    "Pasar de «recibir información» a «tomar decisiones y ver cómo mis respuestas generan algo en tiempo real».",
    "Usar proyección que responde al visitante (Zoom Pavilion) y respuestas visibles en la fachada (The Poem Pavilion).",
    "Sumar a la modularidad un impacto visual propio, «a lo Santiago Calatrava», que el visitante sí note.",
    "Tomar de Smart Police Station la conexión con un asesor y los servicios múltiples como línea de trabajo futura.",
    "Probar con visitantes reales la respuesta del sensor de la entrada: en Rain Room, moverse muy rápido hace que el agua caiga igual.",
    "Ofrecer BETA como kit: piezas identificadas, instrucciones simples y montaje en un día, como Pinecone."
  ];

  /* RECURSOS TIC.
     c: pri (prioritaria) · com (complementaria) · exp (experimental). visto: referentes del análisis donde aparece.
     fuente: escribe aquí la cita APA 7 cuando la tengas. Las fichas son una síntesis de referencia general: verifica y cita cada una. */
  const CLS = {
    pri: { t: "Prioritaria", d: "Mayor potencial de implementación: sostienen las dos incorporaciones propuestas en las conclusiones." },
    com: { t: "Complementaria", d: "Enriquecen la experiencia, pero BETA funciona sin ellas." },
    exp: { t: "Experimental", d: "Interesantes, de mayor complejidad técnica o de costo; conviene probarlas antes de comprometerlas." }
  };
  const TIC = [
    { id: "proyeccion-interactiva", c: "pri", nombre: "Proyección interactiva y mapping",
      flujo: ["Entrada: movimiento, cámara o teléfono", "Software de visuales en tiempo real", "Proyector sobre pared o superficie"],
      que: "Un proyector dibuja imágenes sobre una superficie; el mapping ajusta la imagen a su forma y un software la cambia en tiempo real según lo que ocurra.",
      apps: "Muros y fachadas de stands que cambian de contenido, fondos que reaccionan a la presencia y tótems informativos.",
      exp: "Ve que la superficie responde y que sus aportes aparecen a gran escala.",
      req: "Proyector con luminosidad suficiente para la luz del lugar, computador, software de visuales, superficie clara y mate, cableado y soporte.",
      pos: "Contenido actualizable sin tocar la estructura y gran formato con poco material.",
      lim: "Pierde contraste con luz fuerte; requiere calibración y protección del equipo.",
      beta: "Es el núcleo de la propuesta: la consola de proyección y la cascada de píxeles. BETA se piensa en un espacio abierto (cancha del Bloque D), así que hay que probar la luz y aprovechar la sombra del túnel.",
      visto: "Zoom Pavilion (#2), The Poem Pavilion (#5) y Sketch Aquarium (#14)", fuente: "" },
    { id: "interfaz-movil", c: "pri", nombre: "Interfaces móviles (QR y web)",
      flujo: ["QR en la pared", "Página web en el celular del visitante", "Resultado en la proyección"],
      que: "El visitante escanea un QR y abre una página en su teléfono, sin instalar nada. La página envía datos (nombre, elección, frase) a la proyección.",
      apps: "Votaciones, formularios, muros de mensajes y juegos de preguntas.",
      exp: "Usa su propio celular para decidir y ve cómo su respuesta aparece en la instalación.",
      req: "Página web adaptable a celular, un servicio que reciba y muestre datos en tiempo real, conexión a internet o red local y un QR visible.",
      pos: "Bajo costo, no exige equipo al visitante y se actualiza fácil.",
      lim: "Depende de la señal; hay que moderar el texto publicado y cuidar el manejo de datos personales (el nombre).",
      beta: "Es el flujo de las conclusiones: nombre, «¿Qué te gustaría crear?», frase de 10 palabras y aparición en la fachada.",
      visto: "The Poem Pavilion (#5): los aportes del visitante llegan a la fachada", fuente: "" },
    { id: "sensores", c: "pri", nombre: "Sensores de movimiento y proximidad",
      flujo: ["Sensor de presencia o distancia", "Placa o computador que interpreta", "Cambio en la proyección o la luz"],
      que: "Detectan presencia, distancia o movimiento y envían una señal que dispara un cambio, como apagar la cascada o encender una luz.",
      apps: "Cortinas o puertas que reaccionan, contadores de visitantes y luces de bienvenida.",
      exp: "La instalación «se da cuenta» de que alguien llegó.",
      req: "Sensor adecuado al ancho de la entrada, placa o computador, alimentación y programación básica.",
      pos: "Económicos, confiables y fáciles de conectar a una proyección.",
      lim: "Pueden fallar con mucha gente o sol directo; detectan presencia, pero no saben quién es. En Rain Room, los movimientos muy rápidos no se alcanzan a compensar.",
      beta: "Es lo que hace que la cascada de píxeles desaparezca cuando entra un estudiante.",
      visto: "Digital Water Pavilion (#4), HIVE Pavilion (#7) y Rain Room (#13)", fuente: "" },
    { id: "datos-tiempo-real", c: "pri", nombre: "Visualización de datos en tiempo real",
      flujo: ["Respuestas de los visitantes", "Servicio que las recibe y ordena", "Texto o gráfico en la pantalla exterior"],
      que: "Los datos que llegan se convierten al instante en texto, gráficos o animaciones.",
      apps: "Muros de mensajes, marcadores de votación y contadores de énfasis elegidos.",
      exp: "Ve su respuesta y las de otros aparecer afuera en segundos, con letras grandes.",
      req: "Servicio de datos en tiempo real, plantilla visual, pantalla o proyección exterior y filtro de moderación.",
      pos: "Convierte la participación en algo visible para quienes están afuera y atrae gente.",
      lim: "Si no hay visitantes la pantalla queda vacía (se necesita contenido de reserva) y exige moderación.",
      beta: "La frase «Nombre prefiere – Énfasis – porque – respuesta» visible desde fuera del stand.",
      visto: "The Poem Pavilion (#5)", fuente: "" },
    { id: "multitactil", c: "com", nombre: "Pantallas multitáctiles",
      flujo: ["Toque con uno o varios dedos", "Interfaz táctil", "Proyectos, asignaturas y campos"],
      que: "Pantallas que detectan varios dedos a la vez para explorar contenido.",
      apps: "Catálogos, mapas, líneas de tiempo y trámites.",
      exp: "Explora a su ritmo proyectos de estudiantes, herramientas y campos profesionales.",
      req: "Pantalla o marco táctil, computador, contenido pensado para toque y un soporte robusto.",
      pos: "Intuitiva, conocida por los jóvenes y apta para contenido profundo.",
      lim: "Costo, fragilidad en exteriores, uso individual y reflejos.",
      beta: "Alternativa a la consola proyectada si se quiere explorar contenido dentro del túnel, por ejemplo en «Descubre».",
      visto: "Smart Police Station (#11)", fuente: "" },
    { id: "superficies", c: "com", nombre: "Superficies interactivas (piso o mesa)",
      flujo: ["Pisada o toque", "Sensor o cámara cenital", "Proyección que responde"],
      que: "Suelos, mesas o muros que reaccionan al pisar o tocar, detectados con sensores o con una cámara.",
      apps: "Pisos con efectos y mesas colaborativas.",
      exp: "Sus pasos o manos generan efectos en la superficie.",
      req: "Cámara o sensores, proyector o pantalla, software y protección del piso.",
      pos: "Atrae a grupos y resulta lúdica.",
      lim: "Calibración exigente, mantenimiento y sensibilidad a la luz.",
      beta: "Podría acompañar el recorrido dentro del túnel; falta probarlo en el piso real.",
      visto: "", fuente: "" },
    { id: "ar-movil", c: "com", nombre: "Realidad aumentada en el celular",
      flujo: ["Cámara del celular", "QR o espacio reconocido", "Objeto 3D sobre la vista real"],
      que: "El teléfono superpone objetos 3D o información sobre lo que ve la cámara, muchas veces desde el navegador.",
      apps: "Modelos 3D, mascotas virtuales y señalética aumentada.",
      exp: "Ve proyectos 3D de estudiantes «dentro» del stand.",
      req: "Celulares compatibles, modelos 3D livianos, QR o marcador y una solución de AR para web o app.",
      pos: "No exige hardware extra y conecta con la opción «objetos 3D».",
      lim: "Compatibilidad entre celulares, tiempos de carga y necesidad de luz y conexión.",
      beta: "Complementa la elección «objetos 3D» de la consola.",
      visto: "", fuente: "" },
    { id: "audiovisual-generativo", c: "com", nombre: "Instalaciones audiovisuales generativas",
      flujo: ["Datos o sonido de entrada", "Reglas o algoritmo", "Imagen y sonido que cambian"],
      que: "Imágenes y sonidos generados por reglas o por datos, que cambian de forma continua en lugar de repetir un video.",
      apps: "Fondos vivos, ambientes sonoros y piezas que reflejan la afluencia.",
      exp: "Un ambiente que no se repite y reacciona a la gente.",
      req: "Computador, software generativo, parlantes y proyector.",
      pos: "Identidad visual propia que no se agota.",
      lim: "Requiere programación visual y ajustes artísticos; el sonido compite con el ruido del espacio abierto.",
      beta: "Puede alimentar la cascada de píxeles y el fondo de la consola con la identidad visual de la carrera.",
      visto: "Philips Pavilion (#6): luz, imagen y sonido como una sola composición", fuente: "" },
    { id: "ia-interactiva", c: "com", nombre: "Inteligencia artificial interactiva",
      flujo: ["Texto del visitante", "Modelo de aprendizaje automático", "Respuesta o composición generada"],
      que: "Un modelo procesa lo que escribe el visitante y genera una respuesta o una composición, por ejemplo unir palabras en un poema.",
      apps: "Poemas colectivos, asistentes de orientación y generación de imágenes.",
      exp: "Su frase se transforma en algo nuevo o recibe una orientación personalizada.",
      req: "Acceso a un modelo (servicio o instalación propia), moderación de contenido, conexión estable y una política de datos.",
      pos: "Sorprende y permite una respuesta distinta para cada visitante.",
      lim: "Costos por uso, errores o respuestas inapropiadas, privacidad y demora.",
      beta: "Opcional: resumir las frases del día o sugerir un énfasis. La propuesta actual funciona sin IA.",
      visto: "The Poem Pavilion (#5)", fuente: "" },
    { id: "gestual", c: "exp", nombre: "Interfaces gestuales",
      flujo: ["Cámara de profundidad o seguimiento", "Reconocimiento del gesto", "Acción en pantalla"],
      que: "Cámaras o sensores siguen el cuerpo y las manos y traducen gestos en comandos, sin tocar nada.",
      apps: "Control de contenido a distancia y juegos corporales.",
      exp: "Mueve el contenido con la mano, como si lo tocara en el aire.",
      req: "Cámara de profundidad o de seguimiento, computador potente, espacio despejado y luz controlada.",
      pos: "Sin contacto y muy llamativa.",
      lim: "Sensible a la luz solar, con curva de aprendizaje, y suele atender a una persona a la vez.",
      beta: "Opción futura para la entrada; hoy el sensor de movimiento cubre la necesidad con menos complejidad.",
      visto: "Zoom Pavilion (#2): cámaras que detectan presencia y movimiento", fuente: "" },
    { id: "realidad-virtual-mixta", c: "exp", nombre: "Realidad virtual y mixta",
      flujo: ["Visor", "Mundo virtual o capa sobre lo real", "Experiencia inmersiva individual"],
      que: "Un visor aísla la vista o la combina con contenido digital.",
      apps: "Recorridos virtuales de edificios y de proyectos.",
      exp: "Entra a un proyecto de estudiante o a un campus virtual.",
      req: "Visores, computador o equipos autónomos, un espacio seguro, contenido 3D y personal de apoyo.",
      pos: "La mayor inmersión.",
      lim: "Costo, mantenimiento, uso individual con filas de espera, posible mareo y poca visibilidad para quienes miran desde afuera.",
      beta: "Encaja con «objetos 3D», pero compite con el recorrido físico, que es el diferencial de BETA.",
      visto: "", fuente: "" },
    { id: "volumetrica", c: "exp", nombre: "Visualización volumétrica",
      flujo: ["Contenido 3D", "Dispositivo volumétrico", "Imagen con profundidad, sin gafas"],
      que: "Dispositivos que muestran imágenes con sensación de profundidad en el aire o dentro de una vitrina, sin visor.",
      apps: "Logos y objetos 3D en vitrinas y mostradores.",
      exp: "Un objeto que «flota» y atrae desde lejos.",
      req: "Dispositivo volumétrico, contenido 3D adaptado y luz controlada.",
      pos: "Efecto de sorpresa inmediato.",
      lim: "Tamaño pequeño, poca visibilidad con luz del día y costo alto.",
      beta: "Las conclusiones hablan de una «proyección holográfica inteligente»: conviene confirmar la técnica (proyección sobre una superficie translúcida o un dispositivo volumétrico) antes de decidir.",
      visto: "", fuente: "" }
  ];
  const JUST = {
    "proyeccion-interactiva": "Es la base de las dos incorporaciones propuestas.",
    "interfaz-movil": "Conecta al visitante con la proyección sin equipos adicionales.",
    "sensores": "Hace reaccionar la entrada con bajo costo y poca complejidad.",
    "datos-tiempo-real": "Muestra desde afuera lo que ocurre adentro y atrae público.",
    "multitactil": "Sirve para contenido profundo si el celular no alcanza.",
    "superficies": "Puede acompañar el recorrido, pero necesita pruebas en el piso real.",
    "ar-movil": "Suma la opción «objetos 3D» sin comprar hardware.",
    "audiovisual-generativo": "Da identidad viva a las proyecciones.",
    "ia-interactiva": "Enriquece las frases, pero no es indispensable.",
    "gestual": "El sensor de movimiento ya resuelve lo básico con menos complejidad.",
    "realidad-virtual-mixta": "Compite con el recorrido físico y tiene costo y logística altos.",
    "volumetrica": "Atractiva, pero con técnica por definir y costo alto."
  };
  const REFERENCIAS = []; // Añade aquí citas APA 7 como texto: "Apellido, N. (2020). Título. Sitio. https://..."
  /* ===================== FIN DATOS ===================== */

  const A = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  const pad = (n) => String(n).padStart(2, "0");

  /* BANDERAS: dibujadas como SVG (se ven igual en Windows, Mac y celular; no dependen de internet). */
  const star = (cx, cy, r) => { const p = []; for (let i = 0; i < 10; i++) { const a = Math.PI / 5 * i - Math.PI / 2, q = i % 2 ? r * .382 : r; p.push((cx + q * Math.cos(a)).toFixed(2) + "," + (cy + q * Math.sin(a)).toFixed(2)); } return `<polygon points="${p.join(" ")}"/>`; };
  const bands = (a, b, c, v) => v ? `<rect width="10" height="20" fill="${a}"/><rect x="10" width="10" height="20" fill="${b}"/><rect x="20" width="10" height="20" fill="${c}"/>` : `<rect width="30" height="6.67" fill="${a}"/><rect y="6.67" width="30" height="6.67" fill="${b}"/><rect y="13.33" width="30" height="6.67" fill="${c}"/>`;
  const FL = {
    DE: bands("#000", "#DD0000", "#FFCE00"),
    MX: bands("#006847", "#fff", "#CE1126", 1) + '<circle cx="15" cy="10" r="2.7" fill="#9C7A2F"/><circle cx="15" cy="10" r="1.7" fill="#5B9A4F"/>',
    ES: '<rect width="30" height="20" fill="#AA151B"/><rect y="5" width="30" height="10" fill="#F1BF00"/><rect x="7" y="7.5" width="3" height="5" rx=".8" fill="#AA151B"/>',
    GB: '<rect width="30" height="20" fill="#012169"/><path d="M0 0L30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0L30 20M30 0L0 20" stroke="#C8102E" stroke-width="1.3"/><path d="M15 0V20M0 10H30" stroke="#fff" stroke-width="6"/><path d="M15 0V20M0 10H30" stroke="#C8102E" stroke-width="3.4"/>',
    BE: bands("#000", "#FDDA24", "#EF3340", 1),
    US: Array.from({ length: 13 }, (_, i) => `<rect y="${(i * 20 / 13).toFixed(2)}" width="30" height="${(20 / 13 + .02).toFixed(2)}" fill="${i % 2 ? "#fff" : "#B22234"}"/>`).join("") + '<rect width="13" height="10.8" fill="#3C3B6E"/><g fill="#fff">' + [0, 1, 2, 3].map(j => [0, 1, 2, 3, 4].map(i => `<circle cx="${(1.4 + i * 2.5).toFixed(1)}" cy="${(1.5 + j * 2.5).toFixed(1)}" r=".55"/>`).join("")).join("") + "</g>",
    CN: '<rect width="30" height="20" fill="#DE2910"/><g fill="#FFDE00">' + star(5, 5.2, 3) + star(10, 2, 1) + star(12, 4.2, 1) + star(12, 7, 1) + star(10, 9.2, 1) + "</g>",
    IT: bands("#009246", "#fff", "#CE2B37", 1),
    AE: '<rect width="30" height="20" fill="#fff"/><rect x="7.5" width="22.5" height="6.67" fill="#00732F"/><rect x="7.5" y="13.33" width="22.5" height="6.67" fill="#000"/><rect width="7.5" height="20" fill="#FF0000"/>',
    JP: '<rect width="30" height="20" fill="#fff"/><circle cx="15" cy="10" r="6" fill="#BC002D"/>',
    CZ: '<rect width="30" height="10" fill="#fff"/><rect y="10" width="30" height="10" fill="#D7141A"/><path d="M0 0L15 10L0 20Z" fill="#11457E"/>'
  };
  const PAIS = { DE: "Alemania", MX: "México", ES: "España", GB: "Reino Unido", BE: "Bélgica", US: "Estados Unidos", CN: "China", IT: "Italia", AE: "Emiratos Árabes Unidos", JP: "Japón", CZ: "Chequia" };
  const flag = (c, cls) => FL[c] ? `<svg class="${cls || "rf-fl"}" viewBox="0 0 30 20" role="img" aria-label="Bandera de ${PAIS[c]}">${FL[c]}</svg>` : `<span class="${cls || "rf-fl"} txt">${c}</span>`;

  /* Pie de foto en el formato de la bitácora */
  const capH = (c, k) => `<b>Nota.</b> Figura ${k}. <i>${A(c.nombre || "Nombre de la foto")}</i>.${c.autor ? " Fotografía de " + A(c.autor) + "." : ""} Tomado de: ${c.url ? `<a href="${A(c.url)}" target="_blank" rel="noopener">${A(c.fuente || "autor.com")}</a>` : A(c.fuente || "autor.com")} (${A(c.anio || "2026")}).`;

  /* Si una imagen no existe, prueba otras extensiones y al final deja visible el recuadro de reemplazo. */
  window.RF_ERR = function (img) {
    const e = ["jpg", "webp", "png", "jpeg"], m = img.src.match(/\.(\w+)(\?.*)?$/), n = e.indexOf(m && m[1]) + 1;
    if (n > 0 && n < e.length) { img.src = img.src.replace(/\.\w+(\?.*)?$/, "." + e[n]); return; }
    img.style.display = "none";
    if (img.dataset.opt) { const b = img.closest(".rf-th"); if (b) b.hidden = true; }
  };

  window.CANANA_REFERENTES = function (a, R, main, acts, idx) {
    const d = document, body = d.body; body.classList.add("ed", "rf");
    let done = false;
    const css = d.createElement("link"); css.rel = "stylesheet"; css.href = R + "css/referentes.css";
    const go = () => { if (done) return; done = true; draw(); };
    css.onload = go; css.onerror = go; d.head.appendChild(css); setTimeout(go, 1500);

    function draw() {
      let figN = REF.length; /* las figuras de los recursos TIC siguen después de las 12 de referentes */
      const fig = (file, ratio, label, flagCode, num, big) => {
        const cr = CREDITOS[file] || {}, ok = !!cr.nombre, k = num || ++figN;
        return `<figure class="rf-fig"><div class="rf-fr" style="--r:${ratio}"><div class="rf-ph"><i>${label}</i><b>Imagen por incorporar</b><code>${file}</code></div><img src="${R}${IMG}${file}.jpg" alt="${A(cr.nombre || label)}" loading="lazy" onerror="RF_ERR(this)">${flagCode ? `<span class="rf-flag" title="${A(PAIS[flagCode] || flagCode)}">${flag(flagCode)}</span>` : ""}<button type="button" class="rf-zoom" aria-label="Ampliar: ${A(label)}">Ampliar</button></div>${big ? `<div class="rf-ths">${[2, 3].map(j => `<button type="button" class="rf-th" aria-label="Ver imagen ${j} de ${A(label)}"><img src="${R}${IMG}${file}-${j}.jpg" alt="" data-opt="1" loading="lazy" onerror="RF_ERR(this)"></button>`).join("")}</div>` : ""}<figcaption class="rf-cap${ok ? "" : " pend"}">${capH(cr, k)}</figcaption></figure>`;
      };
      const head = (num, id, t, k) => `<div class="ed-h ed-rv"><span class="ed-num" aria-hidden="true">${num}</span><div><p class="ed-k">${k}</p><h2 id="${id}-t">${t}</h2></div></div>`;
      const secs = [["matriz", "Matriz"], ["conclusiones", "Conclusiones"], ["tic", "Recursos TIC"], ["clasificacion", "Clasificación"], ["referencias", "Referencias"]];

      const card = (r) => {
        const file = `referente-${pad(r.n)}-${r.id}`;
        const tabs = [["a", "Coincide con BETA", r.a], ["p", "Cualidades propias", r.pos], ["m", "Lo convencional", r.mej], ["ap", "Para nuestra propuesta", r.ap]];
        return `<article class="rf-card ed-rv" id="ref-${r.n}" data-eje="${r.eje}" aria-labelledby="ref-${r.n}-t">
  <div class="rf-figw">${fig(file, r.n % 3 === 0 ? "1/1" : r.n % 2 ? "4/5" : "5/4", "Referente #" + pad(r.n), r.pais, r.n, true)}</div>
  <div class="rf-body">
    <p class="rf-big" aria-hidden="true">${pad(r.n)}</p>
    <p class="rf-eje">${r.origen === "inv" ? '<span class="rf-new">Investigación adicional</span>' : ""}${EJES[r.eje]} · ${r.tipo}</p>
    <h3 id="ref-${r.n}-t">${r.nombre}</h3>
    <dl class="rf-meta"><div><dt>Año</dt><dd>${r.anio}</dd></div><div><dt>Lugar</dt><dd>${r.lugar}</dd></div><div><dt>Autoría</dt><dd>${r.autor}</dd></div></dl>
    <p class="rf-con">${r.concepto}</p>
    <ul class="rf-tags" aria-label="Tecnologías y materiales">${r.tec.map(t => `<li>${t}</li>`).join("")}</ul>
    <div class="rf-two"><div><h4>Forma y composición</h4><p>${r.forma}</p></div><div><h4>Interacción y experiencia</h4><p>${r.inter}</p></div></div>
    <div class="rf-tabs" role="tablist" aria-label="Análisis de ${A(r.nombre)}">${tabs.map((t, i) => `<button type="button" role="tab" id="rt-${r.n}-${i}" aria-controls="rp-${r.n}-${i}" aria-selected="${i === 0}" tabindex="${i ? -1 : 0}">${t[1]}</button>`).join("")}</div>
    ${tabs.map((t, i) => `<div class="rf-panel${t[0] === "m" ? " warn" : ""}${t[0] === "ap" ? " key" : ""}" role="tabpanel" id="rp-${r.n}-${i}" aria-labelledby="rt-${r.n}-${i}" ${i ? "hidden" : ""}><p>${t[2]}</p></div>`).join("")}
    ${r.apa ? `<p class="rf-srcs"><b>Fuentes:</b> ${r.apa.map((x, i) => `<a href="#apa-${r.n}-${i}">(${x.c})</a>`).join(" ")}</p>` : r.fuentes ? `<p class="rf-srcs"><b>Fuentes:</b> ${r.fuentes.map(f => `<a href="${f[1]}" target="_blank" rel="noopener">${f[0]}</a>`).join(" · ")}</p>` : ""}
  </div>
</article>`;
      };

      const mapCol = (items, kind, title) => `<div class="rf-col"><h4>${title}</h4><ul>${items.map(x => `<li><button type="button" class="rf-nd ${kind}" data-k="${x.k}" aria-pressed="false"><b>${x.b}</b><span>${x.t}</span></button></li>`).join("")}</ul></div>`;
      const diagram = `<div class="rf-map ed-rv" id="rf-map">
  ${mapCol(REF.map(r => ({ k: "r" + r.n, b: "#" + pad(r.n), t: r.nombre })), "r", "Referentes")}
  ${mapCol(APR.map(l => ({ k: l.id.toLowerCase(), b: l.id, t: l.t })), "l", "Aprendizajes")}
  ${mapCol(DEC.map(x => ({ k: x.id.toLowerCase(), b: x.st, t: x.t })), "d", "Decisiones")}
</div><p class="rf-hint">Toca un referente, un aprendizaje o una decisión para ver con qué se conecta.</p>`;

      const tic = (t, i) => `<details class="rf-tic ${t.c}" data-c="${t.c}" ${i === 0 ? "open" : ""}>
  <summary><span class="rf-tn">${pad(i + 1)}</span><span class="rf-tt">${t.nombre}</span><em class="rf-tag ${t.c}">${CLS[t.c].t}</em></summary>
  <div class="rf-tbody">
    <div class="rf-tfig">${fig(`tic-${pad(i + 1)}-${t.id}`, "4/3", "Recurso TIC " + pad(i + 1))}</div>
    <div class="rf-tmain">
      <p class="rf-tq">${t.que}</p>
      <ol class="rf-flow" aria-label="Cómo funciona">${t.flujo.map(f => `<li>${f}</li>`).join("")}</ol>
      <dl class="rf-spec">
        <div><dt>Aplicaciones en stands</dt><dd>${t.apps}</dd></div>
        <div><dt>Experiencia del visitante</dt><dd>${t.exp}</dd></div>
        <div><dt>Requerimientos básicos</dt><dd>${t.req}</dd></div>
        <div class="ok"><dt>Ventajas</dt><dd>${t.pos}</dd></div>
        <div class="no"><dt>Limitaciones</dt><dd>${t.lim}</dd></div>
        <div class="beta"><dt>Potencial en BETA</dt><dd>${t.beta}</dd></div>
      </dl>
      ${t.visto ? `<p class="rf-seen"><b>Visto en el análisis:</b> ${t.visto}</p>` : ""}
      <p class="rf-src${t.fuente ? "" : " pend"}">${t.fuente ? t.fuente : "Fuente por citar (APA 7)."}</p>
    </div>
  </div>
</details>`;

      const cls = ["pri", "com", "exp"].map(c => `<section class="rf-cls ${c} ed-rv" aria-labelledby="cls-${c}"><h3 id="cls-${c}">${CLS[c].t}s</h3><p>${CLS[c].d}</p><ul>${TIC.filter(t => t.c === c).map(t => `<li><b>${t.nombre}</b><span>${JUST[t.id]}</span></li>`).join("")}</ul></section>`).join("");

      const plain = (h) => h.replace(/<[^>]+>/g, "").toLowerCase();
      const refItems = [{ id: "apa-matriz", n: 0, h: `Cañaña. (2026). <i>Matriz de análisis de referentes</i> [Documento del curso]. <a href="${R}${PDF}" target="_blank" rel="noopener">${PDF}</a>` }]
        .concat(REF.flatMap(r => (r.apa || []).map((x, i) => ({ id: `apa-${r.n}-${i}`, n: r.n, h: x.h }))))
        .concat(REF.filter(r => r.fuentes && !r.apa).flatMap(r => r.fuentes.map((f, i) => ({ id: `apa-${r.n}-x${i}`, n: r.n, h: `${f[0]}. <a href="${f[1]}" target="_blank" rel="noopener">${f[1]}</a>` }))))
        .concat(REFERENCIAS.map((h, i) => ({ id: `apa-extra-${i}`, n: 0, h })))
        .sort((x, y) => plain(x.h).localeCompare(plain(y.h), "es"));
      const linkify = (h) => h.replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g, (m0, pre, u) => `${pre}<a href="${u}" target="_blank" rel="noopener">${u}</a>`);
      const refsHtml = refItems.map(x => `<li id="${x.id}">${x.h.indexOf("<a ") > -1 ? x.h : linkify(x.h)}${x.n ? ` <a class="rf-back" href="#ref-${x.n}">↩ Referente #${pad(x.n)}</a>` : ""}</li>`).join("");
      const figsHtml = REF.filter(r => CREDITOS[`referente-${pad(r.n)}-${r.id}`]).map(r => `<li id="fig-${r.n}">${capH(CREDITOS[`referente-${pad(r.n)}-${r.id}`], r.n)} <a class="rf-back" href="#ref-${r.n}">↩ Referente #${pad(r.n)}</a></li>`).join("");
      const prev = acts[idx - 1], next = acts[idx + 1];
      main.innerHTML = `
<header class="rf-hero">
  <svg class="rf-tri" viewBox="0 0 400 360" aria-hidden="true"><g fill="none" stroke="#F2B705" stroke-width="2">${[0, 1, 2, 3, 4, 5].map(i => { const o = i * 30; return `<path d="M${14 + o} 352L200 ${14 + o * 1.25}L${386 - o} 352"/>`; }).join("")}</g></svg>
  <p class="rf-eye">Tercer corte · TDC-IV · ${a.fecha || ""}</p>
  <h1><span class="rf-o">Análisis</span> de<br>referentes</h1>
  <p class="rf-lema">${REF.length} proyectos y ${TIC.length} recursos tecnológicos que le dan forma a BETA.</p>
  <div class="rf-cta"><a class="rf-btn fill" href="#matriz">Ver la matriz</a><a class="rf-btn" href="#tic">Ir a los recursos TIC</a></div>
</header>
<div class="ed-nav" role="navigation" aria-label="Secciones de la actividad"><div class="ed-prog" aria-hidden="true"><i></i></div><ol>${secs.map((s, i) => `<li><a href="#${s[0]}"><span>0${i + 1}</span>${s[1]}</a></li>`).join("")}</ol></div>

<section id="matriz" class="ed-sec" aria-labelledby="matriz-t">
  ${head("01", "matriz", "Matriz de análisis de referentes", (REF.length > 12 ? "12 de la matriz del PDF + " + (REF.length - 12) + " de investigación adicional" : "Doce proyectos · cinco columnas de análisis"))}
  <p class="ed-lead ed-rv">Cada referente se estudió con la misma matriz: qué es, qué atributos comparte con BETA, qué cualidades tiene solo él y qué rasgos son comunes en otros pabellones. Aquí se presenta resumido.${REF.length > 12 ? " Los referentes #13 en adelante no están en el PDF: salen de una investigación adicional." : ""}</p>
  <div class="rf-pdf ed-rv"><div><b>Matriz completa</b><p>Las cinco columnas completas de los doce referentes, tal como se entregaron.</p><p class="rf-miss" id="rf-miss" hidden>El PDF aún no está en el proyecto. Guárdalo como <code>${PDF}</code>.</p></div><a class="rf-btn fill" id="rf-pdf" href="${R}${PDF}" target="_blank" rel="noopener">Abrir la matriz en PDF</a></div>
  <nav class="rf-idx ed-rv" aria-label="Ir a un referente"><ol>${REF.map(r => `<li><a href="#ref-${r.n}" title="${A(r.nombre)}">${flag(r.pais, "rf-fl mini")}<b>${pad(r.n)}</b>${r.nombre}</a></li>`).join("")}</ol></nav>
  <div class="rf-filt ed-rv" role="group" aria-label="Filtrar referentes"><button type="button" aria-pressed="true" data-f="all">Todos (${REF.length})</button>${Object.keys(EJES).map(k => `<button type="button" aria-pressed="false" data-f="${k}">${EJES[k]} (${REF.filter(r => r.eje === k).length})</button>`).join("")}</div>
  <div class="rf-list">${REF.map(card).join("")}</div>
</section>

<section id="conclusiones" class="ed-sec ed-dark" aria-labelledby="conclusiones-t">
  ${head("02", "conclusiones", "Qué nos dejan los referentes", "Hallazgos · oportunidades · aplicaciones")}
  <div class="rf-lv ed-rv">
    <div><h3>Hallazgos</h3><p class="rf-lvs">Lo que encontramos</p><ul>${HALL.map(h => `<li>${h}</li>`).join("")}</ul></div>
    <div><h3>Oportunidades</h3><p class="rf-lvs">Lo que se puede reinterpretar o mejorar</p><ul>${OPOR.map(h => `<li>${h}</li>`).join("")}</ul></div>
    <div><h3>Aplicaciones</h3><p class="rf-lvs">Lo que decidimos para BETA</p><ul>${DEC.map(x => `<li><b>${x.st}:</b> ${x.t}</li>`).join("")}</ul></div>
  </div>
  <h3 class="ed-h3 ed-rv">De los referentes a las decisiones</h3>
  ${diagram}
  <h3 class="ed-h3 ed-rv">Decisiones proyectuales</h3>
  <div class="rf-dec">${DEC.map(x => `<article class="rf-d ${x.st.toLowerCase()} ed-rv"><p class="rf-st">${x.st}</p><h4>${x.t}</h4><p>${x.d}</p></article>`).join("")}</div>
</section>

<section id="tic" class="ed-sec" aria-labelledby="tic-t">
  ${head("03", "tic", "Inventario de recursos TIC", "Tecnologías para un stand universitario interactivo")}
  <p class="ed-lead ed-rv">Cada ficha responde a una pregunta: ¿cómo suma esta tecnología a la experiencia de BETA? Las fichas son una síntesis de referencia; falta citar las fuentes en cada una.</p>
  <div class="rf-filt ed-rv" id="rf-tf" role="group" aria-label="Filtrar recursos TIC"><button type="button" aria-pressed="true" data-f="all">Todos (${TIC.length})</button>${["pri", "com", "exp"].map(c => `<button type="button" aria-pressed="false" data-f="${c}">${CLS[c].t}s (${TIC.filter(t => t.c === c).length})</button>`).join("")}</div>
  <div class="rf-tics">${TIC.map(tic).join("")}</div>
</section>

<section id="clasificacion" class="ed-sec ed-tint" aria-labelledby="clasificacion-t">
  ${head("04", "clasificacion", "Qué tecnologías usar primero", "Prioritarias · complementarias · experimentales")}
  <div class="rf-clss">${cls}</div>
  <div class="ed-band ed-rv"><p class="ed-k">En resumen</p><p class="ed-big">Con proyección, celular, sensor y datos en tiempo real, BETA pasa de mostrar información a dejar que el visitante cree algo que se ve en el stand.</p></div>
</section>

<section id="referencias" class="ed-sec" aria-labelledby="referencias-t">
  ${head("05", "referencias", "Referencias", "Fuentes y documentos")}
  <p class="ed-lead ed-rv">Lista en formato APA (7.ª edición) de las fuentes consultadas para cada referente. Cada fuente enlaza de vuelta a su ficha, y cada ficha cita sus fuentes al final.</p>
  <h3 class="ed-h3 ed-rv">Fuentes consultadas</h3>
  <ul class="rf-refs ed-rv">${refsHtml}</ul>
  <h3 class="ed-h3 ed-rv">Créditos de las imágenes</h3>
  <ul class="rf-refs rf-figs ed-rv">${figsHtml}</ul>
  <p class="rf-pager"><a class="rf-btn" href="index.html">← Tercer corte</a>${prev ? `<a class="rf-btn" href="actividad.html?id=${prev.id}">Anterior</a>` : ""}${next ? `<a class="rf-btn fill" href="actividad.html?id=${next.id}">Siguiente</a>` : ""}</p>
</section>
<dialog class="rf-lb" aria-label="Imagen ampliada"><button type="button" class="rf-x" aria-label="Cerrar">Cerrar</button><img alt=""><p></p></dialog>`;

      wire();
    }

    function wire() {
      const $ = (s, r) => (r || main).querySelector(s), $$ = (s, r) => [...(r || main).querySelectorAll(s)];
      /* Altura del header para que el menú de la actividad se pegue debajo */
      const hd = d.getElementById("site-header"), sh = () => d.documentElement.style.setProperty("--hh", (hd ? hd.offsetHeight : 0) + "px");
      sh(); addEventListener("resize", sh);

      /* Pestañas de cada referente */
      main.addEventListener("click", (e) => {
        const t = e.target.closest(".rf-tabs button"); if (!t) return;
        const bar = t.parentNode, tabs = $$("button", bar), card = bar.closest(".rf-body");
        tabs.forEach((b, i) => { const on = b === t; b.setAttribute("aria-selected", on); b.tabIndex = on ? 0 : -1; $("#" + b.getAttribute("aria-controls"), card).hidden = !on; });
      });
      main.addEventListener("keydown", (e) => {
        const t = e.target.closest(".rf-tabs button"); if (!t || (e.key !== "ArrowRight" && e.key !== "ArrowLeft")) return;
        const tabs = $$("button", t.parentNode), i = tabs.indexOf(t), n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length]; n.focus(); n.click();
      });

      /* Filtros (referentes y TIC) */
      const filtro = (box, items, attr) => $$("button", box).forEach(b => b.addEventListener("click", () => {
        $$("button", box).forEach(x => x.setAttribute("aria-pressed", x === b));
        items.forEach(it => { it.hidden = !(b.dataset.f === "all" || it.dataset[attr] === b.dataset.f); });
      }));
      filtro($(".rf-filt"), $$(".rf-card"), "eje");
      filtro($("#rf-tf"), $$(".rf-tic"), "c");

      /* Galería: intercambia la imagen principal con la miniatura */
      main.addEventListener("click", (e) => {
        const th = e.target.closest(".rf-th"); if (!th) return;
        const big = th.closest(".rf-fig").querySelector(".rf-fr > img"), sm = th.querySelector("img"), tmp = big.src;
        big.style.display = ""; big.src = sm.src; sm.src = tmp;
      });

      /* Imagen ampliada */
      const lb = $("dialog.rf-lb"), lbi = $("img", lb), lbp = $("p", lb);
      main.addEventListener("click", (e) => {
        const z = e.target.closest(".rf-zoom"); if (!z) return;
        const f = z.closest(".rf-fig"), im = f.querySelector(".rf-fr > img");
        if (im.style.display === "none") return; /* sin imagen aún: nada que ampliar */
        lbi.src = im.src; lbi.alt = im.alt; lbp.innerHTML = f.querySelector("figcaption").innerHTML;
        if (lb.showModal) lb.showModal(); else lb.setAttribute("open", "");
      });
      lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".rf-x")) lb.close ? lb.close() : lb.removeAttribute("open"); });

      /* Diagrama de relaciones */
      const map = $("#rf-map"), nodes = $$(".rf-nd", map), by = {};
      nodes.forEach(n => by[n.dataset.k] = n);
      const rel = (k) => {
        const s = new Set([k]), L = APR.map(l => ({ k: l.id.toLowerCase(), r: l.r.map(n => "r" + n), d: l.d.map(x => x.toLowerCase()) }));
        L.forEach(l => {
          const hit = (k[0] === "r" && l.r.includes(k)) || (k[0] === "d" && l.d.includes(k)) || l.k === k;
          if (hit) { s.add(l.k); l.r.forEach(x => s.add(x)); l.d.forEach(x => s.add(x)); }
        });
        if (k[0] === "r" || k[0] === "d") { /* mantiene solo lo conectado a la selección */ }
        return s;
      };
      let cur = "";
      nodes.forEach(n => n.addEventListener("click", () => {
        const k = n.dataset.k; cur = cur === k ? "" : k;
        const s = cur ? rel(cur) : null;
        nodes.forEach(x => { const on = !s || s.has(x.dataset.k); x.classList.toggle("dim", !on); x.setAttribute("aria-pressed", !!cur && x.dataset.k === cur); });
        map.classList.toggle("sel", !!cur);
      }));

      /* ¿Existe el PDF? (solo se puede comprobar con el sitio publicado) */
      if (location.protocol.indexOf("http") === 0) fetch($("#rf-pdf").href, { method: "HEAD" }).then(r => { if (!r.ok) $("#rf-miss").hidden = false; }).catch(() => { });

      /* Progreso, sección activa y revelado */
      const bar = $(".ed-prog i"), links = $$(".ed-nav a");
      let t = 0; const upd = () => { const h = d.documentElement; bar.style.transform = `scaleX(${Math.min(1, scrollY / Math.max(1, h.scrollHeight - innerHeight))})`; t = 0; };
      addEventListener("scroll", () => { if (!t) t = requestAnimationFrame(upd); }, { passive: true }); upd();
      const spy = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.toggleAttribute("aria-current", l.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-35% 0px -60% 0px" });
      $$(".ed-sec").forEach(s => spy.observe(s));
      if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
        body.classList.add("edjs");
        const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 });
        $$(".ed-rv").forEach(el => io.observe(el));
      }
      if (location.hash) { const el = d.getElementById(location.hash.slice(1)); if (el) setTimeout(() => el.scrollIntoView(), 50); }
    }
  };
})();
