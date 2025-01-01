<script>
  import { fetchBackend } from "$lib/fetch";
  import Auth from "./auth.svelte";
  import Logo from "./logo.svelte";
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

  var isAuthShowing = $state(false);

  function logout() {
    fetchBackend("/auth/logout").then((res) => {
      if (res.ok) {
        isRegistered = false;
        name = "Empty";
      }
    });
  }

  $effect(() => {
    fetchBackend("/auth/me").then((res) => {
      if (res.ok) {
        isRegistered = true;
        res.json().then((data) => {
          console.log(data);
          name = data.Username;
          Account = data;
        });
      }
    });
  });

  function hover() {
    const infoElement = document.querySelector("info");
    infoElement.style.opacity = infoElement.style.opacity === "1" ? "0" : "1";
  }
</script>

<nav>
  {#if isRegistered}
    <div>
      <Logo />
      <a href="/">Listings</a>
    </div>
    <div>
      <a href="/AddHome">Déposer une annonce</a>
      <solde>{Account.Solde || 0}</solde>
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
            )},{getRandomColor(name.toLocaleUpperCase())})"
            >{name[0].toUpperCase()}
          </profile>
          <div
            style="display: flex; flex-direction: column; justify-content: center;gap: 0px;"
          >
            <h3>{name}</h3>
            <p style="opacity: .7;">{Account.Email}</p>
          </div>
        </div>

        <a href="/Recharge"><Coins size={18} />Rechargé</a>
        <a href="/contact"><HeartHandshake size={18} />Contact</a>
        <a href="/about"><Info size={18} />About</a>

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
    <div>
      <Logo />
      <a href="/">Listings</a>
      <a href="/about">Search</a>
      <a href="/contact">Contact</a>
    </div>
    <button onclick={(isAuthShowing = true)}> Register </button>
  {/if}
</nav>
{#if isAuthShowing}
  <Auth bind:isAuthShowing bind:isRegistered bind:name />
{/if}

<style>
  solde {
    background: #e4e4e4;
    padding: 5px 20px;
    border-radius: 50px;
  }

  info {
    z-index: 9999;
    opacity: 0;
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
        transform: translate(5px,-3px) ;
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
</style>
