import fs from 'fs/promises';
import path from 'path';
import { error, type RequestEvent } from '@sveltejs/kit';
import { slugToBookMap } from '$lib/constants';

// Toggle this to enable/disable daily read limit
// env.DISABLE_DAILY_LIMIT = true; // Set to false to enable limit
const DISABLE_DAILY_LIMIT = true;

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

function getBookPath(slug: string | undefined) {
  if (!slug) {
    throw error(400, 'Missing book slug');
  }

  const bookConfig = slugToBookMap[slug];
  if (!bookConfig?.path) {
    throw error(404, 'Book not found in slug map');
  }

  // Construct the full path from project root
  return path.join(process.cwd(), 'src', bookConfig.path);
}

export async function load({ params, cookies }: RequestEvent) {
  const slug = params.slug;
  console.log('[library/book] Requested slug:', slug);
  const today = getUTCDateString();
  console.log('[library/book] Today (UTC):', today);
  const cookie = cookies.get('book_read');
  console.log('[library/book] Raw cookie:', cookie);
  let cookieData = cookie ? parseCookie(cookie) : null;
  console.log('[library/book] Parsed cookieData:', cookieData);

  // Only enforce daily limit if not disabled
  if (!DISABLE_DAILY_LIMIT && cookieData && cookieData.lastRead === today) {
    console.log('[library/book] Daily limit hit for slug:', slug);
    return {
      alreadyRead: true,
      book: slug,
      message: 'You have already read a book today. Please come back tomorrow.',
    };
  }

  // Load book markdown
  const bookPath = getBookPath(slug);
  console.log('[library/book] Book path:', bookPath);
  let content;
  try {
    content = await fs.readFile(bookPath, 'utf-8');
    console.log('[library/book] Book loaded successfully');
  } catch (e) {
    console.error('[library/book] Book not found:', bookPath, e);
    throw error(404, 'Book not found');
  }

  // Set cookie to expire at next UTC midnight if limit is enabled
  if (!DISABLE_DAILY_LIMIT) {
    const expires = getNextUTCMidnight();
    console.log('[library/book] Setting cookie for next UTC midnight:', expires);
    cookies.set('book_read', JSON.stringify({ lastRead: today, book: slug }), {
      path: '/library/book',
      httpOnly: true,
      sameSite: 'lax',
      expires,
    });
  }

  console.log('[library/book] Returning book content for slug:', slug);
  return {
    alreadyRead: false,
    book: slug,
    content,
  };
}
