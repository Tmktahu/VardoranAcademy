<script lang="ts">
  import { categoryColors } from '@/constants.js';
  import { onMount, tick } from 'svelte';

  export let book: { category?: string; slug: string; bookSpineTitle: string };
  export let selectBook: (book: any) => void;

  let bookHeight: number = 64;
  let bookButtonRef: any;

  function getBookWidth(seed: string | number, min = 40, max = 64, bookSpineTitle?: string): number {
    let hash = 0;
    for (let i = 0; i < String(seed).length; i++) {
      hash = (hash << 5) - hash + String(seed).charCodeAt(i);
      hash |= 0;
    }
    const rand = Math.abs(hash % 1000) / 1000;
    let width = Math.round(min + (max - min) * rand);
    if (bookSpineTitle && bookSpineTitle.includes('<br')) {
      width += 16;
    }
    return width;
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

  async function measureHeight() {
    await tick();
    const button = bookButtonRef;
    const titleElement = button?.querySelector('.title-text') as HTMLElement | null;
    bookHeight = titleElement ? titleElement.offsetWidth + 72 : 64;
    console.log('Measured book height:', bookHeight);
  }

  onMount(async () => {
    await tick();
    await measureHeight();
    window.addEventListener('resize', measureHeight);
  });
</script>

<button
  bind:this={bookButtonRef}
  on:click={() => selectBook(book)}
  class="book-button flex items-center justify-center relative"
  style="height: {bookHeight}px; width: {getBookWidth(book.slug, 40, 64, book.bookSpineTitle)}px;"
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

<style>
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
