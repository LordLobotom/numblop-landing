import type { LocaleContent } from '../types'

export const fr: LocaleContent = {
  faq: {
    heading: 'Questions fréquentes',
    subheading: 'Ce qu’est Numblop, à qui il s’adresse et où y jouer.',
    items: [
      {
        question: 'Qu’est-ce que Numblop ?',
        answer:
          'Numblop est un jeu éducatif adaptatif et gratuit pour s’entraîner aux tables de multiplication. L’enfant joue de courtes manches, le jeu retient les résultats qu’il maîtrise déjà et ramène les plus difficiles plus souvent, jusqu’à ce que la réponse vienne automatiquement.',
      },
      {
        question: 'À qui s’adresse Numblop ?',
        answer:
          'Surtout aux enfants qui apprennent ou consolident les tables de multiplication, à partir de l’âge où la multiplication est introduite à l’école. Il est aussi utilisé par des parents et des enseignants qui veulent un entraînement court et sans pression à la maison.',
      },
      {
        question: 'Comment fonctionne l’entraînement adaptatif ?',
        answer:
          'Numblop ne pose pas toutes les multiplications aussi souvent. Il suit comment chacune se passe et revient sur celles qui coincent encore. Celles auxquelles l’enfant répond avec assurance reviennent moins ; les lentes ou les fausses reviennent plus tôt. La carte de progression montre où en est chaque table.',
      },
      {
        question: 'Numblop est-il disponible sur Android ?',
        answer:
          'Oui. Numblop est sur Google Play : gratuit, sans publicité et sans achat intégré.',
      },
      {
        question: 'Numblop est-il disponible sur iOS ?',
        answer:
          'Pas encore. Il n’existe pas d’application distincte pour iPhone ou iPad. Le jeu complet fonctionne dans le navigateur, donc sur iOS et sur ordinateur, sans rien installer et sans inscription.',
      },
      {
        question: 'Numblop n’est-il qu’un quiz ?',
        answer:
          'Non. Répondre aux calculs n’en est qu’une partie. Numblop associe l’entraînement à la multiplication à une progression sur une carte d’îles, des récompenses et des pièces, des objets à collectionner et des mécaniques de jeu qui donnent envie de terminer une manche. Après une erreur, l’enfant reçoit une explication, pas une sanction.',
      },
    ],
  },
  ui: {
    blog: 'Blog',
    guides: 'Guides',
    home: 'Accueil',
    blogTitle: 'Le blog Numblop',
    blogIntro:
      'Des textes concrets sur l’apprentissage des tables et les maths à la maison, pour les parents et les enseignants.',
    blogMetaTitle: 'Blog : apprendre les tables de multiplication à la maison – Numblop',
    blogMetaDescription:
      'Des articles pratiques sur l’entraînement aux tables de multiplication, les maths par le jeu et le suivi des progrès à la maison.',
    relatedHeading: 'À lire aussi',
    readMore: 'Lire l’article',
    published: 'Publié le',
    updated: 'Mis à jour le',
    readingTime: '{n} min de lecture',
    breadcrumbLabel: 'Fil d’Ariane',
    takeawaysHeading: 'En bref',
    backToBlog: 'Retour au blog',
  },
  pages: [
    {
      id: 'practice',
      slug: 'tables-de-multiplication',
      title: 'Comment travailler les tables de multiplication pour qu’elles restent',
      metaTitle: 'Travailler les tables de multiplication : une méthode qui tient – Numblop',
      metaDescription:
        'Comment entraîner votre enfant aux tables de multiplication : séances courtes et quotidiennes, les résultats à travailler en priorité, et le passage du calcul à la réponse immédiate.',
      linkLabel: 'Tables de multiplication',
      excerpt:
        'Des séances courtes et quotidiennes, les résultats qui demandent vraiment du travail, et comment distinguer le calcul du vrai automatisme.',
      updated: '2026-08-30',
      image: {
        src: '/posts/step-by-step-en.webp',
        alt: 'La carte de progression de Numblop, où chaque table avance étape par étape',
        width: 720,
        height: 900,
      },
      intro: [
        'Les tables de multiplication arrivent vers le CE1 et le CE2, et la plupart des enfants finissent par les savoir. Ce qui varie énormément, c’est le temps que cela prend et à quel point le chemin est désagréable.',
        'La différence tient rarement au talent. Elle tient à l’organisation de l’entraînement : la durée d’une séance, sa fréquence, les résultats auxquels on consacre du temps, et le fait que l’enfant comprenne ce que multiplier veut dire avant qu’on lui demande d’aller vite.',
      ],
      sections: [
        {
          heading: 'Pourquoi l’automatisation des tables en vaut la peine',
          blocks: [
            {
              p: 'Les tables ne sont pas le but des mathématiques, mais elles se trouvent sous une grande partie de ce qui vient ensuite. La multiplication posée, la division, les fractions, les proportions, les pourcentages et plus tard l’algèbre supposent que 7 × 8 arrive sans y penser.',
            },
            {
              p: 'Quand la réponse est lente, l’enfant dépense son attention en calcul et il ne lui reste rien pour le problème lui-même. Les maths ne sont pas trop dures pour lui : il n’a simplement plus de quoi réfléchir. C’est exactement cette attention que l’automatisation libère.',
            },
          ],
        },
        {
          heading: 'Comprendre d’abord, aller vite ensuite',
          blocks: [
            {
              p: 'Un enfant qui ne sait pas ce que signifie 6 × 4 n’a rien à quoi accrocher la réponse. Il peut la mémoriser malgré tout, mais cette mémoire est fragile et s’effondre sous la pression ou après les vacances.',
            },
            {
              p: 'Avant de répéter une table, il vaut la peine de passer un moment sur ce qu’est la multiplication : des groupes égaux, des lignes et des colonnes, une addition répétée. Quatre rangées de six bouchons, six bonds de quatre sur une droite graduée, un rectangle dessiné sur du papier quadrillé. Dès qu’un enfant sait reconstruire un résultat oublié, l’oubli cesse d’être une catastrophe.',
            },
            {
              p: 'C’est pour cela qu’expliquer une erreur vaut mieux que la corriger. « Non, c’est 24 » n’apprend rien. Voir 6 × 4 comme quatre groupes de six donne à l’enfant un chemin qui fonctionnera encore la prochaine fois.',
            },
          ],
        },
        {
          heading: 'Court et fréquent l’emporte sur long et rare',
          blocks: [
            {
              p: 'Vingt minutes une fois par semaine valent moins que cinq minutes par jour, alors même que c’est plus de temps au total. La mémorisation progresse avec le nombre d’occasions distinctes où l’on va rechercher un résultat, pas avec les minutes d’une seule séance. Espacer laisse aussi un peu d’oubli s’installer, et récupérer ce qu’on avait à demi perdu est justement ce qui rend le souvenir durable.',
            },
            {
              p: 'Cinq à dix minutes suffisent à la plupart des enfants de cet âge. C’est assez court pour que la concentration tienne jusqu’au bout, assez court pour qu’il n’y ait rien à négocier, et assez court pour tenir dans une journée qui comporte déjà des devoirs.',
            },
            {
              list: [
                'Viser la plupart des jours, pas tous les jours : une séance sautée ne doit pas ressembler à un échec.',
                'S’arrêter tant que ça se passe bien, pas quand l’attention est déjà partie.',
                'Garder le même moment, pour que ce soit une routine et non une décision quotidienne.',
              ],
            },
          ],
        },
        {
          heading: 'Quels résultats ont vraiment besoin de travail',
          blocks: [
            {
              p: 'La table complète jusqu’à dix ressemble à cent résultats. En pratique, il y en a bien moins. Multiplier par 1 et par 10 est une règle, pas un fait à retenir. Les tables de 2, de 5 et de 4 arrivent en général tôt. Et comme 7 × 8 et 8 × 7 sont le même résultat, la moitié du tableau est le miroir de l’autre.',
            },
            {
              p: 'Il reste un petit groupe tenace contre lequel presque tous les enfants butent : typiquement le milieu des tables de 6, 7 et 8. Ce sont ceux sur lesquels il faut revenir encore et encore, et ce sont exactement ceux qu’un parcours des tables dans l’ordre travaille le moins.',
            },
            {
              p: 'Travailler tout le tableau uniformément consacre l’essentiel de la séance à des résultats déjà acquis. N’entraîner que les faibles est décourageant. Le bon dosage est majoritairement des résultats faibles, avec assez de connus intercalés pour que la manche reste gagnable.',
            },
          ],
        },
        {
          heading: 'Mélanger le nouveau et l’ancien',
          blocks: [
            {
              p: 'Apprendre une table isolément produit un enfant qui récite la table de 7 dans l’ordre et bloque quand même sur 7 × 6 quand elle apparaît seule. L’ordre devient une partie du souvenir, et dans un vrai problème, aucun ordre n’est disponible.',
            },
            {
              p: 'Dès qu’une table est introduite, il faut la mélanger directement à tout ce qui précède. Un entraînement mélangé paraît plus difficile sur le moment et donne une meilleure mémorisation ensuite : l’enfant doit d’abord identifier le calcul avant d’y répondre, et c’est précisément la compétence dont il aura besoin.',
            },
          ],
        },
        {
          heading: 'Du calcul à la réponse immédiate',
          blocks: [
            {
              p: 'Il existe une étape où l’enfant répond juste, mais en comptant de proche en proche ou en passant par un résultat voisin — 6 × 7 comme 6 × 6 plus six. C’est un vrai progrès et un bon signe de compréhension. Ce n’est pas encore de l’automatisation.',
            },
            {
              p: 'Le signal à surveiller n’est pas la justesse mais l’hésitation. Un résultat est réellement automatique quand la réponse arrive en une ou deux secondes, hors de l’ordre, un jour où l’enfant est fatigué, et sans pause visible pour calculer.',
            },
            {
              p: 'C’est là que le temps est utile — comme mesure, pas comme menace. Un chronomètre qui sanctionne la lenteur ajoute de la pression exactement là où les enfants en ressentent déjà. Remarquer discrètement quels résultats arrivent lentement et les travailler davantage produit le même effet sans ce coût.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Un entraînement qui se gère tout seul',
        body: 'Numblop se charge de la comptabilité : il suit ce que l’enfant maîtrise, mélange le nouveau et l’ancien, et revient plus souvent sur les résultats faibles — en manches courtes, sans chronomètre ni sanction.',
      },
    },
    {
      id: 'play',
      slug: 'jeux-de-maths-pour-enfants',
      title: 'Jeux de maths pour enfants : ceux qui enseignent vraiment',
      metaTitle: 'Jeux de maths pour enfants qui enseignent vraiment – Numblop',
      metaDescription:
        'Comment distinguer un vrai jeu éducatif d’un quiz avec de jolis dessins, à quoi faire attention, ce qu’il faut éviter, et quels jeux de maths fonctionnent sans écran.',
      linkLabel: 'Jeux de maths pour enfants',
      excerpt:
        'Ce qui sépare un jeu qui enseigne les maths d’une fiche d’exercices avec des bruitages — et comment choisir.',
      updated: '2026-08-30',
      image: {
        src: '/posts/multiplication-fun-en.webp',
        alt: 'Un personnage de Numblop dans un univers de jeu avec des objets à collectionner',
        width: 720,
        height: 900,
      },
      intro: [
        '« Apprendre en jouant » recouvre aujourd’hui aussi bien un jeu bien conçu qu’une fiche d’exercices avec un cadre en dessin animé. Les deux se vendent de la même façon, il vaut donc la peine de savoir ce qui les distingue.',
        'La bonne question n’est pas de savoir si le jeu est amusant. C’est de savoir si l’amusement et les mathématiques sont la même activité — ou si les maths sont un péage que l’enfant paie pour revenir à l’amusement.',
      ],
      sections: [
        {
          heading: 'Ce qui rend un jeu réellement éducatif',
          blocks: [
            {
              p: 'Dans un jeu qui enseigne, réfléchir est le jeu. Trouver la réponse est ce qui fait avancer, et progresser en maths signifie progresser dans le jeu. La progression dans le jeu et la progression dans la tête sont la même ligne.',
            },
            {
              p: 'Dans un jeu qui n’enseigne pas, les maths sont une barrière. Réponds à cinq calculs, puis joue quatre-vingt-dix secondes à un mini-jeu ; cinq de plus et tu débloques un chapeau. Les calculs ne se distinguent en rien d’une fiche, et l’enfant apprend que les maths sont la partie pénible qu’il faut traverser pour atteindre la bonne. C’est une leçon plus coûteuse que ce que vaut le calcul.',
            },
            {
              p: 'Les récompenses ne sont pas le problème. Un enfant qui veut finir une manche parce qu’il se passe quelque chose d’agréable à la fin s’entraîne plus qu’il ne le ferait autrement. Le problème n’apparaît que lorsque la récompense remplace la réflexion au lieu d’en découler.',
            },
          ],
        },
        {
          heading: 'Le jeu n’est pas une récompense pour le travail fait',
          blocks: [
            {
              p: 'Le jeu fait pour l’apprentissage quelque chose de très précis, et ce n’est pas de la décoration motivationnelle : il abaisse le coût de l’erreur. Un enfant qui joue tente un résultat dont il n’est pas sûr, parce qu’une erreur dans un jeu, c’est simplement ce qui arrive ensuite. Le même enfant devant une fiche s’arrête souvent et attend qu’on lui dise.',
            },
            {
              p: 'Or c’est précisément cette disposition à tenter quelque chose d’incertain qui produit l’essentiel de l’apprentissage. Aller rechercher un résultat dont on n’est pas sûr fait plus pour la mémoire que lire la bonne réponse — mais seulement si l’enfant accepte d’essayer. Tout ce qui rend l’essai peu coûteux fait donc un travail pédagogique.',
            },
          ],
        },
        {
          heading: 'À quoi faire attention',
          blocks: [
            {
              list: [
                'Les maths sont le jeu, pas une barrière devant lui.',
                'La difficulté suit l’enfant : ce qu’il sait revient moins, ce qu’il rate revient.',
                'Après une erreur, une explication et pas seulement un buzzer.',
                'Des manches courtes avec un point d’arrêt naturel.',
                'La progression est visible et lisible d’un coup d’œil par l’enfant.',
                'Cela fonctionne sans compte, et le sort des données est clair.',
              ],
            },
          ],
        },
        {
          heading: 'Ce dont il faut se méfier',
          blocks: [
            {
              list: [
                'Un chronomètre à chaque calcul : chez les enfants anxieux, cela dégrade les résultats de façon fiable.',
                'Des séries qui sanctionnent un jour manqué ; une pression qui vise autant le parent que l’enfant.',
                'De la publicité entre les manches, surtout si elle est plus excitante que le jeu.',
                'Des achats intégrés où l’intéressant se trouve derrière le paiement.',
                'Les mêmes calculs dans le même ordre à chaque fois : cela entraîne l’ordre, pas les résultats.',
                'Une difficulté qui ne change jamais, quelles que soient les réponses.',
              ],
            },
          ],
        },
        {
          heading: 'Des jeux de maths sans écran',
          blocks: [
            {
              p: 'L’écran n’est pas indispensable, et mélanger les deux vaut généralement mieux que l’un seul. Certaines des meilleures façons de travailler ne coûtent rien :',
            },
            {
              list: [
                'Deux dés et une course à qui annonce le produit le premier, avec un adulte qu’on peut battre.',
                'Un jeu de cartes sans les figures : on retourne deux cartes et on les multiplie.',
                'Des rectangles du quotidien : boîte à œufs, carrelage, carreaux de fenêtre, moule à muffins, rangées de sièges.',
                'Compter de quatre en quatre, de six en six, de sept en sept sur le chemin de l’école.',
                'La cuisine, où doubler une recette est une multiplication qui a une raison d’être.',
              ],
            },
            {
              p: 'Sur un point, ces jeux battent n’importe quelle application : ce sont des conversations. Vous entendez comment l’enfant est arrivé à la réponse, et cela en dit bien plus que la réponse elle-même.',
            },
          ],
        },
        {
          heading: 'Où se situe Numblop',
          blocks: [
            {
              p: 'Numblop suit le premier modèle. La multiplication est le jeu : répondre est ce qui fait avancer sur la carte, et il n’y a pas de mini-jeu séparé où s’échapper. Récompenses, pièces, objets et nouvelles îles découlent de l’entraînement au lieu de le remplacer.',
            },
            {
              p: 'Il est volontairement sans hâte : pas de compte à rebours, pas de sanction en cas d’erreur, et une explication quand quelque chose ne va pas. Les manches sont courtes, la progression reste sur l’appareil, et il n’y a ni compte, ni publicité, ni achat intégré.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Essayez dans le navigateur',
        body: 'Numblop fonctionne sur Android et directement dans le navigateur sur iPhone, iPad et ordinateur : gratuit, sans installation et sans inscription.',
      },
    },
    {
      id: 'progress',
      slug: 'suivi-des-progres-en-maths',
      title: 'Savoir si une table est vraiment acquise : le suivi des progrès',
      metaTitle: 'Suivi des progrès en maths sans contrôle – Numblop',
      metaDescription:
        'Évaluation formative à la maison : comment vérifier qu’une table de multiplication est réellement acquise, à quoi faire attention et comment rendre les progrès visibles sans pression.',
      linkLabel: 'Suivi des progrès en maths',
      excerpt:
        'Comment vérifier qu’un résultat est acquis sans transformer chaque journée en contrôle.',
      updated: '2026-08-30',
      image: {
        src: '/posts/rewards-en.webp',
        alt: 'Un coffre de récompense et des pièces gagnées après une séance terminée dans Numblop',
        width: 720,
        height: 900,
      },
      intro: [
        'Avec les tables de multiplication, la question difficile n’est pas quoi travailler, mais ce qu’il n’est plus nécessaire de travailler. Continuer à réviser ce qui est acquis gaspille l’attention limitée de l’enfant. S’arrêter trop tôt, et le résultat aura disparu après les vacances.',
        'On peut répondre à cette question, et sans contrôle. Ce qu’il faut s’appelle l’évaluation formative : de petites vérifications qui orientent la suite de l’entraînement et qui n’ont aucune conséquence pour l’enfant.',
      ],
      sections: [
        {
          heading: 'Pourquoi la justesse seule dit trop peu',
          blocks: [
            {
              p: 'Un enfant qui compte de proche en proche ou qui part d’un résultat voisin finit lui aussi par tomber juste. La réponse est bonne, le résultat n’est pas acquis. Celui qui ne compte que les bonnes réponses ne voit jamais cette différence.',
            },
            {
              p: 'Et c’est précisément cette différence qui compte plus tard. Dans une division posée ou avec des fractions, le calcul dévore l’attention nécessaire au problème. Mieux vaut donc regarder l’hésitation que la coche.',
            },
          ],
        },
        {
          heading: 'Trois signaux plus parlants',
          blocks: [
            { h3: 'La réponse arrive-t-elle ou se construit-elle ?' },
            {
              p: 'Observez la pause. Un résultat mémorisé revient en une ou deux secondes. Un résultat reconstruit laisse un blanc visible pendant lequel l’enfant compte ou part d’un calcul voisin. Les deux sont justes ; un seul est terminé.',
            },
            { h3: 'Tient-il hors de son ordre ?' },
            {
              p: 'Demandez 8 × 7 au milieu d’une série mélangée, plusieurs jours après que la table de 8 a été le sujet. Les résultats qui ne fonctionnent qu’à l’intérieur de leur table ne sont pas encore autonomes.',
            },
            { h3: 'Tient-il un mauvais jour ?' },
            {
              p: 'Un résultat qui disparaît quand l’enfant est fatigué ou distrait reste fragile. Ce n’est pas inquiétant, c’est juste une raison de le laisser encore un peu en circulation.',
            },
            {
              p: 'La question la plus informative qui soit ne coûte rien : « comment tu as trouvé ? ». Un « neuf fois six, c’est dix fois six moins six » indique une compréhension sans automatisation. Un haussement d’épaules avec la bonne réponse signifie en général que c’est acquis.',
            },
          ],
        },
        {
          heading: 'Interroger sans que ce soit un contrôle',
          blocks: [
            {
              p: 'Dès que la question ressemble à un contrôle, le comportement change : les enfants tentent moins, évitent les résultats incertains et s’occupent de ce qu’ils ressentent plutôt que des maths. Vous perdez alors exactement l’information que vous cherchiez.',
            },
            {
              list: [
                'Demandez en passant : en mettant la table, en voiture, entre deux choses.',
                'Réagissez sans jugement ; un soupir se lit instantanément.',
                'Demandez le chemin, pas seulement le résultat.',
                'Servez-vous de ce que vous voyez pour changer l’entraînement, pas pour noter.',
              ],
            },
          ],
        },
        {
          heading: 'Rendre les progrès visibles',
          blocks: [
            {
              p: 'Aucun tableur n’est nécessaire. Il faut savoir quels résultats restent faibles et comment les choses ont bougé sur un trimestre : de quoi planifier, et de quoi montrer à l’enfant une preuve de progrès le jour où il a l’impression que rien n’avance.',
            },
            {
              list: [
                'Une grille au mur que l’enfant colorie lui-même à mesure qu’il acquiert les résultats.',
                'Une note courte après chaque séance avec les deux ou trois résultats lents.',
                'Un échantillon de travail daté toutes les quelques semaines.',
                'Ce que l’application d’entraînement enregistre déjà, si elle montre les résultats et pas seulement des scores.',
              ],
            },
            {
              p: 'La progression visible pèse plus qu’on ne le croit. Les enfants surestiment ce qui reste à faire, et voir le tas de résultats inconnus diminuer aide.',
            },
          ],
        },
        {
          heading: 'Où un outil d’entraînement aide',
          blocks: [
            {
              p: 'Un logiciel est mauvais là où cela compte le plus : expliquer, repérer la confusion, discuter du chemin suivi. Il est bon là où c’est réellement fastidieux : se souvenir lequel des cent résultats est faible en ce moment pour cet enfant précis, et programmer les répétitions en conséquence.',
            },
            {
              p: 'C’est à cela que sert Numblop. Il suit chaque résultat séparément, mélange le nouveau et l’ancien, revient plus souvent sur les faibles et montre l’état des choses sur une carte que l’enfant sait lire. Il fonctionne sur Android et dans le navigateur sur iPhone, iPad et ordinateur, la progression reste sur l’appareil et aucun compte n’est nécessaire.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Ajoutez cinq minutes par jour',
        body: 'Numblop est gratuit, fonctionne hors ligne une fois installé et conserve la progression sur l’appareil : sans compte, sans publicité et sans achat intégré.',
      },
    },
  ],
  articles: [
    {
      id: 'without-rote',
      slug: 'apprendre-les-tables-de-multiplication-sans-par-coeur',
      title: 'Apprendre les tables de multiplication sans les réciter par cœur',
      metaTitle: 'Apprendre les tables de multiplication sans par cœur – Numblop',
      metaDescription:
        'Pourquoi réciter les tables ne suffit souvent pas et ce qui marche mieux : comprendre d’abord, s’entraîner peu et souvent, mélanger les calculs et gagner en vitesse sans pression.',
      linkLabel: 'Les tables sans par cœur',
      excerpt:
        'Réciter les tables produit un enfant qui débite la table de 7 et bloque quand même sur 7 × 6. Voici ce qui marche mieux.',
      published: '2026-08-30',
      updated: '2026-08-30',
      image: {
        src: '/posts/mistakes-help-en.webp',
        alt: 'Numblop montre 3 × 5 = 15 sous forme de points à compter après une erreur',
        width: 720,
        height: 900,
      },
      takeaways: [
        'Comprendre ce que signifie multiplier doit venir avant la vitesse.',
        'Cinq minutes la plupart des jours valent mieux qu’une longue séance hebdomadaire.',
        'Mélangez le nouveau et l’ancien : travailler une table dans l’ordre entraîne l’ordre, pas les résultats.',
        'Consacrez l’essentiel du temps au petit groupe de résultats vraiment difficiles.',
        'La vitesse compte, mais après la compréhension, et elle s’observe au lieu de s’imposer au chronomètre.',
        'Expliquez les erreurs plutôt que de les corriger, pour qu’un résultat oublié puisse être reconstruit.',
      ],
      intro: [
        'Presque tous les adultes se souviennent d’avoir récité les tables. Certains avec tendresse, la plupart comme d’un bruit de fond, et une bonne partie se souvient très précisément de l’angoisse d’être interrogé sur 7 × 8 devant la classe. C’est la méthode par défaut parce qu’elle est facile à organiser, pas parce qu’elle est la meilleure.',
        'Réciter produit bien quelque chose. Simplement pas la bonne chose : cela produit une suite. Un enfant qui a appris la table de 7 comme une chanson la récite depuis 7 × 1 et bloque tout de même quand 7 × 6 apparaît seul dans une division, parce que le chemin vers la réponse passe par la liste entière.',
        'Ce qui suit n’est pas un rejet de l’entraînement. Les tables doivent devenir automatiques, et cela demande de la répétition sur plusieurs mois. La question est de savoir quelle répétition et dans quel ordre.',
      ],
      sections: [
        {
          heading: 'Pourquoi le par cœur seul échoue souvent',
          blocks: [
            {
              p: 'Un résultat appris par cœur sans signification est un objet fragile. Rien ne permet de le vérifier, donc l’enfant ne distingue 6 × 7 = 42 de 6 × 7 = 45 qu’en se souvenant plus fort. Et il n’y a pas de retour possible : une fois perdu, c’est perdu, et les vacances d’été y suffisent en général.',
            },
            {
              p: 'Un enfant qui comprend la multiplication dispose d’un filet. Oublier 6 × 7 est un désagrément mineur : c’est le double de 3 × 7, ou 5 × 7 plus sept, ou six rangées de sept que l’on peut compter au besoin. Il arrive lentement à la réponse, mais il y arrive, et chaque reconstruction rend le rappel direct un peu plus probable la fois suivante.',
            },
            {
              p: 'La compréhension n’est donc pas un chemin plus lent vers l’automatisme. C’est ce qui rend l’automatisme stable.',
            },
          ],
        },
        {
          heading: 'Commencer par ce qu’est la multiplication',
          blocks: [
            {
              p: 'Avant tout entraînement, l’enfant a besoin d’une image. Multiplier, ce sont des groupes égaux : quatre sachets de six billes. C’est aussi un rectangle — des lignes et des colonnes — et c’est cette image qui paie plus tard, parce qu’elle rend visible pourquoi 6 × 4 et 4 × 6 donnent la même chose. Tournez le rectangle de quatre-vingt-dix degrés : c’est le même rectangle.',
            },
            {
              p: 'Cette seule idée divise le travail par deux. De cent résultats, on passe à une cinquantaine, et les enfants qui ne l’ont pas remarqué apprennent silencieusement tout en double.',
            },
            {
              list: [
                'Aligner des bouchons, des boutons ou des pâtes en rangées et les compter de deux façons.',
                'Chercher des rectangles dans la maison : boîte à œufs, carrelage, moule à muffins, tablette de chocolat.',
                'Dessiner le calcul sur du papier quadrillé et compter les carreaux.',
                'Compter à voix haute par bonds en marchant, pour que le motif s’installe aussi comme rythme.',
              ],
            },
            {
              p: 'Cette étape est courte. La sauter, en revanche, produit exactement l’enfant capable de réciter les tables sans savoir s’en servir.',
            },
          ],
        },
        {
          heading: 'Peu et souvent, plutôt que beaucoup et rarement',
          blocks: [
            {
              p: 'L’erreur pratique la plus fréquente est de mettre l’entraînement de côté. Une demi-heure le week-end paraît productive et fonctionne mal. Cinq minutes la plupart des jours fonctionnent bien mieux, malgré un temps total inférieur.',
            },
            {
              p: 'La raison est que la mémoire répond au nombre d’occasions distinctes, réparties dans le temps, où l’on va rechercher quelque chose, et non à la durée d’une séance. Laisser un peu d’oubli s’installer entre deux séances fait partie du mécanisme.',
            },
            {
              p: 'Cinq à dix minutes est un objectif réaliste. Assez court pour que l’attention tienne, assez court pour ne pas devenir une dispute quotidienne, et assez court pour survivre à une semaine chargée — la seule épreuve qui compte sur plusieurs mois.',
            },
          ],
        },
        {
          heading: 'Avancer dans un ordre raisonnable',
          blocks: [
            {
              p: 'Certaines tables sont presque gratuites, et commencer par là installe vite de la confiance. La table de 2, c’est doubler. Celles de 10 et de 5 ont des motifs évidents. Celle de 4, c’est doubler deux fois. Celle de 9 a l’astuce des doigts et le motif de la somme des chiffres, qui amuse les enfants bien au-delà de son utilité réelle.',
            },
            {
              p: 'Une fois cela en place, l’essentiel du tableau est couvert et il reste un petit noyau tenace au milieu des tables de 6, 7 et 8 — les classiques 6 × 7, 7 × 8, 6 × 8. Presque tous les enfants les trouvent les plus durs, et ce sont justement ceux qu’un parcours dans l’ordre travaille le moins.',
            },
            {
              p: 'Dites-le à voix haute à l’enfant. Savoir qu’il reste peut-être huit résultats vraiment difficiles, et non cent, change le sentiment que l’on a de toute la tâche.',
            },
          ],
        },
        {
          heading: 'Mélanger les faibles aux connus',
          blocks: [
            {
              p: 'Il y a une erreur de chaque côté de la bonne solution. Travailler tout le tableau uniformément passe l’essentiel de la séance sur des résultats déjà là. N’entraîner que les faibles est impitoyable : chaque calcul est difficile et la manche devient quelque chose que l’on endure.',
            },
            {
              p: 'Un mélange à dominante de résultats faibles, avec un apport régulier de connus, garde une difficulté honnête et une manche supportable. Les faciles ne sont pas du temps perdu : ce sont eux qui font revenir l’enfant demain.',
            },
            {
              p: 'Le mélange lui-même compte aussi. Les résultats doivent apparaître hors de leur ordre et hors de leur table, parce qu’ils ne servent jamais sous une autre forme.',
            },
          ],
        },
        {
          heading: 'Quand la vitesse commence à compter',
          blocks: [
            {
              p: 'La vitesse a mauvaise réputation dans l’enseignement des maths, en grande partie à juste titre, parce qu’on l’introduit généralement comme une pression. Mais l’automatisme est un vrai objectif, et la raison en est pratique, non compétitive.',
            },
            {
              p: 'Quand un enfant calcule 7 × 8 au lieu de le retrouver, ce travail occupe l’attention dont il a besoin pour le problème. Dans une division posée ou avec des fractions, le calcul dévore la réflexion.',
            },
            {
              p: 'La vitesse compte donc — après la compréhension, pas à sa place, et comme quelque chose que l’on observe et non que l’on impose. Repérez les résultats qui arrivent avec une pause et travaillez-les davantage. Cela obtient tout ce qu’obtient un chronomètre, sans apprendre à un enfant anxieux qu’il est mauvais en maths.',
            },
          ],
        },
        {
          heading: 'Le jeu, et pourquoi il fait un vrai travail',
          blocks: [
            {
              p: 'On justifie généralement les jeux en disant qu’ils rendent l’entraînement supportable. C’est les sous-estimer. Le jeu change ce que l’enfant est prêt à faire — et précisément, il le rend prêt à tenter.',
            },
            {
              p: 'Un enfant qui joue tente un résultat dont il n’est pas sûr, parce que se tromper dans un jeu n’a rien de remarquable. Le même enfant devant une fiche s’arrête et attend, parce que sur le papier une erreur est une marque. Or comme c’est la tentative sur un savoir à moitié acquis qui renforce la mémoire, celui qui tente apprend et celui qui attend n’apprend pas.',
            },
            {
              p: 'L’écran est facultatif ici. Deux dés et une course, un jeu de cartes sans figures ou des calculs pendant un trajet en voiture font la même chose. Une application bien conçue ajoute surtout la comptabilité.',
            },
          ],
        },
        {
          heading: 'Motiver sans mettre la pression',
          blocks: [
            {
              p: 'Cela dure des mois, et le difficile est la continuité, pas la méthode. Quelques éléments aident plus qu’on ne le pense :',
            },
            {
              list: [
                'Rendre les progrès visibles : une grille au mur donne une preuve un jour où rien ne semble avancer.',
                'Féliciter l’entraînement, pas la capacité. « Tu as tenu bon sur la table de 7 » est répétable.',
                'Le même moment chaque jour, pour que ce soit une routine et non une décision négociable.',
                'S’arrêter tant que ça va bien. Finir sur une bonne manche rend demain facile.',
                'Que la récompense suive l’effort au lieu de le conditionner.',
              ],
            },
            {
              p: 'Et gardez votre propre réaction aux erreurs neutre. Les enfants lisent un soupir instantanément, et celui qui pense vous décevoir en se trompant se mettra à éviter les résultats dont il est le moins sûr — c’est-à-dire exactement ceux qui ont besoin de travail.',
            },
          ],
        },
        {
          heading: 'Comment savoir que c’est vraiment acquis',
          blocks: [
            {
              p: 'La vérification n’est pas un contrôle et fonctionne mieux quand elle n’y ressemble pas. Vous cherchez une information pour l’entraînement de demain, pas une note.',
            },
            {
              list: [
                'La réponse arrive en une ou deux secondes, sans pause visible pour calculer.',
                'Elle tient quand on la demande hors de l’ordre, des jours après que la table a été le sujet.',
                'Elle tient un jour de fatigue.',
                'L’enfant sait dire comment il reconstruirait le résultat s’il l’oubliait.',
              ],
            },
            {
              p: 'Ce dernier point fait toute la différence avec la récitation. Un enfant capable de dire « neuf fois sept, c’est dix fois sept moins sept » possède quelque chose de durable, même le jour où le rappel direct ne vient pas.',
            },
          ],
        },
        {
          heading: 'Où se situe l’entraînement numérique',
          blocks: [
            {
              p: 'Une application ne peut pas faire la moitié importante. Elle ne remarque pas qu’un enfant ne comprend pas ce que veut dire multiplier, elle ne discute pas du chemin suivi, et elle ne pose pas de bouchons sur la table.',
            },
            {
              p: 'Ce qu’elle peut faire, c’est la moitié fastidieuse — et à la main, elle est vraiment difficile : se souvenir lequel des cent résultats est faible en ce moment chez cet enfant précis, et le proposer plus souvent, le bon jour, mêlé à assez de matière connue.',
            },
            {
              p: 'Numblop est construit autour de ce travail. Il suit chaque résultat séparément, ramène les lents et les faux, mélange le nouveau et l’ancien, et explique une erreur — il montre 3 × 5 = 15 sous forme de points que l’enfant peut compter — au lieu de la marquer et de passer. Il n’y a ni compte à rebours ni sanction, les manches sont courtes, et la progression apparaît sur une carte que l’enfant lit d’un coup d’œil. Il fonctionne sur Android et dans le navigateur sur iPhone, iPad et ordinateur ; la progression reste sur l’appareil, et il n’y a ni compte, ni publicité, ni achat intégré.',
            },
            {
              p: 'C’est un outil pour une partie du problème. La compréhension, la conversation et la routine restent les vôtres — mais ce sont les parties qui méritent votre temps.',
            },
          ],
        },
      ],
    },
  ],
}
