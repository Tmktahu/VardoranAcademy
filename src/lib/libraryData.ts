export const libraryData: {
  series: string;
  description: string;
  books: { slug: string; title: string; bookSpineTitle: string; description: string; category: string; path: string }[];
}[] = [
  {
    series: 'Flora Vardorana',
    description:
      "Systematic documentation of Vardoran's magically-significant plant species by First Head of Botanical Studies Verena Stillswater, with later medical and alchemical applications documented by Martin Ehrlich.",
    books: [
      {
        slug: 'flora-vardorana-introduction',
        title: 'Introduction to Flora Vardorana',
        bookSpineTitle: 'Introduction to<br>Flora Vardorana',
        description:
          'A pristine volume bound in green cloth with gold lettering. The pages are clean and well-organized, showing careful editing and revision. Written in precise script with clear section divisions. Common tongue. Excellent condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/0 - Introduction to Flora Vardorana.md',
      },
      {
        slug: 'fire-blossom',
        title: 'Fire Blossom',
        bookSpineTitle: 'Fire Blossom',
        description:
          'A field guide with singed edges on several pages, as if exposed to heat. The binding shows wear from outdoor use, and several pressed specimens are carefully attached with metal clips. Written in steady script with flame motifs decorating section headers. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/1 - Fire Blossom.md',
      },
      {
        slug: 'snow-flower',
        title: 'Snow Flower',
        bookSpineTitle: 'Snow Flower',
        description:
          'A field guide with pressed flower samples attached to several pages. The binding is reinforced with cord, and the pages show signs of moisture damage from outdoor use. Written in neat script with botanical sketches in the margins. Common tongue. Good condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/2 - Snow Flower.md',
      },
      {
        slug: 'blood-rose',
        title: 'Blood Rose',
        bookSpineTitle: 'Blood Rose',
        description:
          'A slim volume bound in worn leather, its pages showing water stains and dog-eared corners from frequent field use. The text is written in a precise hand with occasional margin notes and corrections. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/3 - Blood Rose.md',
      },
      {
        slug: 'sunflower',
        title: 'Sunflower',
        bookSpineTitle: 'Sunflower',
        description:
          'A farm journal with pressed flower specimens and sketches of cultivation plots. The binding shows soil stains and weather damage. Written in neat script with agricultural notes. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/4 - Sunflower.md',
      },
      {
        slug: 'hells-clarion',
        title: "Hell's Clarion",
        bookSpineTitle: "Hell's Clarion",
        description:
          'A worn field guide with cave dust embedded in the pages and mushroom spore prints pressed between leaves. The binding is water-stained and reinforced with cord. Written in hurried script with rough sketches of underground fungi. Common tongue. Poor condition.',
        category: 'botanical',
        path: "lib/books/Flora Vardorana/5 - Hell's Clarion.md",
      },
      {
        slug: 'mourning-lily',
        title: 'Mourning Lily',
        bookSpineTitle: 'Mourning Lily',
        description:
          'A small notebook bound in dark cloth, pages stained with soil and marked with pressed flower samples. The binding is reinforced with thread, showing frequent field use. Written in careful script with sketches of cemetery layouts in margins. Common tongue. Well-worn condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/6 - Mourning Lily.md',
      },
      {
        slug: 'trippy-shroom',
        title: 'Trippy Shroom',
        bookSpineTitle: 'Trippy Shroom',
        description:
          'A small field notebook with pages showing purple staining and slightly warped text in sections. The binding is loose and several pages appear to have been removed. Written in unsteady script with cautionary notes in margins. Common tongue. Poor condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/7 - Trippy Shroom.md',
      },
      {
        slug: 'ghost-shroom',
        title: 'Ghost Shroom',
        bookSpineTitle: 'Ghost Shroom',
        description:
          'A small journal with translucent pages that seem to shimmer in certain light. The binding is wrapped in cloth that appears to shift color. Written in faint script that occasionally requires tilting to read. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/8 - Ghost Shroom.md',
      },
      {
        slug: 'sacred-grapes',
        title: 'Sacred Grapes',
        bookSpineTitle: 'Sacred Grapes',
        description:
          'A vineyard journal with wine-stained pages and dried grape leaves pressed between sections. The binding shows signs of careful maintenance. Written in flowing script with cultivation notes. Common tongue. Good condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/9 - Sacred Grapes.md',
      },
      {
        slug: 'bleeding-heart',
        title: 'Bleeding Heart',
        bookSpineTitle: 'Bleeding Heart',
        description:
          'A field journal with frost-damaged pages and dried plant specimens attached with dark red thread. The leather binding shows wear from harsh conditions. Written in precise script with anatomical sketches of flower structures. Common tongue. Poor condition due to cold exposure.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/10 - Bleeding Heart.md',
      },
      {
        slug: 'plague-brier',
        title: 'Plague Brier',
        bookSpineTitle: 'Plague Brier',
        description:
          'A field guide with pages showing chemical stains and discoloration. The binding is treated with protective coating. Several pressed specimens are sealed behind glass. Written in careful script with notes on handling precautions. Common tongue. Fair condition considering exposure.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/11 - Plague Brier.md',
      },
      {
        slug: 'corrupted-flower',
        title: 'Corrupted Flower',
        bookSpineTitle: 'Corrupted Flower',
        description:
          'Field documentation with pages stained by purple residue. Binding reinforced with wire. Contains pressed specimens sealed in treated paper. Technical notation throughout. Common tongue. Working condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/12 - Corrupted Flower.md',
      },
    ],
  },
  {
    series: 'Field Alchemy',
    description:
      'Basic waterskin-based alchemical formulations for field use by Malcolm Maxworthy, First Head of Chemical Studies. Covers resistance preparations, combat enhancement, and healing using minimal equipment.',
    books: [
      {
        slug: 'field-alchemy-introduction',
        title: 'Introduction to Field Alchemy',
        bookSpineTitle: 'Introduction to<br>Field Alchemy',
        description:
          'An introductory manual showing signs of frequent use. Pages contain margin notes with equipment recommendations and common mistake warnings. Written in enthusiastic script with occasional frustrated corrections. Common tongue. Fair condition from heavy reference.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/0 - Introduction to Field Alchemy.md',
      },
      {
        slug: 'thirty-attempts-fire-resistance',
        title: 'Thirty Attempts at Fire Resistance',
        bookSpineTitle: 'Thirty Attempts at<br>Fire Resistance',
        description:
          'A workshop manual with singed edges and oil stains throughout. Several pages show burn marks where experiments went awry. Written in enthusiastic script with margin notes about "brilliant failures" and "minor explosions." Common tongue. Poor condition but still legible.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/1 - Thirty Attempts at Fire Resistance.md',
      },
      {
        slug: 'verenas-simple-silver-solution',
        title: "Verena's Simple Silver Solution",
        bookSpineTitle: "Verena's Simple<br>Silver Solution",
        description:
          'A water-stained notebook with crystallized residue on several pages. The binding shows silver discoloration from repeated exposure. Written in hurried script with excited margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: "lib/books/Field Alchemy/2 - Verena's Simple Silver Solution.md",
      },
      {
        slug: 'garlic-resistance-rat-ethics',
        title: 'Garlic Resistance and Rat Ethics',
        bookSpineTitle: 'Garlic Resistance<br>and Rat Ethics',
        description:
          'A field guide with peculiar smell embedded in pages. Some sections show staining from garlic exposure tests. Written in matter-of-fact script with frustrated margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/3 - Garlic Resistance and Rat Ethics.md',
      },
      {
        slug: 'emergency-sun-protection',
        title: 'Emergency Sun Protection',
        bookSpineTitle: 'Emergency Sun<br>Protection',
        description:
          'A worn journal with pages showing sun damage and fading. Several entries are barely legible. Written in careful script with urgent margin notes about vampire safety. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/4 - Emergency Sun Protection.md',
      },
      {
        slug: 'blood-rose-field-medicine',
        title: 'Blood Rose Field Medicine',
        bookSpineTitle: 'Blood Rose<br>Field Medicine',
        description:
          'A medical reference guide with blood stains throughout. Pages show field testing records from combat situations. Written in practical script with emergency use notes. Common tongue. Poor condition but legible.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/5 - Blood Rose Field Medicine.md',
      },
      {
        slug: 'ferocity-monster-hunters',
        title: 'Ferocity from the Monster Hunters',
        bookSpineTitle: 'Ferocity from the<br>Monster Hunters',
        description:
          'A field manual with leather cover reinforced with silver studs. Pages show wear from outdoor use and monster blood stains. Written in practical block letters with hunting notes in margins. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/6 - Ferocity from the Monster Hunters.md',
      },
      {
        slug: 'enchanted-enhancement-basics',
        title: 'Enchanted Enhancement Basics',
        bookSpineTitle: 'Enchanted<br>Enhancement Basics',
        description:
          'A field manual matching the Brew of Ferocity volume, also from Ashen Keep. Silver-studded leather cover with frost damage on several pages. Written in same practical block letters. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/7 - Enchanted Enhancement Basics.md',
      },
    ],
  },
  {
    series: 'Advanced Preparations',
    description:
      'Glass bottle formulations requiring advanced technique by Malcolm Maxworthy, First Head of Chemical Studies. Covers enhanced resistance, healing, combat, and specialized applications.',
    books: [
      {
        slug: 'advanced-preparations-introduction',
        title: 'Introduction to Advanced Preparations',
        bookSpineTitle: 'Introduction to<br>Advanced Preparations',
        description:
          'An intermediate reference guide showing careful use. Pages contain detailed technique notes and concentration calculations. Written in confident script with fewer corrections than Field Alchemy series. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/0 - Introduction to Advanced Preparations.md',
      },
      {
        slug: 'silver-resistance-tripled',
        title: 'Silver Resistance, Tripled',
        bookSpineTitle: 'Silver Resistance,<br>Tripled',
        description:
          'A research journal with detailed silver exposure testing records. Pages show silver tarnish stains from experiments. Written in methodical script with safety warnings. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/1 - Silver Resistance, Tripled.md',
      },
      {
        slug: 'concentrated-garlic-aggression',
        title: 'Concentrated Garlic Aggression',
        bookSpineTitle: 'Concentrated<br>Garlic Aggression',
        description:
          'A practical manual with persistent garlic smell embedded in pages. Some sections show testing records with behavioral observations. Written in resigned script with frustrated margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/2 - Concentrated Garlic Aggression.md',
      },
      {
        slug: 'five-years-holy-resistance',
        title: 'Five Years of Holy Resistance',
        bookSpineTitle: 'Five Years of<br>Holy Resistance',
        description:
          'A theological research journal with pages showing holy water stain damage. Several sections discuss Church cultivation practices. Written in analytical script with careful safety notations. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/3 - Five Years of Holy Resistance.md',
      },
      {
        slug: 'maximum-holy-protection-flask',
        title: 'Maximum Holy Protection Flask',
        bookSpineTitle: 'Maximum Holy<br>Protection Flask',
        description:
          'An advanced research volume with comparative testing records. Pages show luminescent staining from concentrated holy preparations. Written in careful script with extensive safety protocols. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/4 - Maximum Holy Protection Flask.md',
      },
      {
        slug: 'blood-rose-critical-cases',
        title: 'Blood Rose for Critical Cases',
        bookSpineTitle: 'Blood Rose for<br>Critical Cases',
        description:
          'A medical research journal with extensive healing rate measurements. Pages show calculation tables comparing concentration effects. Written in analytical script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/5 - Blood Rose for Critical Cases.md',
      },
      {
        slug: 'rage-beyond-reason',
        title: 'Rage Beyond Reason',
        bookSpineTitle: 'Rage Beyond<br>Reason',
        description:
          'A research journal with comparative notes between formulations. Pages show careful testing records and margin calculations. Written in analytical script with excited annotations. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/6 - Rage Beyond Reason.md',
      },
      {
        slug: 'witchs-enhanced-power',
        title: "Witch's Enhanced Power",
        bookSpineTitle: "Witch's Enhanced<br>Power",
        description:
          'A research journal with extensive spell power measurements and calculation tables. Pages show testing records with different ingredient ratios. Written in excited script with theoretical notes. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Advanced Preparations/7 - Witch's Enhanced Power.md",
      },
      {
        slug: 'wranglers-mounted-speed-solution',
        title: "Wrangler's Mounted Speed Solution",
        bookSpineTitle: "Wrangler's Mounted<br>Speed Solution",
        description:
          'A cavalry manual with horsehair caught between pages. Several sections show trail dust and weather damage. Written in practical script with mounted combat notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: "lib/books/Advanced Preparations/8 - Wrangler's Mounted Speed Solution.md",
      },
    ],
  },
  {
    series: 'Blood Essence Mastery',
    description:
      'Elite blood essence formulations by Malcolm Maxworthy and Theresa Proudmoore. Documents advanced elixir preparation techniques using Greater Blood Essence to hold opposed plant properties in stable suspension.',
    books: [
      {
        slug: 'blood-essence-introduction',
        title: 'Introduction to Blood Essence Mastery',
        bookSpineTitle: 'Introduction to<br>Blood Essence Mastery',
        description:
          'An elite reference volume with collaborative research notes between Malcolm and Theresa. Pages show advanced blood essence suspension theory. Written in mixed formal and casual script. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/0 - Introduction to Blood Essence Mastery.md',
      },
      {
        slug: 'beasts-health-foundation',
        title: "Beast's Health Foundation",
        bookSpineTitle: "Beast's Health<br>Foundation",
        description:
          'A collaborative research journal showing blood essence health enhancement theory. Pages contain testing methodology with creature blood applications. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/1 - Beast's Health Foundation.md",
      },
      {
        slug: 'crows-weapon-leech',
        title: "Crow's Weapon Leech",
        bookSpineTitle: "Crow's Weapon<br>Leech",
        description:
          "A collaborative research journal showing Theresa Proudmoore's notes on blood essence suspension techniques. Pages contain vampire combat testing records. Written in mixed formal and casual script. Common tongue. Good condition.",
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/2 - Crow's Weapon Leech.md",
      },
      {
        slug: 'bats-spell-leech',
        title: "Bat's Spell Leech",
        bookSpineTitle: "Bat's Spell<br>Leech",
        description:
          'A magical research volume with spell testing records. Pages show blood essence suspension diagrams. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/3 - Bat's Spell Leech.md",
      },
      {
        slug: 'werewolfs-pure-aggression',
        title: "Werewolf's Pure Aggression",
        bookSpineTitle: "Werewolf's Pure<br>Aggression",
        description:
          'A combat research journal with speed measurement tables. Pages show attack timing analysis. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/4 - Werewolf's Pure Aggression.md",
      },
      {
        slug: 'prowlers-stealth-advantage',
        title: "Prowler's Stealth Advantage",
        bookSpineTitle: "Prowler's Stealth<br>Advantage",
        description:
          'A mobility research journal with movement pattern diagrams. Pages show stealth testing records. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/5 - Prowler's Stealth Advantage.md",
      },
      {
        slug: 'ravens-physical-precision',
        title: "Raven's Physical Precision",
        bookSpineTitle: "Raven's Physical<br>Precision",
        description:
          'A precision combat manual with critical strike analysis tables. Pages show damage variance calculations. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/6 - Raven's Physical Precision.md",
      },
      {
        slug: 'twisted-spell-mastery',
        title: 'Twisted Spell Mastery',
        bookSpineTitle: 'Twisted Spell<br>Mastery',
        description:
          'A magical precision research volume with spell critical analysis. Pages show magical variance calculations and corruption pattern studies. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/7 - Twisted Spell Mastery.md',
      },
      {
        slug: 'blasphemous-ultimate-power',
        title: 'Blasphemous Ultimate Power',
        bookSpineTitle: 'Blasphemous<br>Ultimate Power',
        description:
          'An advanced combat research volume with ultimate ability analysis. Pages show power output measurements. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/8 - Blasphemous Ultimate Power.md',
      },
      {
        slug: 'aristocratic-blood-merlot',
        title: 'Aristocratic Blood Merlot',
        bookSpineTitle: 'Aristocratic<br>Blood Merlot',
        description:
          'An expensive journal bound in burgundy leather with gilt edges. Pages are pristine except for wine stains on several entries. Written in careful script with tasting notes in margins. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/9 - Aristocratic Blood Merlot.md',
      },
      {
        slug: 'irradiant-gruel-warning',
        title: 'Irradiant Gruel Warning',
        bookSpineTitle: 'Irradiant Gruel<br>Warning',
        description:
          'An experimental research journal with extensive warning labels. Pages show mutation observation records and ethical debate notes. Written in conflicted script with moral considerations. Common tongue. Good condition with prominent hazard markings.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/10 - Irradiant Gruel Warning.md',
      },
    ],
  },
];
