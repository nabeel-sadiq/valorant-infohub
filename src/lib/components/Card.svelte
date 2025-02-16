<script>
  let props = $props();
</script>

<div class={props.class}>
  <div
    onclick={props.onclick}
    role="button"
    tabindex="0"
    onkeydown={props.onkeydown}
    class="card bg-base-100 w-96 shadow-sm hover:bg-base-200 group"
  >
    <figure class="mt-4">
      <img
        class="group-hover:-rotate-5 group-hover:scale-90 transition-transform duration-200 ease-out max-w-sm"
        src={props.image}
        alt="valorant"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{props.title}</h2>
    </div>
  </div>
</div>
