<script>
  import House from "./house.svelte";

  const Data = [
    {
      price: "3,216,646 DTN",
      location: "Jendouba",
      address: "Avenue Habib Bourguiba",
      date: "12/25/2024",
      roomnbr: 3,
      bathnbr: 2,
      surface: 1580,
      type: "House for sale",
      img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
  ];
  for (let i = 0; i < 1; i++) {
    Data.push({
      price: `${(Math.random() * 1000000).toFixed(0)} DTN`,

      location: ["Jendouba", "Tunis", "Sousse", "Sfax", "Bizerte"][
        Math.floor(Math.random() * 5)
      ],
      address: "Avenue Habib Bourguiba",
      date: new Date(
        Date.now() + Math.random() * 10000000000
      ).toLocaleDateString(),
      roomnbr: Math.floor(Math.random() * 5) + 1,
      bathnbr: Math.floor(Math.random() * 3) + 1,
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
    <House {house} />
  {/each}
</main>

<style>
  main {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 0% 5%;
  }
</style>
