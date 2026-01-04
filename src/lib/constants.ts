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
