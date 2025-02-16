<script>
  let { data } = $props();

  import Card from "$lib/components/Card.svelte";
  let modal = $state();
  let searchQuery = $state("");
  let selectedWeapon = $state(null);
</script>

{#if data.error}
  <h1>{data.error}.</h1>
{:else}
  <div class="py-12 px-12 flex flex-col gap-4 justify-center items-center">
    <h1 class="text-3xl font-bold">Weapons</h1>
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
        placeholder="Search Weapons"
      />
    </label>
  </div>
  <div class="flex flex-wrap justify-center gap-6 p-4">
    {#each data.weapons as weapon}
      <div class="tooltip" data-tip="Click to see stats">
        <Card
          class={!weapon.displayName.toLowerCase().includes(searchQuery.toLowerCase())
            ? "hidden"
            : ""}
          onclick={() => {
            selectedWeapon = weapon;
            modal.showModal();
          }}
          title={weapon.displayName}
          image={weapon.displayIcon}
        />
      </div>
    {/each}

    <!-- dialog -->
    {#if selectedWeapon}
      <dialog bind:this={modal} class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-xl underline mt-2 mb-2">
            {selectedWeapon.displayName} Stats
          </h3>
          <p>
            <span class="text-red-400">Fire Rate:</span>
            {selectedWeapon.weaponStats.fireRate}
          </p>
          <p>
            <span class="text-red-400">Magazine Size:</span>
            {selectedWeapon.weaponStats.magazineSize}
          </p>
          <p>
            <span class="text-red-400">Run Speed Multiplier:</span>
            {selectedWeapon.weaponStats.runSpeedMultiplier}
          </p>
          <p>
            <span class="text-red-400">Equip Time (seconds):</span>
            {selectedWeapon.weaponStats.equipTimeSeconds}
          </p>
          <p>
            <span class="text-red-400">Reload Time (seconds):</span>
            {selectedWeapon.weaponStats.reloadTimeSeconds}
          </p>
          <p>
            <span class="text-red-400">First Bullet Accuracy:</span>
            {selectedWeapon.weaponStats.firstBulletAccuracy}
          </p>
          <p>
            <span class="text-red-400">Shotgun Pellet Count:</span>
            {selectedWeapon.weaponStats.shotgunPelletCount}
          </p>
          <p><span class="text-red-400">ADS Stats:</span></p>
          <ul>
            <li>
              <span class="text-red-400">Zoom Multiplier:</span>
              {selectedWeapon.weaponStats.adsStats.zoomMultiplier}
            </li>
            <li>
              <span class="text-red-400">Fire Rate:</span>
              {selectedWeapon.weaponStats.adsStats.fireRate}
            </li>
            <li>
              <span class="text-red-400">Run Speed Multiplier:</span>
              {selectedWeapon.weaponStats.adsStats.runSpeedMultiplier}
            </li>
            <li>
              <span class="text-red-400">Burst Count:</span>
              {selectedWeapon.weaponStats.adsStats.burstCount}
            </li>
            <li>
              <span class="text-red-400">First Bullet Accuracy:</span>
              {selectedWeapon.weaponStats.adsStats.firstBulletAccuracy}
            </li>
          </ul>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    {/if}
  </div>
{/if}
