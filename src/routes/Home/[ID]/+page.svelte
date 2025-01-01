<script>
  import Navbar from "../../../components/navbar.svelte";
  import {
    MapPin,
    Bed,
    Bath,
    Cctv,
    Car,
    WavesLadder,
    FlameKindling,
  } from "lucide-svelte";
  import Map from "../../../components/map.svelte";
  import Footer from "../../../components/footer.svelte";
  import Profile from "../../../components/Profile.svelte";
  import Imagegal from "../../../components/imagegal.svelte";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import { fetchBackend } from "$lib/fetch";

  var pics = $state([]);
  let Data = $state({
    images: ["", "", "", "", ""],
  });
  var lat = $state(0);
  var lng = $state(0);
  var town = $state("");
  var street = $state("");
  var address = $state("");
  onMount(() => {
    fetchBackend("/house/get/" + page.params.ID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Data = data;
        lat = Data.address.lat;
        lng = Data.address.lng;
        address = Data.address.address;
        town = address.split(",").slice(5).join(",");
        street = address.split(",").slice(0, -2).join(", ");

        pics = data.images;
      });
  });
  let ID = page.params.ID;

  let isPicsVisible = $state(false);

  let viewAllPics = () => {
    isPicsVisible = !isPicsVisible;
    console.log(isPicsVisible);
  };
</script>

<main>
  <Navbar />
  <galery>
    <main
      style="background: url({Data.images[0]});background-size:cover;"
    ></main>
    <div>
      <pic style="background: url({Data.images[1]});background-size:cover;"
      ></pic>
      <pic style="background: url({Data.images[2]});background-size:cover;"
      ></pic>
    </div>
    <div>
      <pic style="background: url({Data.images[3]});background-size:cover;"
      ></pic>
      <button onclick={viewAllPics}
        ><p>See all photos</p>
        <p>{Data.images.length}</p></button
      >
    </div>
  </galery>
  <panel>
    <info>
      <div
        style="display: flex;flex-direction:column; align-items: start;gap: 0rem;"
      >
        <div>
          <location><MapPin size={18} />{town} </location>
          <!-- <state>House for sale</state> -->
        </div>
        <h2>{street}</h2>
      </div>

      <price>
        <h1>{Data.price}</h1>
        <h2>{Data.currency}</h2>
      </price>
      <discription>
        <badges>
          <badge>{Data.bedroom} <Bed size={16} /></badge>
          <badge>{Data.bathroom}<Bath size={16} /></badge>
          <badge>{Data.surface} m²</badge>
        </badges>
        <p>
          {Data.description}
        </p>
      </discription>
      <options>
        <h1>Characteristics</h1>
        <div>
            {#if Data.garage}
            <badge><Car size={15} />Garage</badge>
            {/if}
            {#if Data.pool}
            <badge><WavesLadder size={15} />Piscine</badge>
            {/if}
            {#if Data.camera}
            <badge><Cctv size={15} />Système de sécurité</badge>
            {/if}
        </div>
        <br />
      </options>
    </info>

    <contact>
      <Map {lat} {lng} />
    </contact>
  </panel>
  {#if isPicsVisible}
    <Imagegal pictures={pics} bind:isPicsVisible />
  {/if}
  <Footer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;
  }

  galery {
    padding: 3% 5%;
    /* padding-bottom: 1%; */
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 700px;
    gap: 1rem;

    * {
      border-radius: 10px;
    }

    main {
      width: 60%;
      height: 100%;

      background-size: cover;
      outline: 1px solid #0000004f;
      filter: brightness(0.9);
      transition: 0.3s ease-in-out;

      &:hover {
        cursor: pointer;
        filter: brightness(1);
      }
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 20%;
      height: 100%;
      /* background: blue; */

      pic {
        width: 100%;
        height: 100%;
        background: url("https://images.pexels.com/photos/298842/pexels-photo-298842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
        background-size: cover;
        filter: brightness(0.9);
        transition: 0.3s ease-in-out;
        outline: 1px solid #0000004f;

        &:hover {
          cursor: pointer;
          filter: brightness(1);
        }
      }

      button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 1rem;
        /* border-radius: 100px; */
        color: #fff;
        width: 100%;
        height: fit-content;
        background: rgb(0, 0, 0);
      }
    }
  }

  contact {
    padding-right: 5%;
    padding-left: 2%;
    width: 42.5%;
  }

  panel {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    /* padding: 1% 5%; */
    height: 500px;
    /* background: blue; */
  }

  info {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    /* padding: 1% 5%; */
    margin: 0 5%;
    margin-right: 1%;
    height: 500px;
    width: 50%;

    h1 {
      font-size: 3.5rem;
      font-family: Milk;
    }

    location {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 400;
      color: #00000085;
      font-family: Figtree;
      display: flex;
      gap: 0.5rem;
    }

    div {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: center;
    }

    h2 {
      margin-top: 10px;
      font-size: 0.9rem;
      font-weight: 400;
      color: #00000085;
      /* font-family: Milk; */
    }

    price {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      align-items: baseline;

      h2 {
        font-size: 2em;
        font-weight: 400;
        color: #000000;
        font-family: Milk;
      }
    }
    state {
      color: green;

      &::before {
        content: "";
        width: 10px;
        height: 10px;
        margin-right: 10px;
        background: green;
        border-radius: 50%;
        display: inline-block;
      }
    }
    discription {
      p {
        font-size: 1rem;
        font-weight: 400;
        color: #00000085;
        /* font-family: Milk; */
      }
    }
    badges {
      display: flex;
      gap: 0.5rem;
      /* margin-top: 1rem; */
      margin-bottom: 1rem;

      badge {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        background: #ffffff;
        border: 1px solid #e4e4e7;
        /* backdrop-filter: invert(1); */
        padding: 0.1rem 0.7rem;
        border-radius: 50px;
        font-size: 1rem;
        font-weight: 400;
        color: #000000;
        font-family: Versel;
      }
    }
    options {
      margin-top: 1em;
      h1 {
        font-size: 1.5rem;
        font-family: Milk;
      }
      div {
        margin-top: 15px;
        display: flex;
        gap: 0.5rem;
      }
      badge {
        width: fit-content;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        background: #ffffff;
        border: 1px solid #e4e4e7;
        /* backdrop-filter: invert(1); */
        padding: 0.2em 0.7rem;
        border-radius: 50px;
        font-size: 0.9rem;
        font-weight: 400;
        color: #000000;
        font-family: Versel;
      }
    }
  }
</style>
