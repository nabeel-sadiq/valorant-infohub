<script>
  let { data } = $props();

  import Card from "$lib/components/Card.svelte";
</script>

{#if data.error}
  <h1>Error, Sorry.</h1>
{:else}
  <div class="flex flex-wrap justify-center gap-6 p-4">
    {#each data.skins as skin}
      <Card title={skin.displayName} image={skin.displayIcon} />
    {/each}
  </div>
{/if}
