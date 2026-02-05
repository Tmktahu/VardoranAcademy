<script lang="ts">
  import { goto } from '$app/navigation';

  import libraryLayout from '$lib/assets/library_layout.png';

  export let basePath: string;

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

<div class="w-full h-full flex items-center justify-center" style="background: #C6A583;">
  <!-- Desktop Layout -->
  <div class="desktop-layout w-full h-full">
    <div class="flex items-center justify-center">
      <div class="relative cinzel-regular w-fit leading-none">
        <img src={libraryLayout} alt="Library Layout" class="m-auto w-auto max-h-screen block" on:load={handleImageLoad} />
        <div class="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>

        <div class="overlay-container absolute inset-0 pointer-events-none text-tprimary-0">
          <div class="side-fades"></div>
          <button
            class="absolute leave-background px-auto cinzel-regular font-semibold! text-background-100 transition-colors duration-300 text-3xl z-10 cursor-pointer pointer-events-auto"
            style="bottom: 80%; left: 8%; width: 30%;"
            on:click={() => goto('/')}
          >
            Leave the Library
          </button>

          <button
            class="absolute z-10 history-background cursor-pointer pointer-events-auto font-semibold"
            style="top: 12%; left: 39%; width: 19%; height: 12%;"
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

          <button
            class="absolute z-10 astrological-background cursor-pointer pointer-events-auto font-semibold"
            style="top: 58%; left: 16%; width: 20%; height: 10%;"
            on:click={() => gotoCategory('astrological')}
          >
            Astrological
          </button>

          <button
            class="absolute z-10 medical-background cursor-pointer pointer-events-auto font-semibold"
            style="top: 25%; left: 55%; width: 35%; height: 10%;"
            on:click={() => gotoCategory('medical')}
          >
            Medical
          </button>

          <button
            class="absolute z-10 folklore-background cursor-pointer pointer-events-auto font-semibold"
            style="top: 69%; left: 5%; width: 35%; height: 10%;"
            on:click={() => gotoCategory('folklore')}
          >
            Folklore
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile Layout -->
  <div class="mobile-layout hidden w-full flex flex-col items-center p-8 min-h-screen">
    <img src={libraryLayout} alt="Library Layout" class="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div class="relative z-10 w-full max-w-md">
      <div class="flex flex-col gap-4 cinzel-regular leading-none">
        <button class="leave-background px-8 py-4 rounded-lg text-center text-2xl text-background-0 font-semibold w-full cursor-pointer" on:click={() => goto('/')}>
          Leave the Library
        </button>

        <button class="button-mobile history-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('history')}>
          History
        </button>

        <button class="button-mobile arcana-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('arcana')}>
          Arcana
        </button>
        <button class="button-mobile botanical-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('botanical')}>
          Botanical
        </button>
        <button class="button-mobile alchemical-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('alchemical')}>
          Alchemical
        </button>

        <button
          class="button-mobile astrological-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold"
          on:click={() => gotoCategory('astrological')}
        >
          Astrological
        </button>

        <button class="button-mobile medical-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('medical')}>
          Medical
        </button>

        <button class="button-mobile folklore-background cursor-pointer p-6 rounded-lg text-center text-xl text-white font-semibold" on:click={() => gotoCategory('folklore')}>
          Folklore
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  .leave-background {
    background: linear-gradient(to left, transparent, var(--color-background-0) 20%, var(--color-background-0) 80%, transparent);
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

  .astrological-background {
    background: linear-gradient(to left, transparent, var(--color-astrologicalBlue-900) 40%, var(--color-astrologicalBlue-900) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .medical-background {
    background: linear-gradient(to left, transparent, var(--color-medicalBlue-900) 40%, var(--color-medicalBlue-900) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .folklore-background {
    background: linear-gradient(to left, transparent, var(--color-folkloreGreen-800) 40%, var(--color-folkloreGreen-800) 60%, transparent);
    transition: opacity 0.3s ease;
    opacity: 0.9;

    &:hover {
      opacity: 1;
    }
  }

  .button-mobile {
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

    .astrological-mobile {
      background: linear-gradient(to left, transparent, var(--color-astrologicalBlue-900) 40%, var(--color-astrologicalBlue-900) 60%, transparent);
    }

    .medical-mobile {
      background: linear-gradient(to left, transparent, var(--color-medicalBlue-900) 40%, var(--color-medicalBlue-900) 60%, transparent);
    }

    .folklore-mobile {
      background: linear-gradient(to left, transparent, var(--color-folkloreGreen-800) 40%, var(--color-folkloreGreen-800) 60%, transparent);
    }
  }

  .side-fades::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3%;
    background: linear-gradient(to right, #c6a583, transparent);
    pointer-events: none;
    z-index: 5;
  }

  .side-fades::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3%;
    background: linear-gradient(to left, #c6a583, transparent);
    pointer-events: none;
    z-index: 5;
  }

  .overlay-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3%;
    background: linear-gradient(to bottom, #c6a583, transparent);
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
    background: linear-gradient(to top, #c6a583, transparent);
    pointer-events: none;
    z-index: 5;
  }
</style>
