<script>
  import { Plus, Minus } from "lucide-svelte";

  export var { count = $bindable() } = $props();

  function increment() {
    count += 1;
  }

  function decrement() {
    count -= 1;
  }
</script>

<div class="container">
  <button class="button" onclick={decrement} disabled={count <= 0}
    ><Minus /></button
  >
  <p>{count}</p>
  <button class="button" onclick={increment}><Plus /></button>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 10px;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  .button {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    border: none;
    padding: 10px;
    cursor: pointer;
    width: 40px;
    aspect-ratio: 1;
    border-radius: 5px;
    font-size: 16px;
    border: 1px solid #e4e4e7;
  }

  .button:disabled {
    border: 1px solid #e4e4e7;
    background-color: #ffffff;
    opacity: 0.2;
    cursor: not-allowed;
  }

  p {
    width: 50px;
    text-align: center;
    font-size: 16px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #ccc; */
    border-radius: 5px;
    height: 43px;
  }
</style>
