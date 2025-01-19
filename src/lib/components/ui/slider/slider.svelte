<script>
  import { Slider as SliderPrimitive } from "bits-ui";
  import { cn } from "$lib/utils.js";
  let className = undefined;
  export let value = [0];
  export { className as class };
</script>

<SliderPrimitive.Root
  bind:value
  class={cn(
    "relative flex w-full touch-none select-none items-center",
    className
  )}
  {...$$restProps}
  let:thumbs
>
  <span
    class="bg-[#00000020] relative h-2 w-full grow overflow-hidden rounded-full"
  >
    <SliderPrimitive.Range class="bg-black absolute h-full" />
  </span>
  {#each thumbs as thumb}
    <SliderPrimitive.Thumb
      {thumb}
      class="bg-background border border-2 border-[#dbdbdb] block h-7 w-7 rounded-full focus:outline-none focus:border-primary"
    />
  {/each}
</SliderPrimitive.Root>
