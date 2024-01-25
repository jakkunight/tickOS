<script>
  import Button from "$lib/Button.svelte";
  import Selector from "$lib/Selector.svelte";
  import Option from "$lib/Option.svelte";
  import Image from "$lib/Image.svelte";
  import TextInput from "$lib/TextInput.svelte";
  import PasswordInput from "$lib/PasswordInput.svelte";
  import Dialog from "$lib/Dialog.svelte";
  let val = "";
</script>

<div>
  <Button on:click={() => console.log("Hi!")}>Press me!</Button>
  <Selector>
    <Option value={1}>plain text</Option>
    <Option value={2}>argon2</Option>
    <Option value={3}>bcrypt</Option>
    <Option value={4}>sha256</Option>
  </Selector>
  <Image
    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/13714538-e319-4cce-9062-6941ce18525d/dg39xrz-2a1e3d74-4bba-456f-9631-dae0d9464587.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEzNzE0NTM4LWUzMTktNGNjZS05MDYyLTY5NDFjZTE4NTI1ZFwvZGczOXhyei0yYTFlM2Q3NC00YmJhLTQ1NmYtOTYzMS1kYWUwZDk0NjQ1ODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9Ybkd7VE_5yx36VtCq8CKl1yh3g7LbNLyPX06yO2rhs"
    alt="Junk Warrior Art"
  />
  <TextInput
    on:change={(event) => {
      val = event.target.value;
      console.log(val);
    }}
    placeholder="username"
  />
  <PasswordInput
    on:change={(event) => {
      console.log(event.target.value);
    }}
    placeholder="password"
  />
  <Dialog>
    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
    Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum
    Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident.
    Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
    occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat
    officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in
    Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non
    excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut
    ea consectetur et est culpa et culpa duis.
  </Dialog>
</div>
