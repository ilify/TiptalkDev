<script>
  import { Map, Bed, Bath, Car, Cctv, Sofa } from "lucide-svelte";
  import { onMount } from "svelte";
  export let house;
  let town = "not";
  let street = "";

  onMount(() => {
    const addressParts = house.address.address.split(",");
    town = addressParts.slice(3).join(", ");
    street = addressParts.slice(0, -2).join(", ");
  });

  function formatPrice(price) {
    // Convert the price to a number, in case it's a string
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, "")); // Remove non-numeric characters
    if (isNaN(numericPrice)) return price; // Return original input if not a valid number

    // Format the price with thousands separators and no decimals
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: house.currency || "TND",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numericPrice);
  }
</script>

<a
  href="/Home/{house.ID}"
  style="background-image:linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(
  {house.images[0]});background-size: cover;"
>
  <h1>{formatPrice(house.price)}</h1>
  <doc>
    <badges>
      {#if house.garage}
        <badge><Car /></badge>
      {/if}
      {#if house.camera}
        <badge><Cctv /></badge>
      {/if}
      {#if house.furnished}
        <badge><Sofa /></badge>
      {/if}
    </badges>
    <badges>
      <badge>{house.bedroom} <Bed size={16} /></badge>
      <badge>{house.bathroom} <Bath size={16} /></badge>
      <badge>{house.surface} m² </badge>
    </badges>
  </doc>
  <date>{new Date(house.PostDate).toLocaleDateString()}</date>
  <op>
    <location>{town} <Map size={18} /></location>
    <h2>{street}</h2>
  </op>
</a>

<style>
  doc {
    badges {
      display: flex;
      gap: 0.5rem;
      margin-top: 1rem;
      margin-bottom: 0.5rem;

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
  }
  a {
    /* background-color: #f4f4f4; */
    /* filter: brightness(.9); */
    padding: 1rem;
    padding-bottom: 0.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 500px;
    border: 1px solid #f4f4f4;
    cursor: pointer;
    display: flex;
    position: relative;
    flex-direction: column-reverse;
    color: #fff;
    transition: 0.3s ease all;

    h2 {
      font-size: 1rem;
      font-weight: 400;
      color: #fff;
      font-family: Milk;
      text-overflow: ellipsis;
      text-align: end;
      overflow: hidden;
      white-space: nowrap;
      width: 20vw;
    }
    h1 {
      font-size: 2rem;
      font-weight: 700;
      /* margin-bottom: 1rem; */
      font-family: Milk;
    }

    op {
      font-size: 1rem;
      font-weight: 400;
      color: #fff;
      font-family: Versel;
      position: absolute;
      bottom: 15px;
      right: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      location {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 400;
        color: #ffffffcb;
        font-family: Figtree;
        display: flex;
        gap: 0.5rem;
      }
    }
    date {
      position: absolute;
      top: 10px;
      left: 15px;
      font-size: 0.7rem;
      font-weight: 400;
      color: #ffffffa7;
      font-family: Versel;
      background: #00000057;
      backdrop-filter: blur(5px);
      padding: 0.2rem 0.5rem;
      border-radius: 50px;
    }

    &:hover {
      background-color: #00000057;
      filter: brightness(1.2);

      h1 {
        color: #fff;
      }
      date {
        color: #fff;
      }
      op {
        location {
          color: #fff;
        }
      }
    }
  }
</style>
