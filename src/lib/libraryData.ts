export const libraryData: {
  series: string;
  description: string;
  color: string;
  books: { slug: string; title: string; bookSpineTitle: string; description: string; category: string; path: string; isAvailable: boolean }[];
}[] = [
  {
    series: 'Sanguine Theory',
    description:
      'Theoretical framework for blood magic by Ellie Tarsvesh, First Head of Arcana Studies, with vampiric expertise from Severin, Academy Consultant. Covers blood magic principles, combat applications, and ritual techniques.',
    color: 'bloodRed',
    books: [
      {
        slug: 'foundations-blood-magic',
        title: 'Foundations of Blood Magic',
        bookSpineTitle: 'Foundations of<br>Blood Magic',
        description:
          'A scholarly treatise bound in deep red leather with silver clasps. Pages are meticulously organized with theoretical diagrams and cross-references. Written in sharp, demanding academic script with consultation notes from vampiric practitioner. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Sanguine Theory/1 - Foundations of Blood Magic.md',
        isAvailable: true,
      },
      {
        slug: 'blood-magic-combat',
        title: 'Blood Magic in Combat',
        bookSpineTitle: 'Blood Magic<br>in Combat',
        description:
          'A tactical analysis bound in blood-red cloth. Pages contain combat theory with practical observations from vampiric warfare. Written in sharp academic script with strategic annotations. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Sanguine Theory/2 - Blood Magic in Combat.md',
        isAvailable: true,
      },
      {
        slug: 'ritual-ceremonial-applications',
        title: 'Ritual and Ceremonial Applications',
        bookSpineTitle: 'Ritual and<br>Ceremonial Applications',
        description:
          'A ceremonial reference bound in crimson leather. Pages detail ritual blood magic theory and healing applications. Written in sharp academic script with consultation notes. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Sanguine Theory/3 - Ritual and Ceremonial Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Chaos Theory',
    description:
      'Theoretical framework and practical applications of chaos magic by Ellie Tarsvesh, First Head of Arcana Studies. Covers Void foundation, Chaos Fire mechanics, combat applications, and ritual techniques for controlled unmaking.',
    color: 'chaosPurple',
    books: [
      {
        slug: 'foundations-chaos-magic',
        title: 'Foundations of Chaos Magic',
        bookSpineTitle: 'Foundations of<br>Chaos Magic',
        description:
          'A scholarly treatise bound in deep purple leather with amethyst clasps. Pages are organized with theoretical diagrams and warnings about the Void. Written in sharp, demanding academic script. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Chaos Theory/1 - Foundations of Chaos Magic.md',
        isAvailable: true,
      },
      {
        slug: 'combat-applications-chaos-magic',
        title: 'Combat Applications of Chaos Magic',
        bookSpineTitle: 'Combat Applications<br>of Chaos Magic',
        description:
          'A tactical analysis bound in violet cloth with scorch marks along the spine. Pages contain combat theory with practical observations on overwhelming force. Written in sharp academic script with aggressive tactical notes. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Chaos Theory/2 - Combat Applications of Chaos Magic.md',
        isAvailable: true,
      },
      {
        slug: 'rituals-advanced-applications',
        title: 'Rituals and Advanced Applications',
        bookSpineTitle: 'Rituals and<br>Advanced Applications',
        description:
          'A cautionary reference bound in dark purple leather with amethyst insets. Pages detail ritual chaos theory and conceptual destruction warnings. Written in sharp academic script with prominent safety notices. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Chaos Theory/3 - Rituals and Advanced Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Frost Theory',
    description:
      'Theoretical framework and practical applications of frost magic as energy removal/subtraction by Ellie Tarsvesh, First Head of Arcana Studies, with structural frameworks by Asmodeus Azmadel. Covers energy removal theory, sapphire mechanics, defensive architecture, and structural expertise development.',
    color: 'frostCyan',
    books: [
      {
        slug: 'foundations-frost-magic',
        title: 'Foundations of Frost Magic',
        bookSpineTitle: 'Foundations of<br>Frost Magic',
        description:
          'A scholarly treatise bound in pale blue leather with sapphire clasps. Pages are meticulously organized with energy removal diagrams and structural analysis charts. Written in sharp, demanding academic script with structural annotations by Director Asmodeus. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Frost Theory/1 - Foundations of Frost Magic.md',
        isAvailable: true,
      },
      {
        slug: 'combat-applications-frost-magic',
        title: 'Combat Applications',
        bookSpineTitle: 'Combat<br>Applications',
        description:
          'A tactical analysis bound in ice-blue cloth with frost patterns along the spine. Pages contain combat theory with defensive rhythm analysis and energy management charts. Written in sharp academic script with strategic positioning notes. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Frost Theory/2 - Combat Applications.md',
        isAvailable: true,
      },
      {
        slug: 'advanced-structures-applications',
        title: 'Advanced Structures and Applications',
        bookSpineTitle: 'Advanced Structures<br>and Applications',
        description:
          'An advanced reference bound in pale blue leather with sapphire insets. Pages detail protective frost architecture, environmental energy harvesting, and complex formation techniques. Written in sharp academic script with structural integration notes by Director Asmodeus. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Frost Theory/3 - Advanced Structures and Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Frozen Veins',
    description:
      'A legendary tome chronicling Velgrath, the crystalline frost entity, and those who sought its power. Documents the ancient pact, betrayal, and eternal winter that followed. Collected and recorded over two centuries by Valrik.',
    color: 'frostCyan',
    books: [
      {
        slug: 'frozen-veins-velgrath',
        title: 'The Frozen Veins of Velgrath',
        bookSpineTitle: 'The Frozen<br>Veins of Velgrath',
        description:
          'This tome is bound in weathered brown leather, its corners reinforced with metal fittings adorned with sapphire gems. Intricate carved patterns swirl across the cover, converging on a crystalline snowflake that radiates pale blue light. Metal clasps and a sturdy lock secure the volume, which pulses with subtle, cold radiance.',
        category: 'arcana',
        path: 'lib/books/Frozen Veins/The Frozen Veins of Velgrath.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Storm Theory',
    description:
      'Theoretical framework and practical applications of storm magic by Ellie Tarsvesh, First Head of Arcana Studies. Covers energy flow theory, physical enhancement, combat applications, and ritual techniques for purest magical energy.',
    color: 'stormYellow',
    books: [
      {
        slug: 'foundations-storm-magic',
        title: 'Foundations of Storm Magic',
        bookSpineTitle: 'Foundations of<br>Storm Magic',
        description:
          'A scholarly treatise bound in golden-yellow leather with topaz clasps. Pages are meticulously organized with theoretical diagrams and flow analysis charts. Written in sharp, demanding academic script. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Storm Theory/1 - Foundations of Storm Magic.md',
        isAvailable: true,
      },
      {
        slug: 'combat-applications-storm-magic',
        title: 'Combat Applications of Storm Magic',
        bookSpineTitle: 'Combat Applications<br>of Storm Magic',
        description:
          'A tactical analysis bound in electric-blue cloth with scorch marks along the spine. Pages contain combat theory with tactical flow diagrams and energy optimization charts. Written in sharp academic script with aggressive positioning notes. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Storm Theory/2 - Combat Applications of Storm Magic.md',
        isAvailable: true,
      },
      {
        slug: 'rituals-advanced-applications-storm-magic',
        title: 'Rituals and Advanced Applications',
        bookSpineTitle: 'Rituals and<br>Advanced Applications',
        description:
          'An analytical reference bound in golden-yellow leather with topaz insets. Pages detail injection sensing techniques, magical construct analysis, and collaborative ritual frameworks. Written in sharp academic script with Transcendum comparative notes. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Storm Theory/3 - Rituals and Advanced Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Illusion Theory',
    description:
      'Theoretical framework for illusion magic by Ellie Tarsvesh, First Head of Arcana Studies, with practical expertise from Phaelon Canterburlh, Academy Consultant. Covers illusion manifestations, combat applications, conceptual effects, and advanced ritual techniques.',
    color: 'illusionTeal',
    books: [
      {
        slug: 'illusion-foundations',
        title: 'Foundations of Illusion Magic',
        bookSpineTitle: 'Foundations of<br>Illusion Magic',
        description:
          'Bound in teal leather with geometric pattern tooling. Pages contain illusion theory diagrams and consultation notes. Written in sharp academic script with astrological references. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Illusion Theory/1 - Foundations of Illusion Magic.md',
        isAvailable: false,
      },
      {
        slug: 'illusion-combat',
        title: 'Combat Applications of Illusion Magic',
        bookSpineTitle: 'Combat Applications<br>of Illusion Magic',
        description:
          'Bound in teal leather with combat motif stamped on spine. Pages describe rapid manifestation techniques and construct combat applications. Script precise with practical combat focus. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Illusion Theory/2 - Combat Applications of Illusion Magic.md',
        isAvailable: true,
      },
      {
        slug: 'illusion-rituals',
        title: 'Rituals and Advanced Applications',
        bookSpineTitle: 'Rituals and<br>Advanced Applications',
        description:
          'Bound in teal leather with ritualistic symbol patterns embossed on cover. Cover conceptual manifestations, curse theory, and binding effects. Comprehensive scholarly treatment. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Illusion Theory/3 - Rituals and Advanced Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Light and Shadow Theory',
    description:
      "Theoretical examination of external magical schools by Ellie Tarsvesh, First Head of Arcana Studies. Covers Holy magic from Luminance, Shadow magic from Dracula's Shadow Realm incursion, and fundamental differences between external and internal magical sources.",
    color: 'lightShadowGray',
    books: [
      {
        slug: 'light-shadow-origins',
        title: 'Origins and the War',
        bookSpineTitle: 'Origins and<br>the War',
        description:
          "Bound in gray leather with light and shadow embossing. Pages examine external origins of Holy and Shadow magic and Dracula's war with the Shadow Realm. Written in analytical script. Excellent condition.",
        category: 'arcana',
        path: 'lib/books/Light and Shadow Theory/1 - Origins and the War.md',
        isAvailable: true,
      },
      {
        slug: 'light-shadow-holy',
        title: 'Holy Magic and the Path of Light',
        bookSpineTitle: 'Holy Magic and<br>the Path of Light',
        description:
          'Bound in light gold leather with holy symbol stamping. Cover Holy magic theory with consultation from practicing faithful. Script precise with faith-based terminology. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Light and Shadow Theory/2 - Holy Magic and the Path of Light.md',
        isAvailable: false,
      },
      {
        slug: 'light-shadow-shadow',
        title: 'Shadow Magic and the Shadow Realm',
        bookSpineTitle: 'Shadow Magic and<br>the Shadow Realm',
        description:
          'Bound in dark gray leather with shadow patterns stamped on spine. Pages document Shadow magic through war accounts and Draculin observations. Less certain due to lack of practitioner consultation. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Light and Shadow Theory/3 - Shadow Magic and the Shadow Realm.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Unholy Theory',
    description:
      'Theoretical framework for unholy magic by Ellie Tarsvesh, First Head of Arcana Studies, with practical expertise from Mordecai Burns, Academy Consultant. Covers will-saturation theory, skeleton animation combat applications, fragment interrogation, and ethical boundaries of mind manipulation.',
    color: 'unholyGreen',
    books: [
      {
        slug: 'foundations-unholy-magic',
        title: 'Foundations of Unholy Magic',
        bookSpineTitle: 'Foundations of<br>Unholy Magic',
        description:
          'A scholarly treatise bound in deep green leather with emerald clasps. Pages contain theoretical diagrams on will-saturation and emerald affinity mechanics. Written in sharp academic script with enthusiastic consultation notes from practitioner. Common tongue. Excellent condition.',
        category: 'arcana',
        path: 'lib/books/Unholy Theory/1 - Foundations of Unholy Magic.md',
        isAvailable: false,
      },
      {
        slug: 'combat-applications-unholy',
        title: 'Combat Applications',
        bookSpineTitle: 'Combat<br>Applications',
        description:
          'A tactical analysis bound in sickly green cloth with faint bone dust traces. Pages contain combat theory with skeleton animation mechanics and phantom summoning constraints. Written in sharp academic script with pragmatic tactical notes. Common tongue. Good condition.',
        category: 'arcana',
        path: 'lib/books/Unholy Theory/2 - Combat Applications.md',
        isAvailable: true,
      },
      {
        slug: 'advanced-applications-unholy',
        title: 'Advanced Applications',
        bookSpineTitle: 'Advanced<br>Applications',
        description:
          'An advanced reference bound in dark green leather with jade inlays. Pages detail mental fragment theory, contest of wills mechanics, and ethical boundaries. Written in sharp academic script with extensive consultation on living mind binding failures. Common tongue. Excellent condition but sealed.',
        category: 'arcana',
        path: 'lib/books/Unholy Theory/3 - Advanced Applications.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Flora Vardorana',
    description:
      "Systematic documentation of Vardoran's magically-significant plant species by First Head of Botanical Studies Verena Stillswater, with later medical and alchemical applications documented by Martin Ehrlich.",
    color: 'botanicalGreen',
    books: [
      {
        slug: 'flora-vardorana-introduction',
        title: 'Introduction to Flora Vardorana',
        bookSpineTitle: 'Introduction to<br>Flora Vardorana',
        description:
          'A pristine volume bound in green cloth with gold lettering. The pages are clean and well-organized, showing careful editing and revision. Written in precise script with clear section divisions. Common tongue. Excellent condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/0 - Introduction to Flora Vardorana.md',
        isAvailable: true,
      },
      {
        slug: 'fire-blossom',
        title: 'Fire Blossom',
        bookSpineTitle: 'Fire Blossom',
        description:
          'A field guide with singed edges on several pages, as if exposed to heat. The binding shows wear from outdoor use, and several pressed specimens are carefully attached with metal clips. Written in steady script with flame motifs decorating section headers. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/1 - Fire Blossom.md',
        isAvailable: true,
      },
      {
        slug: 'snow-flower',
        title: 'Snow Flower',
        bookSpineTitle: 'Snow Flower',
        description:
          'A field guide with pressed flower samples attached to several pages. The binding is reinforced with cord, and the pages show signs of moisture damage from outdoor use. Written in neat script with botanical sketches in the margins. Common tongue. Good condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/2 - Snow Flower.md',
        isAvailable: true,
      },
      {
        slug: 'blood-rose',
        title: 'Blood Rose',
        bookSpineTitle: 'Blood Rose',
        description:
          'A slim volume bound in worn leather, its pages showing water stains and dog-eared corners from frequent field use. The text is written in a precise hand with occasional margin notes and corrections. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/3 - Blood Rose.md',
        isAvailable: false,
      },
      {
        slug: 'sunflower',
        title: 'Sunflower',
        bookSpineTitle: 'Sunflower',
        description:
          'A farm journal with pressed flower specimens and sketches of cultivation plots. The binding shows soil stains and weather damage. Written in neat script with agricultural notes. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/4 - Sunflower.md',
        isAvailable: true,
      },
      {
        slug: 'hells-clarion',
        title: "Hell's Clarion",
        bookSpineTitle: "Hell's Clarion",
        description:
          'A worn field guide with cave dust embedded in the pages and mushroom spore prints pressed between leaves. The binding is water-stained and reinforced with cord. Written in hurried script with rough sketches of underground fungi. Common tongue. Poor condition.',
        category: 'botanical',
        path: "lib/books/Flora Vardorana/5 - Hell's Clarion.md",
        isAvailable: true,
      },
      {
        slug: 'mourning-lily',
        title: 'Mourning Lily',
        bookSpineTitle: 'Mourning Lily',
        description:
          'A small notebook bound in dark cloth, pages stained with soil and marked with pressed flower samples. The binding is reinforced with thread, showing frequent field use. Written in careful script with sketches of cemetery layouts in margins. Common tongue. Well-worn condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/6 - Mourning Lily.md',
        isAvailable: false,
      },
      {
        slug: 'trippy-shroom',
        title: 'Trippy Shroom',
        bookSpineTitle: 'Trippy Shroom',
        description:
          'A small field notebook with pages showing purple staining and slightly warped text in sections. The binding is loose and several pages appear to have been removed. Written in unsteady script with cautionary notes in margins. Common tongue. Poor condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/7 - Trippy Shroom.md',
        isAvailable: false,
      },
      {
        slug: 'ghost-shroom',
        title: 'Ghost Shroom',
        bookSpineTitle: 'Ghost Shroom',
        description:
          'A small journal with translucent pages that seem to shimmer in certain light. The binding is wrapped in cloth that appears to shift color. Written in faint script that occasionally requires tilting to read. Common tongue. Fair condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/8 - Ghost Shroom.md',
        isAvailable: false,
      },
      {
        slug: 'sacred-grapes',
        title: 'Sacred Grapes',
        bookSpineTitle: 'Sacred Grapes',
        description:
          'A vineyard journal with wine-stained pages and dried grape leaves pressed between sections. The binding shows signs of careful maintenance. Written in flowing script with cultivation notes. Common tongue. Good condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/9 - Sacred Grapes.md',
        isAvailable: true,
      },
      {
        slug: 'bleeding-heart',
        title: 'Bleeding Heart',
        bookSpineTitle: 'Bleeding Heart',
        description:
          'A field journal with frost-damaged pages and dried plant specimens attached with dark red thread. The leather binding shows wear from harsh conditions. Written in precise script with anatomical sketches of flower structures. Common tongue. Poor condition due to cold exposure.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/10 - Bleeding Heart.md',
        isAvailable: false,
      },
      {
        slug: 'plague-brier',
        title: 'Plague Brier',
        bookSpineTitle: 'Plague Brier',
        description:
          'A field guide with pages showing chemical stains and discoloration. The binding is treated with protective coating. Several pressed specimens are sealed behind glass. Written in careful script with notes on handling precautions. Common tongue. Fair condition considering exposure.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/11 - Plague Brier.md',
        isAvailable: false,
      },
      {
        slug: 'corrupted-flower',
        title: 'Corrupted Flower',
        bookSpineTitle: 'Corrupted Flower',
        description:
          'Field documentation with pages stained by purple residue. Binding reinforced with wire. Contains pressed specimens sealed in treated paper. Technical notation throughout. Common tongue. Working condition.',
        category: 'botanical',
        path: 'lib/books/Flora Vardorana/12 - Corrupted Flower.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Field Alchemy',
    description:
      'Basic waterskin-based alchemical formulations for field use by Malcolm Maxworthy, First Head of Chemical Studies. Covers resistance preparations, combat enhancement, and healing using minimal equipment.',
    color: 'alchemicalOrange',
    books: [
      {
        slug: 'field-alchemy-introduction',
        title: 'Introduction to Field Alchemy',
        bookSpineTitle: 'Introduction to<br>Field Alchemy',
        description:
          'An introductory manual showing signs of frequent use. Pages contain margin notes with equipment recommendations and common mistake warnings. Written in enthusiastic script with occasional frustrated corrections. Common tongue. Fair condition from heavy reference.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/0 - Introduction to Field Alchemy.md',
        isAvailable: true,
      },
      {
        slug: 'thirty-attempts-fire-resistance',
        title: 'Thirty Attempts at Fire Resistance',
        bookSpineTitle: 'Thirty Attempts at<br>Fire Resistance',
        description:
          'A workshop manual with singed edges and oil stains throughout. Several pages show burn marks where experiments went awry. Written in enthusiastic script with margin notes about "brilliant failures" and "minor explosions." Common tongue. Poor condition but still legible.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/1 - Thirty Attempts at Fire Resistance.md',
        isAvailable: true,
      },
      {
        slug: 'verenas-simple-silver-solution',
        title: "Verena's Simple Silver Solution",
        bookSpineTitle: "Verena's Simple<br>Silver Solution",
        description:
          'A water-stained notebook with crystallized residue on several pages. The binding shows silver discoloration from repeated exposure. Written in hurried script with excited margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: "lib/books/Field Alchemy/2 - Verena's Simple Silver Solution.md",
        isAvailable: false,
      },
      {
        slug: 'garlic-resistance-rat-ethics',
        title: 'Garlic Resistance and Rat Ethics',
        bookSpineTitle: 'Garlic Resistance<br>and Rat Ethics',
        description:
          'A field guide with peculiar smell embedded in pages. Some sections show staining from garlic exposure tests. Written in matter-of-fact script with frustrated margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/3 - Garlic Resistance and Rat Ethics.md',
        isAvailable: true,
      },
      {
        slug: 'emergency-sun-protection',
        title: 'Emergency Sun Protection',
        bookSpineTitle: 'Emergency Sun<br>Protection',
        description:
          'A worn journal with pages showing sun damage and fading. Several entries are barely legible. Written in careful script with urgent margin notes about vampire safety. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/4 - Emergency Sun Protection.md',
        isAvailable: false,
      },
      {
        slug: 'blood-rose-field-medicine',
        title: 'Blood Rose Field Medicine',
        bookSpineTitle: 'Blood Rose<br>Field Medicine',
        description:
          'A medical reference guide with blood stains throughout. Pages show field testing records from combat situations. Written in practical script with emergency use notes. Common tongue. Poor condition but legible.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/5 - Blood Rose Field Medicine.md',
        isAvailable: true,
      },
      {
        slug: 'ferocity-monster-hunters',
        title: 'Ferocity from the Monster Hunters',
        bookSpineTitle: 'Ferocity from the<br>Monster Hunters',
        description:
          'A field manual with leather cover reinforced with silver studs. Pages show wear from outdoor use and monster blood stains. Written in practical block letters with hunting notes in margins. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/6 - Ferocity from the Monster Hunters.md',
        isAvailable: false,
      },
      {
        slug: 'enchanted-enhancement-basics',
        title: 'Enchanted Enhancement Basics',
        bookSpineTitle: 'Enchanted<br>Enhancement Basics',
        description:
          'A field manual matching the Brew of Ferocity volume, also from Ashen Keep. Silver-studded leather cover with frost damage on several pages. Written in same practical block letters. Common tongue. Poor condition.',
        category: 'alchemical',
        path: 'lib/books/Field Alchemy/7 - Enchanted Enhancement Basics.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'Advanced Preparations',
    description:
      'Glass bottle formulations requiring advanced technique by Malcolm Maxworthy, First Head of Chemical Studies. Covers enhanced resistance, healing, combat, and specialized applications.',
    color: 'alchemicalOrange',
    books: [
      {
        slug: 'advanced-preparations-introduction',
        title: 'Introduction to Advanced Preparations',
        bookSpineTitle: 'Introduction to<br>Advanced Preparations',
        description:
          'An intermediate reference guide showing careful use. Pages contain detailed technique notes and concentration calculations. Written in confident script with fewer corrections than Field Alchemy series. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/0 - Introduction to Advanced Preparations.md',
        isAvailable: true,
      },
      {
        slug: 'silver-resistance-tripled',
        title: 'Silver Resistance, Tripled',
        bookSpineTitle: 'Silver Resistance,<br>Tripled',
        description:
          'A research journal with detailed silver exposure testing records. Pages show silver tarnish stains from experiments. Written in methodical script with safety warnings. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/1 - Silver Resistance, Tripled.md',
        isAvailable: false,
      },
      {
        slug: 'concentrated-garlic-aggression',
        title: 'Concentrated Garlic Aggression',
        bookSpineTitle: 'Concentrated<br>Garlic Aggression',
        description:
          'A practical manual with persistent garlic smell embedded in pages. Some sections show testing records with behavioral observations. Written in resigned script with frustrated margin notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/2 - Concentrated Garlic Aggression.md',
        isAvailable: true,
      },
      {
        slug: 'five-years-holy-resistance',
        title: 'Five Years of Holy Resistance',
        bookSpineTitle: 'Five Years of<br>Holy Resistance',
        description:
          'A theological research journal with pages showing holy water stain damage. Several sections discuss Church cultivation practices. Written in analytical script with careful safety notations. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/3 - Five Years of Holy Resistance.md',
        isAvailable: false,
      },
      {
        slug: 'maximum-holy-protection-flask',
        title: 'Maximum Holy Protection Flask',
        bookSpineTitle: 'Maximum Holy<br>Protection Flask',
        description:
          'An advanced research volume with comparative testing records. Pages show luminescent staining from concentrated holy preparations. Written in careful script with extensive safety protocols. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/4 - Maximum Holy Protection Flask.md',
        isAvailable: false,
      },
      {
        slug: 'blood-rose-critical-cases',
        title: 'Blood Rose for Critical Cases',
        bookSpineTitle: 'Blood Rose for<br>Critical Cases',
        description:
          'A medical research journal with extensive healing rate measurements. Pages show calculation tables comparing concentration effects. Written in analytical script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/5 - Blood Rose for Critical Cases.md',
        isAvailable: true,
      },
      {
        slug: 'rage-beyond-reason',
        title: 'Rage Beyond Reason',
        bookSpineTitle: 'Rage Beyond<br>Reason',
        description:
          'A research journal with comparative notes between formulations. Pages show careful testing records and margin calculations. Written in analytical script with excited annotations. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Advanced Preparations/6 - Rage Beyond Reason.md',
        isAvailable: true,
      },
      {
        slug: 'witchs-enhanced-power',
        title: "Witch's Enhanced Power",
        bookSpineTitle: "Witch's Enhanced<br>Power",
        description:
          'A research journal with extensive spell power measurements and calculation tables. Pages show testing records with different ingredient ratios. Written in excited script with theoretical notes. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Advanced Preparations/7 - Witch's Enhanced Power.md",
        isAvailable: false,
      },
      {
        slug: 'wranglers-mounted-speed-solution',
        title: "Wrangler's Mounted Speed Solution",
        bookSpineTitle: "Wrangler's Mounted<br>Speed Solution",
        description:
          'A cavalry manual with horsehair caught between pages. Several sections show trail dust and weather damage. Written in practical script with mounted combat notes. Common tongue. Fair condition.',
        category: 'alchemical',
        path: "lib/books/Advanced Preparations/8 - Wrangler's Mounted Speed Solution.md",
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Blood Essence Mastery',
    description:
      'Elite blood essence formulations by Malcolm Maxworthy and Theresa Proudmoore. Documents advanced elixir preparation techniques using Greater Blood Essence to hold opposed plant properties in stable suspension.',
    color: 'alchemicalOrange',
    books: [
      {
        slug: 'blood-essence-introduction',
        title: 'Introduction to Blood Essence Mastery',
        bookSpineTitle: 'Introduction to<br>Blood Essence Mastery',
        description:
          'An elite reference volume with collaborative research notes between Malcolm and Theresa. Pages show advanced blood essence suspension theory. Written in mixed formal and casual script. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/0 - Introduction to Blood Essence Mastery.md',
        isAvailable: true,
      },
      {
        slug: 'beasts-health-foundation',
        title: "Beast's Health Foundation",
        bookSpineTitle: "Beast's Health<br>Foundation",
        description:
          'A collaborative research journal showing blood essence health enhancement theory. Pages contain testing methodology with creature blood applications. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/1 - Beast's Health Foundation.md",
        isAvailable: true,
      },
      {
        slug: 'crows-weapon-leech',
        title: "Crow's Weapon Leech",
        bookSpineTitle: "Crow's Weapon<br>Leech",
        description:
          "A collaborative research journal showing Theresa Proudmoore's notes on blood essence suspension techniques. Pages contain vampire combat testing records. Written in mixed formal and casual script. Common tongue. Good condition.",
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/2 - Crow's Weapon Leech.md",
        isAvailable: false,
      },
      {
        slug: 'bats-spell-leech',
        title: "Bat's Spell Leech",
        bookSpineTitle: "Bat's Spell<br>Leech",
        description:
          'A magical research volume with spell testing records. Pages show blood essence suspension diagrams. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/3 - Bat's Spell Leech.md",
        isAvailable: true,
      },
      {
        slug: 'werewolfs-pure-aggression',
        title: "Werewolf's Pure Aggression",
        bookSpineTitle: "Werewolf's Pure<br>Aggression",
        description:
          'A combat research journal with speed measurement tables. Pages show attack timing analysis. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/4 - Werewolf's Pure Aggression.md",
        isAvailable: true,
      },
      {
        slug: 'prowlers-stealth-advantage',
        title: "Prowler's Stealth Advantage",
        bookSpineTitle: "Prowler's Stealth<br>Advantage",
        description:
          'A mobility research journal with movement pattern diagrams. Pages show stealth testing records. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/5 - Prowler's Stealth Advantage.md",
        isAvailable: false,
      },
      {
        slug: 'ravens-physical-precision',
        title: "Raven's Physical Precision",
        bookSpineTitle: "Raven's Physical<br>Precision",
        description:
          'A precision combat manual with critical strike analysis tables. Pages show damage variance calculations. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: "lib/books/Blood Essence Mastery/6 - Raven's Physical Precision.md",
        isAvailable: false,
      },
      {
        slug: 'twisted-spell-mastery',
        title: 'Twisted Spell Mastery',
        bookSpineTitle: 'Twisted Spell<br>Mastery',
        description:
          'A magical precision research volume with spell critical analysis. Pages show magical variance calculations and corruption pattern studies. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/7 - Twisted Spell Mastery.md',
        isAvailable: true,
      },
      {
        slug: 'blasphemous-ultimate-power',
        title: 'Blasphemous Ultimate Power',
        bookSpineTitle: 'Blasphemous<br>Ultimate Power',
        description:
          'An advanced combat research volume with ultimate ability analysis. Pages show power output measurements. Written in mixed formal and casual script. Common tongue. Good condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/8 - Blasphemous Ultimate Power.md',
        isAvailable: true,
      },
      {
        slug: 'aristocratic-blood-merlot',
        title: 'Aristocratic Blood Merlot',
        bookSpineTitle: 'Aristocratic<br>Blood Merlot',
        description:
          'An expensive journal bound in burgundy leather with gilt edges. Pages are pristine except for wine stains on several entries. Written in careful script with tasting notes in margins. Common tongue. Excellent condition.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/9 - Aristocratic Blood Merlot.md',
        isAvailable: false,
      },
      {
        slug: 'irradiant-gruel-warning',
        title: 'Irradiant Gruel Warning',
        bookSpineTitle: 'Irradiant Gruel<br>Warning',
        description:
          'An experimental research journal with extensive warning labels. Pages show mutation observation records and ethical debate notes. Written in conflicted script with moral considerations. Common tongue. Good condition with prominent hazard markings.',
        category: 'alchemical',
        path: 'lib/books/Blood Essence Mastery/10 - Irradiant Gruel Warning.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Celestial Symbolica',
    description:
      "Phaelon Canterburlh's eccentric astrological symbol theory series. Presents pattern as fundamental reality structure, eight school symbols as magical correspondences, and invented celestial bodies governing each magical force. Volumes written over 564 years during isolation with progressively deteriorating coherence, appearing randomly without logical sequence.",
    color: 'astrologicalBlue',
    books: [
      {
        slug: 'theralen',
        title: 'Theralen',
        bookSpineTitle: 'Theralen',
        description:
          'Bound in golden leather with sunburst gold tooling. Pages show careful organization with margin calculations and orbital diagrams. Written in precise script with complete sentences and consistent notation. No corrections or deletions. Excellent condition.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/01-Theralen.md',
        isAvailable: false,
      },
      {
        slug: 'calyx',
        title: 'Calyx',
        bookSpineTitle: 'Calyx',
        description:
          'Bound in silver leather with crescent moon inlay. Pages contain systematic measurements with eight-phase lunar diagram included in final pages. Written in precise script with occasional ink smudges from haste. Excellent condition.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/02-Calyx.md',
        isAvailable: false,
      },
      {
        slug: 'galvax',
        title: 'Galvax',
        bookSpineTitle: 'Galvax',
        description:
          'Bound in dark blue leather with lightning-bolt patterns stamped in silver. Pages contain electrical pulse recordings and moon feeding cycle charts. Written in coherent script with increasing margin notes on Academy chart errors. Good condition.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/04-Galvax.md',
        isAvailable: true,
      },
      {
        slug: 'veloxis',
        title: 'Veloxis',
        bookSpineTitle: 'Veloxis',
        description:
          'Bound in shifting-color leather that appears different under varying light. Pages contain 47 position diagrams with occasional gaps where author wandered to related topics. Script becomes less precise toward middle sections. Good condition.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/06-Veloxis.md',
        isAvailable: false,
      },
      {
        slug: 'weighted-one',
        title: 'The Weighted One',
        bookSpineTitle: 'The Weighted One',
        description:
          'Bound in heavy dark leather with dark matter ring patterns in spine. Pages contain gravitational measurement tables with pattern calculations filling margins. Script precise but increasingly focused on geometry over practical application. Good condition.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/08-The Weighted One.md',
        isAvailable: false,
      },
      {
        slug: 'rhydon',
        title: 'Rhydon',
        bookSpineTitle: 'Rhydon',
        description:
          'Bound in red crystalline-textured leather with salt crystal inlays. Pages contain brine chemistry notes interspersed with geometric lattice diagrams. Script becomes fragmented as geometry calculations interrupt explanations. Fair condition with saline staining on later pages.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/13-Rhydon.md',
        isAvailable: true,
      },
      {
        slug: 'xylos',
        title: 'Xylos',
        bookSpineTitle: 'Xylos',
        description:
          'Bound in purple-black leather with volcano scorch marks along spine. Pages contain spiral breakdown diagrams with strikethrough corrections showing thought process derailments. Script becomes erratic around cycle counting sections. Fair condition with ash residue on several pages.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/15-Xylos.md',
        isAvailable: false,
      },
      {
        slug: 'introduction-to-celestial-symbolica',
        title: 'Introduction to Celestial Symbolica',
        bookSpineTitle: 'Introduction to<br>Celestial Symbolica',
        description:
          'Bound in midnight-blue leather with silver celestial inlays. Pages flow wildly between topics with frequent strikethrough corrections and abandoned thoughts. Stream-of-consciousness narrative with sections interrupted mid-sentence. Good condition with numerous ink corrections and energy diagrams.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/19-Introduction to Celestial Symbolica.md',
        isAvailable: false,
      },
      {
        slug: 'vaylra',
        title: 'Vaylra',
        bookSpineTitle: 'Vaylra',
        description:
          'Bound in frosted blue leather that crackles when opened. Pages contain energy removal calculations with extensive strikethrough deletions and abandoned thought fragments. Script barely legible in many sections showing mental deterioration. Poor condition with frost damage and ink fading.',
        category: 'astrological',
        path: 'lib/books/Astrological/Celestial Symbolica/21-Vaylra.md',
        isAvailable: false,
      },
    ],
  },
  {
    series: 'History of the Gilded Compass',
    description:
      "Comprehensive history of the Gilded Compass faction from founding through return to Vardoran. Covers 733 years of organizational development, regional expansion, ideological conflicts, and participation in magical restoration. Written by Ismet Drantiel throughout the author's scholarly career, with volumes reflecting varying degrees of use and age despite Academy restoration efforts.",
    color: 'info',
    books: [
      {
        slug: 'gilded-compass-founding',
        title: 'The Founding',
        bookSpineTitle: 'The Founding',
        description:
          'Bound in brown leather with compass rose tooling. Pages contain early formation charts enhanced with preservation treatments. Written in precise formal script. Excellent condition with restoration reinforcement visible on spine.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/1 - The Founding.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-lost-expedition',
        title: 'The Lost Expedition',
        bookSpineTitle: 'The Lost<br>Expedition',
        description:
          'Bound in brown leather with navigation wheel embossing. Pages document expedition routes with stable ink despite age. Formal script remains clear and legible. Excellent condition with reinforced binding corners.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/2 - The Lost Expedition.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-crown-of-light',
        title: 'Beneath the Crown of Light',
        bookSpineTitle: 'Beneath the<br>Crown of Light',
        description:
          'Bound in brown leather with light-and-shadow geometric stamped patterns. Pages analyze Luminance doctrine with minimal foxing. Consistent formal script. Excellent condition.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/3 - Beneath the Crown of Light.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-fractured-faith',
        title: 'The Fractured Faith',
        bookSpineTitle: 'The Fractured<br>Faith',
        description:
          'Bound in brown leather with flame motifs tooled along spine. Pages show evidence of scholarly use but remain intact. Script steady throughout. Very good condition with minor preservation touch-ups.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/4 - The Fractured Faith.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-limits-of-expansion',
        title: 'The Limits of Expansion',
        bookSpineTitle: 'The Limits of<br>Expansion',
        description:
          'Bound in brown leather with embossed territorial boundary patterns. Pages display expanded geographic analysis with clean margins. Formal script maintained. Very good condition.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/5 - The Limits of Expansion.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-harbor',
        title: "Mont Marie's Harbor",
        bookSpineTitle: "Mont Marie's<br>Harbor",
        description:
          'Bound in brown leather with wave patterns stamped in lighter leather tone. Pages analyze maritime operations with age-appropriate character. Script precise and professional. Very good condition.',
        category: 'history',
        path: "lib/books/History of the Gilded Compass/6 - Mont Marie's Harbor.md",
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-iron-empire',
        title: 'Within the Iron Empire',
        bookSpineTitle: 'Within the<br>Iron Empire',
        description:
          'Bound in brown leather with iron scrollwork inlays. Pages examine imperial structure through clear narrative. Slight age-related softening in later pages but fully legible. Good condition with stabilizing repairs.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/7 - Within the Iron Empire.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-conquered-republic',
        title: 'The Conquered Republic',
        bookSpineTitle: 'The Conquered<br>Republic',
        description:
          'Bound in brown leather with fracture pattern stamped on spine. Pages document Veltraxis trauma with coherent structure. Formal narrative quality maintained. Good condition showing moderate use.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/8 - The Conquered Republic.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-dominion-rejection',
        title: "The Dominion's Rejection",
        bookSpineTitle: "The Dominion's<br>Rejection",
        description:
          "Bound in brown leather with refusal symbolism stamped on cover. Pages cover Nexarca interactions with consistent analysis. Script shows author's age but remains clear. Good condition.",
        category: 'history',
        path: "lib/books/History of the Gilded Compass/9 - The Dominion's Rejection.md",
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-desert-divide',
        title: 'The Desert Divide',
        bookSpineTitle: 'The Desert<br>Divide',
        description:
          "Bound in brown leather with sand-textured spine panels. Pages analyze Sahraan's Twilight Court with thorough detail. Formal narrative reveals elderly author's perspective. Good condition with light external wear.",
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/10 - The Desert Divide.md',
        isAvailable: true,
      },
      {
        slug: 'gilded-compass-breaking-cycle',
        title: 'Breaking the Cycle',
        bookSpineTitle: 'Breaking the<br>Cycle',
        description:
          'Bound in brown leather with waygate hub tooling on cover. Pages document Vardoran return and faction alliances. Final volume appears fresher than early volumes with careful preservation. Excellent condition.',
        category: 'history',
        path: 'lib/books/History of the Gilded Compass/11 - Breaking the Cycle.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Ehrlich Medical Protocols',
    description:
      'Clinical treatment protocols and standardized procedures by Martin Ehrlich, Academy Director (AMR 0-present). Documents comprehensive medical protocols covering therapeutic applications, surgical interventions, anesthesia, poison neutralization, and specialized treatments for vampiric medical practice.',
    color: 'medicalBlue',
    books: [
      {
        slug: 'thermal-equilibrium-serum',
        title: 'Protocol 04: Thermal Equilibrium Serum',
        bookSpineTitle: 'Protocol 04:<br>Thermal Equilibrium Serum',
        description:
          'Bound in worn black leather with temperature damage along the spine. Pages show chemical stains and thermal exposure patterns from repeated testing. Contains redacted treatment protocol for temperature regulation applications. Written in precise clinical script with experimental procedure notes. Common tongue. Fair condition with evidence of controlled laboratory use.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 04 - Thermal Equilibrium Serum (Redacted).md',
        isAvailable: true,
      },
      {
        slug: 'emery-bloodrose-suspension',
        title: 'Protocol 07: Emery/Bloodrose Suspension',
        bookSpineTitle: 'Protocol 07:<br>Emery/Bloodrose Suspension',
        description:
          'Bound in dark leather with red powder staining along the spine. Pages contain chemical reaction documentation and venom sap neutralization procedures. Written in precise clinical script with safety protocol emphasis and treatment efficacy notes. Common tongue. Good condition with minor corrosive residue on exterior.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 07 - Emery-Bloodrose Suspension.md',
        isAvailable: true,
      },
      {
        slug: 'coldpress-clotting-compound',
        title: 'Protocol 08: Coldpress Clotting Compound',
        bookSpineTitle: 'Protocol 08: Coldpress<br>Clotting Compound',
        description:
          'Bound in dark leather with treated fiber samples attached. Pages document hemostasis stabilization formulation using cotton matrix and vasoconstrictive agents. Written in precise clinical script with surgical application diagrams. Common tongue. Excellent condition.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 08 - Clotting Compound.md',
        isAvailable: true,
      },
      {
        slug: 'controlled-vampiric-blood-application',
        title: 'Protocol 09: Controlled Vampiric Blood Application',
        bookSpineTitle: 'Protocol 09: Controlled<br>Vampiric Blood Application',
        description:
          'Bound in dark leather with silver-threaded cord closure. Pages document regenerative blood therapy with conversion risk management protocols. Written in precise clinical script with careful dosage calculations and monitoring requirements. Common tongue. Excellent condition with silver protective coating.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 09 - Vampiric Blood Application.md',
        isAvailable: true,
      },
      {
        slug: 'trifold-anesthetic-draught',
        title: 'Protocol 10: Trifold Anesthetic Draught',
        bookSpineTitle: 'Protocol 10:<br>Trifold Anesthetic Draught',
        description:
          'Bound in dark leather with herbal staining on pages. Documents multi-component anesthesia formulation for induced unconsciousness. Written in precise clinical script with dosage calculations and safety warning emphasis. Common tongue. Good condition with margin notes from clinical use.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 10 - Anesthetic Draught.md',
        isAvailable: true,
      },
      {
        slug: 'emery-saturation-cycle',
        title: 'Protocol 11: Emery Saturation Cycle',
        bookSpineTitle: 'Protocol 11:<br>Emery Saturation Cycle',
        description:
          'Bound in dark leather with significant chemical discoloration. Pages document systemic venom sap purge protocol requiring multiple saturation cycles. Written in precise clinical script with detailed treatment timeline and patient monitoring requirements. Common tongue. Fair condition from corrosive compound exposure.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 11 - Emery Saturation.md',
        isAvailable: true,
      },
      {
        slug: 'fractured-bone-repair',
        title: 'Protocol 12: Fractured Bone Repair',
        bookSpineTitle: 'Protocol 12:<br>Fractured Bone Repair',
        description:
          'Bound in dark leather with skeletal diagrams. Comprehensive skeletal trauma treatment protocol covering blood enhancement therapy, stabilization procedures, and recovery monitoring. Written in precise clinical script with anatomical illustrations and rehabilitation timelines. Common tongue. Excellent condition.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 12 - Fractured Bone Repair.md',
        isAvailable: true,
      },
      {
        slug: 'clinical-blood-applications',
        title: 'Protocol 13: Clinical Blood Applications',
        bookSpineTitle: 'Protocol 13:<br>Clinical Blood Applications',
        description:
          'Bound in durable black leather with red title. Pages show frequent use with margin annotations in precise script. Contains systematic analysis of nine blood types and 72 combination therapies. Written in Clinical Martin Ehrlich voice with precise categorization and data-focused documentation. Common tongue. Excellent condition.',
        category: 'medical',
        path: 'lib/books/Medical/Ehrlich Medical Protocols/Protocol 13 - Clinical Blood Applications.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Medical Record',
    description:
      'Clinical research notes and pathological analyses by Martin Ehrlich, Academy Director (AMR 0-present). Documents specialized disease research, outbreak records, and medical case studies for vampiric medical knowledge.',
    color: 'medicalRed',
    books: [
      {
        slug: 'red-death-pathogen-analysis',
        title: 'Record 54: The Red Death',
        bookSpineTitle: 'Record 54:<br>The Red Death',
        description:
          'Bound in black leather with containment warning symbols stamped on cover. Pages document vampiric hematologic pathogen with three-stage progression analysis, historical plague records, and terminal illness management protocols. Written in precise clinical script with safety protocol emphasis and quarantine requirements. Common tongue. Good condition with biohazard marking on spine.',
        category: 'medical',
        path: 'lib/books/Medical/Record 54 - The Red Death.md',
        isAvailable: true,
      },
      {
        slug: 'goreshroom-disease-analysis',
        title: 'Record 55: Goreshroom Disease',
        bookSpineTitle: 'Record 55:<br>Goreshroom Disease',
        description:
          'Bound in black leather with fungal spore patterns visible in leather grain. Documents mycotic vampiric infection with nociceptive dysfunction analysis, cognitive effects, and antifungal treatment protocols. Written in precise clinical script with fungal growth diagrams and treatment efficacy notes. Common tongue. Fair condition with minor fungal residue.',
        category: 'medical',
        path: 'lib/books/Medical/Record 55 - Goreshroom Disease.md',
        isAvailable: true,
      },
    ],
  },
  {
    series: 'Old World Tales',
    description:
      'Folklore collection compiled by Helena Grimward in AD 58, preserving stories from common folk across the regions surrounding Vardoran. Tales told around fires, whispered in taverns, and sung by wandering bards—preserving the beliefs, fears, and hopes of ordinary people before they fade from living memory. Organized by region with original storyteller voices preserved.',
    color: 'folkloreGreen',
    books: [
      {
        slug: 'old-world-tales-introduction',
        title: 'Old World Tales: Introduction',
        bookSpineTitle: 'Old World Tales:<br>Introduction',
        description:
          "A collector's journal bound in worn leather with travel wear. Pages Helena Grimward's methodological notes on gathering folklore and reflections on cultural preservation. Written in thoughtful academic script with occasional field annotations. Common tongue. Good condition.",
        category: 'folklore',
        path: 'lib/books/Old World Tales/0 - Old World Tales Introduction.md',
        isAvailable: true,
      },
      {
        slug: 'old-world-tales-vol-1',
        title: 'Old World Tales: Volume 1',
        bookSpineTitle: 'Old World Tales:<br>Volume 1',
        description:
          "A collection journal bound in forest-green leather with faded story motifs on spine. Contains four tales of supernatural encounters and consequences beyond death. Written in oral storytelling style with Helena's preservation notes in margins. Common tongue. Good condition.",
        category: 'folklore',
        path: 'lib/books/Old World Tales/1 - Old World Tales Volume 1.md',
        isAvailable: false,
      },
      {
        slug: 'old-world-tales-vol-2',
        title: 'Old World Tales: Volume 2',
        bookSpineTitle: 'Old World Tales:<br>Volume 2',
        description:
          'A collection journal bound in moss-green leather. Contains four tales exploring devotion, invention, longing, and hidden costs of gifts. Written in varied oral styles with regional dialects noted. Some pages soiled from tavern use. Common tongue. Fair condition.',
        category: 'folklore',
        path: 'lib/books/Old World Tales/2 - Old World Tales Volume 2.md',
        isAvailable: true,
      },
      {
        slug: 'old-world-tales-vol-3',
        title: 'Old World Tales: Volume 3',
        bookSpineTitle: 'Old World Tales:<br>Volume 3',
        description:
          'A copy of a book in deep green leather. Contains four tales of identity, memory, and origins. Lyrical oral style. Common tongue. Poor condition - someone wrote notes in margins in an odd script.',
        category: 'folklore',
        path: 'lib/books/Old World Tales/3 - Old World Tales Volume 3.md',
        isAvailable: false,
      },
      {
        slug: 'old-world-tales-vol-4',
        title: 'Old World Tales: Volume 4',
        bookSpineTitle: 'Old World Tales:<br>Volume 4',
        description:
          'A collection journal bound in emerald-green leather with worn edges. Contains cautionary tales, warnings, and reflections on voices from darkness. Includes "Three Warnings for Children" section. Written in varied oral styles from multiple regions. Common tongue. Fair condition with extensive use.',
        category: 'folklore',
        path: 'lib/books/Old World Tales/4 - Old World Tales Volume 4.md',
        isAvailable: true,
      },
    ],
  },
];
