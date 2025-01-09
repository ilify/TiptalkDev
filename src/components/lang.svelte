<script>
  import { LoaderCircle } from "lucide-svelte";
  import { onMount } from "svelte";
  function Init() {
    window.google.translate.TranslateElement(
      {
        pageLanguage: setLang,
      },
      "google_translate_element"
    );
  }

  onMount(() => {
    Init();
  });

  function Translate() {
    try {
      const select = document.querySelector(".goog-te-combo");
      select.value = setLang;
      const event = new Event("change", { bubbles: true });
      select.dispatchEvent(event);
      isLoad = false;
    } catch (e) {
      isLoad = false;
      if (setLang === "en") {
        setLang = "fr";
      } else {
        setLang = "en";
      }
    }
  }

  let isLoad = $state(false);

  let Langs = {
    us: {
      class: "en",
      flag: "https://vectorflags.s3-us-west-2.amazonaws.com/flags/us-square-01.png",
      name: "English",
    },

    fr: {
      class: "fr",
      flag: "https://vectorflags.s3-us-west-2.amazonaws.com/flags/fr-square-01.png",
      name: "Français",
    },
  };
  let setLang = $state("fr");

  function toggle() {
    isLoad = true;
    if (setLang === "en") {
      setLang = "fr";
    } else {
      setLang = "en";
    }
    Translate();
  }
</script>

<div id="google_translate_element"></div>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<lang class={setLang + " " + (isLoad ? "langload" : "")} onclick={toggle}>
  <mask onclick={(e) => e.preventDefault()}>
    <div onclick={(e) => e.preventDefault()}>
      <LoaderCircle color="#fff" />
    </div>
  </mask>
</lang>

<style>
  #google_translate_element {
    display: none;
  }
  .en {
    background: url(https://vectorflags.s3-us-west-2.amazonaws.com/flags/us-square-01.png);
    background-size: cover;
  }
  .fr {
    background: url(https://vectorflags.s3-us-west-2.amazonaws.com/flags/fr-square-01.png);
    background-size: cover;
  }

  .langload {
    cursor: progress;
    mask {
      opacity: 0.5;
    }
    div {
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  lang {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #7a7a7a;
    position: relative;
    cursor: pointer;

    mask {
      opacity: 0;
      transition: opacity 0.2s ease;
      width: 100%;
      height: 100%;
      background: black;
      border-radius: 50%;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
