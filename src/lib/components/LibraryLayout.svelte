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

<div class="w-full h-full flex items-center justify-center bg-background-400">
  <!-- Desktop Layout -->
  <div class="desktop-layout w-full">
    <div class="relative w-full cinzel-regular leading-none" bind:this={container}>
      <img src={libraryLayout} alt="Library Layout" class="w-full h-auto block opacity-80" on:load={handleImageLoad} />

      <div class="overlay-container absolute inset-0 pointer-events-none text-tprimary-0">
        <button
          class="leave-background px-16 cinzel-regular font-semibold! text-background-0 hover:text-black! transition-colors duration-300 text-3xl absolute z-10 cursor-pointer pointer-events-auto"
          style="top: 14%; left: 7%;"
          on:click={() => goto('/')}
        >
          Leave the Library
        </button>

        <button
          class="absolute z-10 history-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 12%; left: 38%; width: 19%; height: 12%;"
          on:click={() => gotoCategory('history')}
        >
          History
        </button>

        <button
          class="absolute z-10 arcana-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 36%; left: 16%; width: 20%; height: 10%;"
          on:click={() => gotoCategory('arcana')}
        >
          Arcana
        </button>

        <button
          class="absolute z-10 botanical-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 36%; left: 62%; width: 20%; height: 10%;"
          on:click={() => gotoCategory('botanical')}
        >
          Botanical
        </button>

        <button
          class="absolute z-10 alchemical-background cursor-pointer pointer-events-auto font-semibold"
          style="top: 58%; left: 62%; width: 20%; height: 10%;"
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
  .overlay-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3%;
    background: linear-gradient(to bottom, var(--color-background-400), transparent);
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
    background: linear-gradient(to top, var(--color-background-400), transparent);
    pointer-events: none;
    z-index: 5;
  }

  .leave-background {
    background: linear-gradient(to left, transparent, var(--color-tsecondary-800) 40%, var(--color-tsecondary-800) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
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
