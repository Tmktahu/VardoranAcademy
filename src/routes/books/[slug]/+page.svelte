<!-- [`src/routes/books/[slug]/+page.svelte`](src/routes/books/[slug]/+page.svelte:1) -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { useBooks } from '$lib/models/useBooks';
	import { marked } from 'marked';
	import { page } from '$app/stores';

	let slug;
	let html;
	let errorMsg;

	onMount(async () => {
		// Get slug from page params
		slug = $page.params.slug ?? '';
		const { getBook } = useBooks();
		try {
			const markdown = await getBook(slug);
			html = marked.parse(markdown);
		} catch {
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
