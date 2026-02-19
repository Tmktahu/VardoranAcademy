<script lang="ts">
  import '../app.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
  // const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<!-- <nav style="padding: 1rem;">
	<a
		href="{apiBaseUrl}/auth/discord"
		style="background: #5865F2; color: #fff; padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none;"
	>
		Login with Discord
	</a>
</nav> -->
{@render children?.()}

<!-- Tailwind safelist for dynamic book colors -->
<!-- 
  bg-botanicalGreen-500 bg-botanicalGreen-600 bg-botanicalGreen-700 bg-botanicalGreen-800 bg-botanicalGreen-900
  bg-alchemicalOrange-500 bg-alchemicalOrange-600 bg-alchemicalOrange-700 bg-alchemicalOrange-800 bg-alchemicalOrange-900
  bg-bloodRed-500 bg-bloodRed-600 bg-bloodRed-700 bg-bloodRed-800 bg-bloodRed-900
  bg-chaosPurple-500 bg-chaosPurple-600 bg-chaosPurple-700 bg-chaosPurple-800 bg-chaosPurple-900
  bg-stormYellow-500 bg-stormYellow-600 bg-stormYellow-700 bg-stormYellow-800 bg-stormYellow-900
  bg-info-500 bg-info-600 bg-info-700 bg-info-800 bg-info-900
  bg-illusionTeal-500 bg-illusionTeal-600 bg-illusionTeal-700 bg-illusionTeal-800 bg-illusionTeal-900
  bg-lightShadowGray-500 bg-lightShadowGray-600 bg-lightShadowGray-700 bg-lightShadowGray-800 bg-lightShadowGray-900
  bg-astrologicalBlue-500 bg-astrologicalBlue-600 bg-astrologicalBlue-700 bg-astrologicalBlue-800 bg-astrologicalBlue-900
  bg-medicalBlue-500 bg-medicalBlue-600 bg-medicalBlue-700 bg-medicalBlue-800 bg-medicalBlue-900
  bg-medicalRed-500 bg-medicalRed-600 bg-medicalRed-700 bg-medicalRed-800 bg-medicalRed-900
  bg-folkloreGreen-500 bg-folkloreGreen-600 bg-folkloreGreen-700 bg-folkloreGreen-800 bg-folkloreGreen-900
  bg-frostCyan-500 bg-frostCyan-600 bg-frostCyan-700 bg-frostCyan-800 bg-frostCyan-900
  bg-unholyGreen-500 bg-unholyGreen-600 bg-unholyGreen-700 bg-unholyGreen-800 bg-unholyGreen-900
  bg-inventionYellow-500 bg-inventionYellow-600 bg-inventionYellow-700 bg-inventionYellow-800 bg-inventionYellow-900

  border-botanicalGreen-200
  border-alchemicalOrange-200
  border-bloodRed-200
  border-chaosPurple-200
  border-stormYellow-200
  border-info-200
  border-illusionTeal-200
  border-lightShadowGray-200
  border-astrologicalBlue-200
  border-medicalBlue-200
  border-medicalRed-200
  border-folkloreGreen-200
  border-frostCyan-200
  border-unholyGreen-200
  border-inventionYellow-200
-->

<style>
  :global(html) {
    background: var(--color-background-0);
    color: var(--color-tprimary-0);
    font-family: system-ui, sans-serif;
  }
  :global(body) {
    background: var(--color-background-0);
    color: var(--color-tprimary-0);
    margin: 0;
    min-height: 100vh;
  }
  :global(a) {
    color: #8ab4f8;
  }
  :global(.book-content) {
    background: #23272f;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0004;
  }
  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    color: #e0e0e0;
  }
  :global(code),
  :global(pre) {
    background: #181a20;
    color: #c3e88d;
    border-radius: 4px;
    padding: 2px 6px;
  }
</style>
