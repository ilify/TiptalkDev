<script>
  import { Plus, Minus } from "lucide-svelte";

  export var {
    count = $bindable(),
    min = 0,
    max = 10,
    plus = false,
  } = $props();

  function increment() {
    if (count < max) {
      count += 1;
    }
  }

  function decrement() {
    if (count > min) {
      count -= 1;
    }
  }
</script>

<div class="container">
  <button class="button" onclick={decrement} disabled={count <= min}
    ><Minus size={16} /></button
  >
  <p>{count > 0 ? count : "Any"}{plus && count > 0 ? " +" : ""}</p>
  <button class="button" onclick={increment} disabled={count >= max}
    ><Plus size={16} /></button
  >
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 15px;
    padding: 0;
    height: 30px;
    font-family: Arial, sans-serif;
  }

  .button {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(0, 0, 0);
    border: none;
    /* padding: 10px; */
    cursor: pointer;
    width: 30px;
    height: 30px;
    aspect-ratio: 1;
    border-radius: 50px;
    font-size: 20px;
    border: 1px solid #e4e4e7;
  }

  .button:disabled {
    border: 1px solid #e4e4e7;
    background-color: #ffffff;
    opacity: 0.2;
    cursor: not-allowed;
  }

  p {
    width: 65px;
    text-align: center;
    font-size: 16px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 43px;
  }
</style>
