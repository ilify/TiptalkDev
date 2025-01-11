<script>
  import "../app.css";
  import Banner from "../components/banner.svelte";
  import Filter from "../components/filter.svelte";
  import Navbar from "../components/navbar.svelte";
  import Homes from "../components/homes.svelte";
  import Footer from "../components/footer.svelte";
  import Auth from "../components/auth.svelte";
  import { onMount } from "svelte";
  import { fetchBackend } from "../lib/fetch";
  import Loader from "../components/Loader.svelte";
  import { on } from "svelte/events";
  let AllData = $state([]);
  let FilteredData = $state([]);
  onMount(() => {
    fetchBackend("/house/feed")
      .then((res) => res.json())
      .then((data) => {
        AllData = data;
        FilteredData = data;

        if (data.length == 0) {
          document.querySelector("spinner[loader]").remove();
        }
      });
  });
</script>

<main>
  <Loader />
  <Navbar />
  <Banner />
  <Filter bind:All={AllData} bind:Filtered={FilteredData} />
  <Homes Data={FilteredData} />
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;
  }
</style>
