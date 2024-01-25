<script lang="ts">
  import Button from "./Button.svelte";
  export let openLabel = "Open Modal!";
  export let closeLabel = "Close Modal!";

  let modal: HTMLDialogElement;

  function open() {
    console.log("Open");
    modal.showModal();
  }
  function close() {
    console.log("Close");
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
    class="bg-black text-white border-white border-2 rounded-lg m-[10%] backdrop:backdrop-blur-lg"
    {...$$props} 
  >
    <div
      class="flex w-full h-full p-4 flex-col items-center justify-center gap-4"
    >
      <slot />
      <Button on:click={close}>
        {closeLabel}
      </Button>
    </div>
  </dialog>
</div>
