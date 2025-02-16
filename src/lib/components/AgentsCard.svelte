<script>
  let props = $props();
</script>

<div class="card bg-base-100 w-96 shadow-sm group">
  <figure>
    <img class="group-hover:translate-y-5 transition-transform duration-200 ease-out max-w-sm" src={props.image} alt="valorant" />
  </figure>
  <div class="card-body bg-base-200">
    <h2 class="card-title">
      {props.title}
      <div class="tooltip cursor-pointer" data-tip={props.datatip}>
      {#if props.role.toLowerCase() === "initiator"}
        <div class="badge badge-success">
          <p>Initiator</p>
        </div>
      {:else if props.role.toLowerCase() === "duelist"}
        <div class="badge badge-error">
          <p>Duelist</p>
        </div>
      {:else if props.role.toLowerCase() === "controller"}
        <div class="badge badge-accent">
          <p>Controller</p>
        </div>
      {:else if props.role.toLowerCase() === "sentinel"}
        <div class="badge badge-info">
          <p>Sentinel</p>
        </div>
      {/if}
      </div>
    </h2>
    <p>{props.description}</p>
  </div>
</div>
