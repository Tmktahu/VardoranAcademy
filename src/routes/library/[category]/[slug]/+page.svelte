<script lang="ts">
  import BookContent from '$lib/components/BookContent.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  export let data: any;
</script>

{#if data.book.isAvailable === false}
  <div class="flex flex-col items-center justify-center min-h-screen text-center p-8">
    <h1 class="text-3xl font-bold text-error-400 mb-4">Book Currently Unavailable</h1>
    <p class="text-xl text-gray-400">This book is not currently available for reading.</p>
    <button class="mt-6 bg-background-700 hover:bg-background-600 px-6 py-2 rounded text-white" on:click={() => goto(resolve(`/library/${data.category}`))}>
      Return to Library
    </button>
  </div>
{:else}
  <BookContent content={data.content} color={data.book.color}>
    <button slot="back" class="text-success-400 hover:underline mb-4" on:click={() => goto(resolve(`/library/${data.book.category}`))}> &larr; Back to Library </button>
  </BookContent>
{/if}
