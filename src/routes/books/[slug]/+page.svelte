<!-- [`src/routes/books/[slug]/+page.svelte`](src/routes/books/[slug]/+page.svelte:1) -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { useBooks } from '$lib/models/useBooks';
	import { marked } from 'marked';
	import { page } from '$app/stores';

	let slug;
	let html;
	let errorMsg;

	onMount(() => {
		// Get slug from page params
		slug = $page.params.slug ?? '';
		try {
			const { getBook } = useBooks();
			const markdown = getBook(slug);
			html = marked.parse(markdown);
		} catch (err) {
			errorMsg = 'Book not found.';
		}
	});
</script>

<svelte:head>
	<title>{slug}</title>
</svelte:head>

{#if html}
	<article class="book-content">
		{@html html}
	</article>
{:else}
	<p>{errorMsg}</p>
{/if}
