<script lang="ts">
  import { marked } from 'marked';
  export let data;
  let html = '';
  let errorMsg = '';
  $: if (data) {
    if (data.alreadyRead) {
      errorMsg = data.message;
      html = '';
    } else if (data.content) {
      html = marked.parse(data.content);
      errorMsg = '';
    }
  }
</script>

<svelte:head>
  <title>{data?.book}</title>
</svelte:head>

{#if errorMsg}
  <p>{errorMsg}</p>
{:else if html}
  <article class="book-content">
    {@html html}
  </article>
{/if}
