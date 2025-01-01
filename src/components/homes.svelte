<script>
  import { onMount } from "svelte";
  import House from "./house.svelte";
  import { fetchBackend } from "$lib/fetch";

  var Data = $state([]);

  onMount(() => {
    fetchBackend("/house/feed")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Data = data;
      });
  });
</script>
<div style="position: relative;">
  <results>
    <p>Results Found</p>
    <h1>{Data.length}</h1>
  </results>
  <main>
    {#each Data as house}
    <House {house} />
    {/each}
  </main>
</div>
  
<style>
  main {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 0% 5%;
  }
  results {
    padding: 1% 5%;
    
    position: absolute;
    right: 0;
    top: -50px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: baseline;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      font-family: Milk;
    }

    p {
      opacity: 0.5;
    }
  }
</style>
