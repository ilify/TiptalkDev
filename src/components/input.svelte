<script>
  import { Validators } from "$lib/validator/valid";
  export var { name, type, placeholder, value = $bindable() } = $props();
  let validator = Validators[type];
  let empty = $derived(input.length === 0);
  let valid = $derived(validator(input));
  let input = $state("");
  $effect(() => {
    value = input;
  });
</script>

<ainput {name} {valid}>
  <input {type} bind:value={input} {empty} />
  <p>{placeholder}</p>
</ainput>

<style>
  Ainput {
    display: block;
    position: relative;
    width: 100%;

    p {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      font-size: 12px;
      color: #000000a8 !important;
      opacity: 1 !important;
      padding: 0 4px;
      pointer-events: none;
      background: none;
      transition:
        top 0.3s ease,
        background 0.3s ease;
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      padding: 0 12px;
    }

    input[empty="false"] + p,
    input:focus + p {
      top: 0;
      background: #fff;
      color: rgba(0, 0, 0) !important;
    }

    &[valid="true"] Icon {
      opacity: 0.5;

      svg {
        fill: #006a00;
      }
    }
  }
</style>
