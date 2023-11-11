<script lang="ts">
	import { onMount } from 'svelte';

	interface NewsArticle {
		title: string;
		date: string;
		newsOrg: string;
		readMoreUrl: string;
	}

	interface Author {
		name: string;
		githubUrl: string;
		twitterUrl: string;
		imageUrl: string;
	}

	// Create arrays of news articles and authors
	export const newsArticles: NewsArticle[] = [
		{
			title: "A Beginner's Guide to EIP-5725: Transferable Vesting NFTs",
			newsOrg: 'thedefiant.io - A Beginner’s Guide to EIP-5725: Transferable Vesting NFTs.',
			readMoreUrl: 'https://thedefiant.io/a-beginners-guide-to-eip-5725-transferable-vesting-nfts',
			date: '14 April 2023'
		},
		{
			title: 'Understanding and Developing an ERC-5725 Contract',
			newsOrg: 'coinmarketcap.com - Understanding and Developing an ERC-5725 Contract',
			readMoreUrl: 'https://coinmarketcap.com/community/articles/643ccc4432eff137ebb47477/',
			date: '14 April 2023'
		},

		{
			title: 'A Beginner’s Guide to EIP-5725: Transferable Vesting NFTs',
			newsOrg: 'Understanding the fundamentals of ERC-5725 and its impact on the NFT landscape.',
			readMoreUrl:
				'https://en.ethereumworldnews.com/a-beginners-guide-to-eip-5725-transferable-vesting-nfts/',
			date: '14 April 2023'
		}
	];

	export const authors: Author[] = [
		{
			name: 'Elliott Green',
			githubUrl: 'https://github.com/elliott-green',
			twitterUrl: 'https://twitter.com/cryptonines',
			imageUrl: 'https://pbs.twimg.com/profile_images/1701980675321061376/3WCVWpnY_400x400.jpg'
		},
		{
			name: 'ApeGurus',
			githubUrl: 'https://github.com/ApeGurus',
			twitterUrl: 'https://twitter.com/Ape_tastic',
			imageUrl: 'https://pbs.twimg.com/profile_images/1611162474010533893/1nlXxFjJ_400x400.jpg'
		},
		{
			name: 'DeFiFoFum',
			githubUrl: 'https://github.com/DeFiFoFum',
			twitterUrl: 'https://twitter.com/DeFiFoFum',
			imageUrl: 'https://pbs.twimg.com/profile_images/1720231912822722561/iv1RAlOL_400x400.jpg'
		},
		{
			name: 'Marco De Vries',
			githubUrl: 'https://github.com/ApeGurus',
			twitterUrl: 'https://twitter.com/marcoatpaladin',
			imageUrl: 'https://pbs.twimg.com/profile_images/1546099842014920705/Ty5uuGS1_400x400.jpg'
		},
		{
			name: 'Mario',
			githubUrl: 'https://github.com',
			twitterUrl: 'https://twitter.com/MarioAtPaladins',
			imageUrl: 'https://pbs.twimg.com/profile_images/1580202363234697220/xfF-yz68_400x400.jpg'
		}
	];

	// Observers to do an effect only when the div is visible
	// HomeHero has it's own transitions
	let leftSection;
	let leftAnimationClass = '';
	let rightSection;
	let rightAnimationClass = '';
	let newsSection;
	let newsAnimationClass = '';
	let ctaSection;
	let ctaAnimationClass = '';
	let authorSection;
	let authorAnimationClass = '';

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Apply the appropriate animation class

						if (entry.target === leftSection) {
							leftAnimationClass =
								'animate-fade-left animate-duration-[2345ms] animate-delay-[200ms]';
						} else if (entry.target === rightSection) {
							rightAnimationClass =
								'animate-fade-right animate-duration-[2345ms] animate-delay-[200ms]';
						} else if (entry.target === newsSection) {
							newsAnimationClass =
								'animate-fade-left animate-duration-[2345ms] animate-delay-[200ms]';
						} else if (entry.target === authorSection) {
							authorAnimationClass =
								'animate-fade-right animate-duration-[2345ms] animate-delay-[200ms]';
						}
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(leftSection);
		observer.observe(rightSection);
		observer.observe(newsSection);
		observer.observe(authorSection);
	});

	import { base } from '$app/paths';

</script>

<section>
	<div class="flex items-center justify-center lg:h-screen">
		<div class="grid grid-cols-1 md:grid-cols-3 text-center p-4 rounded-lg">
			<div class="col-span-1 animate-fade-left animate-duration-[2345ms]">
				<!-- <img src="{base + '/'}eth-diamond-rainbow.svg" class="w-64 mx-auto" alt="ETH Logo" /> -->
			</div>

			<div class="col-span-1 md:col-span-2 text-center justify-center">
				<h1 class="text-6xl font-bold mb-4 animate-fade-right animate-duration-[2345ms]">
					ERC5725: Transferable Vesting NFT
				</h1>
				<div
					class="flex gap-2 items-center justify-center mb-8 animate-fade-right animate-duration-[2345ms] animate-delay-[500ms]"
				>
					<p class="text-xl italic">"Tokens, but this time inside an NFT" - @CryptoNines</p>
					<img
						src="{authors[0].imageUrl}"
						alt={`Profile of ${authors[0].name}`}
						class="w-12 h-12 rounded-full"
					/>
				</div>

				<div class="grid grid-cols-1 lg:grid-cols-3 gap-10 my-20 mx-20">
					<div
						class="variant-glass-secondary shadow-lg rounded-lg p-8 tracking-widest text-center animate-fade-up animate-duration-[2345ms] animate-delay-[223ms]"
					>
						ERC5725 is a vesting NFT which inherits ERC721 NFT interface allowing liquid trading of
						vesting assets and ecosystem identification of an ERC721 NFT.
					</div>
					<div
						class="variant-glass-secondary shadow-lg rounded-lg p-8 tracking-widest text-center animate-fade-up animate-duration-[2345ms] animate-delay-[523ms]"
					>
						ERC5725 can vest any properly interfaced ERC20 token at mint-time allowing one contract
						to be multipurposed for different tokens.
					</div>
					<div
						class="variant-glass-secondary shadow-lg rounded-lg p-8 tracking-widest text-center animate-fade-up animate-duration-[2345ms] animate-delay-[823ms]"
					>
						ERC5725 provides a standardised interface for vesting tokens over time. A contract's
						concrete definition describes a particular vesting strategy.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section bind:this={leftSection} class="py-12 mx-10 md:mx-20 lg:mx-40 {leftAnimationClass}">
	<h2 class="text-2xl font-bold mb-6 text-center">A Guide to ERC-5725</h2>

	<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
		<!-- Step 1 -->
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">1: Curve Type</h3>
			<p>
				Choose from available ERC-5725 curve types. Currently, options include a linear release over
				two distinct dates or a single-date release for all tokens. Future enhancements will
				introduce diverse algebraic and exponential curve types.
			</p>
		</div>

		<!-- Step 2 -->
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">2: Mint NFT</h3>
			<p>
				Adhering to ERC-721 standards, only deployers and authorized minters can mint tokens. This
				process can be extended to other contracts for transparent 5725 token creation,
				incorporating specific curve data like dates, vested amounts, and recipients.
			</p>
		</div>

		<!-- Step 3 -->
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">3: Vest Tokens</h3>
			<p>
				During NFT creation, tokens are typically transferred to the ERC-5725 contract for secure
				escrow. This mechanism can be tailored, allowing earlier or later token transfers to suit
				your unique minting strategy.
			</p>
		</div>

		<!-- Step 4 -->
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">4: Claim Tokens</h3>
			<p>
				Token availability for claiming varies based on the selected curve type. Utilize the <code
					>claimablePayout(tokenId)</code
				>
				and <code>claim(tokenId)</code> functions to ascertain available amounts and initiate claims.
			</p>
		</div>
	</div>
</section>

<section bind:this={rightSection} class="py-12 mx-10 md:mx-20 lg:mx-40 {rightAnimationClass}">
	<h2 class="text-2xl font-bold mb-6 text-center">ERC-5725 Use Cases</h2>

	<div class="grid grid-cols-1 md:grid-cols-4 gap-6">
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">Bonds</h3>
			<p>
				ERC-5725 enables the issuance of tokenized securities with scheduled vesting. This aligns
				with various securities' need to configurabily and periodically distribute returns to
				holders. ERC-5725's flexibility allows for compliance with diverse regulatory standards,
				ensuring seamless integration into permissioned ecosystems.
			</p>
		</div>

		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">Token Lockers</h3>
			<p>
				As a versatile solution, ERC-5725 can act as a token locker, effectively scheduling the
				release of vested project tokens, such as LP tokens, on predetermined dates. This
				functionality adds a layer of security and predictability to token distributions.
			</p>
		</div>

		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">Presales / Initial Token Offering</h3>
			<p>
				ERC-5725 offers a robust interface for more nuanced vesting distribution curves. This
				feature is invaluable for projects seeking tailored token release schedules.
			</p>
		</div>

		<!-- NFT DeFi -->
		<div class="variant-glass-secondary shadow-lg rounded-lg p-4">
			<h3 class="text-lg font-semibold mb-2">NFT DeFi</h3>
			<p>
				ERC-5725 opens new frontiers in NFT-based DeFi projects by enabling unique vesting
				strategies. This innovation broadens the utility of ERC-5725, paving the way for novel DeFi
				products intertwined with the NFT ecosystem.
			</p>
		</div>
	</div>
</section>

<section bind:this={newsSection} class="py-12 mx-10 md:mx-20 lg:mx-40 {newsAnimationClass}">
	<h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Latest ERC-5725 News</h2>
	<div class="table-container flex items-center justify-center">
		<table class="table table-hover">
			<thead>
				<tr>
					<th>Title</th>
					<th>News Organization</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{#each newsArticles as article}
					<tr>
						<td><a href={article.readMoreUrl}> {article.title}</a></td>
						<td><a href={article.readMoreUrl}> {article.newsOrg}</a></td>
						<td><a href={article.readMoreUrl}> {article.date}</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<!-- CALL TO ACTION - GET PEOPLE TO MAKE CONCRETES AND WE WILL UPDATE THE GITHUB SPECIFICATION -->

<!-- PROJECT SECTION - PROJECTS THAT ARE USING OR SUPPORT 5725 -->

<section bind:this={authorSection} class="py-12 mx-10 md:mx-20 lg:mx-40 {authorAnimationClass}">
	<h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Authors</h2>
	<div class="flex items-center justify-center space-x-20">
		{#each authors as author}
			<div class="flex flex-col items-center">
				<img
					src={author.imageUrl}
					alt={`Profile of ${author.name}`}
					class="w-24 h-24 rounded-full"
				/>
				<a href={author.twitterUrl} target="_blank" class="text-sm text-blue-500 hover:underline">
					{author.name}
				</a>
				<a href={author.githubUrl} target="_blank" class="text-sm text-gray-500 hover:underline">
					GitHub
				</a>
			</div>
		{/each}
	</div>
</section>
