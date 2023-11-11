<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar background="transparent">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">ERC5725</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<!-- <a class="btn btn-sm variant-ghost-surface" href="/" target="_blank" rel="noreferrer">
					Home
				</a> -->
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://eips.ethereum.org/assets/eip-5725/"
					target="_blank"
					rel="noreferrer"
				>
					EIP Specification
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/ERC-5725"
					target="_blank"
					rel="noreferrer"
				>
					ERC Organisation
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
