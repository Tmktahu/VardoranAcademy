import { libraryData } from '$lib/libraryData';
import { error } from '@sveltejs/kit';

export async function load(event) {
  const { category } = event.params;
  // Get last read book from cookie
  let lastReadBook = null;
  const bookCookie = event.cookies.get('book_read') || '';
  if (bookCookie) {
    try {
      const { slug, time } = JSON.parse(bookCookie);
      const lastDate = new Date(time);
      const now = new Date();
      const hoursSince = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60);
      if (hoursSince < 20) {
        lastReadBook = { slug, time };
      }
    } catch {}
  }
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

  return { category, seriesWithBooks, lastReadBook };
}
