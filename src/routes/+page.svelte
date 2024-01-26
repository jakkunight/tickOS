<script>
  import AccessModal from "$lib/components/AccessModal.svelte";
import Heading from "$lib/components/Heading.svelte";
  import Image from "$lib/components/Image.svelte";
  import Text from "$lib/components/Text.svelte";
</script>

<div class="flex flex-1 flex-col p-4">
  <section class="flex flex-col md:flex-row justify-around items-center gap-4">
    <!-- Banner -->
    <div class="flex flex-col justify-center items-center md:items-start gap-4">
      <Heading>Sistema Interno de Reclamos de ANDE (SIRANDE)</Heading>
      <Text>
        "Orden y eficiencia"
      </Text>
      <AccessModal />
    </div>
    <div class="flex items-center justify-center">
      <Image src="https://play-lh.googleusercontent.com/LnfmlmPkGimYP25yRWmrVqxodXxOG7xf9Hifg1KD1Yiygfss-Iqj-Rp5niWPMxSfh0s" alt="ANDE" class="w-[50%] md:w-[70%] opacity-80" />
    </div>
  </section>
  
</div>
