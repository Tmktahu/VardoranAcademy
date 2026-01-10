<script lang="ts">
  import { goto } from '$app/navigation';

  import libraryLayout from '$lib/assets/library_layout.png';

  export let basePath: string;

  let container: HTMLDivElement;
  let aspectRatio = 3 / 5;

  const categories = ['history', 'arcana', 'botanical', 'alchemical'];

  function gotoCategory(category: string) {
    goto(`${basePath}/${category}`);
  }

  function handleImageLoad(e: Event) {
    const img = e.target as HTMLImageElement;
    aspectRatio = img.naturalWidth / img.naturalHeight;
  }
</script>

<div class="w-full h-full flex items-center justify-center">
  <!-- Desktop Layout -->
  <div class="desktop-layout w-full">
    <h1 class="absolute top-4 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-tprimary-0 z-10 pointer-events-none heading-shadow"> Where will you explore? </h1>

    <div class="relative w-full cinzel-regular leading-none" bind:this={container}>
      <img src={libraryLayout} alt="Library Layout" class="w-full h-auto block opacity-80" on:load={handleImageLoad} />

      <div class="overlay-container absolute inset-0 pointer-events-none text-tprimary-0">
        <button
          class="absolute z-10 history-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 12%; left: 41%; width: 17%; height: 12%;"
          on:click={() => gotoCategory('history')}
        >
          History
        </button>

        <button
          class="absolute z-10 arcana-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 40%; left: 18%; width: 20%; height: 11%;"
          on:click={() => gotoCategory('arcana')}
        >
          Arcana
        </button>

        <button
          class="absolute z-10 botanical-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 38%; left: 63%; width: 18%; height: 11%;"
          on:click={() => gotoCategory('botanical')}
        >
          Botanical
        </button>

        <button
          class="absolute z-10 alchemical-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 61%; left: 62%; width: 19%; height: 11%;"
          on:click={() => gotoCategory('alchemical')}
        >
          Alchemical
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="mobile-layout hidden w-full flex flex-col items-center p-8 min-h-screen">
    <img src={libraryLayout} alt="Library Layout" class="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div class="relative z-10 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6 text-center text-tprimary-0 heading-shadow">Where will you explore?</h1>
      <div class="flex flex-col gap-4 cinzel-regular leading-none">
        <button class="history-mobile cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('history')}> History </button>

        <button class="arcana-mobile cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('arcana')}> Arcana </button>

        <button class="botanical-mobile cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('botanical')}> Botanical </button>

        <button class="alchemical-mobile cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('alchemical')}>
          Alchemical
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .heading-shadow {
    text-shadow:
      4px 4px 12px rgba(0, 0, 0, 0.9),
      -4px 4px 12px rgba(0, 0, 0, 0.9),
      4px -4px 12px rgba(0, 0, 0, 0.9),
      -4px -4px 12px rgba(0, 0, 0, 0.9),
      0 0 20px rgba(0, 0, 0, 0.8),
      0 0 40px rgba(0, 0, 0, 0.6);
  }

  .overlay-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3%;
    background: linear-gradient(to bottom, #181a20, transparent);
    pointer-events: none;
    z-index: 5;
  }

  .overlay-container::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3%;
    background: linear-gradient(to top, #181a20, transparent);
    pointer-events: none;
    z-index: 5;
  }

  .arcana-background {
    background: linear-gradient(to left, transparent, var(--color-chaosPurple-0) 40%, var(--color-chaosPurple-0) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .botanical-background {
    background: linear-gradient(to left, transparent, var(--color-botanicalGreen-0) 40%, var(--color-botanicalGreen-0) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .history-background {
    background: linear-gradient(to left, transparent, var(--color-info-800) 40%, var(--color-info-800) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .alchemical-background {
    background: linear-gradient(to left, transparent, var(--color-alchemicalOrange-900) 40%, var(--color-alchemicalOrange-900) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .history-mobile {
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .arcana-mobile {
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .botanical-mobile {
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .alchemical-mobile {
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .desktop-layout {
      display: none;
    }

    .mobile-layout {
      display: flex;
    }

    .history-mobile {
      background: linear-gradient(to left, transparent, var(--color-info-800) 40%, var(--color-info-800) 60%, transparent);
    }

    .arcana-mobile {
      background: linear-gradient(to left, transparent, var(--color-chaosPurple-0) 40%, var(--color-chaosPurple-0) 60%, transparent);
    }

    .botanical-mobile {
      background: linear-gradient(to left, transparent, var(--color-botanicalGreen-0) 40%, var(--color-botanicalGreen-0) 60%, transparent);
    }

    .alchemical-mobile {
      background: linear-gradient(to left, transparent, var(--color-alchemicalOrange-900) 40%, var(--color-alchemicalOrange-900) 60%, transparent);
    }
  }
</style>
