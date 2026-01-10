<script lang="ts">
  import { boardMembers, faculty } from '$lib/constants';

  // Function to randomly select a quote from an array
  function getRandomQuote(quotes: string[]) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // // Professors
  // const professors: Member[] = [
  //   // Add professors here
  // ];

  // // Members
  // const members: Member[] = [
  //   // Add members here
  // ];

  let userData = null;
  let userError = null;

  if (typeof document !== 'undefined') {
    console.log('Raw cookie:', document.cookie);
  }
</script>

<div class="flex flex-col h-full w-full bg-background-0 relative overflow-x-hidden">
  <!-- Full page octagram background -->
  <div class="archive-background"></div>

  <header class="flex flex-col w-full justify-center z-20 cinzel-regular">
    <nav class="flex items-center justify-center gap-8 nav-background">
      <a href="https://discord.gg/Rh9eZNqtpf" target="_blank" class="text-tsecondary-0! hover:text-tprimary-0! transition-colors duration-300 text-xl px-5 py-1">Discord</a>

      <h1 class="text-4xl font-semibold text-tprimary-0 py-2 tracking-widest">The Academy</h1>

      <a href="/library" class="text-tsecondary-0! hover:text-tprimary-0! transition-colors duration-300 text-xl px-5 py-1"> Library </a>
    </nav>

    <div class="flex justify-center w-full">
      <p class="text-xs px-32 text-center text-tprimary-0 tracking-wide italic nav-background">Knowledge Through Unity, Wisdom Through Practice</p>
    </div>
  </header>

  <main class="max-w-5xl grow mx-auto px-8 pb-16 relative z-10 overflow-y-auto h-[calc(100vh-90px)] hide-scrollbar">
    <section class="mb-8 mt-8">
      <div class="grid grid-cols-2 gap-8">
        <div class="rules-column px-6 py-5 bg-background-0/90">
          <h3 class="cinzel-regular text-2xl text-tprimary-0 text-center tracking-[0.05em] mb-3">Conduct & Safety</h3>
          <ul class="text-tprimary-0 text-[18px] leading-[1.7]">
            <li>Move deliberately and purposefully - rushed movement disrupts research activities</li>
            <li>Follow all posted directional signage and designated pathways</li>
            <li>Visitors must remain in authorized public areas only</li>
            <li>Maintain appropriate distance from ongoing experiments or demonstrations</li>
            <li>Report any accidental damage immediately to Academy personnel</li>
          </ul>

          <h3 class="cinzel-regular text-2xl text-tprimary-0 text-center tracking-[0.05em] mb-3 mt-6">Library Protocols</h3>
          <ul class="text-tprimary-0 text-[18px] leading-[1.7]">
            <li>Only authorized personnel may speak within the Library</li>
            <li>Handle all books and documents with utmost care</li>
            <li>No books may leave the Library premises</li>
          </ul>
        </div>

        <div class="rules-column px-6 py-5 bg-background-0/90">
          <h3 class="cinzel-regular text-2xl text-tprimary-0 text-center tracking-[0.05em] mb-3">Environmental Protection</h3>
          <ul class="text-tprimary-0 text-[18px] leading-[1.7]">
            <li>Do not disturb, harm, or swat mosquitoes - they are essential to botanical ecosystem maintenance</li>
            <li>Avoid disturbing plant life, specimens, or environmental research areas</li>
            <li>Do not remove anything from Academy grounds without authorization</li>
          </ul>

          <h3 class="cinzel-regular text-2xl text-tprimary-0 text-center mt-5 mb-3">Authorization & Enforcement</h3>
          <ul class="text-tprimary-0 text-[18px] leading-[1.7]">
            <li>Valid pass required for entry - unauthorized individuals may be removed</li>
            <li>Property damage will be assessed fines proportional to replacement costs</li>
            <li>Violations result in immediate removal; repeated violations result in permanent access revocation</li>
            <li>Academy personnel have final authority on all conduct matters</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="mb-20 relative personnel-section">
      <div class="cinzel-regular text-4xl py-2 text-center nav-background mb-1">Academy Personnel</div>

      <!-- Board Members -->
      <div class="mb-4">
        <h3 class="nav-background text-[1.5rem] font-medium text-tprimary-0 text-center tracking-[0.08em]">Board Members</h3>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-4">
          {#each boardMembers as member (member.name)}
            <div class="archive-card border border-tsecondary-500/30 px-4 py-2 relative bg-background-0/90 transition-all duration-300">
              <div class="text-center text-xl font-medium text-tprimary-0 tracking-[0.05em]">{member.name}</div>
              <div class="text-center text-lg text-tsecondary-400 font-light tracking-[0.03em] mb-2">{member.role}</div>
              <div class="text-center text-sm text-tsecondary-500 italic leading-[1.5] border-t border-tsecondary-500/30 pt-2 tracking-[0.02em]"
                >"{getRandomQuote(member.quotes)}"</div
              >
            </div>
          {/each}
        </div>
      </div>

      <!-- Faculty -->
      <div class="mb-4">
        <h3 class="nav-background text-[1.5rem] font-medium text-tprimary-0 text-center tracking-[0.08em]">Faculty</h3>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-4">
          {#each faculty as member (member.name)}
            <div class="archive-card border border-tsecondary-500/30 px-8 py-8 relative bg-background-0 transition-all duration-300">
              <div class=" text-[1.4rem] font-medium text-tprimary-0 mb-0.5 tracking-[0.05em]">{member.name}</div>
              <div class="text-[0.95rem] text-tsecondary-400 font-light tracking-[0.03em] mb-2">{member.role}</div>
              <div class="text-[0.9rem] text-tsecondary-500 italic leading-[1.5] border-t border-tsecondary-500/30 pt-2 tracking-[0.02em]">"{getRandomQuote(member.quotes)}"</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Professors -->
      <!-- {#if professors.length > 0}
        <div class="mb-12">
          <h3 class="category-title text-[1.5rem] font-medium text-tprimary-0 mb-8 text-center tracking-[0.08em]">Professors</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-8">
            {#each professors as member (member.name)}
              <div class="archive-card border border-tsecondary-500/30 px-8 py-8 relative bg-background-0 transition-all duration-300">
                <div class=" text-[1.4rem] font-medium text-tprimary-0 mb-0.5 tracking-[0.05em]">{member.name}</div>
                <div class="text-[0.95rem] text-tsecondary-400 font-light tracking-[0.03em] mb-4">{member.role}</div>
                <div class="text-[0.9rem] text-tsecondary-500 italic leading-[1.5] border-t border-tsecondary-500/30 pt-4 tracking-[0.02em]">"{getRandomQuote(member.quotes)}"</div>
              </div>
            {/each}
          </div>
        </div>
      {/if} -->

      <!-- {#if userData}
        <section class="mb-20">
          <h2>User Data</h2>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </section>
      {:else if userError}
        <section class="mb-20">
          <h2>User Data</h2>
          <p style="color: red;">{userError}</p>
        </section>
      {/if} -->
      <!-- {#if members.length > 0}
        <div class="mb-12">
          <h3 class="category-title text-[1.5rem] font-medium text-tprimary-0 mb-8 text-center tracking-[0.08em]">Members</h3>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 mt-8">
            {#each members as member (member.name)}
              <div class="archive-card border border-tsecondary-500/30 px-8 py-8 relative bg-background-0 transition-all duration-300">
                <div class=" text-[1.4rem] font-medium text-tprimary-0 mb-0.5 tracking-[0.05em]">{member.name}</div>
                <div class="text-[0.95rem] text-tsecondary-400 font-light tracking-[0.03em] mb-4">{member.role}</div>
                <div class="text-[0.9rem] text-tsecondary-500 italic leading-[1.5] border-t border-tsecondary-500/30 pt-4 tracking-[0.02em]">"{getRandomQuote(member.quotes)}"</div>
              </div>
            {/each}
          </div>
        </div>
      {/if} -->
    </section>
  </main>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;500&display=swap');

  .nav-background {
    background: linear-gradient(to left, transparent, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.4) 70%, transparent);
  }

  /* Full page octagram background */
  .archive-background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('$lib/assets/octagram_background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.8;
    pointer-events: none;
    z-index: 0;
  }

  /* Rules column sacred geometry */
  .rules-column ul {
    list-style: none;
    counter-reset: rule-counter;
  }

  .rules-column li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 2.5rem;
    counter-increment: rule-counter;
  }

  .rules-column li::before {
    content: counter(rule-counter, upper-roman) '.';
    position: absolute;
    left: 0;
    top: 3px;
    color: var(--color-tsecondary-0);
    font-weight: 500;
    font-family: 'Cinzel', serif;
  }

  /* Category title divider */
  .category-title::after {
    content: '';
    position: absolute;
    bottom: -1.25rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 1px;
    background: var(--color-tsecondary-500);
  }

  /* Responsive overrides */
  @media (max-width: 768px) {
    .personnel-section .grid {
      grid-template-columns: 1fr;
    }

    .section-title {
      font-size: 1.6rem;
    }

    .section-title::before,
    .section-title::after {
      display: none;
    }
  }
</style>
