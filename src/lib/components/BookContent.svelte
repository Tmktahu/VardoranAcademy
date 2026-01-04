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
    <div class="w-full max-w-4xl z-1">
      <slot name="back"></slot>
    </div>
    <article class="marked w-full max-w-4xl rounded-xl shadow-xl px-8 py-4 border border-{color}-200 bg-background-0/80 z-1">
      {@html html}
    </article>
  </div>
</div>
