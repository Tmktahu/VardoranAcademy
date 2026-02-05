<script lang="ts">
  import { onMount } from 'svelte';
  import octagramBackground from '$lib/assets/octagram_background.png';
  import { useMarked } from '$lib/models/useMarked';
  export let content: string;
  export let color: string;

  let html: string | Promise<string> = '';
  const { parse } = useMarked();

  onMount(async () => {
    html = parse(content);
  });
</script>

<div class="h-full w-full bg-background-0 overflow-hidden">
  <img src={octagramBackground} alt="Background" class="absolute top-0 left-0 w-full opacity-30 h-full object-cover pointer-events-none z-0" />
  <div class="flex flex-col h-full w-full items-center overflow-y-auto hide-scrollbar py-6">
    <div class="flex items-center w-full max-w-4xl mb-2 z-1">
      <div class="whitespace-nowrap mr-4">
        <slot name="back"></slot>
      </div>
      <div class="!bg-error-900 px-2 py-1 rounded text-md">
        This is IC information. If you wish to share it with others, it <strong>must</strong> happen either in-game verbally or in the Shadows of Vardoran Discord server. I reccommend
        a journal entry.
      </div>
    </div>

    <article class="marked w-full max-w-4xl rounded-xl shadow-xl px-8 py-4 border border-{color}-200 bg-background-0/80 z-1">
      {@html html}
    </article>
  </div>
</div>
