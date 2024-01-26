<script>
  import { userStore } from "$lib/stores/UserStore";
    import Button from "./Button.svelte";
  import Dialog from "./Dialog.svelte";
  import TextInput from "./TextInput.svelte";

  userStore.subscribe(function (userdata) {
    userdata;
  });
</script>

<div>
  <Dialog openLabel="Acceder" closeLabel="Cancelar">
    <form class="flex flex-col items-center justify-center gap-2">
      <TextInput placeholder="Departamento/Sección" />
      <TextInput placeholder="Nro de personal" />
      <TextInput placeholder="Nombre" />
      <TextInput placeholder="Apellido" />
      <TextInput placeholder="Nro de teléfono" />
      <TextInput placeholder="Email" />
      <Button on:submit={() => console.log("Access!")} >
        Acceder!
      </Button>
    </form>
  </Dialog>
</div>
