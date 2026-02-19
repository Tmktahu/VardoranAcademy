import { libraryData } from './libraryData';

export const slugToBookMap: Record<string, { series: string; title: string; category: string; path: string; color: string }> = {};

libraryData.forEach((series) => {
  series.books.forEach((book) => {
    slugToBookMap[book.slug] = {
      series: series.series,
      title: book.title,
      category: book.category,
      path: book.path,
      color: series.color,
    };
  });
});

export type Member = {
  name: string;
  role: string;
  quotes: string[];
};

export const boardMembers: Member[] = [
  {
    name: 'Zrott',
    role: 'Academy Director',
    quotes: ["Don't be stupid.", 'All life has value.', 'Indeed.', 'Noted.'],
  },
  {
    name: 'Voltraxis',
    role: 'Head of Security',
    quotes: [
      'Aaren is emergency food.',
      'Do you have your hall pass?',
      'Please drop your bag for inspection.',
      'Hail Dracula, the true Immortal King.',
      'I miss the Legion, things were simplier.',
      'I will bring peace, justice and security to my new checkpoint.',
      'Run.',
      'Incompetence breeds dissidence.',
      'The pen is sharper than the sword but my fists still hurt all the same.',
      'I find tyranny is often the lesser evil compared to chaos.',
      'You lack discipline.',
      '*Growling*',
    ],
  },
  {
    name: 'Kalnir',
    role: 'Head of Creature Studies',
    quotes: ['Rrhah rhah rawr rha rhrah.', 'Ghruff... ghruff.', 'Awwooooooooo.', 'No one will ever believe you.'],
  },
  {
    name: 'Gascoigne',
    role: 'Professor of The Dark Arts',
    quotes: ['What does a man have to fear that has nothing left to lose?', 'There is no nobility in fighting for honor', 'Noted.'],
  },
  {
    name: 'Jaime Valentine',
    role: 'Professor of Holy Arts',
    quotes: [
      "It isn't enough to just hold the Light, I want to be a Light for any one who needs help on their path!",
      "My Sister means the world to me, there is nothing I won't do to keep her safe.",
      "Through Sham'Yara, the Truth. In Ignariel, determination. With Luminance, strength. All these Lights, only reflections of the whole.",
    ],
  },
  {
    name: 'Alice Valentine',
    role: 'Theologian',
    quotes: [
      'Curiosity and faith go hand in hand. When you’re brave enough to look, something wonderful might find you.',
      "Studying religion makes you look at the big picture around you and once you do, you can't help but notice the people who are at your side.",
      "I like hearing about how someone believes, whether it's in themselves, others, or something bigger!",
      'Practicing magic is a lot like making friends, it’s best done with good intentions and enthusiasm.',
    ],
  },
  {
    name: 'Squeaks',
    role: 'Quartermaster',
    quotes: [
      'PLEASE STOP BRINGING ME SNOW FLOWERS! I WILL UN-MOLD YOUR CHEESE!',
      'We need to purchase more cheese, Monsieur Zrott, we only have eight hundred and three kilograms left in the reserves.',
      'Everything has a place. People too, if they like.',
    ],
  },
  {
    name: 'Roran',
    role: 'Groundskeeper',
    quotes: [
      'Now I ain’t sayin’ you should be out past curfew. I’m just sayin’ the moon’s real persuasive, and I remember bein’ young. Let’s walk you back before someone with less patience than me decides tonight’s the night they enforce a rule.',
      'Easy now, brother. I’m a groundskeeper, not the gallows. If you fix what you broke and don’t do it again, we can both pretend tonight went real smooth.',
      'Now Sugar, I ain’t sayin’ you’re in trouble. I’m sayin’ trouble’s lookin’ for you, and I’d rather it not find you tonight.',
      'Do your work. Go to bed. Let me worry about the dark.',
      'Don’t worry. If I didn’t like you, this conversation would be much shorter.',
    ],
  },
  {
    name: 'Quinn',
    role: 'Specialist',
    quotes: ['In the Silence of Aversion. Scream.', 'Load-bearing Nap Time.'],
  },
  {
    name: 'Elias',
    role: 'Specialist',
    quotes: [
      "If I have to re-align another limb I'm going to just cut it off.",
      "There's a way simpler way to do that you know.",
      "It's hard to detect by my tone, a good assumption to make that I'm sarcastic when I say something.",
      "Yeah... I'm just not going to bother with this, you have fun.",
      'That seemed... incredibly fucking painful... let me get you back up.',
    ],
  },
  {
    name: 'Tilly',
    role: 'Ward of the Academy',
    quotes: [
      'This is fine. This is absolutely - Nope! Not fine! Pineapple! Pineapple! PINEAPPLE!!!',
      'Good news. I learned something. Bad news. It was the hard way.',
      'Please pretend you didn’t see that.',
    ],
  },
  {
    name: 'Wilhelmina',
    role: 'Head of Botanical Studies',
    quotes: ["I'm hungry.", 'Peace is something that is worth fighting for, dying for even.', "You shouldn't trust me."],
  },
];

export const researchDivisionMembers: Member[] = [
  {
    name: 'Fallemnia',
    role: 'Head of Research Division',
    quotes: ['This meeting could have been a bat.', 'Oooh what does this do?', 'I know I put it somewhere... Guess we will find out when it blows up.'],
  },
  {
    name: 'Deracine Ruine',
    role: 'Prosthetic Augment Researcher',
    quotes: [
      'Radical problems require radical solutions, and ive got some!',
      "It's not my fault im so good at my job.",
      'You see this prototype is built on a feedback loop of tension and energy, where everything must be fine-tuned or it might go volatile and- why are you moving away?',
    ],
  },
  // {
  //   name: 'Dante Scutum',
  //   role: 'Researcher',
  //   quotes: [
  //     'The study of ancient civilizations is like peering through a window into the soul of humanity.',
  //     'By unraveling the mysteries of the past, we can gain insights into our own nature and the world around us.',
  //   ],
  // },
];

export const faculty: Member[] = [
  {
    name: 'Pasithea',
    role: 'Librarian',
    quotes: ['Yeah I have the best drugs.', "DON'T HIT THE BLIND WOMAN!", 'Non possum hic mori.'],
  },
  {
    name: 'Lucian',
    role: 'Professor',
    quotes: ["The math ain't mathing.", "I could kiss you, but I won't", 'I am going to therapy.'],
  },
  {
    name: 'Evangeline',
    role: 'Librarian',
    quotes: ['Everything has to be done with a backbone, if not you will fail.', "Don't just read, try to understand.", 'Be quiet, the books like silence.'],
  },
  {
    name: 'Vespera',
    role: 'Professor of Ritualism',
    quotes: [
      'Popularity and sentimentality are temporary. Do not neglect the foundations of your self for them.',
      "Power passed through an intermediary is always a chain. True power is created from one's efforts, not given as a reward for them.",
      "Ley is the world's blood and soul.",
    ],
  },
  {
    name: 'Archivarius',
    role: 'Trial Librarian',
    quotes: [
      'The worst are full of passionate conviction. The best lack all certainty.',
      "Nothing's good nor bad, but thinking makes it so.",
      'Those without mercy are those without hope.',
    ],
  },
];
