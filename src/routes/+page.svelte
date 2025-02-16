<script>
  let { data } = $props();

  import AgentsCard from "$lib/components/AgentsCard.svelte";
  import Search from "$lib/components/Search.svelte";

  let searchQuery = $state("");
  let searchDiv = $state();
</script>

{#if data.error}
  <h1>{data.error}.</h1>
{:else}
  <div
    bind:this={searchDiv}
    class="py-12 px-12 flex flex-col gap-4 justify-center items-center"
  >
    <h1 class="text-3xl font-bold">Agents</h1>
    <!-- search -->
    <label class="input">
      <svg
        class="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
          ><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"
          ></path></g
        ></svg
      >
      <input
        bind:value={searchQuery}
        type="search"
        class="grow"
        placeholder="Search Agents"
      />
    </label>
  </div>
  <!-- skins -->
  <div class="flex flex-wrap justify-center gap-8 p-4">
    {#each data.agents as agent}
      {#if agent.isPlayableCharacter}
        <AgentsCard
          class={!agent.displayName
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
            ? "hidden"
            : ""}
          title={agent.displayName}
          description={agent.description}
          role={agent.role.displayName}
          image={agent.displayIcon}
        />
      {/if}
    {/each}
  </div>
{/if}
