<script lang="ts">
  import BookContent from '$lib/components/BookContent.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  export let data: any;
</script>

<BookContent content={data.content} color={data.book.color}>
  <button slot="back" class="text-success-400 hover:underline mb-4" on:click={() => goto(resolve(`/library/${data.book.category}`))}> &larr; Back to Library </button>
</BookContent>
