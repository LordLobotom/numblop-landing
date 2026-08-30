import type { LocaleContent } from '../types'

export const es: LocaleContent = {
  faq: {
    heading: 'Preguntas frecuentes',
    subheading: 'Qué es Numblop, para quién es y dónde se puede jugar.',
    items: [
      {
        question: '¿Qué es Numblop?',
        answer:
          'Numblop es un juego educativo adaptativo y gratuito para practicar las tablas de multiplicar. El niño juega rondas cortas, el juego registra qué productos ya domina y devuelve los más difíciles con más frecuencia hasta que el recuerdo se vuelve automático.',
      },
      {
        question: '¿Para quién es Numblop?',
        answer:
          'Sobre todo para niños que están aprendiendo o consolidando las tablas de multiplicar, aproximadamente desde la edad en que se introduce la multiplicación en la escuela. También lo usan familias y docentes que quieren una práctica corta y sin presión en casa.',
      },
      {
        question: '¿Cómo funciona la práctica adaptativa de la multiplicación?',
        answer:
          'Numblop no pregunta todos los productos con la misma frecuencia. Sigue cómo va cada uno y vuelve a los que todavía fallan. Los que el niño responde con seguridad aparecen menos; los lentos o incorrectos vuelven antes. El mapa de progreso muestra cómo va cada tabla por separado.',
      },
      {
        question: '¿Numblop está disponible para Android?',
        answer:
          'Sí. Numblop está en Google Play: gratis, sin anuncios y sin compras dentro de la aplicación.',
      },
      {
        question: '¿Numblop está disponible para iOS?',
        answer:
          'Todavía no. No hay una aplicación independiente para iPhone ni iPad. En su lugar, el juego completo funciona en el navegador, así que se puede jugar en iOS y en ordenador sin instalar nada y sin registrarse.',
      },
      {
        question: '¿Numblop es solo un cuestionario?',
        answer:
          'No. Responder preguntas es solo una parte. Numblop combina la práctica de la multiplicación con un avance por un mapa de islas, recompensas y monedas, objetos coleccionables y mecánicas de juego que hacen que valga la pena terminar una ronda. Además, tras un error llega una explicación, no un castigo.',
      },
    ],
  },
  ui: {
    blog: 'Blog',
    guides: 'Guías',
    home: 'Inicio',
    blogTitle: 'El blog de Numblop',
    blogIntro:
      'Textos prácticos sobre aprender a multiplicar y hacer matemáticas en casa, para familias y docentes.',
    blogMetaTitle: 'Blog: aprender a multiplicar en casa – Numblop',
    blogMetaDescription:
      'Artículos prácticos sobre practicar las tablas de multiplicar, las matemáticas a través del juego y el seguimiento del progreso en casa.',
    relatedHeading: 'Seguir leyendo',
    readMore: 'Leer el artículo',
    published: 'Publicado',
    updated: 'Actualizado',
    readingTime: '{n} min de lectura',
    breadcrumbLabel: 'Ruta de navegación',
    takeawaysHeading: 'En resumen',
    backToBlog: 'Volver al blog',
  },
  pages: [
    {
      id: 'practice',
      slug: 'practicar-tablas-de-multiplicar',
      title: 'Cómo practicar las tablas de multiplicar para que se queden',
      metaTitle: 'Practicar las tablas de multiplicar: un plan que funciona – Numblop',
      metaDescription:
        'Cómo practicar las tablas de multiplicar con tu hijo: sesiones cortas diarias, qué productos merecen más atención y cómo pasar de contar a recordar al instante.',
      linkLabel: 'Practicar las tablas',
      excerpt:
        'Sesiones cortas diarias, los productos que de verdad necesitan trabajo y cómo distinguir contar de recordar.',
      updated: '2026-08-30',
      image: {
        src: '/posts/step-by-step-en.webp',
        alt: 'El mapa de progreso de Numblop, donde cada tabla avanza paso a paso',
        width: 720,
        height: 900,
      },
      intro: [
        'Los niños se encuentran con las tablas de multiplicar hacia segundo o tercero de primaria, y casi todos acaban aprendiéndolas. Lo que varía enormemente es cuánto tarda y lo desagradable que resulta el camino.',
        'La diferencia rara vez es el talento. Es cómo está organizada la práctica: cuánto dura cada sesión, con qué frecuencia ocurre, a qué productos se dedica el tiempo y si el niño entiende qué significa multiplicar antes de que se le pida rapidez.',
      ],
      sections: [
        {
          heading: 'Por qué merece la pena automatizar las tablas',
          blocks: [
            {
              p: 'Los productos de las tablas no son el objetivo de las matemáticas, pero están debajo de buena parte de lo que viene después. La multiplicación escrita, la división, las fracciones, las proporciones, los porcentajes y más adelante el álgebra dan por hecho que 7 × 8 aparece sin pensarlo.',
            },
            {
              p: 'Cuando el recuerdo es lento, el niño gasta su atención en la aritmética y no le queda nada para el problema que tiene delante. No es que las matemáticas le superen: es que no le queda con qué pensar. Automatizar es exactamente lo que libera esa atención.',
            },
          ],
        },
        {
          heading: 'Primero comprender, después velocidad',
          blocks: [
            {
              p: 'Un niño que no sabe qué significa 6 × 4 no tiene de dónde colgar la respuesta. Memorizarla sigue siendo posible, pero esa memoria es frágil y se cae bajo presión o después de las vacaciones.',
            },
            {
              p: 'Antes de repasar una tabla conviene dedicar un rato a lo que la multiplicación realmente es: grupos iguales, filas y columnas, suma repetida. Cuatro filas de seis tapones, seis saltos de cuatro en la recta numérica, un rectángulo dibujado en papel cuadriculado. En cuanto un niño puede reconstruir un producto olvidado, olvidarlo deja de ser una catástrofe.',
            },
            {
              p: 'Por eso explicar un error es mejor que corregirlo. «No, son 24» no enseña nada. Ver 6 × 4 como cuatro grupos de seis le da al niño un camino que también servirá la próxima vez.',
            },
          ],
        },
        {
          heading: 'Corto y frecuente gana a largo y esporádico',
          blocks: [
            {
              p: 'Veinte minutos una vez por semana funcionan peor que cinco minutos al día, aunque sea más tiempo en total. El recuerdo mejora con el número de ocasiones distintas en que se recupera un dato, no con los minutos de una sola sesión. Espaciar también deja que ocurra algo de olvido, y recuperar algo medio olvidado es justo lo que hace duradera la memoria.',
            },
            {
              p: 'Cinco a diez minutos bastan para la mayoría de niños de esta edad. Es lo bastante corto para que la atención aguante hasta el final, para que no haya que negociarlo y para que quepa en un día que ya tiene deberes.',
            },
            {
              list: [
                'El objetivo es la mayoría de los días, no todos: saltarse una sesión no puede parecer un fracaso.',
                'Parar mientras todavía va bien, no cuando la atención ya se ha agotado.',
                'Mantener la misma hora, para que sea rutina y no una decisión diaria.',
              ],
            },
          ],
        },
        {
          heading: 'Qué productos necesitan la práctica de verdad',
          blocks: [
            {
              p: 'La tabla completa hasta el diez parece cien productos. En la práctica son muchos menos. Multiplicar por 1 y por 10 es una regla, no un dato. El 2, el 5 y el 4 suelen llegar pronto. Y como 7 × 8 y 8 × 7 son el mismo producto, media tabla es el espejo de la otra mitad.',
            },
            {
              p: 'Lo que queda es un grupo pequeño y terco con el que casi todos los niños pelean: normalmente el centro del 6, el 7 y el 8. A esos conviene volver una y otra vez, y son exactamente los que menos se practican cuando se recorren las tablas en orden.',
            },
            {
              p: 'Practicar toda la tabla por igual gasta la mayor parte de la sesión en productos que el niño ya domina. Practicar solo los débiles desmoraliza. La mezcla útil es sobre todo productos débiles con suficientes conocidos intercalados para que la ronda se sienta ganable.',
            },
          ],
        },
        {
          heading: 'Mezclar lo nuevo con lo antiguo',
          blocks: [
            {
              p: 'Aprender una tabla aislada produce un niño que recita el 7 en orden y aun así se atasca en 7 × 6 cuando aparece solo. El orden pasa a formar parte del recuerdo, y en los problemas reales no hay orden disponible.',
            },
            {
              p: 'En cuanto una tabla está introducida, conviene mezclarla directamente con todo lo anterior. La práctica mezclada resulta más difícil en el momento y produce mejor recuerdo después: el niño tiene que identificar el producto antes de responderlo, que es justo la habilidad que necesitará.',
            },
          ],
        },
        {
          heading: 'De contar a recordar al instante',
          blocks: [
            {
              p: 'Hay una fase en la que el niño acierta, pero llega ahí contando de más, o resolviendo 6 × 7 como 6 × 6 más seis. Es progreso real y buena señal de comprensión. Todavía no es automatización.',
            },
            {
              p: 'La señal que hay que mirar no es el acierto sino la duda. Un producto está realmente automatizado cuando la respuesta llega en un par de segundos, fuera de orden, en un día en que el niño está cansado y sin una pausa visible para calcular.',
            },
            {
              p: 'Aquí el tiempo sí ayuda, pero como medida y no como amenaza. Un cronómetro que castiga la lentitud añade presión justo donde los niños ya la sienten. Fijarse en silencio en qué productos llegan despacio y practicarlos más consigue lo mismo sin ese coste.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Una práctica que se gestiona sola',
        body: 'Numblop se encarga de la contabilidad: sigue qué productos domina el niño, mezcla lo nuevo con lo antiguo y vuelve más a menudo a los débiles, en rondas cortas, sin cronómetros ni castigos.',
      },
    },
    {
      id: 'play',
      slug: 'juegos-de-matematicas-para-ninos',
      title: 'Juegos de matemáticas para niños que enseñan de verdad',
      metaTitle: 'Juegos de matemáticas para niños que enseñan de verdad – Numblop',
      metaDescription:
        'Cómo distinguir un juego educativo de un cuestionario con dibujos bonitos, en qué fijarse, qué evitar y qué juegos matemáticos funcionan sin pantalla.',
      linkLabel: 'Juegos de matemáticas',
      excerpt:
        'Qué separa un juego que enseña matemáticas de una ficha con efectos de sonido, y cómo elegir.',
      updated: '2026-08-30',
      image: {
        src: '/posts/multiplication-fun-en.webp',
        alt: 'Un personaje de Numblop en un entorno de juego con objetos coleccionables',
        width: 720,
        height: 900,
      },
      intro: [
        '«Aprender jugando» abarca hoy desde un juego bien diseñado hasta una ficha con un marco de dibujos. Ambos se venden igual, así que conviene saber qué los distingue.',
        'La pregunta útil no es si el juego es divertido. Es si la diversión y las matemáticas son la misma actividad, o si las matemáticas son un peaje que el niño paga para volver a la diversión.',
      ],
      sections: [
        {
          heading: 'Qué hace educativo a un juego de matemáticas',
          blocks: [
            {
              p: 'En un juego que enseña, pensar es jugar. Resolver el cálculo es lo que te hace avanzar, y mejorar en matemáticas es mejorar en el juego. El progreso en el juego y el progreso en la cabeza son la misma línea.',
            },
            {
              p: 'En un juego que no enseña, las matemáticas son una barrera. Responde cinco preguntas y juega noventa segundos; cinco más y desbloqueas un sombrero. Las preguntas no se distinguen de una ficha, y el niño aprende que las matemáticas son la parte desagradable que hay que pasar para llegar a la buena. Es una lección peor de lo que vale la aritmética.',
            },
            {
              p: 'Las recompensas no son el problema. Un niño que quiere terminar la ronda porque al final ocurre algo bueno está practicando más de lo que practicaría. El problema aparece solo cuando la recompensa sustituye al pensamiento en lugar de seguirlo.',
            },
          ],
        },
        {
          heading: 'Jugar no es un soborno por hacer los deberes',
          blocks: [
            {
              p: 'El juego hace algo concreto por el aprendizaje, y no es decoración motivacional: baja el coste de equivocarse. Un niño que juega intenta un producto del que no está seguro, porque un error dentro del juego es simplemente lo que pasa después. Ese mismo niño ante una ficha suele parar y esperar a que se lo digan, porque equivocarse en papel parece permanente.',
            },
            {
              p: 'Esa disposición a intentar algo incierto es donde ocurre la mayor parte del aprendizaje. Recuperar un dato del que no estás seguro hace más por la memoria que leer la respuesta correcta, pero solo si el niño se atreve a intentarlo. Todo lo que abarata el intento está haciendo trabajo pedagógico, no solo entretenimiento.',
            },
          ],
        },
        {
          heading: 'En qué fijarse',
          blocks: [
            {
              list: [
                'Las matemáticas son el juego, no una barrera delante de él.',
                'La dificultad sigue al niño: lo que domina aparece menos, lo que falla vuelve.',
                'Tras un error llega una explicación, no solo un pitido.',
                'Sesiones cortas con un final natural.',
                'El progreso es visible y el niño lo entiende de un vistazo.',
                'Funciona sin cuenta y queda claro qué pasa con los datos.',
              ],
            },
          ],
        },
        {
          heading: 'De qué desconfiar',
          blocks: [
            {
              list: [
                'Cronómetro en cada pregunta: en niños ansiosos empeora el rendimiento de forma fiable.',
                'Rachas que castigan un día perdido; presión dirigida tanto a la familia como al niño.',
                'Anuncios entre rondas, sobre todo si son más emocionantes que el juego.',
                'Compras integradas donde lo interesante está detrás del muro de pago.',
                'Las mismas preguntas en el mismo orden siempre: entrena el orden, no los productos.',
                'Una dificultad que nunca cambia, responda como responda el niño.',
              ],
            },
          ],
        },
        {
          heading: 'Juegos de matemáticas sin pantalla',
          blocks: [
            {
              p: 'La pantalla no es imprescindible, y mezclar suele ser mejor que solo una cosa. Algunas de las mejores formas de practicar no cuestan nada:',
            },
            {
              list: [
                'Dos dados y una carrera por decir el producto primero, con un adulto al que se pueda ganar.',
                'Una baraja sin figuras: gira dos cartas y multiplícalas.',
                'Rectángulos del mundo real: hueveras, baldosas, moldes de magdalenas, filas de asientos.',
                'Contar de cuatro en cuatro, de seis en seis o de siete en siete camino del colegio.',
                'Cocinar, donde doblar una receta es multiplicar con un motivo.',
              ],
            },
            {
              p: 'En una cosa son mejores que cualquier aplicación: son conversaciones. Oyes cómo ha llegado el niño a la respuesta, y eso dice mucho más que si acertó.',
            },
          ],
        },
        {
          heading: 'Dónde encaja Numblop',
          blocks: [
            {
              p: 'Numblop sigue el primer patrón. La multiplicación es el juego: responder es lo que te mueve por el mapa, y no hay un minijuego aparte al que escapar. Recompensas, monedas, objetos y nuevas islas se derivan de la práctica en vez de sustituirla.',
            },
            {
              p: 'Está pensado sin prisa: sin cuenta atrás, sin castigo por fallar y con una explicación cuando algo sale mal. Las rondas son cortas, el progreso se queda en el dispositivo y no hay cuentas, anuncios ni compras integradas.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Pruébalo en el navegador',
        body: 'Numblop funciona en Android y directamente en el navegador en iPhone, iPad y ordenador: gratis, sin instalar nada y sin registrarse.',
      },
    },
    {
      id: 'progress',
      slug: 'progreso-en-matematicas',
      title: 'Cómo saber si un niño domina de verdad las tablas',
      metaTitle: 'Seguir el progreso en matemáticas sin exámenes – Numblop',
      metaDescription:
        'Evaluación formativa en casa: cómo comprobar si una tabla de multiplicar está realmente dominada, en qué fijarse y cómo hacer visible el progreso sin presión.',
      linkLabel: 'Progreso en matemáticas',
      excerpt:
        'Cómo comprobar si un producto está dominado sin convertir cada día en un examen.',
      updated: '2026-08-30',
      image: {
        src: '/posts/rewards-en.webp',
        alt: 'Un cofre de recompensa y monedas ganadas al terminar la práctica en Numblop',
        width: 720,
        height: 900,
      },
      intro: [
        'Con las tablas de multiplicar, la pregunta difícil no es qué practicar, sino qué ya no hace falta practicar. Si sigues repasando lo que ya está dominado, gastas la escasa atención del niño. Si paras demasiado pronto, el producto habrá desaparecido después de las vacaciones.',
        'Esa pregunta se puede responder, y sin poner un examen. Lo que hace falta es evaluación formativa: pequeñas comprobaciones que orientan lo que se practicará después y que no tienen consecuencias para el niño.',
      ],
      sections: [
        {
          heading: 'Por qué acertar no basta como señal',
          blocks: [
            {
              p: 'Un niño que cuenta de más o parte de un producto vecino también llega a la respuesta correcta. La respuesta está bien; el producto no está terminado. Quien solo cuenta cuántos aciertos hay nunca ve esa diferencia.',
            },
            {
              p: 'Y es justo esa diferencia la que importa después. En una división larga o con fracciones, la aritmética se come la atención que hace falta para el problema. Por eso conviene mirar la duda y no la marca de correcto.',
            },
          ],
        },
        {
          heading: 'Tres señales que dicen más',
          blocks: [
            { h3: '¿La respuesta llega o se construye?' },
            {
              p: 'Fíjate en la pausa. Un producto recordado vuelve en uno o dos segundos. Uno reconstruido tiene un hueco visible mientras el niño cuenta o parte de un producto cercano. Los dos son correctos; solo uno está terminado.',
            },
            { h3: '¿Aguanta fuera de orden?' },
            {
              p: 'Pregunta 8 × 7 en medio de una serie mezclada, días después de que el 8 fuera el tema. Los productos que solo funcionan dentro de su propia tabla todavía no son independientes.',
            },
            { h3: '¿Aguanta un mal día?' },
            {
              p: 'Un producto que desaparece cuando el niño está cansado o distraído sigue siendo frágil. No es motivo de preocupación, solo motivo para dejarlo un tiempo más en circulación.',
            },
            {
              p: 'La pregunta más informativa que existe no cuesta nada: «¿cómo lo has sacado?». Un «nueve seises son diez seises menos seis» indica comprensión sin automatización. Un encogimiento de hombros con la respuesta correcta suele significar que ya está.',
            },
          ],
        },
        {
          heading: 'Preguntar sin que parezca un examen',
          blocks: [
            {
              p: 'En cuanto preguntar se siente como un examen, cambia la conducta: los niños arriesgan menos, evitan los productos inseguros y se ocupan de cómo se sienten en vez de las matemáticas. Con eso desaparece justo la información que buscabas.',
            },
            {
              list: [
                'Pregunta de pasada: poniendo la mesa, en el coche, entre otras cosas.',
                'Reacciona sin juicio; los niños leen un suspiro al instante.',
                'Pregunta por el camino, no solo por el resultado.',
                'Usa lo que veas para cambiar la práctica, no para calificar.',
              ],
            },
          ],
        },
        {
          heading: 'Hacer visible el progreso',
          blocks: [
            {
              p: 'No hace falta una hoja de cálculo. Hace falta saber qué productos siguen débiles y cómo se ha movido la cosa a lo largo de un trimestre: lo justo para planificar y lo justo para enseñarle al niño una prueba de avance el día en que le parece que no pasa nada.',
            },
            {
              list: [
                'Una cuadrícula en la pared donde el propio niño colorea lo que ya domina.',
                'Una nota corta tras cada sesión con los dos o tres productos lentos.',
                'Una muestra de trabajo fechada cada pocas semanas.',
                'Lo que ya registre la aplicación de práctica, si muestra productos y no solo puntuaciones.',
              ],
            },
            {
              p: 'El progreso visible pesa más de lo que parece. Los niños sobrestiman lo que falta, y ver encogerse el montón de productos desconocidos ayuda.',
            },
          ],
        },
        {
          heading: 'Dónde ayuda una herramienta de práctica',
          blocks: [
            {
              p: 'El software es malo justo en lo que más importa: explicar, notar la confusión, mantener la conversación sobre cómo se ha llegado a la respuesta. Es bueno en lo que de verdad resulta tedioso: recordar cuál de cien productos está flojo ahora mismo en este niño concreto y programar la repetición en consecuencia.',
            },
            {
              p: 'Para eso está Numblop. Sigue cada producto por separado, mezcla lo nuevo con lo antiguo, vuelve más a menudo a los débiles y muestra el estado en un mapa que el niño puede leer. Funciona en Android y en el navegador en iPhone, iPad y ordenador, el progreso se queda en el dispositivo y no hace falta cuenta.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Añade cinco minutos al día',
        body: 'Numblop es gratuito, funciona sin conexión una vez instalado y guarda el progreso en el dispositivo: sin cuentas, sin anuncios y sin compras integradas.',
      },
    },
  ],
  articles: [
    {
      id: 'without-rote',
      slug: 'aprender-las-tablas-de-multiplicar-sin-memorizar',
      title: 'Cómo enseñar las tablas de multiplicar sin memorizar de carrerilla',
      metaTitle: 'Aprender las tablas de multiplicar sin memorizar – Numblop',
      metaDescription:
        'Por qué recitar las tablas no suele bastar y qué funciona mejor: comprender primero, practicar poco y a diario, mezclar productos y ganar velocidad sin presión.',
      linkLabel: 'Tablas sin memorizar de carrerilla',
      excerpt:
        'Recitar las tablas produce un niño que canta el siete y aun así se atasca en 7 × 6. Esto funciona mejor.',
      published: '2026-08-30',
      updated: '2026-08-30',
      image: {
        src: '/posts/mistakes-help-en.webp',
        alt: 'Numblop muestra 3 × 5 = 15 con puntos que el niño puede contar tras un error',
        width: 720,
        height: 900,
      },
      takeaways: [
        'Comprender qué significa multiplicar tiene que venir antes que la velocidad.',
        'Cinco minutos casi todos los días superan una sesión larga semanal.',
        'Mezcla lo nuevo con lo antiguo: practicar una tabla en orden entrena el orden, no los productos.',
        'Dedica la mayor parte del tiempo al grupo pequeño de productos realmente difíciles.',
        'La velocidad importa, pero después de comprender, y se observa en vez de imponerse con un cronómetro.',
        'Explica los errores en vez de corregirlos, para que un producto olvidado se pueda reconstruir.',
      ],
      intro: [
        'Casi todos los adultos recuerdan haber recitado las tablas. Algunos con cariño, la mayoría como ruido, y una buena parte recuerda el miedo concreto a que le preguntaran 7 × 8 delante de la clase. Es el método por defecto porque es fácil de organizar, no porque sea el mejor.',
        'Recitar produce algo. Solo que lo equivocado: produce una secuencia. Un niño que ha aprendido el siete como una canción lo recita desde 7 × 1 y aun así se queda en blanco cuando 7 × 6 aparece solo en una división, porque el camino a la respuesta pasa por la lista entera.',
        'Lo que sigue no es un rechazo a la práctica. Los productos tienen que volverse automáticos, y eso exige repetición durante meses. La pregunta es qué tipo de repetición y en qué orden.',
      ],
      sections: [
        {
          heading: 'Por qué memorizar solo no suele funcionar',
          blocks: [
            {
              p: 'Un dato memorizado sin significado detrás es un objeto frágil. No hay nada con qué comprobarlo, así que el niño no distingue 6 × 7 = 42 de 6 × 7 = 45 salvo recordando más fuerte. Y no hay vuelta atrás: cuando se pierde, se pierde, y las vacaciones de verano suelen bastar para eso.',
            },
            {
              p: 'Un niño que entiende la multiplicación tiene una red. Olvidar 6 × 7 es una molestia menor: es el doble de 3 × 7, o 5 × 7 más siete, o seis filas de siete que se pueden contar si hace falta. Llega despacio, pero llega, y cada reconstrucción hace un poco más probable el recuerdo directo la próxima vez.',
            },
            {
              p: 'Por eso comprender no es un camino más lento hacia la fluidez. Es lo que hace que la fluidez sea estable.',
            },
          ],
        },
        {
          heading: 'Empieza por qué es multiplicar',
          blocks: [
            {
              p: 'Antes de cualquier repaso, el niño necesita una imagen. Multiplicar son grupos iguales: cuatro bolsas con seis canicas. Y también es un rectángulo, filas y columnas, que es la imagen que se rentabiliza después porque deja ver por qué 6 × 4 y 4 × 6 dan lo mismo. Gira el rectángulo noventa grados y es el mismo rectángulo.',
            },
            {
              p: 'Esa única idea reduce el trabajo a la mitad. De cien productos quedan unos cincuenta, y los niños que no se han dado cuenta están aprendiéndolo todo dos veces en silencio.',
            },
            {
              list: [
                'Colocar tapones, botones o pasta en filas y contarlos de dos maneras.',
                'Buscar rectángulos por casa: huevera, baldosas, molde de magdalenas, tableta de chocolate.',
                'Dibujar el producto en papel cuadriculado y contar los cuadros.',
                'Contar de cuatro en cuatro en voz alta mientras se camina, para que el patrón entre también como ritmo.',
              ],
            },
            {
              p: 'Esta fase es corta, no es trabajo de un trimestre. Pero saltársela es lo que produce un niño que recita tablas y no sabe usarlas.',
            },
          ],
        },
        {
          heading: 'Poco y a menudo, no mucho y de vez en cuando',
          blocks: [
            {
              p: 'El error práctico más común es acumular la práctica. Media hora el fin de semana parece productiva y funciona mal. Cinco minutos casi todos los días funcionan mucho mejor, aunque sea menos tiempo total.',
            },
            {
              p: 'La razón es que la memoria responde al número de ocasiones distintas en que se recupera algo, repartidas en el tiempo, y no a la duración de una sesión. Dejar que haya algo de olvido entre sesiones forma parte del mecanismo, no es un fallo.',
            },
            {
              p: 'Cinco a diez minutos es un objetivo realista. Corto para que la atención aguante hasta el final, corto para que no se convierta en una discusión diaria, y corto para sobrevivir a una semana complicada, que es la única prueba que importa a lo largo de meses.',
            },
          ],
        },
        {
          heading: 'Sigue un orden sensato',
          blocks: [
            {
              p: 'Algunas tablas salen casi gratis, y empezar por ahí construye confianza rápido. El 2 es doblar. El 10 y el 5 tienen patrones obvios. El 4 es doblar dos veces. El 9 tiene el truco de los dedos y el patrón de la suma de cifras, que divierte a los niños mucho más de lo que su utilidad justifica.',
            },
            {
              p: 'Cuando eso está, la mayor parte de la tabla está cubierta y queda un núcleo pequeño y terco en el centro del 6, el 7 y el 8: los clásicos 6 × 7, 7 × 8, 6 × 8. Casi todos los niños los encuentran más difíciles y son justo los que menos se practican recorriendo las tablas en orden.',
            },
            {
              p: 'Dilo en voz alta delante del niño. Saber que quedan quizá ocho productos verdaderamente difíciles, y no cien, cambia cómo se siente la tarea entera.',
            },
          ],
        },
        {
          heading: 'Mezcla los débiles con los conocidos',
          blocks: [
            {
              p: 'Hay un error a cada lado de la solución correcta. Practicar toda la tabla por igual gasta casi toda la sesión en lo que ya está. Practicar solo lo débil es implacable: cada pregunta es difícil y la ronda se convierte en algo que hay que soportar.',
            },
            {
              p: 'Una mezcla con mayoría de productos débiles y un suministro constante de conocidos mantiene la dificultad honesta y la ronda soportable. Los fáciles no se desperdician: son lo que hace que el niño vuelva mañana.',
            },
            {
              p: 'Barajar también importa. Los productos deben aparecer fuera de orden y fuera de su propia tabla, porque no se necesitan de ninguna otra forma.',
            },
          ],
        },
        {
          heading: 'Cuándo empieza a importar la velocidad',
          blocks: [
            {
              p: 'La velocidad tiene mala fama en la enseñanza de las matemáticas, y en gran parte con razón, porque suele introducirse como presión. Pero la fluidez es un objetivo real, y el motivo es práctico, no competitivo.',
            },
            {
              p: 'Cuando un niño calcula 7 × 8 en vez de recordarlo, ese trabajo ocupa la atención que necesita para el problema. En una división larga o en fracciones, la aritmética se come el pensamiento.',
            },
            {
              p: 'Así que la velocidad importa, después de comprender y como algo que se observa, no que se impone. Fíjate en qué productos llegan con pausa y practícalos más. Eso consigue todo lo que consigue un cronómetro sin enseñarle a un niño ansioso que se le dan mal las matemáticas.',
            },
          ],
        },
        {
          heading: 'Jugar, y por qué hace trabajo real',
          blocks: [
            {
              p: 'Los juegos suelen justificarse porque hacen la práctica llevadera. Eso los infravalora. Jugar cambia lo que el niño está dispuesto a hacer, y en concreto lo vuelve dispuesto a arriesgar.',
            },
            {
              p: 'Un niño que juega intenta un producto del que no está seguro, porque fallar dentro del juego no tiene importancia. Ese mismo niño ante una ficha se para y espera, porque en papel un fallo es una marca. Y como intentar un dato a medio saber es lo que refuerza la memoria, el que arriesga aprende y el que espera no.',
            },
            {
              p: 'Las pantallas son opcionales. Dos dados y una carrera, una baraja sin figuras o preguntas durante un viaje en coche hacen lo mismo. Una aplicación bien hecha añade sobre todo la contabilidad.',
            },
          ],
        },
        {
          heading: 'Motivación sin presión',
          blocks: [
            {
              p: 'Esto dura meses, y lo difícil es la continuidad, no el método. Unas pocas cosas ayudan más de lo que parece:',
            },
            {
              list: [
                'Haz visible el progreso: una cuadrícula en la pared con lo dominado coloreado da pruebas en un día flojo.',
                'Elogia la práctica, no la capacidad. «Has seguido con el siete» se puede repetir; «qué listo eres» convierte el siguiente producto difícil en prueba de lo contrario.',
                'Misma hora cada día, para que sea rutina y no una decisión negociable.',
                'Para mientras va bien. Terminar en una buena ronda es lo que hace fácil el día siguiente.',
                'Que la recompensa siga al esfuerzo en vez de bloquearlo.',
              ],
            },
            {
              p: 'Y mantén plana tu propia reacción ante los errores. Los niños leen un suspiro al instante, y el que cree que fallar te decepciona empezará a evitar los productos de los que menos seguro está, que son precisamente los que necesitan trabajo.',
            },
          ],
        },
        {
          heading: 'Cómo saber que de verdad ha calado',
          blocks: [
            {
              p: 'La comprobación no es un examen y funciona mejor si no lo parece. Buscas información para la práctica de mañana, no una nota.',
            },
            {
              list: [
                'La respuesta llega en uno o dos segundos, sin pausa visible para calcular.',
                'Aguanta preguntada fuera de orden, días después de que esa tabla fuera el tema.',
                'Aguanta un día de cansancio.',
                'El niño puede explicar cómo lo reconstruiría si lo olvidara.',
              ],
            },
            {
              p: 'Ese último punto es la diferencia entre este enfoque y recitar. Un niño que puede decir «nueve sietes son diez sietes menos siete» tiene algo duradero, incluso el día en que el recuerdo directo no aparece.',
            },
          ],
        },
        {
          heading: 'Dónde encaja la práctica digital',
          blocks: [
            {
              p: 'Una aplicación no puede hacer la mitad importante. No nota que un niño está confundido sobre qué significa multiplicar, no mantiene la conversación sobre cómo llegó a la respuesta y no coloca tapones sobre la mesa.',
            },
            {
              p: 'Lo que sí puede hacer es la mitad tediosa, y esa a mano es realmente difícil: recordar cuál de cien productos está flojo ahora mismo en este niño concreto y ponérselo delante más a menudo, el día adecuado, mezclado con suficiente material conocido.',
            },
            {
              p: 'Numblop está construido alrededor de ese trabajo. Sigue cada producto por separado, devuelve los lentos y los fallados, mezcla lo nuevo con lo antiguo y explica el error mostrando 3 × 5 = 15 como puntos que el niño puede contar, en vez de marcarlo mal y seguir. No hay cuenta atrás ni castigo por fallar, las rondas son cortas y el progreso se ve en un mapa que el niño lee de un vistazo. Funciona en Android y en el navegador en iPhone, iPad y ordenador; el progreso se queda en el dispositivo y no hay cuentas, anuncios ni compras integradas.',
            },
            {
              p: 'Es una herramienta para una parte del problema. La comprensión, la conversación y la rutina siguen siendo tuyas, y son las partes que merecen tu tiempo.',
            },
          ],
        },
      ],
    },
  ],
}
