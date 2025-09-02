<script lang="ts">
	// Function to randomly select a quote from an array
	function getRandomQuote(quotes) {
		return quotes[Math.floor(Math.random() * quotes.length)];
	}

	// Board Members (Academy Director and Department Heads)
	const boardMembers = [
		{
			name: 'Zrott',
			role: 'Academy Director',
			quotes: ["Don't be stupid.", 'All life has value.', 'Indeed.']
		},
		{
			name: 'Voltraxis',
			role: 'Head of Security',
			quotes: [
				'Aaren is emergency food.',
				'Do you have your hall pass?',
				'Please drop your bag for inspection.',
				'Hail Dracula, the true Immortal King.',
				'I miss the Legion, things were simplier.',
				'I will bring peace, justice and security to my new checkpoint.',
				'Run.',
				'Incompetence breeds dissidence.',
				'The pen is sharper than the sword but my fists still hurt all the same.',
				'I find tyranny is often the lesser evil compared to chaos.',
				'You lack discipline.'
			]
		},
		{
			name: 'Kalnir',
			role: 'Head of Creature Studies',
			quotes: ['Rrhah rhah rawr rha rhrah.', 'Ghruff... ghruff.', 'Awwooooooooo.']
		}
	];

	// Faculty (Staff who work there)
	const faculty = [
		{
			name: 'Remy',
			role: 'Assistant Librarian',
			quotes: [
				'In silence, the greatest truths are discovered.',
				'Books are the memory of the world.',
				'Shhh... knowledge requires quiet.',
				'The library holds more than books.'
			]
		}
	];

	// Professors
	const professors = [
		// Add professors here
	];

	// Members
	const members = [
		// Add members here
	];
</script>

<div class="academy-bg">
	<!-- Side decorations -->
	<div class="side-decoration left-side"></div>
	<div class="side-decoration right-side"></div>

	<div class="academy-header">
		<div class="title-container">
			<div class="title-decoration left"></div>
			<h1 class="academy-title">The Academy</h1>
			<div class="title-decoration right"></div>
		</div>
		<p class="academy-motto">Knowledge Through Unity, Wisdom Through Practice</p>
	</div>

	<div class="academy-content">
		<section class="section">
			<h2 class="section-title"></h2>
			<div class="rules-grid">
				<div class="rules-column">
					<h3>Conduct & Safety</h3>
					<ul>
						<li>
							Move deliberately and purposefully - rushed movement disrupts research activities
						</li>
						<li>Follow all posted directional signage and designated pathways</li>
						<li>Visitors must remain in authorized public areas only</li>
						<li>Maintain appropriate distance from ongoing experiments or demonstrations</li>
						<li>Report any accidental damage immediately to Academy personnel</li>
					</ul>

					<h3>Library Protocols</h3>
					<ul>
						<li>Only authorized personnel may speak within the library</li>
						<li>Handle all books and documents with utmost care</li>
						<li>Book checkout requires assistance from the ghostly librarians</li>
					</ul>
				</div>
				<div class="rules-column">
					<h3>Environmental Protection</h3>
					<ul>
						<li>
							Do not disturb, harm, or swat mosquitoes - they are essential to botanical ecosystem
							maintenance
						</li>
						<li>Avoid disturbing plant life, specimens, or environmental research areas</li>
						<li>Do not remove anything from Academy grounds without authorization</li>
					</ul>

					<h3>Authorization & Enforcement</h3>
					<ul>
						<li>Valid pass required for entry - unauthorized individuals may be removed</li>
						<li>Property damage will be assessed fines proportional to replacement costs</li>
						<li>
							Violations result in immediate removal; repeated violations result in permanent access
							revocation
						</li>
						<li>Academy personnel have final authority on all conduct matters</li>
					</ul>
				</div>
			</div>
		</section>

		<section class="section">
			<h2 class="section-title">Academy Personnel</h2>

			<!-- Board Members -->
			<div class="personnel-category">
				<h3 class="category-title">Board Members</h3>
				<div class="faculty-grid">
					{#each boardMembers as member (member.name)}
						<div class="faculty-card">
							<div class="faculty-name">{member.name}</div>
							<div class="faculty-role">{member.role}</div>
							<div class="faculty-quote">"{getRandomQuote(member.quotes)}"</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Faculty -->
			<div class="personnel-category">
				<h3 class="category-title">Faculty</h3>
				<div class="faculty-grid">
					{#each faculty as member (member.name)}
						<div class="faculty-card">
							<div class="faculty-name">{member.name}</div>
							<div class="faculty-role">{member.role}</div>
							<div class="faculty-quote">"{getRandomQuote(member.quotes)}"</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Professors -->
			{#if professors.length > 0}
				<div class="personnel-category">
					<h3 class="category-title">Professors</h3>
					<div class="faculty-grid">
						{#each professors as member (member.name)}
							<div class="faculty-card">
								<div class="faculty-name">{member.name}</div>
								<div class="faculty-role">{member.role}</div>
								<div class="faculty-quote">"{getRandomQuote(member.quotes)}"</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}

			<!-- Members -->
			{#if members.length > 0}
				<div class="personnel-category">
					<h3 class="category-title">Members</h3>
					<div class="faculty-grid">
						{#each members as member (member.name)}
							<div class="faculty-card">
								<div class="faculty-name">{member.name}</div>
								<div class="faculty-role">{member.role}</div>
								<div class="faculty-quote">"{getRandomQuote(member.quotes)}"</div>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</section>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;500&display=swap');

	:global(html) {
		font-family: 'Source Sans Pro', system-ui, sans-serif;
		background: #1a1a1a;
		color: #e8e8e8;
		line-height: 1.6;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: #1a1a1a;
	}

	.academy-bg {
		min-height: 100vh;
		background: #1a1a1a;
		background-image:
			repeating-linear-gradient(
				45deg,
				transparent 0px,
				transparent 98px,
				rgba(255, 255, 255, 0.008) 99px,
				rgba(255, 255, 255, 0.008) 100px,
				transparent 101px,
				transparent 199px
			),
			repeating-linear-gradient(
				-45deg,
				transparent 0px,
				transparent 148px,
				rgba(200, 200, 200, 0.005) 149px,
				rgba(200, 200, 200, 0.005) 150px,
				transparent 151px,
				transparent 299px
			);
		position: relative;
	}

	/* Side decorations */
	.side-decoration {
		position: absolute;
		width: 80px;
		height: 100%;
		pointer-events: none;
		z-index: 1;
		top: 0;
	}

	.side-decoration.left-side {
		left: 0;
		border-right: 1px solid rgba(200, 200, 200, 0.3);
	}

	.side-decoration.left-side::before {
		content: '';
		position: absolute;
		top: 0;
		left: 20px;
		width: 1px;
		height: 100%;
		background: rgba(170, 170, 170, 0.4);
	}

	.side-decoration.left-side::after {
		content: '';
		position: absolute;
		top: 0;
		left: 40px;
		width: 1px;
		height: 100%;
		background: rgba(150, 150, 150, 0.3);
	}

	.side-decoration.right-side {
		right: 0;
		border-left: 1px solid rgba(200, 200, 200, 0.3);
	}

	.side-decoration.right-side::before {
		content: '';
		position: absolute;
		top: 0;
		right: 20px;
		width: 1px;
		height: 100%;
		background: rgba(170, 170, 170, 0.4);
	}

	.side-decoration.right-side::after {
		content: '';
		position: absolute;
		top: 0;
		right: 40px;
		width: 1px;
		height: 100%;
		background: rgba(150, 150, 150, 0.3);
	}

	/* Additional geometric patterns for sides */
	.side-decoration.left-side {
		background-image: 
			/* Vertical accent lines */
			linear-gradient(to bottom, rgba(140, 140, 140, 0.25) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(130, 130, 130, 0.2) 1px, transparent 1px),
			/* Diagonal patterns */
				repeating-linear-gradient(
					45deg,
					transparent 0px,
					transparent 15px,
					rgba(120, 120, 120, 0.15) 16px,
					rgba(120, 120, 120, 0.15) 17px,
					transparent 18px,
					transparent 33px
				),
			repeating-linear-gradient(
				-45deg,
				transparent 0px,
				transparent 25px,
				rgba(110, 110, 110, 0.1) 26px,
				rgba(110, 110, 110, 0.1) 27px,
				transparent 28px,
				transparent 53px
			);
		background-position:
			60px 0,
			10px 0,
			0 0,
			0 0;
		background-size:
			1px 50px,
			1px 30px,
			80px 80px,
			80px 80px;
	}

	.side-decoration.right-side {
		background-image: 
			/* Vertical accent lines */
			linear-gradient(to bottom, rgba(140, 140, 140, 0.25) 1px, transparent 1px),
			linear-gradient(to bottom, rgba(130, 130, 130, 0.2) 1px, transparent 1px),
			/* Diagonal patterns */
				repeating-linear-gradient(
					135deg,
					transparent 0px,
					transparent 15px,
					rgba(120, 120, 120, 0.15) 16px,
					rgba(120, 120, 120, 0.15) 17px,
					transparent 18px,
					transparent 33px
				),
			repeating-linear-gradient(
				45deg,
				transparent 0px,
				transparent 25px,
				rgba(110, 110, 110, 0.1) 26px,
				rgba(110, 110, 110, 0.1) 27px,
				transparent 28px,
				transparent 53px
			);
		background-position:
			calc(100% - 60px) 0,
			calc(100% - 10px) 0,
			0 0,
			0 0;
		background-size:
			1px 50px,
			1px 30px,
			80px 80px,
			80px 80px;
	}

	.academy-header {
		text-align: center;
		padding: 3rem 2rem 1.5rem;
		position: relative;
		z-index: 1;
	}

	.title-container {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 2rem;
		margin-bottom: 0;
	}

	/* Title decorative shapes */
	.title-decoration {
		width: 60px;
		height: 60px;
		position: relative;
		flex-shrink: 0;
	}

	.title-decoration.left::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 30px;
		height: 30px;
		border: 1px solid rgba(200, 200, 200, 0.6);
		border-top: 2px solid rgba(220, 220, 220, 0.7);
		border-left: 2px solid rgba(220, 220, 220, 0.7);
	}

	.title-decoration.left::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 18px;
		height: 18px;
		border: 1px solid rgba(170, 170, 170, 0.5);
		border-radius: 50%;
	}

	.title-decoration.right::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(45deg);
		width: 30px;
		height: 30px;
		border: 1px solid rgba(200, 200, 200, 0.6);
		border-top: 2px solid rgba(220, 220, 220, 0.7);
		border-left: 2px solid rgba(220, 220, 220, 0.7);
	}

	.title-decoration.right::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 18px;
		height: 18px;
		border: 1px solid rgba(170, 170, 170, 0.5);
		border-radius: 50%;
	}

	/* Additional complex geometric elements for title decorations */
	.title-decoration.left {
		background-image: 
			/* Cross frame */
			linear-gradient(90deg, rgba(160, 160, 160, 0.4) 1px, transparent 1px),
			linear-gradient(0deg, rgba(160, 160, 160, 0.4) 1px, transparent 1px),
			/* Diagonal patterns */
				linear-gradient(
					45deg,
					transparent 40%,
					rgba(140, 140, 140, 0.3) 49%,
					rgba(140, 140, 140, 0.3) 51%,
					transparent 60%
				),
			linear-gradient(
				-45deg,
				transparent 40%,
				rgba(130, 130, 130, 0.25) 49%,
				rgba(130, 130, 130, 0.25) 51%,
				transparent 60%
			),
			/* Corner dots */
				radial-gradient(circle at 12px 12px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 48px 12px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 12px 48px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 48px 48px, rgba(150, 150, 150, 0.5) 1px, transparent 2px);
		background-size:
			60px 1px,
			1px 60px,
			15px 15px,
			15px 15px,
			60px 60px,
			60px 60px,
			60px 60px,
			60px 60px;
		background-position:
			0 30px,
			30px 0,
			10px 10px,
			35px 35px,
			0 0,
			0 0,
			0 0,
			0 0;
		background-repeat: no-repeat;
	}

	.title-decoration.right {
		background-image: 
			/* Cross frame */
			linear-gradient(90deg, rgba(160, 160, 160, 0.4) 1px, transparent 1px),
			linear-gradient(0deg, rgba(160, 160, 160, 0.4) 1px, transparent 1px),
			/* Diagonal patterns - identical to left */
				linear-gradient(
					45deg,
					transparent 40%,
					rgba(140, 140, 140, 0.3) 49%,
					rgba(140, 140, 140, 0.3) 51%,
					transparent 60%
				),
			linear-gradient(
				-45deg,
				transparent 40%,
				rgba(130, 130, 130, 0.25) 49%,
				rgba(130, 130, 130, 0.25) 51%,
				transparent 60%
			),
			/* Corner dots */
				radial-gradient(circle at 12px 12px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 48px 12px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 12px 48px, rgba(150, 150, 150, 0.5) 1px, transparent 2px),
			radial-gradient(circle at 48px 48px, rgba(150, 150, 150, 0.5) 1px, transparent 2px);
		background-size:
			60px 1px,
			1px 60px,
			15px 15px,
			15px 15px,
			60px 60px,
			60px 60px,
			60px 60px,
			60px 60px;
		background-position:
			0 30px,
			30px 0,
			10px 10px,
			35px 35px,
			0 0,
			0 0,
			0 0,
			0 0;
		background-repeat: no-repeat;
	}

	.academy-title {
		font-family: 'Cinzel', serif;
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 600;
		color: #ffffff;
		margin: 0;
		letter-spacing: 0.05em;
		position: relative;
	}

	.academy-motto {
		font-family: 'Source Sans Pro', sans-serif;
		font-size: 1.1rem;
		font-weight: 300;
		color: rgba(200, 200, 200, 0.8);
		margin: 0.5rem 0 0 0;
		letter-spacing: 0.03em;
		font-style: italic;
		position: relative;
	}

	.academy-motto::after {
		content: '';
		position: absolute;
		bottom: -1rem;
		left: 50%;
		transform: translateX(-50%);
		width: 200px;
		height: 2px;
		background: linear-gradient(
			90deg,
			transparent 0%,
			rgba(160, 160, 160, 0.3) 20%,
			rgba(180, 180, 180, 0.6) 50%,
			rgba(160, 160, 160, 0.3) 80%,
			transparent 100%
		);
	}

	.academy-content {
		max-width: 1100px;
		margin: 0 auto;
		padding: 0 2rem 4rem;
		position: relative;
		z-index: 1;
	}

	.section {
		margin-bottom: 4rem;
	}

	.section-title {
		font-family: 'Cinzel', serif;
		font-size: 1.8rem;
		font-weight: 500;
		color: #ffffff;
		margin-bottom: 2.5rem;
		text-align: center;
		position: relative;
		letter-spacing: 0.03em;
	}

	.personnel-category {
		margin-bottom: 3rem;
	}

	.category-title {
		font-family: 'Cinzel', serif;
		font-size: 1.3rem;
		font-weight: 500;
		color: #cccccc;
		margin-bottom: 1.5rem;
		text-align: center;
		letter-spacing: 0.02em;
		position: relative;
	}

	.category-title::after {
		content: '';
		position: absolute;
		bottom: -0.5rem;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 1px;
		background: rgba(160, 160, 160, 0.4);
	}

	.faculty-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 2rem;
		margin-top: 1.5rem;
	}

	.faculty-card {
		border: 1px solid rgba(255, 255, 255, 0.2);
		padding: 1.2rem 1.5rem;
		text-align: center;
		position: relative;
		background: rgba(20, 20, 20, 0.8);
		transition: all 0.3s ease;
	}

	.faculty-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid transparent;
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(200, 200, 200, 0.03))
			border-box;
		mask:
			linear-gradient(#fff 0 0) padding-box,
			linear-gradient(#fff 0 0);
		mask-composite: xor;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.faculty-card:hover::before {
		opacity: 1;
	}

	.faculty-card:hover {
		transform: translateY(-2px);
		border-color: rgba(255, 255, 255, 0.4);
	}

	.faculty-name {
		font-family: 'Cinzel', serif;
		font-size: 1.3rem;
		font-weight: 500;
		color: #ffffff;
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
	}

	.faculty-role {
		font-size: 0.9rem;
		color: rgba(200, 200, 200, 0.7);
		font-weight: 300;
		letter-spacing: 0.5px;
		margin-bottom: 0.8rem;
	}

	.faculty-quote {
		font-size: 0.85rem;
		color: rgba(180, 180, 180, 0.8);
		font-style: italic;
		line-height: 1.4;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding-top: 0.8rem;
		letter-spacing: 0.3px;
	}

	.rules-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		margin-top: 3rem;
	}

	@media (max-width: 768px) {
		.rules-grid {
			grid-template-columns: 1fr;
			gap: 3rem;
		}

		.faculty-grid {
			grid-template-columns: 1fr;
		}
	}

	.rules-column {
		border: 1px solid rgba(255, 255, 255, 0.15);
		padding: 2.5rem 1.5rem;
		background: rgba(30, 30, 30, 0.6);
		position: relative;
	}

	.rules-column::before {
		content: '';
		position: absolute;
		top: 10px;
		left: 10px;
		right: 10px;
		bottom: 10px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		pointer-events: none;
	}

	.rules-column h3 {
		font-family: 'Cinzel', serif;
		font-size: 1.2rem;
		font-weight: 500;
		color: #ffffff;
		margin: 0 0 1.5rem 0;
		text-align: center;
		position: relative;
		letter-spacing: 0.02em;
	}

	.rules-column h3::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 40px;
		height: 1px;
		background: #cccccc;
	}

	.rules-column ol,
	.rules-column ul {
		margin: 0;
		padding-left: 0.5rem;
		color: rgba(232, 232, 232, 0.9);
		list-style: none;
		counter-reset: rule-counter;
	}

	.rules-column li {
		margin-bottom: 1rem;
		line-height: 1.6;
		position: relative;
		padding-left: 1.8rem;
		counter-increment: rule-counter;
	}

	.rules-column li::before {
		content: counter(rule-counter, upper-roman) '.';
		position: absolute;
		left: 0;
		color: #cccccc;
		font-weight: 500;
	}

	.rules-column p {
		color: rgba(200, 200, 200, 0.8);
		line-height: 1.7;
		margin: 0;
		font-weight: 300;
	}
</style>
