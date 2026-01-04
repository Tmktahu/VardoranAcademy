<script lang="ts">
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  export let data;
  const categories = Array.from(new Set(data.libraryData.flatMap((series) => series.books.map((book) => book.category)))).filter(Boolean);

  function gotoCategory(category: string) {
    goto(resolve(`/librarian/library/${category}`));
  }
</script>

<div class="w-full h-full flex flex-col items-center p-12">
  <h1 class="text-3xl font-bold mb-8">Library Sections (Librarian)</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-3xl">
    {#each categories as category}
      <button
        class="category-tile bg-background-0 border border-yellow-700 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center hover:bg-yellow-900/20 transition-colors"
        on:click={() => gotoCategory(category)}
      >
        <span class="text-2xl font-semibold mb-2 capitalize">{category}</span>
        <span class="text-yellow-400">{category}</span>
      </button>
    {/each}
  </div>
</div>
