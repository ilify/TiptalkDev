<script>
  import { onMount } from "svelte";
  import House from "./house.svelte";
  import { fetchBackend } from "$lib/fetch";
  import { LoaderCircle } from "lucide-svelte";

  export let Data = [];
  
</script>

<div style="position: relative;">
  <main>
    {#if Data.length === 0}
      <spinner loader>
        <LoaderCircle />
      </spinner>
    {/if}
    {#each Data as house}
      <House {house} />
    {/each}
  </main>
</div>

<style>
  spinner {
    width: fit-content;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  main {
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 0% 5%;
  }

  @media (max-width: 768px) {
    main {
      grid-template-columns: 1fr;
    }
  }
</style>
