<script lang="ts">
  import { onMount, afterUpdate, tick } from 'svelte';
  export let data;
  console.log('[library/+page.svelte] Loaded data:', data);

  let showConfirmation = false;
  let selectedBook: { title: string; slug: string; description?: string } | null = null;

  // Pseudo-random width generator for stable book widths
  function getBookWidth(seed: string | number, min = 40, max = 64): number {
    let hash = 0;
    for (let i = 0; i < String(seed).length; i++) {
      hash = (hash << 5) - hash + String(seed).charCodeAt(i);
      hash |= 0;
    }
    const rand = Math.abs(hash % 1000) / 1000;
    return Math.round(min + (max - min) * rand);
  }

  // Category to color mapping
  const categoryColors: Record<string, string> = {
    botanical: 'bg-botanicalGreen',
    default: 'bg-background',
  };

  // Generate random color intensity based on book slug
  function getColorIntensity(slug: string): number {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = (hash << 5) - hash + slug.charCodeAt(i);
      hash |= 0;
    }
    const intensities = [500, 600, 700, 800, 900];
    return intensities[Math.abs(hash) % intensities.length];
  }

  // Get color class for a book based on its category
  function getBookColorClass(book: { category?: string; slug: string }): string {
    const baseColor = categoryColors[book.category || 'default'] || categoryColors.default;
    const intensity = getColorIntensity(book.slug);
    return `${baseColor}-${intensity}`;
  }

  const selectBook = (book: { title: string; slug: string; description?: string }) => {
    selectedBook = book;
    showConfirmation = true;
  };

  const gotoBook = (slug: string) => {
    window.location.href = `/library/book/${slug}`;
  };

  let bookHeights: number[] = [];

  async function measureHeights() {
    await tick();
    const titleElements = Array.from(document.getElementsByClassName('title-text')) as HTMLElement[];
    console.log('titleElements:', titleElements);
    bookHeights = titleElements.map((el) => {
      const w = el ? el.offsetWidth : 64;
      console.log('title:', el?.textContent, 'offsetWidth:', w);
      return w + 72; // add 72px padding
    });
    console.log('bookHeights:', bookHeights);
  }

  onMount(() => {
    measureHeights();
    window.addEventListener('resize', measureHeights);
  });
  // Only measure on mount and resize, not after every update to avoid infinite loop
</script>

<div class="w-full h-full relative">
  <div class="bookshelf flex flex-col gap-6 p-6">
    {#each data.libraryData as series (series.series)}
      <div class="series-block flex flex-col">
        <div class="series-title">{series.series}</div>
        <div class="series-description">{series.description}</div>
        <div class="books-row flex gap-1 items-end">
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
                <div class="rotate-90 whitespace-nowrap title-text text-tprimary-0">{@html book.title}</div>
              </div>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>

  {#if showConfirmation}
    <div class="fixed inset-0 bg-background-0/50 bg-opacity-50 flex items-center justify-center z-50">
      <div class="book-confirmation bg-gray-800 p-6 rounded-lg border border-yellow-600 max-w-md w-full mx-4 bg-background-0">
        {#if selectedBook}
          <h3 class="text-xl font-bold text-yellow-500 mb-2">{@html selectedBook.title}</h3>
          <p class="text-gray-300 mb-4">{selectedBook.description || 'No description available.'}</p>
          <div class="flex gap-4 justify-center">
            <button on:click={() => gotoBook(selectedBook.slug)} class="bg-success-900 hover:bg-success-800 text-white px-6 py-2 rounded transition-colors"> Read Book </button>
            <button on:click={() => (showConfirmation = false)} class="bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded transition-colors">
              Return to the Library
            </button>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<!-- Tailwind safelist for dynamic book colors -->
<!-- 
bg-botanicalGreen-500 bg-botanicalGreen-600 bg-botanicalGreen-700 bg-botanicalGreen-800 bg-botanicalGreen-900
-->

<style>
  .bookshelf {
    background: radial-gradient(circle at 50% 0%, #3a2c1a 0%, #232018 80%), repeating-linear-gradient(135deg, rgba(120, 90, 50, 0.08) 0 2px, transparent 2px 24px);
    min-height: 100vh;
    box-shadow: 0 8px 32px rgba(40, 30, 10, 0.22);
    border-top: 12px solid #7c4d03;
    border-bottom: 12px solid #7c4d03;
    padding-bottom: 32px;
    position: relative;
  }
  .bookshelf::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: url('data:image/svg+xml;utf8,<svg width="100%25" height="100%25" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" stroke="%23b49a5a" stroke-width="2"/><polygon points="100,20 180,180 20,180" stroke="%23b49a5a" stroke-width="2" fill="none"/><line x1="100" y1="20" x2="100" y2="180" stroke="%23b49a5a" stroke-width="1"/><line x1="20" y1="180" x2="180" y2="180" stroke="%23b49a5a" stroke-width="1"/></svg>');
    opacity: 0.08;
    z-index: 0;
  }
  .series-block {
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    background: rgba(32, 32, 36, 0.85);
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    border: 1px solid #3a2c1a;
  }
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
  .books-row {
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
  .bookshelf {
    background: none;
  }
  .book-stripes {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 0.5rem;
    z-index: 1;
    background: repeating-linear-gradient(90deg, rgba(0, 0, 0, 0.9) 0 6px, rgba(0, 0, 0, 0.7) 6px 12px, rgba(0, 0, 0, 0.7) 12px 18px);
    opacity: 0.3;
  }
  .book-horizontal {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
    z-index: 2;
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
    z-index: 1;
  }
  .book-color {
    position: absolute;
    inset: 0;
    pointer-events: none;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem / 0.25rem 0.25rem 0.25rem 0.25rem;
    z-index: 0;
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
    z-index: 2;
    font-size: 1rem;
    letter-spacing: 0.07em;
    filter: brightness(1.2) drop-shadow(0 0 2px black);
  }

  .book-button {
    cursor: pointer;

    &:hover {
      .book {
        box-shadow:
          0 4px 16px rgba(0, 0, 0, 0.28),
          inset 0 0 16px #18181b;
        border-color: #e0c878;
      }

      .book-color {
        filter: saturate(2);
      }
    }
  }
</style>
