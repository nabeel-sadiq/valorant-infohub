
<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-base-200 py-5 px-10 flex justify-between items-center">
	<a href="/" class="text-2xl font-bold"><span class="text-red-600">Valorant</span>DB</a>
	<div>
		<a href="/weapons" class="btn btn-link">Weapons</a>
		<a href="/skins" class="btn btn-link">Skins</a>
	</div>
</nav>
{@render children()}
