<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  import shelvesBackground from '$lib/assets/shelves_background.png';
  import BookSpine from '@/components/BookSpine.svelte';

  export let data;

  let showConfirmation = false;
  let selectedBook: any = null;
  let ready = false;

  const selectBook = (book: any) => {
    selectedBook = book;
    console.log('Selected book:', book);
    showConfirmation = true;
  };

  const gotoBook = (slug: string) => {
    window.location.href = `/library/${data.category}/${slug}`;
  };

  import { onDestroy } from 'svelte';
  let nextReadTimestamp: number | null = null;
  let countdown = '';
  let countdownInterval: any = null;
  if (data.lastReadBook && data.lastReadBook.time) {
    const lastRead = new Date(data.lastReadBook.time);
    nextReadTimestamp = lastRead.getTime() + 20 * 60 * 60 * 1000;
  }

  function updateCountdown() {
    if (!nextReadTimestamp) {
      countdown = 'anytime';
      return;
    }
    const now = Date.now();
    const diff = nextReadTimestamp - now;
    if (diff <= 0) {
      countdown = 'anytime';
      clearInterval(countdownInterval);
      return;
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    countdown = `${hours}h ${minutes}m ${seconds}s`;
  }

  if (nextReadTimestamp) {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
  } else {
    countdown = 'anytime';
  }

  onDestroy(() => {
    if (countdownInterval) clearInterval(countdownInterval);
  });

  onMount(() => {
    ready = true;
  });

  let characterName = '';
  let imageInput: HTMLInputElement;

  $: isReread = data.lastReadBook && selectedBook && data.lastReadBook.slug === selectedBook.slug;
  $: requiredInput = !isReread ? { required: true } : {};
  $: canSubmit = isReread || (!!characterName.trim() && imageInput?.files?.length > 0);
  let imagePreviewUrl: string | null = null;

  function handleImageChange() {
    if (imageInput && imageInput.files && imageInput.files.length > 0) {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
      imagePreviewUrl = URL.createObjectURL(imageInput.files[0]);
    } else {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
      imagePreviewUrl = null;
    }
  }

  // Clean up preview URL on destroy
  onDestroy(() => {
    if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
  });

  async function submitReadBook() {
    if (!selectedBook) return;
    if (isReread) {
      gotoBook(selectedBook.slug);
      return;
    }
    if (!characterName || !imageInput.files?.length) return;
    const formData = new FormData();
    formData.append('characterName', characterName);
    formData.append('bookTitle', selectedBook.title);
    if (imageInput.files?.length) {
      formData.append('image', imageInput.files[0]);
    }
    try {
      const res = await fetch('/library/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        gotoBook(selectedBook.slug);
      } else {
        alert(data.error || 'Failed to send to Discord');
      }
    } catch (e) {
      alert('Failed to send to Discord');
    }
  }
</script>

<div class="w-full h-full relative bg-background-0 overflow-y-auto hide-scrollbar">
  <img src={shelvesBackground} alt="Bookshelf Background" class="absolute top-0 w-full h-full object-top object-cover opacity-30 pointer-events-none z-0" />

  <div class="flex justify-between items-center w-full relative py-4 px-4">
    <button class="text-yellow-400 bg-background-0/80 hover:bg-background-0/50 px-5 py-1 rounded-2xl z-10" on:click={() => goto(resolve('/library'))}> Leave the Section </button>
    {#if data.lastReadBook}
      <div class="text-md bg-background-0 opacity-50 h-fit rounded-2xl px-4 py-1">Book Cooldown: {countdown}</div>
    {/if}
  </div>

  <div class="flex w-full justify-center flex-wrap opacity-0 {ready ? 'opacity-100' : ''} transition-opacity duration-500">
    {#each data.seriesWithBooks as series (series.series)}
      <div class="bg-background-0/40 flex items-end grow justify-center min-h-fit z-1 px-6 py-2 border-t border-b border-yellow-500/80">
        <div class="series-block flex flex-col">
          <div class="books-row flex gap-2 items-end flex-wrap">
            {#each series.books as book, i (book.slug)}
              <BookSpine {book} {selectBook} color={series.color} />
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>

  {#if showConfirmation}
    <div class="fixed inset-0 bg-background-0/50 bg-opacity-50 flex items-center justify-center z-50">
      <div class="book-confirmation bg-gray-800 p-6 border border-yellow-700 max-w-xl w-full rounded-2xl mx-4 bg-background-0/90">
        {#if selectedBook}
          <h2 class="text-2xl font-bold mb-2 cinzel-regular">{selectedBook.title}</h2>
          <p class="text-gray-300 mb-4 italic tracking-wide bg-background-800 px-2 py-1 rounded-2xl">{selectedBook.description || 'No description available.'}</p>
          <div class="text-[18px] text-error-50 mb-2"> Provide your character name and a screenshot of you in the Library in-game when reading a book for the current day.</div>

          <form class="flex flex-col gap-4" on:submit|preventDefault={submitReadBook}>
            {#if !isReread && (!data.lastReadBook || data.lastReadBook.slug === selectedBook.slug)}
              <div class="flex justify-between gap-3">
                <input type="text" placeholder="Character Name" bind:value={characterName} class="w-48 bg-background-700 text-white px-3 py-2 rounded" />
                <label class="w-48 cursor-pointer bg-background-700 text-white px-3 py-2 rounded text-center hover:bg-background-600 transition-colors">
                  {imageInput?.files?.length ? imageInput.files[0].name : 'Attach Screenshot'}
                  <input type="file" accept="image/*" bind:this={imageInput} class="hidden" on:change={handleImageChange} />
                </label>
              </div>
              {#if imagePreviewUrl}
                <img src={imagePreviewUrl} alt="Preview" class="max-h-40 max-w-full rounded border border-yellow-700 mt-2 object-contain" style="display:block;margin:auto;" />
              {/if}
            {/if}
            <div class="flex gap-4 justify-between">
              {#if !data.lastReadBook || data.lastReadBook.slug === selectedBook.slug}
                <button
                  type="submit"
                  class="bg-background-700 hover:bg-background-600 text-white px-6 py-2 rounded transition-colors disabled:bg-background-800 disabled:cursor-not-allowed! disabled:text-error-300! disabled:opacity-60"
                  disabled={!canSubmit}
                >
                  {isReread ? 'Re-read Book' : 'Read Book'}
                </button>
              {/if}
              <button type="button" on:click={() => (showConfirmation = false)} class="bg-error-900 hover:bg-error-500 text-white px-6 py-2 rounded transition-colors">
                {#if data.lastReadBook && data.lastReadBook.slug !== selectedBook.slug}
                  You have already read a book today
                {:else}
                  Leave the book on the shelf
                {/if}
              </button>
            </div>
          </form>
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
</style>
