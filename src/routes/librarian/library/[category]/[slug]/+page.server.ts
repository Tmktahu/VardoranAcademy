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
  
  // If book is unavailable, check for password protection
  const bookSeries = libraryData.find((s) => s.books.some((b) => b.slug === slug));
  const bookFromLibrary = bookSeries?.books.find((b) => b.slug === slug);
  
  if (bookFromLibrary && !bookFromLibrary.isAvailable) {
    const hasPassword = bookFromLibrary.password !== undefined;
    let isAuthenticated = false;
    
    if (hasPassword) {
      const librarianAuth = cookies.get('librarian_auth') === 'true';
      const bookAuth = cookies.get(`book_auth_${slug}`) === 'true';
      isAuthenticated = librarianAuth || bookAuth;
      
      if (isAuthenticated) {
        // Authenticated with password, allow access
        const absPath = `/src/${bookConfig.path}`;
        const content = bookFiles[absPath];
        if (!content) {
          throw error(404, 'Book file not found');
        }
        return { book: { ...bookConfig, isAvailable: true, slug, password: bookFromLibrary.password }, content, category };
      } else {
        // Not authenticated, return password requirement
        return { book: { ...bookConfig, isAvailable: false, requiresPassword: true, slug, password: bookFromLibrary.password }, content: '# Unavailable', category };
      }
    }
    
    // No password configured, show regular unavailable message
    return { book: { ...bookConfig, isAvailable: false, requiresPassword: false, slug, password: bookFromLibrary.password }, content: '# Unavailable', category };
  }
  
  const absPath = `/src/${bookConfig.path}`;
  const content = bookFiles[absPath];
  if (!content) {
    throw error(404, 'Book file not found');
  }
  return {
    book: { ...bookConfig, slug },
    content,
    category,
  };
}
