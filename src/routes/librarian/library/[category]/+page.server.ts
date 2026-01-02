import { libraryData } from '$lib/libraryData';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
  const { category } = params;
  // Gather all books in this category, grouped by series
  const seriesWithBooks = libraryData
    .map((series) => ({
      ...series,
      books: series.books.filter((book) => book.category === category),
    }))
    .filter((series) => series.books.length > 0);

  if (seriesWithBooks.length === 0) {
    throw error(404, 'Category not found or has no books');
  }

  return { category, seriesWithBooks };
}
