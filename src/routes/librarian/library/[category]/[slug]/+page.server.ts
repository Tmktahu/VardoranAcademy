import { slugToBookMap } from '$lib/constants';
import { libraryData } from '$lib/libraryData';
import { error } from '@sveltejs/kit';

const bookFiles = import.meta.glob('/src/lib/books/**/*.md', { query: '?raw', import: 'default', eager: true });

export async function load({ params, cookies }) {
  const { category, slug } = params;
  const bookConfig = slugToBookMap[slug];
  if (!bookConfig || bookConfig.category !== category) {
    throw error(404, 'Book not found in this category');
  }

  const bookSeries = libraryData.find((s) => s.books.some((b) => b.slug === slug));
  const bookFromLibrary = bookSeries?.books.find((b) => b.slug === slug);
  const isAvailable = bookFromLibrary?.isAvailable ?? true;

  if (!isAvailable && bookFromLibrary?.password) {
    const librarianAuth = cookies.get('librarian_auth') === 'true';
    const bookAuth = cookies.get(`book_auth_${slug}`) === 'true';
    const isAuthenticated = librarianAuth || bookAuth;

    if (!isAuthenticated) {
      return {
        book: { ...bookConfig, isAvailable, requiresPassword: true, slug, password: bookFromLibrary.password },
        content: '# Unavailable',
        category,
        authType: null,
      };
    }
  }

  const absPath = `/src/${bookConfig.path}`;
  const content = bookFiles[absPath];
  if (!content) {
    throw error(404, 'Book file not found');
  }
  return {
    book: { ...bookConfig, isAvailable, slug },
    content,
    category,
  };
}
