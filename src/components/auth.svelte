<script>
  import { fetchBackend } from "$lib/fetch";
  import Input from "./input.svelte";
  import Logo from "./logo.svelte";
  import { LoaderCircle } from "lucide-svelte";

  export var {
    isAuthShowing = $bindable(),
    isRegistered = $bindable(),
    name = $bindable(),
  } = $props();
  let pos = $state(0);
  let isLogin = $state(true);
  let Data = {
    email: "",
    username: "",
    password: "",
  };

  let uiData = [
    {
      h1: "Bon retour !",
      p: "Entrez vos identifiants pour vous connecter",
      username: false,
      button: "Se connecter",
    },
    {
      h1: "Créer un compte !",
      p: "Entrez vos informations pour vous inscrire",
      username: true,
      button: "S'inscrire",
    },
  ];

  function next() {
    pos++;
    if (pos > 1) pos = 1;
  }
  function back() {
    pos--;
    if (pos < 0) pos = 0;
  }

  function toLogin() {
    isLogin = true;
    next();
  }

  let LoginFetching = $state(false);

  function toSignup() {
    isLogin = false;
    next();
  }

  function submit() {
    LoginFetching = true;
    fetchBackend("/auth" + (isLogin ? "/login" : "/register"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json(); // Proceed to parse the response body if status is 200
        } else {
          throw new Error(`HTTP error! Status: ${res.status}`); // Handle non-200 status codes
        }
      })
      .then((data) => {
        console.log("Success:", data);
        name = data.Username;
        isRegistered = true;
        isAuthShowing = false;
        LoginFetching = false;
      })
      .catch((err) => {
        LoginFetching = false;
        uiData[isLogin ? 0 : 1].button = "Erreur , réessayer !";
        console.error("Error:", err); // Handle errors from any part of the chain
      });
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<main
  onclick={() => (isAuthShowing = false)}
  class={isAuthShowing ? "show" : "hide"}
>
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <panel onclick={(e) => e.stopPropagation()}>
    <content style="--pos: {pos}">
      <welcome>
        <h1>Bienvenue sur TipTalk !</h1>
        <p>Choisissez une option pour continuer</p>
        <button main
          ><img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="google"
          /> Continuer avec Google</button
        >
        <button onclick={toSignup}>Continuer avec Email</button>
        <po>OU</po>
        <button onclick={toLogin}>Se connecter à votre compte</button>
        <law
          >En choisissant une méthode de connexion, je confirme avoir lu et
          compris la <a href="/">Politique de confidentialité</a> ainsi que les
          <a href="/">Conditions d'utilisation</a></law
        >
      </welcome>
      <inputs>
        <back onclick={back}>← Back</back>
        <h1>{uiData[isLogin ? 0 : 1].h1}</h1>
        <p>{uiData[isLogin ? 0 : 1].p}</p>
        <Input
          name=""
          placeholder="Email"
          type="email"
          bind:value={Data.email}
        />
        <div
          style="display: {uiData[isLogin ? 0 : 1].username ? 'block' : 'none'}"
        >
          <Input
            name=""
            placeholder="Nom d'utilisateur"
            type="username"
            bind:value={Data.username}
          />
        </div>
        <Input
          name=""
          placeholder="Mot de passe"
          type="password"
          bind:value={Data.password}
        />

        <button style="margin-top: 10px;" onclick={submit}>
          {#if !LoginFetching}
            {uiData[isLogin ? 0 : 1].button}
          {:else}
            <s>
              <LoaderCircle />
            </s>
          {/if}
        </button>
        <law>
          By clicking Sign Up, you agree to our <a href="/">Terms of Service</a>
          and <a href="/">Privacy Policy</a>
        </law>
      </inputs>
    </content>
  </panel>
</main>

<style>
  main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index: 100;
    transition: 0.3s all;
  }

  panel {
    width: 70%;
    height: 80%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: 0.2s all;
  }

  content {
    --pos: 0;
    width: 410px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow: hidden;
    align-items: center;
    gap: 10px;
    /* background: red; */

    > * {
      width: 100%;
      min-width: 400px;
      height: 50%;
      transition: 0.5s all;
      transform: translateX(calc(var(--pos) * -101%));
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.6rem;
      opacity: calc(1 + var(--pos));
    }
  }

  h1 {
    font-size: 2rem;
    color: #333;
    font-family: Milk;
  }
  p {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #6e6e6e;
    font-family: Figtree;
  }
  po {
    opacity: 0.7;
    font-size: 0.7rem;
    width: 100%;
    text-align: center;
  }
  button {
    width: 100%;
    height: 40px;
    background-color: #000000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.8rem;
    font-family: Figtree;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      /* margin-right: 10px; */
    }

    &[main] {
      background: none;
      border: 2px solid #000000;
      color: #000000;
    }
  }

  law {
    margin-top: 10px;
    opacity: 0.7;
    font-family: figtree;
    font-size: 0.75rem;

    a {
      color: #ff781d;
      text-decoration: none;
      font-weight: 600;
    }
  }
  back {
    cursor: pointer;
  }

  .show {
    opacity: 1;
    pointer-events: all;

    panel {
      transform: translateY(0);
    }
  }

  .hide {
    opacity: 0;
    pointer-events: none;
    panel {
      transform: translateY(200%);
    }
  }

  s {
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
  @media (max-width: 768px) {
    panel {
      width: calc(100% - 20px);
      height: 50vh;
      padding: 20px;
      box-sizing: border-box;
    }

    content {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      gap: 3px;
      mask-image: linear-gradient(
        to right,
        transparent 8%,
        black 8%,
        black 92%,
        transparent 92%
      );

      > * {
        min-width: 100%;
      }

      h1 {
        font-size: 1.4rem;
        white-space: nowrap;
        text-overflow: hidden;
      }

      p {
        font-size: 0.8rem;
      }

      button {
        padding: 10px;
      }

      law {
        font-size: 0.6rem;
      }
    }
  }

  @media (max-width: 400px) {
    content {
      mask-image: linear-gradient(
        to right,
        transparent 9%,
        black 9%,
        black 91%,
        transparent 91%
      );
    }
  }
</style>
