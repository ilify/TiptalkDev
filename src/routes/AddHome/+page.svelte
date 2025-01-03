<script>
  import Navbar from "../../components/navbar.svelte";
  import Map from "../../components/map.svelte";
  import Select from "../../components/select.svelte";
  import Inputint from "../../components/inputint.svelte";
  import Imageinput from "../../components/Imageinput.svelte";
  import Inputmap from "../../components/inputmap.svelte";
  import Checkbox from "../../components/checkbox.svelte";
  import { fetchBackend } from "$lib/fetch";
  import {
    LoaderCircle,
    Flag,
    Webhook,
    Cake,
    Handshake,
    Coins,
  } from "lucide-svelte";
  import { LandPlot } from "lucide-svelte";
  import { onMount } from "svelte";

  let loading = $state(false);
  let isvalid = $state(false);
  let Solde = $state(10);

  onMount(() => {
    fetchBackend("/auth/me")
      .then((res) => res.json())
      .then((data) => {
        Solde = data.Solde;
        // console.log(data);
      });
  });

  let Types = [
    { value: "Appartement", label: "Appartement" },
    { value: "Maison", label: "Maison" },
    { value: "Terrain", label: "Terrain" },
    { value: "Villa", label: "Villa" },
  ];

  let Currency = [
    { value: "TND", label: "TND" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "GBP", label: "GBP" },
  ];

  let Units = [
    { value: "m²", label: "m²" },
    { value: "ft²", label: "ft²" },
  ];

  let Data = $state({
    images: [], //
    type: "Maison", //
    price: "", //
    currency: "TND", //
    description: "", //
    address: {
      address: "",
      lng: 0.0,
      lat: 0.0,
    }, //
    bedroom: 0, //
    bathroom: 0, //
    year: 2010, //
    surface: 0, //
    unitsurface: "m²", //
    lot: "", //
    unitlot: "m²", //
    furnished: false, //
    pool: false, //
    garage: false, //
    outdoor: false, //
    camera: false, //
    heating: false, //
    paymentoption: {},
  });

  function validate() {
    if (0) {
      // Validate
      //
    }
    isvalid = true;
  }

  function Send() {
    loading = true;
    fetchBackend("/house/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Data),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("Success");
        loading = false;
        isvalid = false;
        const atag = document.createElement("a");
        atag.href = "/Home/" + res.houseID;
        atag.click();
      })
      .catch((err) => {
        console.log(err);
        loading = false;
      });
  }

  let detuctables = $state(0);

  let Payoptions = $state([
    { days: 30, credit: 100, selected: false },
    { days: 60, credit: 180, selected: false },
    { days: 90, credit: 250, selected: false },
    { days: 180, credit: 450, selected: false },
  ]);

  function deselectAll() {
    Payoptions.forEach((option) => {
      option.selected = false;
    });
  }

  let CanContinue = $state(false);

  $effect(() => {
    let testPrice = parseInt(Data.price) > 10000;
    let testDescription = Data.description.length > 10;
    let testAddress = Data.address.address.length > 5;
    let testImages = Data.images.length > 3;
    let testSurface = parseInt(Data.surface) > 0;
    CanContinue =
      testPrice && testDescription && testAddress && testImages && testSurface;
    console.log(
      testPrice,
      testDescription,
      testAddress,
      testImages,
      testSurface
    );
  });
</script>

<main>
  <Navbar reload={isvalid} />

  <article>
    <h1>Déposer une annonce</h1>
    <step>
      <images>
        <h2>Images et Aperçu</h2>
        <p>Ajoutez des images de votre bien et prévisualisez-les ici</p>
        <br />
        <Imageinput bind:images={Data.images} />
      </images>
      <info>
        <h2>Informations générales</h2>
        <p>Indiquez les informations générales de votre bien</p>
        <br />
        <div>
          <p>Type</p>
          <Select placeholder="Type" data={Types} bind:selected={Data.type} />
        </div>
        <div style="gap: .3rem;">
          <p>Prix</p>
          <div style="margin-top: 0;width:100%">
            <input
              type="number"
              min="10000"
              max="10000000"
              placeholder="Prix de l'annonce ( min : 10000 TND )"
              bind:value={Data.price}
            />
            <Select
              placeholder="TND"
              data={Currency}
              bind:selected={Data.currency}
            />
          </div>
        </div>
        <div>
          <p>Description</p>
          <textarea
            id="description"
            name="description"
            placeholder="Description de l'annonce"
            bind:value={Data.description}
          ></textarea>
        </div>

        <div>
          <p>Adresse</p>
          <Inputmap bind:value={Data.address} />
        </div>

        <br />
        <h2>Caractéristiques</h2>
        <p>Indiquez les caractéristiques de votre bien</p>
        <br />
        <div>
          <p>Nombre de chambres</p>
          <Inputint bind:count={Data.bedroom} />
        </div>

        <div>
          <p>Nombre de salles de bain</p>
          <Inputint bind:count={Data.bathroom} />
        </div>

        <div>
          <p>Année de construction</p>
          <Inputint bind:count={Data.year} min={1950} max={2025} />
        </div>

        <div style="gap: .3rem;">
          <p>Surface Terrain</p>
          <div style="margin-top: 0;width:100%">
            <input placeholder="Surface totale" bind:value={Data.surface} />
            <Select
              placeholder="m²"
              data={Units}
              bind:selected={Data.unitsurface}
            />
          </div>
        </div>

        <div style="gap: .3rem;">
          <p>Surface du Lot</p>
          <div style="margin-top: 0;width:100%">
            <input placeholder="Surface de lot" bind:value={Data.lot} />
            <Select
              placeholder="m²"
              data={Units}
              bind:selected={Data.unitlot}
            />
          </div>
        </div>

        <div>
          <p>Meublé</p>
          <Checkbox bind:isChecked={Data.furnished} />
        </div>

        <div>
          <p>Piscine</p>
          <Checkbox bind:isChecked={Data.pool} />
        </div>
        <div>
          <p>Garage</p>
          <Checkbox bind:isChecked={Data.garage} />
        </div>
        <div>
          <p>Espaces extérieurs</p>
          <Checkbox bind:isChecked={Data.outdoor} />
        </div>
        <div>
          <p>Caméra de sécurité</p>
          <Checkbox bind:isChecked={Data.camera} />
        </div>
        <div>
          <p>Chauffage/Climatisation</p>
          <Checkbox bind:isChecked={Data.heating} />
        </div>
      </info>
    </step>
    <div>
      <law>
        <p>
          En cliquant sur "Continuer", je reconnais <br /> avoir lu et compris l'Avis
          de Confidentialité.
        </p>
      </law>
      <button onclick={validate} disabled={loading || !CanContinue}>
        {#if loading}
          <LoaderCircle />
        {:else}
          Continuer
        {/if}
      </button>
    </div>
  </article>
  {#if isvalid}
    <dialoge>
      <div>
        <dov
          style="display: flex; flex-direction: row; gap: 1rem; align-items: center"
        >
          <Handshake size={32} />
          <h1>Success</h1>
        </dov>
        <p style="margin-top:-10px">
          Votre annonce a été publiée avec succès et est désormais visible par
          les utilisateurs de notre plateforme. Merci de votre confiance
        </p>

        <dop style="margin: 3% 0;">
          <h2 style="font-weight: 500;display:flex;gap:1rem;align-items:center">
            <LandPlot size={32} />Choisissez votre plan
          </h2>

          <solde>{Solde}</solde>
        </dop>
        {#if Solde < 100}
          <dop>
            <p style="margin-top: -10px;">
              Votre solde est insuffisant pour publier cette annonce.<br /> Veuillez
              recharger votre compte pour continuer
            </p>
            <a href="/Recharge"><Coins />Recharge</a>
          </dop>
        {:else}
          <pay>
            {#each Payoptions as option}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <optiona
                selected={option.selected}
                onclick={() => {
                  deselectAll();
                  detuctables = option;
                  Data.paymentoption = option;
                  option.selected = true;
                }}
              >
                <dop>
                  <p>{option.days} Days</p>
                </dop>
                <dop>
                  <h2>{option.credit}</h2>
                  Credit
                </dop>
              </optiona>
            {/each}
          </pay>
          <dop style="justify-content: end;margin-top: 20px;">
            <button
              style="background: none;border:3px solid #000;color:#000;box-sizing:border-box;"
              onclick={() => (isvalid = false)}>Annuler</button
            >
            <button style="border:3px solid #000;" onclick={Send}
              >Confirmer</button
            >
          </dop>
        {/if}
      </div>
    </dialoge>
  {/if}
</main>

<style>
  a {
    text-decoration: none;
    color: #ffffff;
    background: #000000;
    padding: 10px 15px;
    border-radius: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  solde {
    background: #f0f0f0;
    padding: 5px 20px;
    border-radius: 50px;
  }
  dialoge {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    backdrop-filter: blur(10px);
    justify-content: center;
    align-items: center;
    /* transform: translate(-50%, -50%); */

    div {
      width: 45vw;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      background: #fff;
      border-radius: 10px;
      padding: 2.5rem;
      /* box-shadow: 0 0 1000px rgba(0, 0, 0, 1); */
    }

    dop {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      width: 100%;
      justify-content: space-between;
    }

    pay {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 1rem;

      optiona {
        padding: 1em;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100px;
        border-radius: 10px;
        background: #f4f4f7;
        transition: 0.15s ease all;
        cursor: pointer;

        &:hover {
          background: #e4e4e7;
        }

        dop {
          align-items: center;
        }
        dop:last-child {
          justify-content: start;
          align-items: baseline;
          margin-bottom: -10px;
        }
        p {
          font-size: 1rem;
          margin: 0;
          opacity: 0.7;
        }

        h2 {
          font-size: 2rem;
          font-family: Milk;
          margin: 0;
        }
      }
    }
    h1 {
      font-size: 2.5rem;
      font-family: typo;
      margin: 0;
    }

    h2 {
      font-size: 1.5rem;
      font-family: typo;
      margin: 0;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;
    padding-bottom: 5%;
  }

  article {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    padding: 1% 5%;

    h1 {
      font-size: 2.5rem;
      font-family: Milk;
      margin: 0;
    }
  }

  step {
    /* opacity: 0; */
    margin-top: 15px;
    margin-bottom: 50px;

    width: 100%;
    /* height: 65vh; */
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    > * {
      min-width: 50%;
    }

    div {
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      align-items: start;
      gap: 10px;

      > * {
        width: 50%;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-family: Milk;
      margin: 0;
    }

    p {
      font-size: 1rem;
      opacity: 0.7;
    }

    textarea,
    input {
      width: 100%;
      padding: 0.5em 0.7em;
      border-radius: 10px;
      border: 1px solid #e4e4e7;
    }

    textarea {
      height: 100px;
      resize: none;
    }

    info {
      display: flex;
      flex-direction: column;

      overflow-y: auto;
    }
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 0.5em 2em;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      /* width: 10%; */
      height: 100%;
      background: rgb(0, 0, 0);
    }

    button:disabled {
      background: #e4e4e7;
      color: #ffffff;
      cursor: not-allowed;
    }
  }

  law {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  images {
    padding-right: 40px;
  }
</style>
