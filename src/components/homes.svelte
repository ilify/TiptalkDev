<script>
  import { MapPin } from "lucide-svelte";

function formatPrice(price) {
    // Convert the price to a number, in case it's a string
    const numericPrice = parseFloat(price.replace(/[^\d.-]/g, "")); // Remove non-numeric characters
    if (isNaN(numericPrice)) return price; // Return original input if not a valid number

    // Format the price with thousands separators and no decimals
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "TND",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(numericPrice);
}

  const Data = [
    {
      price: "3,216,646 DTN",
      location: "Jendouba",
      date: "12/25/2024",
      roomnbr: 3,
      surface: 1580,
      type: "House for sale",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
  ];
  for (let i = 0; i < 20; i++) {
    Data.push({
      price: `${(Math.random() * 1000000).toFixed(0)} DTN`,
      location: ["Jendouba", "Tunis", "Sousse", "Sfax", "Bizerte"][
        Math.floor(Math.random() * 5)
      ],
      date: new Date(
        Date.now() + Math.random() * 10000000000
      ).toLocaleDateString(),
      roomnbr: Math.floor(Math.random() * 5) + 1,
      surface: Math.floor(Math.random() * 2000) + 500,
      type: ["House for sale", "Apartment for rent", "Villa for sale"][
        Math.floor(Math.random() * 3)
      ],
      img: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ][Math.floor(Math.random() * 2)],
    });
  }
</script>

<main>
  {#each Data as house}
    <house
      style="background-image:linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url({house.img});background-size: cover;"
    >
      <p>{house.roomnbr} bd | {house.surface} m² - {house.type}</p>
      <h1>{formatPrice(house.price)}</h1>
      <date>{house.date}</date>
      <op>
        <location>{house.location} <MapPin /></location>
      </op>
    </house>
  {/each}
</main>

<style>
  main {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    grid-gap: 1rem;
  }

  house {
    /* background-color: #f4f4f4; */
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    height: 350px;
    border: 1px solid #f4f4f4;

    display: flex;
    position: relative;
    flex-direction: column-reverse;
    color: #fff;
    transition: 0.3s ease all; 

    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      /* margin-bottom: 1rem; */
      font-family: Milk;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
      color: #ffffffa9;
      font-family: Versel;
    }

    op {
      font-size: 1rem;
      font-weight: 400;
      color: #fff;
      font-family: Versel;
      position: absolute;
      bottom: 10px;
      right: 15px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      location {
        font-size: 1.2rem;
        font-weight: 400;
        color: #fff;
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
      p {
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
