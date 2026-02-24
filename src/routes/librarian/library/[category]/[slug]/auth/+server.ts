import { json } from '@sveltejs/kit';

const LIBRARIAN_PASSWORD = 'octagram';

export async function POST({ request, cookies, params }) {
  const { password } = await request.json();
  const { slug, category } = params;
    
  const normalizedPassword = password?.toLowerCase() || '';
  
  // Check if password matches librarian password (master key)
  if (normalizedPassword === LIBRARIAN_PASSWORD.toLowerCase()) {
    return json({ ok: true });
  }
  
  // Check if password matches book-specific password
  const { libraryData } = await import('$lib/libraryData');
  const bookSeries = libraryData.find((s) => s.books.some((b) => b.slug === slug));
  const book = bookSeries?.books.find((b) => b.slug === slug);
    
  if (book && book.password && normalizedPassword === book.password.toLowerCase()) {
    // Set book-specific auth cookie with path restricted to this specific librarian book page
    cookies.set(`book_auth_${slug}`, 'true', {
      path: `/librarian/library/${category}/${slug}`,
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return json({ ok: true });
  }
  
  return json({ ok: false, message: 'Invalid password' });
}