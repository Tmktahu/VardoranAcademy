<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  let showModal = false;
  let password = '';
  let error = '';
  let isLibrarian = false;
  let checked = false;

  async function checkAuth() {
    if (!browser) return;
    const res = await fetch('/librarian/library/auth-check');
    isLibrarian = (await res.json()).ok;
    checked = true;
    if (!isLibrarian) showModal = true;
  }

  async function login() {
    error = '';
    const res = await fetch('/librarian/library/auth-check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });
    const result = await res.json();
    if (result.ok) {
      showModal = false;
      isLibrarian = true;
    } else {
      error = 'Invalid password';
    }
  }

  onMount(checkAuth);
</script>

{#if checked && isLibrarian}
  <slot />
{/if}

{#if showModal}
  <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <form class="bg-background-0 p-8 rounded shadow max-w-xs w-full" on:submit|preventDefault={login}>
      <h2 class="text-lg font-bold mb-4">Librarian Login</h2>
      {#if error}
        <div class="text-red-600 mb-2">{error}</div>
      {/if}
      <input type="password" bind:value={password} placeholder="Password" class="w-full border rounded px-2 py-1 mb-4" autofocus required />
      <button type="submit" class="w-full bg-success-400 text-white rounded py-2">Login</button>
    </form>
  </div>
{/if}
