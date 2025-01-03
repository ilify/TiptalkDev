<script>
  import { onMount } from "svelte";
  import Navbar from "../../components/navbar.svelte";
  import { Check } from "lucide-svelte";
  import { fetchBackend } from "$lib/fetch";
  let ref = $state("");
  let isPaying = $state(false);
  let Data = $state({});
  let prices = $state([{ solde: 0 }, { solde: 0 }, { solde: 0 }]);
  onMount(() => {
    document.title = "Recharge";
    fetchBackend("/pay/Prices")
      .then((res) => res.json())
      .then((data) => {
        prices = [];
        for (const key in data) {
          const val = data[key];
          val.code = key;
          prices.push(val);
        }
        console.log(prices);
      });
    LoadPage();
  });

  function LoadPage() {
    fetchBackend("/auth/me")
      .then((res) => res.json())
      .then((data) => {
        Data = data;
      });
  }

  $effect(() => {
    setInterval(() => {
      if (ref == "") return;
      fetchBackend("/pay/isPayed/" + ref)
        .then((res) => res.json())
        .then((data) => {
          if (data.status == 1) {
            isPaying = false;
            ref = "";
            LoadPage(); // Refresh the page to update the balance
            document.querySelectorAll("pricingCards button").forEach((ele) => {
              ele.disabled = false;
            });
          }
        });
    }, 5000);
  });

  function Pay(ele) {
    const code = ele.target.id;
    ele.target.disabled = true;
    isPaying = true;
    fetchBackend("/pay/link/" + code)
      .then((res) => res.json())
      .then((data) => {
        ref = data.paymentRef;
        const atag = document.createElement("a");
        atag.href = data.payUrl;
        atag.target = "_blank";
        atag.click();
      });
  }
</script>

<main>
  <Navbar reload={ref} />
  <div>
    <a href="/">← Retour</a>
    <br />
    <credit style="margin-top: 20px;">
      <h1 style="font-size: 5em;margin-bottom:20px">{Data.Solde}</h1>
      <p>Crédits</p>
    </credit>
    <!-- <progress style="margin-bottom: 10px;" value="{Data.Solde}" max="17700"></progress> -->
    <h2 style="font-size: 2em;">Achetez Plus</h2>
    <p>
      Débloquez plus de fonctionnalités pour améliorer vos annonces et attirer
      des acheteurs.
    </p>
    <pricingCards class={isPaying ? "loading" : ""}>
      <panel>
        <h2>Pack Starter</h2>
        <credit style="margin-top: -20px;">
          <h1>{prices[0].solde}</h1>
          <h3>Crédits</h3>
        </credit>
        <pd>
          Idéal pour les nouveaux vendeurs souhaitant tester ou améliorer la
          visibilité d'une annonce. Ce pack comprend :
        </pd>
        <p><Check /> 1000 Crédits</p>
        <p><Check /> 1 Jour de Promotion Gratuite</p>
        <p><Check /> Annonce Optimisée par l'IA</p>
        <p><Check /> Images Améliorées par l'IA</p>
        <button id={prices[0].code} onclick={Pay}
          ><p>{prices[0].price / 1000} {prices[0].currency}</p>
          <loading></loading></button
        >
      </panel>
      <panel popular>
        <h2>Pack Vendeur</h2>
        <credit style="margin-top: -20px;">
          <h1>{prices[1].solde}</h1>
          <h3>Crédits</h3>
        </credit>
        <pd>
          Une solution complète pour les vendeurs réguliers cherchant à
          augmenter leur visibilité tout en économisant. Ce pack inclut :
        </pd>
        <p><Check /> {prices[1].solde} Crédits</p>
        <p><Check /> 3 Jours de Promotion Gratuite</p>
        <p><Check /> Annonce Optimisée par l'IA</p>
        <p><Check /> Images Améliorées par l'IA</p>
        <button id={prices[1].code} onclick={Pay}
          ><p>{prices[1].price / 1000} {prices[1].currency}</p>
          <loading></loading></button
        >
      </panel>
      <panel best>
        <h2>Pack Pro</h2>
        <credit style="margin-top: -20px;">
          <h1>{prices[2].solde}</h1>
          <h3>Crédits</h3>
        </credit>
        <pd>
          Conçu pour les vendeurs sérieux et les entreprises, ce pack offre une
          exposition maximale et des fonctionnalités premium. Il comprend :
        </pd>
        <p><Check /> {prices[2].solde} Crédits</p>
        <p><Check /> 5 Jours de Promotion Gratuite</p>
        <p><Check /> Annonce Optimisée par l'IA</p>
        <p><Check /> Images Améliorées par l'IA</p>
        <button id={prices[2].code} onclick={Pay}
          ><p>{prices[2].price / 1000} {prices[2].currency}</p>
          <loading></loading></button
        >
      </panel>
    </pricingCards>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;

    > div {
      padding: 3% 5%;
    }
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;
    font-family: Milk;
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: Milk;
  }

  credit {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;

    p {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
  pricingCards {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;

    panel {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5%;
      width: 42.5%;
      /* height: 450px; */
      border-radius: 15px;
      box-shadow: 0px 0px 10px 0px #0000001f;
      outline: 1px solid #0000001f;
      background: rgb(255, 255, 255);

      button {
        background: #000000;
        color: white;
        border: none;
        padding: 7px 20px;
        border-radius: 10px;
        font-size: 1.1rem;
        font-weight: 500;
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          color: white;
        }

        loading {
          display: none;
        }

        &:disabled {
          opacity: 0.1;
          cursor: not-allowed;

          p {
            display: none;
          }
          loading {
            display: inline-block;
            margin-left: 10px;
            border: 2px solid white;
            border-top: 2px solid #000000;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
          }
        }
      }

      > h2 {
        margin-bottom: 10px;
      }
      pd {
        font-size: 0.9rem;
        font-weight: 400;
        opacity: 0.7;
        margin-bottom: 20px;
      }

      p {
        color: rgb(0, 0, 0);
        margin: 0;
        display: flex;
        gap: 10px;
      }
    }
    panel[popular] {
      background: linear-gradient(
        rgba(95, 95, 95, 0.3) -200%,
        rgba(255, 255, 255, 0.338) 100%
      );
      /* outline: none; */
      position: relative;
      /* width: 60%; */
      /* transform: scaleY(1.1); */

      &::after {
        width: 30%;
        height: 50px;
        border-radius: 10px;
        background: #ffffff;
        content: "Save 17%";
        font-family: typo;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #0000001f;
        position: absolute;
        top: 10px;
        left: 68%;
        z-index: 1;
        /* opacity: 0; */
      }
    }

    panel[best] {
      background: linear-gradient(
        rgba(0, 0, 0, 0.339) -80%,
        rgba(255, 255, 255, 0.338) 100%
      );
      /* outline: none; */
      position: relative;
      /* width: 60%; */
      /* transform: scaleY(1.1); */

      &::after {
        width: 30%;
        height: 50px;
        border-radius: 10px;
        background: #ffffff;
        content: "Save 25%";
        font-family: typo;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #0000003d;
        position: absolute;
        top: 10px;
        left: 68%;
        z-index: 1;
        /* opacity: 0; */
      }
    }
  }
  .loading {
    pointer-events: none;
    opacity: 0.5;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
