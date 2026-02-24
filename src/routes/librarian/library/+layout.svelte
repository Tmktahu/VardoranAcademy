<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import PasswordModal from '$lib/components/PasswordModal.svelte';
  import { bookPasswords } from '$lib/constants';

  let showModal = false;
  let checked = false;
  let authEndpoint = '/librarian/library/auth-check';
  let isAuthorized = false;

  function isBookPage(): boolean {
    const path = $page.url.pathname;
    return /^\/librarian\/library\/[^/]+\/[^/]+$/.test(path);
  }

  function getBookSlug(): string | null {
    const path = $page.url.pathname;
    const match = path.match(/^\/librarian\/library\/[^/]+\/([^/]+)$/);
    return match ? match[1] : null;
  }

  function getBookCategory(): string | null {
    const path = $page.url.pathname;
    const match = path.match(/^\/librarian\/library\/([^/]+)\/[^/]+$/);
    return match ? match[1] : null;
  }

  function hasBookAuth(slug: string): boolean {
    if (typeof document === 'undefined') return false;
    const cookies = document.cookie.split(';');
    return cookies.some((cookie) => cookie.trim().startsWith(`book_auth_${slug}=`));
  }

  function hasLibrarianAuth(): boolean {
    if (typeof document === 'undefined') return false;
    const cookies = document.cookie.split(';');
    return cookies.some((cookie) => cookie.trim().startsWith('librarian_auth='));
  }

  function checkAuth(): boolean {
    if (!browser) return false;

    if (isBookPage()) {
      const slug = getBookSlug();
      if (!slug) return false;

      // Book page: accept either librarian auth OR book-specific auth (if book has password)
      if (hasLibrarianAuth()) return true;
      if (bookPasswords[slug] && hasBookAuth(slug)) return true;
      return false;
    } else {
      // Index or category page: only librarian auth
      return hasLibrarianAuth();
    }
  }

  function updateAuthEndpoint() {
    if (isBookPage()) {
      const slug = getBookSlug();
      const category = getBookCategory();
      if (slug && category && bookPasswords[slug]) {
        // For book pages with password, pass both category and slug
        authEndpoint = '/librarian/library/auth-check';
      } else {
        authEndpoint = '/librarian/library/auth-check';
      }
    } else {
      authEndpoint = '/librarian/library/auth-check';
    }
  }

  function getAuthPayload(): { slug?: string; category?: string } {
    if (isBookPage()) {
      const slug = getBookSlug();
      const category = getBookCategory();
      if (slug && category && bookPasswords[slug]) {
        return { slug, category };
      }
    }
    return {};
  }

  onMount(() => {
    checked = true;
  });

  // Reactive auth check - runs every time the page changes (navigation)
  $: {
    if (checked) {
      isAuthorized = checkAuth();
      showModal = !isAuthorized;
    }
  }

  $: updateAuthEndpoint();
</script>

{#if checked && !showModal}
  <slot />
{/if}

{#if showModal}
  <PasswordModal title="Login to access this content" {authEndpoint} buttonText="Login" additionalPayload={getAuthPayload()} />
{/if}
