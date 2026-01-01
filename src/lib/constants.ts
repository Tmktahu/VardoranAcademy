export const libraryData = [
  {
    series: 'Flora Vardorana',
    description: 'Epic tales from the world of Vardoran.',
    books: [
      {
        slug: 'flora-vardorana-introduction',
        title: 'Introduction to<br>Flora Vardorana',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/0 - Introduction to Flora Vardorana.md',
      },
      { slug: 'fire-blossom', title: 'Fire Blossom', category: 'botanical', path: 'lib/books/Flora Vardorana/1 - Fire Blossom.md' },
      { slug: 'snow-flower', title: 'Snow Flower', category: 'botanical', path: 'lib/books/Flora Vardorana/2 - Snow Flower.md' },
      { slug: 'blood-rose', title: 'Blood Rose', category: 'botanical', path: 'lib/books/Flora Vardorana/3 - Blood Rose.md' },
      { slug: 'sunflower', title: 'Sunflower', category: 'botanical', path: 'lib/books/Flora Vardorana/4 - Sunflower.md' },
      { slug: 'hells-clarion', title: "Hell's Clarion", category: 'botanical', path: "lib/books/Flora Vardorana/5 - Hell's Clarion.md" },
      { slug: 'mourning-lily', title: 'Mourning Lily', category: 'botanical', path: 'lib/books/Flora Vardorana/6 - Mourning Lily.md' },
      { slug: 'trippy-shroom', title: 'Trippy Shroom', category: 'botanical', path: 'lib/books/Flora Vardorana/7 - Trippy Shroom.md' },
      { slug: 'ghost-shroom', title: 'Ghost Shroom', category: 'botanical', path: 'lib/books/Flora Vardorana/8 - Ghost Shroom.md' },
      { slug: 'sacred-grapes', title: 'Sacred Grapes', category: 'botanical', path: 'lib/books/Flora Vardorana/9 - Sacred Grapes.md' },
      { slug: 'bleeding-heart', title: 'Bleeding Heart', category: 'botanical', path: 'lib/books/Flora Vardorana/10 - Bleeding Heart.md' },
      { slug: 'plague-brier', title: 'Plague Brier', category: 'botanical', path: 'lib/books/Flora Vardorana/11 - Plague Brier.md' },
      { slug: 'corrupted-flower', title: 'Corrupted Flower', category: 'botanical', path: 'lib/books/Flora Vardorana/12 - Corrupted Flower.md' },
    ],
  },
  {
    series: 'Bloodlines',
    description: 'Stories of the ancient bloodlines.',
    books: [{ slug: 'origins', title: 'Origins of the Blood', category: 'bloodline', path: 'lib/books/origins.md' }],
  },
];

export const slugToBookMap: Record<string, { series: string; title: string; category: string; path: string }> = {};

libraryData.forEach((series) => {
  series.books.forEach((book) => {
    slugToBookMap[book.slug] = {
      series: series.series,
      title: book.title,
      category: book.category,
      path: book.path,
    };
  });
});
