<script lang="ts">
  let password = '';
  let error = '';
  let errorMessage = '';

  export let title: string;
  export let authEndpoint: string;
  export let buttonText: string = 'Login';
  export let additionalPayload: Record<string, any> = {};

  async function login() {
    error = '';
    errorMessage = '';

    const payload = { password, ...additionalPayload };

    try {
      const res = await fetch(authEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errorText = await res.text();

        if (res.status === 404) {
          error = 'Server error: Auth endpoint not found';
          errorMessage = 'Please restart the dev server';
        } else if (res.status === 500) {
          error = 'Server error';
          errorMessage = 'Please try again';
        } else {
          error = 'Invalid password';
          errorMessage = 'Please check your password and try again';
        }
        return;
      }

      const result = await res.json();

      if (result.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        error = 'Invalid password';
        errorMessage = result.message || 'Please check your password and try again';
      }
    } catch (err) {
      console.error('[PasswordModal] Network error:', err);
      error = 'Connection failed';
      errorMessage = 'Please check your internet connection';
    }
  }
</script>

<div class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
  <form class="bg-background-0 p-8 rounded shadow max-w-xs w-full" on:submit|preventDefault={login}>
    <h2 class="text-lg font-bold mb-2">{title}</h2>
    <p class="text-sm text-gray-400 mb-4">Enter your password to access this content:</p>
    {#if error}
      <div class="text-red-600 mb-2 font-semibold">{error}</div>
      {#if errorMessage}
        <div class="text-red-500 mb-2 text-sm">{errorMessage}</div>
      {/if}
    {/if}
    <input type="password" bind:value={password} placeholder="Password" class="w-full border rounded px-2 py-1 mb-4" autofocus required />
    <button type="submit" class="w-full bg-success-400 text-white rounded py-2">{buttonText}</button>
  </form>
</div>
