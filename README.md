# Library & Librarian Route Structure

## Overview
This project provides two main routes for accessing books:

- `/library` — Public route, enforces a 1-book-per-day read limit per user.
- `/librarian/library` — Librarian route, unlimited access, protected by a simple password login.

## Code Sharing
- All book loading and rendering logic is shared between routes via helper functions and Svelte components.
- UI components (e.g., book display, confirmation modals) are reused to avoid duplication.

## Authentication
- Librarian access uses a password-based login. The password is checked server-side and sets a secure cookie for session management.
- Change the password in [`src/routes/librarian/library/+page.server.ts`](src/routes/librarian/library/+page.server.ts).

## Extending
- To add new books or categories, update [`src/lib/constants.ts`](src/lib/constants.ts).
- To adjust access logic, update the helpers in [`src/lib/models/bookAccess.ts`](src/lib/models/bookAccess.ts).

## Folder Structure
- `src/routes/library/` — Public-facing library routes
- `src/routes/librarian/library/` — Librarian-only routes (mirrors public structure, disables daily limit)
- `src/lib/components/BookContent.svelte` — Shared book content UI
- `src/lib/models/bookAccess.ts` — Shared book access logic

## Security Notes
- Password is stored in code for simplicity. For production, use environment variables and add rate limiting.
- All authentication and access checks are performed server-side.

---

For further details, see code comments in the relevant files.