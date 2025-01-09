<script>
  import { Search } from "lucide-svelte";
</script>

<main>
  <h1><t>Trouvez la maison de</t><br /> <t>vos rêves en une clique</t></h1>
  <p>
    <t
      >Explorez un large choix de propriétés, comparez les meilleures options et</t
    >
    <br />
    <t>concrétisez vos projets immobiliers en toute sérénité</t>
  </p>
  <searchbar>
    <input type="text" placeholder="Rechercher une propriété" />
    <button><Search size={22} /></button>
  </searchbar>
</main>

<style>
  main {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30vw;
    width: 100%;
    min-height: 50vh;
  }

  h1 {
    font-size: 3.5em;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: center;

    t {
      white-space: nowrap;
    }
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
    color: #333;
    t {
      white-space: nowrap;
    }
  }

  searchbar {
    display: flex;
    gap: 1rem;
    margin-top: 3rem;
    background: #f3f3f6;
    padding: 0.7em;
    border-radius: 100px;
    width: 100%;
    justify-content: space-between;

    input {
      border: none;
      outline: none;
      font-family: "Poppins", sans-serif;
      font-size: 0.8rem;
      padding: 0.5rem 1rem;
      border-radius: 100px;
      width: 100%;
      background: none;
    }

    button {
      background: rgb(162, 218, 33);
      color: #fff;
      border: none;
      width: 40px;
      height: 40px;
      aspect-ratio: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100px;
      cursor: pointer;
      transition: background 0.3s;
    }

    button:hover {
      background: rgb(60, 150, 110);
    }
  }

  @media (max-width: 1400px) {
    main {
      /* background: red; */
      padding: 0 20% !important;
    }
  }

  @media (max-width: 1024px) {
    main {
      /* background: red; */
      padding: 0 10% !important;
    }
  }

  @media (max-width: 768px) {
    main {
      padding: 0 7% !important;
    }

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 450px) {
    main {
      margin-top: 0;
      min-height: 35vh;
      padding: 0 5% !important;
    }

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 0.6rem;
    }
    searchbar {
      padding: 0.4em;
      input {
        font-size: 0.8rem;
      }


    }
  }
</style>
