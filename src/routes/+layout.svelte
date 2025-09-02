<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

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
