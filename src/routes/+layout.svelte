
<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-base-200 py-5 px-10 flex md:flex-row flex-col gap-3 justify-between items-center">
	<a href="/" class="text-2xl font-bold"><span class="text-red-600">Valorant</span>DB</a>
	<div>
		<a href="/" class="btn hover:btn-warning text-xl">Agents</a>
		<a href="/weapons" class="btn hover:btn-warning text-xl">Weapons</a>
		<a href="/skins" class="btn hover:btn-warning text-xl">Skins</a>
	</div>
</nav>
{@render children()}
