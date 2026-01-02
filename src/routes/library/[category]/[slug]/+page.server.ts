import { slugToBookMap } from '$lib/constants';
import { error, redirect } from '@sveltejs/kit';

const bookFiles = import.meta.glob('/src/lib/books/**/*.md', { query: '?raw', import: 'default', eager: true });

import { parse } from 'cookie';

export async function load(event) {
  const { category, slug } = event.params;
  // Read cookie
  const bookCookie = event.cookies.get('book_read') || '';
  let allow = true;
  if (bookCookie) {
    try {
      const { slug: lastSlug, time } = JSON.parse(bookCookie);
      const lastDate = new Date(time);
      const now = new Date();
      const hoursSince = (now.getTime() - lastDate.getTime()) / (1000 * 60 * 60);
      if (hoursSince < 20 && lastSlug !== slug) {
        allow = false;
      }
    } catch {}
  }
  if (!allow) {
    // Redirect to category page if not allowed
    // Use SvelteKit redirect helper for relative URLs
    throw redirect(303, `/library/${event.params.category}`);
  }
  // Set cookie for this book
  const cookieValue = JSON.stringify({ slug, time: new Date().toISOString() });
  // Set cookie using event.cookies.set
  event.cookies.set('book_read', cookieValue, {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 72000,
  });
  const bookConfig = slugToBookMap[slug];
  if (!bookConfig || bookConfig.category !== category) {
    throw error(404, 'Book not found in this category');
  }
  const absPath = `/src/${bookConfig.path}`;
  const content = bookFiles[absPath];
  if (!content) {
    throw error(404, 'Book file not found');
  }
  return {
    book: bookConfig,
    content,
    category,
  };
}
