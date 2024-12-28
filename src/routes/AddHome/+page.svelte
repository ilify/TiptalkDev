<script>
  import Navbar from "../../components/navbar.svelte";
  import Map from "../../components/map.svelte";
  import Select from "../../components/select.svelte";
  import Inputint from "../../components/inputint.svelte";
  import Imageinput from "../../components/Imageinput.svelte";
  import Inputmap from "../../components/inputmap.svelte";

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
</script>

<main>
  <Navbar />
  <article>
    <h1>Déposer une annonce</h1>

    <step>
      <images>
        <h2>Images et Aperçu</h2>
        <p>Ajoutez des images de votre bien et prévisualisez-les ici</p>
        <Imageinput />
      </images>
      <info>
        <h2>Informations générales</h2>
        <p>Indiquez les informations générales de votre bien</p>
        <br />
        <div>
          <p>Type</p>
          <Select placeholder="Type" data={Types} />
        </div>
        <div style="gap: .3rem;">
          <p>Prix</p>
          <div style="margin-top: 0;width:100%">
            <input placeholder="Prix de l'annonce" />
            <Select placeholder="TND" data={Currency} />
          </div>
        </div>
        <div>
          <p>Description</p>
          <textarea
            id="description"
            name="description"
            placeholder="Description de l'annonce"
          ></textarea>
        </div>

        <div style="gap: .3rem;">
          <p>Surface</p>
          <div style="margin-top: 0;width:100%">
            <input placeholder="Surface de l'annance" />
            <Select placeholder="m²" data={Units} />
          </div>
        </div>

        <div>
          <p>Address</p>
          <Inputmap />
        </div>

        <div>
          <p>Nombre de chambre</p>
          <Inputint />
        </div>

        <div>
          <p>Nombre de salle de bain</p>
          <Inputint />
        </div>

        <div>
          <p>Carecteristique</p>
          <Select placeholder="Type" data={Currency} />
        </div>
      </info>
    </step>
    <div>
      <law>
        <p>
          By clicking "Continue", I acknowledge <br /> I have read and understand
          the Privacy Notice.
        </p>
      </law>
      <button>Continue</button>
    </div>
  </article>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;
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
      padding: 0.5em .7em;
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
  }

  law {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  images {
    padding-right: 40px;
  }
</style>
