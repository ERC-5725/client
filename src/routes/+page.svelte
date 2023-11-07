<script lang="ts">
	interface NewsArticle {
		title: string;
		date: string;
		newsOrg: string;
		imageUrl: string;
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
			imageUrl: 'path-to-article-image-1.jpg',
			readMoreUrl: '	https://thedefiant.io/a-beginners-guide-to-eip-5725-transferable-vesting-nfts',
			date: '14 April 2023'
		},
		{
			title: 'Understanding and Developing an ERC-5725 Contract',
			newsOrg: 'coinmarketcap.com - Understanding and Developing an ERC-5725 Contract',
			imageUrl: 'path-to-article-image-1.jpg',
			readMoreUrl: 'https://coinmarketcap.com/community/articles/643ccc4432eff137ebb47477/',
			date: '14 April 2023'
		},

		{
			title: 'A Beginner’s Guide to EIP-5725: Transferable Vesting NFTs',
			newsOrg: 'Understanding the fundamentals of ERC-5725 and its impact on the NFT landscape.',
			imageUrl: 'path-to-article-image-1.jpg',
			readMoreUrl:
				'ethereumworldnews.com - A Beginner’s Guide to EIP-5725: Transferable Vesting NFTs',
			date: '14 April 2023'
		}
	];

	export const authors: Author[] = [
		{
			name: '@ApeGurus',
			githubUrl: 'https://github.com/ApeGurus',
			twitterUrl: 'https://twitter.com/ApeGurus',
			imageUrl: 'path-to-author-image-1.jpg'
		}
	];
</script>

<div class="flex items-center justify-center h-screen bg-cover bg-center">
	<div class="text-center p-4 rounded-lg">
		<img src="5725.webp" class="w-64 mx-auto" alt="ERC-5725 Logo" />
		<h1 class="text-6xl font-bold mb-4">ERC-5725: Transferable Vesting NFT</h1>
		<p class="text-xl mb-8">Experience the new standard in token vesting and transferability.</p>
	</div>
</div>

<section class="variant-glass-surface py-12">
	<div class="container mx-auto px-6">
		<h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Why ERC-5725?</h2>
		<p class="text-gray-600 text-lg leading-relaxed mb-6">
			Solidity developers often develop unique vesting implementations for their projects. ERC-5725
			standardizes this process, ensuring interoperability and efficiency. Here's why it matters:
		</p>
		<ul class="list-disc space-y-2 pl-5 text-gray-700">
			<li>
				<strong>LP Lockers:</strong> Implement 100% cliff unlock systems for liquidity providers.
			</li>
			<li><strong>Team Payments:</strong> Automate milestone-based payments with precision.</li>
			<li><strong>Bond Vesting:</strong> Distribute tokens smoothly over time to bondholders.</li>
			<li>
				<strong>IDO/Presale Allocations:</strong> Enable gradual token unlocks for early investors.
			</li>
			<li>
				<strong>NFT DeFi Protocols:</strong> Expand ERC-5725's utility with innovative DeFi products.
			</li>
			<li>
				<strong>Client customizable:</strong> Pick a curve and add your own custom implementation around
				ERC5725.
			</li>
		</ul>
		<p class="text-gray-600 text-lg leading-relaxed mt-6">
			With ERC-5725, you get a well-defined interface that integrates seamlessly with both ERC-20
			and ERC-721 ecosystems.
		</p>
	</div>
</section>
<section class="py-12">
	<h2 class="text-3xl font-bold text-center text-gray-800 mb-8">News</h2>
	<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-12">
		{#each newsArticles as article}
			<div class="bg-white rounded-lg shadow overflow-hidden">
				<img src="/eip5725news.jpg" alt="Article Image" class="w-full h-56 object-cover" />
				<div class="p-4">
					<a href={article.readMoreUrl} class="font-semibold hover:underline">{article.title}</a>
					<p class="text-gray-600 text-sm">{article.newsOrg}</p>
				</div>
			</div>
		{/each}
	</div>
</section>
