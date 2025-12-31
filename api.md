# Backend API Documentation

This document describes the available API routes for the Deno backend service. It is intended for use by frontend developers or AI agents integrating with the backend.

## Authentication

### `GET /auth/discord`
Redirects the user to Discord's OAuth2 login flow. No request body required.

**Response:** Redirects to Discord.

---

### `GET /auth/discord/callback`
OAuth2 callback endpoint. Handles Discord's response, creates or retrieves the user, and returns user info and JWT token.

**Query Parameters:**
- `code`: Provided by Discord after user authorization.

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "discord_id": "discord_user_id",
    "username": "discord_username",
    "avatar": "avatar_url"
    // ...other user fields
  },
  "token": "jwt_token"
}
```

---

## User

### `GET /user/me`
Returns the current authenticated user. Requires JWT token in cookie.

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "discord_id": "discord_user_id",
    "username": "discord_username",
    "avatar": "avatar_url"
    // ...other user fields
  }
}
```

---

### `POST /user`
Creates a new user. (Stub implementation.)

**Request Body:** JSON object with user fields (not yet defined).

**Response:**
```json
{
  "message": "User created (stub)"
}
```

---

### `GET /users`
Returns the current authenticated user (same as `/user/me`). Requires JWT token in cookie.

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "discord_id": "discord_user_id",
    "username": "discord_username",
    "avatar": "avatar_url"
    // ...other user fields
  }
}
```

---

## Books

### Database Table: `books`

| Field      | Type      | Description                       |
|------------|-----------|-----------------------------------|
| id         | UUID      | Primary key                       |
| slug       | VARCHAR   | Unique slug for URL/API           |
| title      | VARCHAR   | Book title                        |
| author     | VARCHAR   | Book author                       |
| content    | TEXT      | Markdown/HTML book content        |
| created_at | TIMESTAMPTZ | Creation timestamp              |
| updated_at | TIMESTAMPTZ | Last update timestamp           |

### Loader Script

- Place `.md` files in the `books/` folder.
- Run `deno task load-books` to load books into the database.
- The loader parses frontmatter for `title`, `author`, and `slug`:
  ```
  ---
  title: Example Book Title
  author: Jane Doe
  slug: example-book
  ---
  Book content here...
  ```
- If frontmatter is missing, filename is used as title, author defaults to "Unknown", and slug is generated from title.
- The loader skips `template.md`.

### API Routes

#### `GET /books/:slug`

Fetches a book by its slug.

**Response:**
```json
{
  "id": "uuid",
  "slug": "example-book",
  "title": "Example Book Title",
  "author": "Jane Doe",
  "content": "Markdown/HTML content here...",
  "created_at": "2025-09-24T10:00:00.000Z",
  "updated_at": "2025-09-24T10:00:00.000Z"
}
```

## Notes

- All endpoints are subject to change as development progresses.
- Authentication/session management uses JWT tokens set as cookies.
- For Discord role checks, ensure the user is a member of the target guild.