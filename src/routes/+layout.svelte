<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
  // const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- <nav style="padding: 1rem;">
	<a
		href="{apiBaseUrl}/auth/discord"
		style="background: #5865F2; color: #fff; padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none;"
	>
		Login with Discord
	</a>
</nav> -->
{@render children?.()}

<style>
  :global(html) {
    background: #181a20;
    color: #e0e0e0;
    font-family: system-ui, sans-serif;
  }
  :global(body) {
    background: #181a20;
    color: #e0e0e0;
    margin: 0;
    min-height: 100vh;
  }
  :global(a) {
    color: #8ab4f8;
  }
  :global(.book-content) {
    background: #23272f;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0004;
  }
  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    color: #e0e0e0;
  }
  :global(code),
  :global(pre) {
    background: #181a20;
    color: #c3e88d;
    border-radius: 4px;
    padding: 2px 6px;
  }
</style>
