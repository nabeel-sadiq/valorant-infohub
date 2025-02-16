<script>
  /** @type {{ data: import('./$types').LayoutData, children: import('svelte').Snippet }} */
  let { data, children } = $props();
</script>

<nav class="bg-base-200 py-5 px-10 flex justify-between items-center">
  <button>Odin</button>
  <button>Vandal</button>
  <button>Phantom</button>
  <button>Classic</button>
  <button>Spectre</button>
  <button>Judge</button>
  <button>Bulldog</button>
  <button>Ares</button>
  <button>Guardian</button>
  <button>Stinger</button>
</nav>
{@render children()}
