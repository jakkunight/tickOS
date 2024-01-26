<script lang="ts">
  import Button from "./Button.svelte";
  export let openLabel = "Open Modal!";
  export let closeLabel = "Close Modal!";

  let modal: HTMLDialogElement;

  function open() {
    modal.showModal();
  }
  function close() {
    modal.close();
  }
</script>

<div>
  <Button on:click={open}>
    {openLabel}
  </Button>
  <dialog
    open={false}
    bind:this={modal}
    class="open:flex open:m-4 p-4 open:flex-col open:items-center open:justify-center gap-4 open:fixed open:top-[50%] open:left-[50%] open:translate-x-[-50%] open:translate-y-[-50%] bg-black text-white border-white border-2 rounded-lg m-[10%] backdrop:backdrop-blur-lg"
    {...$$props}
  >
    <slot />
    <Button on:click={close}>
      {closeLabel}
    </Button>
  </dialog>
</div>
