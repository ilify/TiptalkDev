<script>
  import "../app.css";
  import Banner from "../components/banner.svelte";
  import Filter from "../components/filter.svelte";
  import Navbar from "../components/navbar.svelte";
  import Homes from "../components/homes.svelte";
  import Footer from "../components/footer.svelte";
  import Auth from "../components/auth.svelte";
</script>

<main>
  <Navbar />
  <Banner />
  <Filter />
  <Homes />
  <Footer />
  <slot></slot>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;
  }
</style>
