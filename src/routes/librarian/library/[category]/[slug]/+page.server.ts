import { slugToBookMap } from '$lib/constants';
import { error } from '@sveltejs/kit';

const bookFiles = import.meta.glob('/src/lib/books/**/*.md', { query: '?raw', import: 'default', eager: true });

export async function load({ params }) {
  const { category, slug } = params;
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
