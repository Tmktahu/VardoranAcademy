import { json } from '@sveltejs/kit';

const LIBRARIAN_PASSWORD = 'octagram';

export async function GET({ cookies }) {
  const isLibrarian = cookies.get('librarian_auth') === 'true';
  console.log('[auth-check] Librarian auth status:', isLibrarian);
  return json({ ok: isLibrarian });
}

export async function POST({ request, cookies }) {
  const { password } = await request.json();
  if (password === LIBRARIAN_PASSWORD) {
    cookies.set('librarian_auth', 'true', {
      path: '/librarian/library',
      httpOnly: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return json({ ok: true });
  }
  return json({ ok: false });
}
