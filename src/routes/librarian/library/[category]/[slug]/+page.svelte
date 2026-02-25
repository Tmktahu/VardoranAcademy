<script lang="ts">
  import BookContent from '$lib/components/BookContent.svelte';
  import PasswordModal from '$lib/components/PasswordModal.svelte';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';

  export let data: any;
  
  $: authEndpoint = `/librarian/library/auth-check`;
  $: additionalPayload = data.book.slug && data.book.password 
    ? { slug: data.book.slug, category: data.category }
    : {};
</script>

{#if data.book.requiresPassword === true}
  <PasswordModal 
    title="{data.book.title} is Unavailable" 
    {authEndpoint}
    {additionalPayload}
    buttonText="Access Book" 
  />
{:else}
  <BookContent content={data.content} color={data.book.color}>
    <svelte:fragment slot="back">
      {#if !data.book.password || data.authType === 'librarian'}
        <button class="text-success-400 hover:underline" on:click={() => goto(resolve(`/librarian/library/${data.book.category}`))}> &larr; Back to Library </button>
      {/if}
    </svelte:fragment>
  </BookContent>
{/if}
