import { libraryData } from './libraryData';

export const slugToBookMap: Record<string, { series: string; title: string; category: string; path: string }> = {};

libraryData.forEach((series) => {
  series.books.forEach((book) => {
    slugToBookMap[book.slug] = {
      series: series.series,
      title: book.title,
      category: book.category,
      path: book.path,
    };
  });
});

export const categoryColors: Record<string, string> = {
  botanical: 'botanicalGreen',
  alchemical: 'alchemicalOrange',
  arcane: 'arcanePurple',
  chemistry: 'chemistryBlue',
  bloodline: 'bloodRed',
  default: 'background',
};
