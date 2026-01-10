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
    quotes: ["Don't be stupid.", 'All life has value.', 'Indeed.'],
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
    ],
  },
  {
    name: 'Kalnir',
    role: 'Head of Creature Studies',
    quotes: ['Rrhah rhah rawr rha rhrah.', 'Ghruff... ghruff.', 'Awwooooooooo.', 'No one will ever believe you.'],
  },
];

export const faculty: Member[] = [
  // {
  //   name: 'Remy',
  //   role: 'Assistant Librarian',
  //   quotes: [
  //     'The first weapon against the abyss is knowledge — the second is choice.',
  //     'Knowledge is the sweetest temptation—one forbidden fruit they can never burn from the tree.',
  //     'What they name heresy, I call curiosity.',
  //     'To learn is to defy, and I have never feared defiance.',
  //   ],
  // },
];
