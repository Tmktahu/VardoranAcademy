<script lang="ts">
	import { onMount } from 'svelte';
	// import { goto } from '$app/navigation';

	let loading = true;
	let error = null;
	let user = null;
	let guildMember = null;

	onMount(async () => {
		const params = new URLSearchParams(window.location.search);
		const code = params.get('code');
		if (!code) {
			error = 'No code provided in callback URL.';
			loading = false;
			return;
		}
		try {
			const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
			const res = await fetch(
				`${apiBaseUrl}/auth/discord/callback?code=${encodeURIComponent(code)}`,
				{
					credentials: 'include'
				}
			);
			const contentType = res.headers.get('content-type');
			if (!res.ok) throw new Error('Failed to fetch user info');
			if (!contentType || !contentType.includes('application/json')) {
				const text = await res.text();
				throw new Error('Non-JSON response: ' + text.slice(0, 100));
			}
			const data = await res.json();
			user = data.user;
			guildMember = data.guildMember;
			// TODO: Store user info in a global store or cookie for session management
			loading = false;
			// No redirect after successful auth; stay on callback page for debugging
		} catch (e) {
			error = e.message;
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading Discord user info...</p>
{:else if error}
	<p style="color: red;">Error: {error}</p>
{:else}
	<h2>Discord User Info</h2>
	<pre>{JSON.stringify(user, null, 2)}</pre>
	<h3>Guild Member Info</h3>
	<pre>{JSON.stringify(guildMember, null, 2)}</pre>
{/if}
