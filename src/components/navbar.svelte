<script>
  import Logo from "./logo.svelte";
  let isRegistered = true;
  let name = "ilies";

  import { MessageCircle } from "lucide-svelte";

  export function getRandomColor(username) {
    // Generate a hash code from the username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash to an RGB color
    const r = (hash >> 16) & 0xff;
    const g = (hash >> 8) & 0xff;
    const b = hash & 0xff;

    // Return the color in hex format
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
</script>

<nav>
  {#if isRegistered}
    <div>
      <Logo />
      <a href="/">Listings</a>
      <a href="/about">Messages</a>
      <a href="/contact">Profile</a>
    </div>
    <div>
      <a href="/Post">Déposer une annonce</a>

      <profile
        style="background:linear-gradient(45deg,{getRandomColor(
          name
        )},{getRandomColor(name.toLocaleUpperCase())})"
        >{name[0].toUpperCase()}</profile
      >
    </div>
  {:else}
    <div>
      <Logo />
      <a href="/">Listings</a>
      <a href="/about">Search</a>
      <a href="/contact">Contact</a>
    </div>
    <button> Register </button>
  {/if}
</nav>

<style>
  nav {
    display: flex;
    /* flex-direction: row; */
    justify-content: space-between;
    align-items: center;
    /* gap:20px; */
    padding: 0 5%;
    height: 60px;
  }

  div {
    display: flex;
    gap: 40px;
    align-items: baseline;
  }

  a {
    text-decoration: none;
    color: black;
    transform: translateY(-3px);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 15px;
  }

  profile {
    /* background-color: #333; */
    color: white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    background-color: #000;
    color: white;
    padding: 10px 22px;
    border-radius: 50px;
    /* width: 80px; */
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }
</style>
