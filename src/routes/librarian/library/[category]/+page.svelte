<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { categoryColors } from '@/constants.js';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  import shelvesBackground from '$lib/assets/shelves_background.png';

  export let data;

  let showConfirmation = false;
  let selectedBook: any = null;
  let bookHeights: number[] = [];
  let ready = false;

  function getBookWidth(seed: string | number, min = 40, max = 64): number {
    let hash = 0;
    for (let i = 0; i < String(seed).length; i++) {
      hash = (hash << 5) - hash + String(seed).charCodeAt(i);
      hash |= 0;
    }
    const rand = Math.abs(hash % 1000) / 1000;
    return Math.round(min + (max - min) * rand);
  }

  function getColorIntensity(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    const intensities = [500, 600, 700, 800, 900];
    return intensities[Math.abs(hash) % intensities.length];
  }

  function getBookColorClass(book: { category?: string; slug: string }): string {
    const baseColor = categoryColors[book.category || 'default'] || categoryColors.default;
    const intensity = getColorIntensity(book.slug);
    return `bg-${baseColor}-${intensity}`;
  }

  const selectBook = (book: any) => {
    selectedBook = book;
    console.log('Selected book:', book);
    showConfirmation = true;
  };

  const gotoBook = (slug: string) => {
    window.location.href = `/librarian/library/${data.category}/${slug}`;
  };

  async function measureHeights() {
    await tick();
    const titleElements = Array.from(document.getElementsByClassName('title-text')) as HTMLElement[];
    bookHeights = titleElements.map((el) => (el ? el.offsetWidth : 64) + 72);
  }

  onMount(() => {
    measureHeights();
    window.addEventListener('resize', measureHeights);
    ready = true;
  });
</script>

<div class="w-full h-full relative bg-background-0">
  <img src={shelvesBackground} alt="Bookshelf Background" class="absolute top-0 w-full h-full object-top object-cover opacity-30 pointer-events-none z-0" />

  <div class="flex justify-center w-full relative py-4">
    <button class="text-yellow-400 bg-background-0/80 hover:bg-background-0/50 px-5 py-1 rounded-2xl z-10" on:click={() => goto(resolve('/library'))}> Leave the Section </button>
  </div>

  <div class="flex flex-col h-full gap-3 opacity-0 {ready ? 'opacity-100' : ''} transition-opacity duration-500">
    {#each data.seriesWithBooks as series (series.series)}
      <div class="bg-background-0/40 flex items-center justify-center min-h-fit z-1 px-3 py-2 border-t border-b border-yellow-500/80">
        <div class="series-block flex flex-col">
          <div class="books-row flex gap-2 items-end flex-wrap">
            {#each series.books as book, i (book.slug)}
              <button
                on:click={() => selectBook(book)}
                class="book-button flex items-center justify-center relative"
                style="height: {bookHeights[i] || 64}px; width: {getBookWidth(book.slug)}px;"
              >
                <div class="book flex items-center justify-center w-full h-full relative">
                  <div class="book-color {getBookColorClass(book)}"></div>
                  <div class="book-shadow"></div>
                  <div class="book-stripes"></div>
                  <div class="book-horizontal">
                    <div class="book-line book-line-top-1"></div>
                    <div class="book-line book-line-top-2"></div>
                    <div class="book-line book-line-bottom-1"></div>
                    <div class="book-line book-line-bottom-2"></div>
                  </div>
                  <div class="rotate-90 whitespace-nowrap title-text text-tprimary-0">{@html book.bookSpineTitle}</div>
                </div>
              </button>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  {#if showConfirmation}
    <div class="fixed inset-0 bg-background-0/50 bg-opacity-50 flex items-center justify-center z-50">
      <div class="book-confirmation bg-gray-800 p-6 border border-yellow-700 max-w-lg w-full rounded-2xl mx-4 bg-background-0/90">
        {#if selectedBook}
          <h2 class="text-xl font-bold mb-2 cinzel-regular">{selectedBook.title}</h2>
          <p class="text-gray-300 mb-4 italic">{selectedBook.description || 'No description available.'}</p>
          <div class="flex gap-4 justify-between">
            <button on:click={() => gotoBook(selectedBook.slug)} class="bg-background-700 hover:bg-background-600 text-white px-6 py-2 rounded transition-colors">
              Read Book
            </button>
            <button on:click={() => (showConfirmation = false)} class="bg-error-900 hover:bg-error-500 text-white px-6 py-2 rounded transition-colors">
              Leave the book on the shelf
            </button>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<style>
  .series-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: #b49a5a;
    margin-bottom: 0.25rem;
    letter-spacing: 0.03em;
    text-shadow: 0 1px 4px #18181b;
  }
  .series-description {
    font-size: 1rem;
    color: #e9e5dc;
    margin-bottom: 0.75rem;
  }
  .bookshelf {
    background: none;
  }
  .book-stripes {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 0.5rem;
    background: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0 6px, rgba(0, 0, 0, 0.7) 6px 12px, rgba(0, 0, 0, 0.7) 12px 18px);
    opacity: 0.3;
  }
  .book-horizontal {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
  }
  .book-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    border-radius: 1px;
  }
  .book-line-top-1 {
    top: 8px;
    background: #b49a5a;
  }
  .book-line-top-2 {
    top: 16px;
    background: #a8925a;
  }
  .book-line-bottom-1 {
    bottom: 16px;
    background: #b49a5a;
  }
  .book-line-bottom-2 {
    bottom: 8px;
    background: #a8925a;
  }
  .book-shadow {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem / 0.25rem 0.25rem 0.25rem 0.25rem;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6) 0%, transparent 10%, transparent 90%, rgba(0, 0, 0, 0.6) 100%);
  }
  .book-color {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem / 0.25rem 0.25rem 0.25rem 0.25rem;
  }
  .book {
    position: relative;
    background: var(--book-bg, #232323);
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem / 0.25rem 0.25rem 0.25rem 0.25rem;
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.18),
      inset 0 0 12px #18181b;
    border: 2px solid #b49a5a;
    border-top: 4px solid #b49a5a;
    border-bottom: 4px solid #b49a5a;
    transition:
      box-shadow 0.2s,
      border-color 0.2s;
  }
  .title-text {
    position: relative;
    font-size: 1rem;
    letter-spacing: 0.07em;
    filter: brightness(1.2) drop-shadow(0 0 2px black);
  }
  .book-button {
    cursor: pointer;
  }
  .book-button:hover .book {
    box-shadow:
      0 4px 16px rgba(0, 0, 0, 0.28),
      inset 0 0 16px #18181b;
    border-color: #e0c878;
  }
  .book-button:hover .book-color {
    filter: saturate(2);
  }
</style>
