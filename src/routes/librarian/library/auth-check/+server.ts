import { json } from '@sveltejs/kit';
import { bookPasswords } from '$lib/constants';

const LIBRARIAN_PASSWORD = 'octagram';

export async function GET({ cookies }) {
  const isLibrarian = cookies.get('librarian_auth') === 'true';
  return json({ ok: isLibrarian });
}

export async function POST({ request, cookies }) {
  const { password, category, slug } = await request.json();

  const normalizedPassword = password?.toLowerCase() || '';

  // Check if password matches librarian password (master key)
  if (normalizedPassword === LIBRARIAN_PASSWORD.toLowerCase()) {
    cookies.set('librarian_auth', 'true', {
      path: '/librarian/library',
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return json({ ok: true, type: 'librarian' });
  }

  // If slug and category are provided, check if password matches book-specific password
  if (slug && category && bookPasswords[slug]) {
    if (normalizedPassword === bookPasswords[slug].toLowerCase()) {
      // Set book-specific auth cookie with path restricted to the book page
      cookies.set(`book_auth_${slug}`, 'true', {
        path: `/librarian/library/${category}/${slug}`,
        httpOnly: false,
        sameSite: 'lax',
        maxAge: 60 * 60 * 8, // 8 hours
      });
      return json({ ok: true, type: 'book', slug });
    }
  }

  return json({ ok: false, message: 'Invalid password' });
}
