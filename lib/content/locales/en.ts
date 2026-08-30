import type { LocaleContent } from '../types'

export const en: LocaleContent = {
  faq: {
    heading: 'Frequently asked questions',
    subheading: 'What Numblop is, who it is for, and where you can play it.',
    items: [
      {
        question: 'What is Numblop?',
        answer:
          'Numblop is a free adaptive learning game for practising the multiplication tables. Children play short rounds, the game keeps track of which facts they already know, and it brings the harder ones back more often until recall becomes automatic.',
      },
      {
        question: 'Who is Numblop for?',
        answer:
          'Mainly children who are learning or consolidating the times tables, from about the age multiplication is introduced at school. Parents, teachers and homeschooling families use it too, as a way to keep practice short and low-pressure at home.',
      },
      {
        question: 'How does adaptive multiplication practice work?',
        answer:
          'Instead of asking every fact equally often, Numblop follows how each one is going and returns to the facts that still need work. Facts a child answers confidently show up less often; the slow or wrong ones come back sooner. The progress map shows where each times table currently stands.',
      },
      {
        question: 'Is Numblop available on Android?',
        answer:
          'Yes. Numblop is on Google Play, free, with no ads and no in-app purchases.',
      },
      {
        question: 'Is Numblop available on iOS?',
        answer:
          'Not yet. There is no separate iPhone or iPad app. The full game runs in the browser instead, so it works on iOS and on desktop with nothing to install and no sign-up.',
      },
      {
        question: 'Is Numblop just a quiz?',
        answer:
          'No. Answering questions is only one part of it. Numblop combines multiplication practice with progression across a map of islands, rewards and coins, cosmetic items to collect, and game mechanics that make a session worth finishing. Mistakes get an explanation rather than a penalty.',
      },
    ],
  },
  ui: {
    blog: 'Blog',
    guides: 'Guides',
    home: 'Home',
    blogTitle: 'The Numblop blog',
    blogIntro:
      'Practical writing about learning multiplication and doing maths at home — for parents, teachers and homeschooling families.',
    blogMetaTitle: 'Blog: learning multiplication at home – Numblop',
    blogMetaDescription:
      'Practical articles about practising the times tables, maths through play and following a child’s progress at home.',
    relatedHeading: 'Keep reading',
    readMore: 'Read the article',
    published: 'Published',
    updated: 'Updated',
    readingTime: '{n} min read',
    breadcrumbLabel: 'Breadcrumb',
    takeawaysHeading: 'The short version',
    backToBlog: 'Back to the blog',
  },
  pages: [
    {
      id: 'practice',
      slug: 'times-tables-practice',
      title: 'How to practise the times tables so they stick',
      metaTitle: 'Times tables practice: a plan that actually sticks – Numblop',
      metaDescription:
        'How to practise the times tables with your child: short daily sessions, which facts deserve the most attention, and how to move from counting to instant recall.',
      linkLabel: 'Times tables practice',
      excerpt:
        'Short daily sessions, the facts that actually need the work, and how to tell counting apart from real recall.',
      updated: '2026-08-30',
      image: {
        src: '/posts/step-by-step-en.webp',
        alt: 'Numblop’s progress map, showing each times table advancing step by step',
        width: 720,
        height: 900,
      },
      intro: [
        'Most children meet the times tables somewhere around the second or third year of school, and most of them get there eventually. What varies enormously is how long it takes and how unpleasant it is along the way.',
        'The difference usually is not talent. It is how the practice is organised: how long each session runs, how often it happens, which facts get the attention, and whether the child understands what multiplication means before being asked to recall it quickly.',
      ],
      sections: [
        {
          heading: 'Why fluent times tables are worth the effort',
          blocks: [
            {
              p: 'Multiplication facts are not the point of maths, but they sit underneath a lot of it. Long multiplication, division, fractions, ratios, percentages and later algebra all assume that 7 × 8 arrives without thinking about it.',
            },
            {
              p: 'When recall is slow, a child spends their attention on the arithmetic instead of on the problem in front of them. The maths is not too hard for them; there is simply nothing left over to think with. Making the facts automatic is what frees that attention up.',
            },
          ],
        },
        {
          heading: 'Understanding comes before speed',
          blocks: [
            {
              p: 'A child who does not know what 6 × 4 means has nothing to hang the answer on. They can still memorise the sound of it, but the memory is fragile and it collapses under pressure or after a school holiday.',
            },
            {
              p: 'Before drilling a table, it is worth spending a little time on what multiplication actually is: equal groups, rows and columns, repeated addition. Four rows of six counters, six steps of four on a number line, an array drawn on squared paper. Once a child can rebuild a fact they have forgotten, forgetting stops being a crisis.',
            },
            {
              p: 'This is also why explaining a wrong answer beats correcting it. Being told “no, it is 24” teaches nothing. Seeing 6 × 4 laid out as four groups of six gives the child a way back to it next time.',
            },
          ],
        },
        {
          heading: 'Short and frequent beats long and rare',
          blocks: [
            {
              p: 'A twenty-minute practice session once a week is worse than five minutes a day, even though it is more total time. Recall improves with the number of separate occasions a fact is retrieved, not with the number of minutes spent in one sitting. Spacing the practice out also gives forgetting a chance to happen, and retrieving something you half-forgot is what makes the memory durable.',
            },
            {
              p: 'Five to ten minutes is enough for most children of this age. It is short enough that concentration holds all the way through, short enough that it does not need negotiating, and short enough to fit into a day that already has homework in it.',
            },
            {
              list: [
                'Aim for most days rather than every day — a missed session should not feel like a failure.',
                'Stop while it is still going well, not when attention has already run out.',
                'Keep the slot predictable, so it becomes routine rather than a decision.',
              ],
            },
          ],
        },
        {
          heading: 'Which facts actually need the practice',
          blocks: [
            {
              p: 'The full multiplication grid up to ten looks like a hundred facts. In practice it is far fewer. Anything multiplied by 1 or 10 is a rule rather than a fact. The 2s, 5s and 4s tend to arrive early. And because 7 × 8 and 8 × 7 are the same fact, half the grid is a duplicate of the other half.',
            },
            {
              p: 'What is left is a small, stubborn group that almost every child struggles with — typically the middle of the 6, 7, 8 and 12 tables. Those are the ones worth returning to again and again, and they are exactly the ones a front-to-back run through the tables under-practises.',
            },
            {
              p: 'Practising the whole grid evenly wastes most of the session on facts the child already knows. Practising the weak ones exclusively is demoralising and loses the easy wins. The useful mix is mostly weak facts with enough known ones stirred in to keep the session feeling winnable.',
            },
          ],
        },
        {
          heading: 'Mixing new facts with old ones',
          blocks: [
            {
              p: 'Learning a table in isolation produces a child who can chant the 7s in order and still stall on 7 × 6 when it appears on its own. Order becomes part of the memory, and the order is not available in real problems.',
            },
            {
              p: 'Once a table has been introduced, mix it straight into everything learned before. Shuffled practice feels harder in the moment and produces better recall afterwards — the child has to identify the fact before answering it, which is precisely the skill that is needed later.',
            },
          ],
        },
        {
          heading: 'From counting to instant recall',
          blocks: [
            {
              p: 'There is a stage where a child gets the right answer but reaches it by counting up, adding on from a nearby fact, or working out 6 × 7 as 6 × 6 plus 6. That is real progress and a good sign of understanding. It is not yet fluency.',
            },
            {
              p: 'The signal to watch is not accuracy but hesitation. A fact is genuinely automatic when the answer arrives in a couple of seconds, out of order, on a day when the child is tired, and without a visible pause for calculation. Until then it still repays practice, even though the answers are correct.',
            },
            {
              p: 'This is one place where timing helps — but as a measurement rather than a threat. A stopwatch that punishes slowness adds pressure exactly where children already feel it. Noticing quietly which facts arrive slowly, and practising those more, does the same job without the cost.',
            },
          ],
        },
        {
          heading: 'A practice routine that holds up',
          blocks: [
            {
              p: 'Nothing here is complicated. The difficulty is keeping it going for the months this actually takes, which is a motivation problem more than a teaching one.',
            },
            {
              list: [
                'Five to ten minutes, most days, at a predictable time.',
                'Introduce a new table with objects or an array before drilling it.',
                'Mix new facts with previously learned ones rather than practising one table alone.',
                'Spend most of the session on the facts that are slow or wrong.',
                'Explain mistakes instead of just correcting them.',
                'Track progress somewhere visible, so the child can see the pile of unknown facts shrinking.',
              ],
            },
          ],
        },
      ],
      cta: {
        heading: 'Practice that runs itself',
        body: 'Numblop does the bookkeeping part of all this: it follows which facts a child has, mixes new ones in with old ones, and returns to the weak facts more often — in short rounds, without timers or penalties.',
      },
    },
    {
      id: 'play',
      slug: 'math-games-for-kids',
      title: 'Maths games for kids: learning through play that actually teaches',
      metaTitle: 'Maths games for kids that actually teach – Numblop',
      metaDescription:
        'How to tell an educational maths game from a quiz with cartoon graphics, what to look for, what to avoid, and which games work away from a screen.',
      linkLabel: 'Maths games for kids',
      excerpt:
        'What separates a game that teaches maths from a worksheet with sound effects — and how to choose one.',
      updated: '2026-08-30',
      image: {
        src: '/posts/multiplication-fun-en.webp',
        alt: 'A Numblop character in a playful game environment with collectable items',
        width: 720,
        height: 900,
      },
      intro: [
        '“Learning through play” covers everything from a well-designed game to a worksheet with a cartoon border. Both are sold the same way, so it is worth knowing what actually distinguishes them.',
        'The useful question is not whether a game is fun. It is whether the fun and the maths are the same activity, or whether the maths is a toll the child pays to get back to the fun.',
      ],
      sections: [
        {
          heading: 'What makes a maths game educational',
          blocks: [
            {
              p: 'In a game that teaches, the thinking is the play. Working out the answer is what moves you forward, and getting better at maths is what makes you better at the game. Progress in the game and progress in the child’s head are the same line.',
            },
            {
              p: 'In a game that does not, the maths is a gate. Answer five questions, then play a minigame for ninety seconds; answer five more, unlock a hat. The questions are indistinguishable from a worksheet, and the child learns that maths is the unpleasant bit you get through in order to reach the good bit — which is a worse lesson than the arithmetic is worth.',
            },
            {
              p: 'Rewards are not the problem. A child who wants to finish a round because something good happens at the end is a child who is doing more practice than they otherwise would. The problem is only when the reward replaces the thinking rather than following from it.',
            },
          ],
        },
        {
          heading: 'Play is not a bribe for finishing the work',
          blocks: [
            {
              p: 'Play does something specific for learning, and it is not motivational decoration. It lowers the cost of being wrong. A child who is playing will attempt a fact they are unsure about, because an error inside a game is just what happens next. The same child on a worksheet will often stop and wait to be told, because being wrong on paper feels permanent.',
            },
            {
              p: 'That willingness to attempt something uncertain is where most of the learning happens. Retrieving a fact you are not sure of does more for memory than reading the correct answer does, but only if the child is willing to try. Everything that makes trying feel cheap — no penalties, no countdown, an explanation instead of a red cross — is doing pedagogical work, not just keeping the child entertained.',
            },
          ],
        },
        {
          heading: 'What to look for',
          blocks: [
            {
              list: [
                'The maths is the gameplay, not a gate in front of it.',
                'Difficulty follows the child: facts they know appear less often, facts they miss come back.',
                'Mistakes get an explanation, not just a buzzer.',
                'Short sessions with a natural stopping point, so “one more round” does not mean twenty minutes.',
                'Progress is visible to the child, in a form they can read at a glance.',
                'It works without an account, and it is clear what happens to any data.',
              ],
            },
          ],
        },
        {
          heading: 'What to be wary of',
          blocks: [
            {
              list: [
                'Countdown timers on every question, which reliably make anxious children worse at maths and teach them they are “slow”.',
                'Streaks that punish a missed day — pressure aimed at the parent as much as the child.',
                'Adverts between rounds, especially ones that are more exciting than the game.',
                'In-app purchases where the interesting content sits behind the paywall.',
                'The same questions in the same order every session, which trains order rather than facts.',
                'A difficulty curve that never changes no matter how the child does.',
              ],
            },
          ],
        },
        {
          heading: 'Maths games away from the screen',
          blocks: [
            {
              p: 'A screen is not required, and a mix of both is usually better than either alone. Some of the best multiplication practice costs nothing:',
            },
            {
              list: [
                'Two dice and a race to say the product first — with an adult who is deliberately beatable.',
                'A deck of cards with the picture cards removed: turn two over, multiply them.',
                'Arrays in the real world — egg boxes, tiles, window panes, muffin trays, seats in a row.',
                'Counting in steps out loud on the way to school: fours, sixes, sevens.',
                'Cooking, where doubling and tripling a recipe is multiplication with a reason attached.',
              ],
            },
            {
              p: 'These are stronger than an app in one particular way: they are conversations. You hear how the child got to the answer, which tells you far more than whether the answer was right.',
            },
          ],
        },
        {
          heading: 'Where Numblop fits',
          blocks: [
            {
              p: 'Numblop is built on the first pattern rather than the second. The multiplication is the game: answering facts is what moves you along the map, and there is no separate minigame to escape into. Rewards, coins, cosmetic items and new islands follow from practice rather than substituting for it.',
            },
            {
              p: 'It is deliberately unhurried — no countdown, no penalty for a wrong answer, and an explanation when something goes wrong. Sessions are short by design, progress stays on the device, and there are no accounts, ads or in-app purchases.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Try it in the browser',
        body: 'Numblop runs on Android and directly in a browser on iPhone, iPad and desktop — free, with nothing to install and no sign-up.',
      },
    },
    {
      id: 'progress',
      slug: 'homeschool-math',
      title: 'Homeschool maths: practising multiplication and following progress at home',
      metaTitle: 'Homeschool maths: multiplication practice and progress – Numblop',
      metaDescription:
        'Practical guidance for homeschooling families: building a maths routine, checking whether a fact is genuinely mastered, and keeping a light record of progress.',
      linkLabel: 'Homeschool maths',
      excerpt:
        'Building a maths routine at home, and knowing whether a fact is mastered without turning every day into a test.',
      updated: '2026-08-30',
      image: {
        src: '/posts/rewards-en.webp',
        alt: 'A reward chest and collected coins marking finished practice in Numblop',
        width: 720,
        height: 900,
      },
      intro: [
        'Homeschooling changes the maths problem in a specific way. You gain enormous flexibility over pace and method, and you lose the automatic drip of daily practice and the external checkpoints that tell you where a child actually stands.',
        'Multiplication is where that trade shows up first. It needs frequent short repetition over months, and it needs somebody to notice which facts are still shaky — both of which fall to you.',
      ],
      sections: [
        {
          heading: 'What home education changes about maths practice',
          blocks: [
            {
              p: 'The advantage is real: you can stay on equal groups for three weeks if that is what it takes, or move on in three days, and nobody is left behind or held back. Practice can also be woven into the day rather than confined to a lesson.',
            },
            {
              p: 'The cost is that there is no timetable doing the remembering for you. In a classroom, multiplication comes round several times a week whether anyone plans it or not. At home it competes with everything else, and it is the thing most likely to quietly stop happening.',
            },
            {
              p: 'The fix is not more maths. It is a small, protected, boring slot that survives busy weeks — five minutes attached to something that already happens every day.',
            },
          ],
        },
        {
          heading: 'Build the routine around short sessions',
          blocks: [
            {
              p: 'Multiplication rewards frequency far more than duration. Five minutes a day beats half an hour on Sunday, because what strengthens recall is the number of separate times a fact is retrieved, spaced apart, rather than the total minutes.',
            },
            {
              list: [
                'Attach the slot to an existing anchor: after breakfast, before the walk, at the start of the maths hour.',
                'Keep it short enough that it never needs negotiating.',
                'Mix new facts with old ones rather than working one table at a time.',
                'Finish while it is still going well — stopping on a good round is what makes tomorrow easy.',
              ],
            },
          ],
        },
        {
          heading: 'How to tell whether a fact is genuinely mastered',
          blocks: [
            {
              p: 'This is the part that classrooms do with low-stakes checks, and it is worth borrowing. The idea is simple: little checks that inform what you do next, and that carry no consequences for the child. You are not grading; you are finding out what to practise tomorrow.',
            },
            {
              p: 'Accuracy on its own is a weak signal, because a child who counts up will eventually reach the right answer. Three things tell you more:',
            },
            {
              h3: 'Does the answer arrive, or get built?',
            },
            {
              p: 'Watch for the pause. A recalled fact comes back in a second or two. A reconstructed one has a visible gap while the child counts, adds on, or works from a neighbouring fact. Both are correct; only one is finished.',
            },
            {
              h3: 'Does it survive being asked out of order?',
            },
            {
              p: 'Ask 8 × 7 in the middle of a mixed set, days after the 8s were the topic. Facts that only work inside their own table are not yet independent of it.',
            },
            {
              h3: 'Does it survive a bad day?',
            },
            {
              p: 'A fact that disappears when the child is tired or distracted is still fragile. This is not a reason for concern, just a reason to keep it in rotation a little longer.',
            },
            {
              p: 'Asking a child how they got an answer is the single most informative question available, and it costs nothing. “Nine sixes is ten sixes take away six” tells you they understand and are not yet fluent. A shrug and a correct answer usually means it is done.',
            },
          ],
        },
        {
          heading: 'Keep a light record',
          blocks: [
            {
              p: 'You do not need a spreadsheet. You need to know which facts are still weak and roughly how things have moved over a term — enough to plan, and enough to show a child evidence of progress when a hard week makes it feel like nothing is happening.',
            },
            {
              list: [
                'A grid on the wall with mastered facts coloured in, filled by the child rather than by you.',
                'A short note after each session listing the two or three facts that were slow.',
                'A dated sample of work every few weeks — the clearest proof of progress a child can see.',
                'Whatever your practice app already tracks, if it shows facts rather than just scores.',
              ],
            },
            {
              p: 'The visible record matters more at home than at school, because there are no year groups or class comparisons to supply a sense of movement. Children benefit from seeing the pile of unknown facts shrink.',
            },
          ],
        },
        {
          heading: 'Where a practice tool helps',
          blocks: [
            {
              p: 'Software is bad at the parts of home education that matter most — explaining, noticing confusion, having the conversation about how an answer was reached. It is good at the part that is genuinely tedious: remembering which of a hundred facts each child is currently weak on, and scheduling the repetition accordingly.',
            },
            {
              p: 'That is what Numblop is for. It tracks each fact separately, mixes new material with old, returns to the weak ones more often, and shows progress on a map the child can read. It runs on Android and in the browser on iPhone, iPad and desktop, keeps progress on the device, and needs no account. The understanding still comes from you; the bookkeeping does not have to.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Add five minutes a day',
        body: 'Numblop is free, works offline once installed, and keeps progress on the device — no accounts, no ads, no in-app purchases.',
      },
    },
  ],
  articles: [
    {
      id: 'without-rote',
      slug: 'learn-times-tables-without-rote-memorising',
      title: 'How to help a child learn the times tables without rote memorising',
      metaTitle: 'Learn the times tables without rote memorising – Numblop',
      metaDescription:
        'Why chanting the tables often fails, and what works better: understanding first, short daily practice, mixing facts, and building speed without pressure.',
      linkLabel: 'Times tables without rote memorising',
      excerpt:
        'Chanting the tables produces a child who can recite the 7s and still stall on 7 × 6. Here is what works better.',
      published: '2026-08-30',
      updated: '2026-08-30',
      image: {
        src: '/posts/mistakes-help-en.webp',
        alt: 'Numblop showing 3 × 5 = 15 as countable dots after a wrong answer',
        width: 720,
        height: 900,
      },
      takeaways: [
        'Understanding what multiplication means has to come before speed, or the memory has nothing to hold on to.',
        'Five minutes most days beats a long weekly session — recall grows with separate attempts, not total minutes.',
        'Mix new facts with old ones; practising one table in order trains the order rather than the facts.',
        'Spend most of the time on the small group of genuinely hard facts, not evenly across the grid.',
        'Speed matters, but only after understanding, and it should be measured rather than enforced with a timer.',
        'Explain mistakes instead of correcting them, so a forgotten fact can be rebuilt rather than just re-memorised.',
      ],
      intro: [
        'Almost every adult remembers chanting the times tables. Some remember it fondly, most remember it as noise, and a fair number remember the specific dread of being asked 7 × 8 in front of the class. It is the default method because it is easy to run, not because it is the best way to learn.',
        'Chanting does produce something. It just produces the wrong thing: a sequence. A child who has learned the 7s as a song can recite them from 7 × 1 and will still stall when 7 × 6 turns up alone in a division problem, because the route to the answer runs through the whole list.',
        'What follows is not a rejection of practice. Multiplication facts do need to become automatic, and that takes repetition over months. The question is what kind of repetition, and in what order.',
      ],
      sections: [
        {
          heading: 'Why memorising alone tends to fail',
          blocks: [
            {
              p: 'A memorised fact with no meaning behind it is a fragile object. There is nothing to check it against, so a child cannot tell 6 × 7 = 42 from 6 × 7 = 45 except by remembering harder. And there is no way back: once it is gone, it is gone, and the summer holidays are usually enough to take it.',
            },
            {
              p: 'A child who understands multiplication has a fallback. Forgetting 6 × 7 is a minor inconvenience — it is double 3 × 7, or 5 × 7 plus 7, or six rows of seven that can be counted if it comes to that. They arrive at the answer slowly, but they arrive, and each reconstruction makes the direct recall a little more likely next time.',
            },
            {
              p: 'This is why understanding is not a slower path to fluency. It is what makes fluency stable.',
            },
          ],
        },
        {
          heading: 'Start with what multiplication actually is',
          blocks: [
            {
              p: 'Before any drilling, a child needs a mental picture. Multiplication is equal groups: four bags with six marbles each. It is also an array — rows and columns, which is the picture that pays off later, because it makes obvious why 6 × 4 and 4 × 6 give the same answer. Turn the array ninety degrees and it is the same array.',
            },
            {
              p: 'That single insight halves the work. A grid of a hundred facts is really about fifty, and children who have not noticed it are quietly learning everything twice.',
            },
            {
              p: 'Useful things to do at this stage, none of which require materials you do not already have:',
            },
            {
              list: [
                'Lay out counters, buttons or pasta in rows and count them two ways.',
                'Find arrays around the house: egg boxes, tiles, muffin trays, window panes, chocolate bars.',
                'Draw the fact on squared paper and count the squares.',
                'Skip-count out loud while walking, so the pattern lands as rhythm as well as numbers.',
              ],
            },
            {
              p: 'This stage is short. It is not a term’s work. But skipping it is what produces a child who can recite tables and cannot use them.',
            },
          ],
        },
        {
          heading: 'Short and often, not long and rare',
          blocks: [
            {
              p: 'The most common practical mistake is saving practice up. Half an hour at the weekend feels productive and works badly. Five minutes on most days works far better, despite being less total time.',
            },
            {
              p: 'The reason is that memory responds to the number of separate occasions on which something is retrieved, spread out over time, rather than to the length of any one session. Letting a little forgetting happen between sessions is part of the mechanism, not a failure of it — pulling back something you had half-lost is what makes it stick.',
            },
            {
              p: 'Five to ten minutes is a realistic target. Short enough to hold attention to the end, short enough that it does not become a daily argument, and short enough to survive a busy week, which is the only test that matters over the months this takes.',
            },
          ],
        },
        {
          heading: 'Go in a sensible order',
          blocks: [
            {
              p: 'Some tables are nearly free, and starting there builds confidence quickly. The 2s are doubling, which most children can already do. The 10s and 5s have obvious patterns. The 4s are doubling twice. The 9s have the finger trick and the digit-sum pattern, which children enjoy far out of proportion to its usefulness.',
            },
            {
              p: 'Once those are in place, most of the grid is covered, and what remains is a small stubborn core in the middle of the 6s, 7s and 8s — the classic 6 × 7, 7 × 8, 6 × 8. Nearly every child finds these hardest, and they are exactly the ones a front-to-back march through the tables practises least.',
            },
            {
              p: 'Name that out loud to the child. Knowing that there are perhaps eight genuinely hard facts left, rather than a hundred, changes how the task feels.',
            },
          ],
        },
        {
          heading: 'Mix the weak facts with the known ones',
          blocks: [
            {
              p: 'Two failure modes sit either side of the right answer here. Practising the whole grid evenly spends most of the session on facts the child already has. Practising only the weak facts is relentless: every question is a hard one, and the session becomes something to endure.',
            },
            {
              p: 'A mix that is mostly weak facts with a steady supply of known ones keeps the difficulty honest and the session survivable. The easy ones are not wasted — they are what makes the child willing to come back tomorrow.',
            },
            {
              p: 'Shuffling also matters. Facts should appear out of order and away from their own table, because that is the only form in which they are ever needed. Mixed practice feels harder at the time and produces better recall afterwards.',
            },
          ],
        },
        {
          heading: 'When speed starts to matter',
          blocks: [
            {
              p: 'Speed has a bad reputation in maths teaching, largely deserved, because it is usually introduced as pressure. But fluency is a real goal, and the reason is practical rather than competitive.',
            },
            {
              p: 'When a child computes 7 × 8 rather than recalling it, that work occupies the attention they need for whatever the actual problem is. In a long division or a fractions question, the arithmetic eats the thinking. Automatic recall is what frees it up.',
            },
            {
              p: 'So speed matters — after understanding, not instead of it, and as something you observe rather than something you impose. Notice which facts come with a pause and practise those more. That achieves everything a countdown timer achieves, without teaching an anxious child that they are bad at maths.',
            },
          ],
        },
        {
          heading: 'Play, and why it does real work',
          blocks: [
            {
              p: 'Games are usually justified as a way of making practice palatable. That undersells them. Play changes what a child is willing to do, and specifically it makes them willing to guess.',
            },
            {
              p: 'A child who is playing will attempt a fact they are unsure of, because being wrong inside a game is unremarkable. The same child on a worksheet often stops and waits to be told, because a wrong answer on paper is a mark. Since attempting a half-known fact is what strengthens the memory, the child who guesses is doing the learning and the child who waits is not.',
            },
            {
              p: 'Screens are optional here. Two dice and a race to say the product, a deck of cards with the pictures removed, or multiplication questions during a car journey all do the job. So does a well-built app, which mainly adds the bookkeeping.',
            },
          ],
        },
        {
          heading: 'Motivation without pressure',
          blocks: [
            {
              p: 'This takes months, and the hard part is continuity rather than method. A few things help more than they should:',
            },
            {
              list: [
                'Make progress visible. A grid on the wall with mastered facts coloured in gives a child evidence on a day when it feels like nothing is happening.',
                'Praise the practice, not the ability. “You stuck with the sevens” is repeatable; “you are so clever” makes the next hard fact evidence against it.',
                'Keep it the same time each day so it becomes routine and stops being a decision to argue about.',
                'Stop while it is going well. Ending on a good round is what makes tomorrow easy.',
                'Let rewards follow effort rather than gate it — something small at the end of a session, not a toll to be paid before the fun starts.',
              ],
            },
            {
              p: 'And keep your own reaction to mistakes flat. Children read a sigh instantly, and a child who thinks getting it wrong disappoints you will start avoiding the facts they are least sure of — which are precisely the ones that need the work.',
            },
          ],
        },
        {
          heading: 'How to tell it has actually landed',
          blocks: [
            {
              p: 'The check is not a test, and it works better if it does not look like one. What you are after is information about tomorrow’s practice, not a grade.',
            },
            {
              list: [
                'The answer arrives in a second or two, with no visible pause for calculation.',
                'It survives being asked out of order, days after that table was the topic.',
                'It survives a tired day.',
                'The child can explain how they would rebuild it if they forgot.',
              ],
            },
            {
              p: 'That last one is the difference between this approach and chanting. A child who can say “nine sevens is ten sevens take away seven” has something durable, even on a day when the direct recall does not come.',
            },
          ],
        },
        {
          heading: 'Where digital practice fits',
          blocks: [
            {
              p: 'An app cannot do the important half. It will not notice that a child is confused about what multiplication means, it will not have the conversation about how an answer was reached, and it cannot lay out counters on a table.',
            },
            {
              p: 'What it can do is the tedious half, and the tedious half is genuinely hard to do by hand: keeping track of which of a hundred facts are currently weak for this particular child, and putting those in front of them more often, on the right day, mixed with enough known material to keep the session bearable.',
            },
            {
              p: 'Numblop is built around that job. It follows each fact separately, brings back the ones that are slow or wrong, mixes new material with old, and explains a mistake — showing 3 × 5 = 15 as dots the child can count — rather than marking it wrong and moving on. There is no countdown and no penalty for a wrong answer, sessions are short, and progress is shown on a map the child can read at a glance. It runs on Android and in the browser on iPhone, iPad and desktop; progress stays on the device, and there are no accounts, ads or in-app purchases.',
            },
            {
              p: 'It is one tool for one part of the problem. The understanding, the conversation and the routine are still yours — but they are the parts worth your time.',
            },
          ],
        },
      ],
    },
  ],
}
