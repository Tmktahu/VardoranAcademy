// src/lib/models/bookAccess.ts
import { error, type Cookies } from '@sveltejs/kit';
import { slugToBookMap } from '$lib/constants';

const bookFiles = import.meta.glob('/src/lib/books/**/*.md', { as: 'raw', eager: true });

function getUTCDateString(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function getNextUTCMidnight() {
  const now = new Date();
  const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
  return next;
}

function parseCookie(cookieStr: any) {
  try {
    return JSON.parse(cookieStr);
  } catch {
    return null;
  }
}

export function getBookContent(slug: string | undefined) {
  if (!slug) throw error(400, 'Missing book slug');
  const bookConfig = slugToBookMap[slug];
  if (!bookConfig?.path) throw error(404, 'Book not found in slug map');
  const absPath = `/src/${bookConfig.path}`;
  const content = bookFiles[absPath];
  if (!content) throw error(404, 'Book not found');
  return content;
}

export async function checkBookAccess({ slug, cookies, limit = true }: { slug: string, cookies: Cookies, limit?: boolean }) {
  const today = getUTCDateString();
  const cookie = cookies.get('book_read');
  let cookieData = cookie ? parseCookie(cookie) : null;

  if (limit && cookieData && cookieData.lastRead === today) {
    return {
      alreadyRead: true,
      book: slug,
      message: 'You have already read a book today. Please come back tomorrow.'
    };
  }

  let content;
  try {
    content = getBookContent(slug);
  } catch (e) {
    throw error(404, 'Book not found');
  }

  if (limit) {
    const expires = getNextUTCMidnight();
    cookies.set('book_read', JSON.stringify({ lastRead: today, book: slug }), {
      path: '/library/book',
      httpOnly: true,
      sameSite: 'lax',
      expires,
    });
  }

  return {
    alreadyRead: false,
    book: slug,
    content,
  };
}
