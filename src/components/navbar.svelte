<script>
  import { fetchBackend } from "$lib/fetch";
  import Auth from "./auth.svelte";
  import Lang from "./lang.svelte";
  import Logo from "./logo.svelte";
  import { LoaderCircle } from "lucide-svelte";

  let isRegistered = $state(false);
  let name = $state("Empty");
  let Account = $state({});
  import {
    MessageCircle,
    HeartHandshake,
    LogOut,
    Info,
    Coins,
  } from "lucide-svelte";
  import Loadingscreen from "./loadingscreen.svelte";

  export function getRandomColor(username) {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    const r = (hash >> 16) & 0xff;
    const g = (hash >> 8) & 0xff;
    const b = hash & 0xff;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
  export var { reload } = $props();
  var isAuthShowing = $state(false);
  var Solde = $state(0);
  function logout() {
    fetchBackend("/auth/logout").then((res) => {
      if (res.ok) {
        isRegistered = false;
        name = "Empty";
      }
    });
  }

  $effect(() => {
    if (reload) {
      // pass
    }
    fetchBackend("/auth/me", {
      method: "GET",
    }).then((res) => {
      if (res.ok) {
        isRegistered = true;
        res.json().then((data) => {
          name = data.Username;
          Solde = data.Solde;
          Account = data;
        });
      }
    });
  });

  function hover() {
    const infoElement = document.querySelector("info");
    infoElement.style.opacity = infoElement.style.opacity === "1" ? "0" : "1";
    infoElement.style.pointerEvents =
      infoElement.style.pointerEvents === "all" ? "none" : "all";
  }

  // leap solde if changed
  function animNumber(from, to, duration, element) {
    if (
      typeof from !== "number" ||
      typeof to !== "number" ||
      typeof duration !== "number"
    ) {
      throw new Error(
        "Parameters 'from', 'to', and 'duration' must be numbers."
      );
    }
    if (!(element instanceof HTMLElement)) {
      throw new Error("Parameter 'element' must be a valid DOM element.");
    }

    let start = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1); // Ensure progress doesn't exceed 1
      const currentValue = Math.floor(progress * (to - from) + from);
      element.textContent = currentValue; // Use textContent for better performance

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }
</script>

<nav>
  <!-- <Loader /> -->
  <Loadingscreen />
  <div style="display: flex;display: flex;align-items: center;gap: 0px;">
    <ldiv style="margin-right: -20px;margin-top: -10px;margin-left: -10px;">
      <Logo />
    </ldiv>
    <a href="/">Annonces</a>
  </div>
  <div style="display: flex;align-items: center;gap: 20px;">
    {#if isRegistered}
      <div
        style="justify-content: end;gap:20px;align-items: center;display: flex;"
      >
        <a href="/AddHome" id="post">Déposer une annonce</a>
        <solde>{Solde}</solde>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <profile
          onclick={hover}
          style="background:linear-gradient(45deg,{getRandomColor(
            name
          )},{getRandomColor(name.toLocaleUpperCase())})"
          >{name[0].toUpperCase()}
        </profile>

        <info>
          <div
            style="display: flex;align-items: center;gap: 15px;margin-bottom: 10px;"
          >
            <profile
              style="background:linear-gradient(45deg,{getRandomColor(
                name
              )},{getRandomColor(name.toLocaleUpperCase())});aspect-ratio: 1;"
              >{name[0].toUpperCase()}
            </profile>
            <div
              style="display: flex; flex-direction: column; justify-content: center;gap: 0px;"
            >
              <h3>{name}</h3>
              <p
                style="opacity: .7;width:90%;overflow:hidden;text-overflow:ellipsis"
              >
                {Account.Email}
              </p>
            </div>
          </div>

          <a href="/Recharge"><Coins size={18} />Rechargé</a>
          <!-- <a href="/contact"><HeartHandshake size={18} />Contact</a> -->
          <!-- <a href="/about"><Info size={18} />About</a> -->

          <a
            href="/"
            onclick={logout}
            style="display: flex; align-items: center; gap: 15px;"
          >
            <LogOut size={18} />Logout
          </a>

          <pip style="margin-top: 10px;">Dev Version 0.9</pip>
        </info>
      </div>
    {:else}
      <button onclick={(isAuthShowing = true)}> Register </button>
    {/if}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <Lang />
  </div>
</nav>
<Auth bind:isAuthShowing bind:isRegistered bind:reload />

<style>
  solde {
    background: #e4e4e4;
    padding: 5px 20px;
    border-radius: 50px;
  }

  info {
    z-index: 9999;
    opacity: 0;
    pointer-events: none;
    background: rgb(255, 255, 255);
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 100px;
    right: 50px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    outline: 1px solid rgba(0, 0, 0, 0.15);
    padding: 30px;
    transition: opacity 0.3s ease 0.1s;

    h3 {
      font-weight: 500;
      font-family: Milk;
    }

    a {
      display: flex;
      align-items: center;

      width: fit-content;
      background: none;
      color: black;
      gap: 15px;
      height: 30px;
      opacity: 0.7;
      padding: 0;
      font-family: figtree;
      transition: transform 0.3s ease;
      &:hover {
        transform: translate(5px, -3px);
      }
    }

    profile {
      width: 50px;
      height: 50px;
    }

    pip {
      font-size: 12px;
      opacity: 0.3;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button {
    background-color: #000;
    color: white;
    padding: 10px 22px;
    border-radius: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  @media (max-width: 450px) {
    info {
      /* width: 250px; */
      padding: 20px;
      top: 80px;
      right: 20px;
    }
    nav {
      padding: 0 2%;
    }

    div {
      gap: 0px;
    }

    a {
      font-size: 13px;
      transform: translateY(-4px);
    }

    button {
      font-size: 13px;
    }

    ldiv {
      transform: scale(0.8);
    }

    #post {
      display: none;
    }

    solde {
      font-size: 12px;
    }
  }
</style>
