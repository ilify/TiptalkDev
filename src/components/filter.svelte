<script>
  import { ListFilter } from "lucide-svelte";
  import Select from "./select.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import { Slider } from "$lib/components/ui/slider";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { onMount } from "svelte";

  export var { All = $bindable(), Filtered = $bindable() } = $props();

  var price = $state([]);
  var surface = $state([]);
  var Region = $state([]);
  var Types = $state([]);
  var Roomnbr = $state([]);
  var Pays = $state([]);

  var CountriesDict = $state({});

  var setPrice = $state([]);
  var setSurface = $state([]);
  var Countries = $state(null);

  let pays = $state("");
  let type = $state("");
  let location = $state("");
  let roomnbr = $state("");

  function filter() {
    let filtered = All.filter((item) => {
      // Safely extract country and location
      const addressParts = item.address?.address?.split(",") || [];
      const countryi = addressParts.slice(-1)[0].trim() || "";
      const locationi = addressParts.slice(-3)[0].trim() || "";

      // Apply filters
      let priceFilter = item.price >= setPrice[0] && item.price <= setPrice[1];
      let surfaceFilter = item.surface >= setSurface[0] && item.surface <= setSurface[1];
      let roomnbrFilter = item.bedroom == roomnbr || roomnbr === "";
      let typeFilter =
        item.type?.toLowerCase() === type.toLowerCase() || type === "";
      let paysFilter = countryi === pays.trim() || pays === "";
      let locationFilter =
        locationi.toLowerCase() === location.trim().toLowerCase() ||
        location === "";

      console.log(
        priceFilter,
        surfaceFilter,
        roomnbrFilter,
        typeFilter,
        paysFilter,
        locationFilter
      );
      // Combine all filters
      return (
        priceFilter &&
        surfaceFilter &&
        roomnbrFilter &&
        typeFilter &&
        paysFilter &&
        locationFilter
      );
    });

    Filtered = filtered; // Update global variable
  }

  function LoadFilters() {
    const countryDict = {}; // Dictionary of countries and their towns
    const regions = new Set(); // Set to store all regions
    const types = new Set(); // Set to store all property types *
    const roomNumbers = new Set(); // Set to store unique room numbers *
    const prices = new Set(); // Set to store unique prices *
    const surfaces = new Set(); // Set to store unique surfaces *

    // Loop through all items to extract data
    All.forEach((item) => {
      types.add(item.type);
      roomNumbers.add(item.bedroom);
      prices.add(item.price);
      surfaces.add(item.surface);
      const country = item.address.address.split(",").slice(-1)[0].trim();
      const region = item.address.address.split(",").slice(-3)[0].trim();
      if (!countryDict[country]) {
        countryDict[country] = new Set();
      }
      countryDict[country].add(region);
    });

    // Convert sets to arrays
    const t = Array.from(types).map((type) => ({ label: type, value: type }));
    const rm = Array.from(roomNumbers).map((room) => ({
      label: room,
      value: room,
    }));
    rm.unshift({ label: "Tous", value: "" });
    const sM = Math.max(...Array.from(surfaces));
    const sm = Math.min(...Array.from(surfaces));
    const pM = Math.max(...Array.from(prices));
    const pm = Math.min(...Array.from(prices));
    const c = Array.from(Object.keys(countryDict)).map((country) => ({
      label: country,
      value: country,
    }));
    c.unshift({ label: "Tous", value: "" });

    CountriesDict = countryDict;
    Types = t;
    Roomnbr = rm;
    price = [pm, pM];
    setPrice = [pm, pM];
    surface = [sm, sM];
    setSurface = [sm, sM];
    Pays = c;
  }
  $effect(() => {
    if (pays.length > 0) {
      Region = Array.from(CountriesDict[pays]).map((region) => ({
        label: region,
        value: region,
      }));
      Region.unshift({ label: "Tous", value: "" });
    }
    filter();
  });

  $effect(() => {
    if (All.length > 0 && Types.length === 0) {
      LoadFilters();
    }
  });
</script>

<all>
  {#if Filtered.length > 0}
    <main>
      <Select placeholder="Pays" data={Pays} bind:selected={pays} />
      {#if pays.length > 0}
        <Select placeholder="Location" data={Region} bind:selected={location} />
      {/if}
      <Select placeholder="Type" data={Types} bind:selected={type} />
      <Select
        placeholder="Nombre de chambre"
        data={Roomnbr}
        bind:selected={roomnbr}
      />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="outline"
            style="border-radius: 10px; border:1px solid #e4e4e7;color:#5d6e86"
            >Prix</Button
          >
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          style="transform: translateY(10%);border-radius: 10px;"
        >
          <div>
            <info>
              <p>Minimum: {setPrice[0]}</p>
              <p>Maximum: {setPrice[1]}</p>
            </info>

            <Slider
              bind:value={setPrice}
              max={price[1]}
              min={price[0]}
              step={1000}
            />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild let:builder>
          <Button
            builders={[builder]}
            variant="outline"
            style="border-radius: 10px; border:1px solid #e4e4e7;color:#5d6e86"
            >Surface</Button
          >
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          style="transform: translateY(10%);border-radius: 10px;"
        >
          <div>
            <info>
              <p>Minimum: {setSurface[0]}</p>
              <p>Maximum: {setSurface[1]}</p>
            </info>

            <Slider
              bind:value={setSurface}
              max={surface[1]}
              min={surface[0]}
              step={10}
            />
          </div>
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <!-- <button><ListFilter /></button> -->
    </main>
    <p>{Filtered.length} Resultat trouvé</p>
  {:else}
    <div
      style="display: flex;flex-direction: column;align-items: center;justify-content: center;gap: 20px;width: 100%;"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 1"
        width="300px"
        height="300px"
        viewBox="0 0 647.63626 632.17383"
        class="injected-svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        role="img"
        artist="Katerina Limpitsouni"
        copyright="unDraw"
        scrapped="true"
        source="https://undraw.co/"
        ><path
          d="M687.3279,276.08691H512.81813a15.01828,15.01828,0,0,0-15,15v387.85l-2,.61005-42.81006,13.11a8.00676,8.00676,0,0,1-9.98974-5.31L315.678,271.39691a8.00313,8.00313,0,0,1,5.31006-9.99l65.97022-20.2,191.25-58.54,65.96972-20.2a7.98927,7.98927,0,0,1,9.99024,5.3l32.5498,106.32Z"
          transform="translate(-276.18187 -133.91309)"
          fill="#f2f2f2"
        ></path><path
          d="M725.408,274.08691l-39.23-128.14a16.99368,16.99368,0,0,0-21.23-11.28l-92.75,28.39L380.95827,221.60693l-92.75,28.4a17.0152,17.0152,0,0,0-11.28028,21.23l134.08008,437.93a17.02661,17.02661,0,0,0,16.26026,12.03,16.78926,16.78926,0,0,0,4.96972-.75l63.58008-19.46,2-.62v-2.09l-2,.61-64.16992,19.65a15.01489,15.01489,0,0,1-18.73-9.95l-134.06983-437.94a14.97935,14.97935,0,0,1,9.94971-18.73l92.75-28.4,191.24024-58.54,92.75-28.4a15.15551,15.15551,0,0,1,4.40966-.66,15.01461,15.01461,0,0,1,14.32032,10.61l39.0498,127.56.62012,2h2.08008Z"
          transform="translate(-276.18187 -133.91309)"
          fill="#3f3d56"
        ></path><path
          d="M398.86279,261.73389a9.0157,9.0157,0,0,1-8.61133-6.3667l-12.88037-42.07178a8.99884,8.99884,0,0,1,5.9712-11.24023l175.939-53.86377a9.00867,9.00867,0,0,1,11.24072,5.9707l12.88037,42.07227a9.01029,9.01029,0,0,1-5.9707,11.24072L401.49219,261.33887A8.976,8.976,0,0,1,398.86279,261.73389Z"
          transform="translate(-276.18187 -133.91309)"
          fill="red"
        ></path><circle cx="190.15351" cy="24.95465" r="20" fill="red"
        ></circle><circle cx="190.15351" cy="24.95465" r="12.66462" fill="#fff"
        ></circle><path
          d="M878.81836,716.08691h-338a8.50981,8.50981,0,0,1-8.5-8.5v-405a8.50951,8.50951,0,0,1,8.5-8.5h338a8.50982,8.50982,0,0,1,8.5,8.5v405A8.51013,8.51013,0,0,1,878.81836,716.08691Z"
          transform="translate(-276.18187 -133.91309)"
          fill="#e6e6e6"
        ></path><path
          d="M723.31813,274.08691h-210.5a17.02411,17.02411,0,0,0-17,17v407.8l2-.61v-407.19a15.01828,15.01828,0,0,1,15-15H723.93825Zm183.5,0h-394a17.02411,17.02411,0,0,0-17,17v458a17.0241,17.0241,0,0,0,17,17h394a17.0241,17.0241,0,0,0,17-17v-458A17.02411,17.02411,0,0,0,906.81813,274.08691Zm15,475a15.01828,15.01828,0,0,1-15,15h-394a15.01828,15.01828,0,0,1-15-15v-458a15.01828,15.01828,0,0,1,15-15h394a15.01828,15.01828,0,0,1,15,15Z"
          transform="translate(-276.18187 -133.91309)"
          fill="#3f3d56"
        ></path><path
          d="M801.81836,318.08691h-184a9.01015,9.01015,0,0,1-9-9v-44a9.01016,9.01016,0,0,1,9-9h184a9.01016,9.01016,0,0,1,9,9v44A9.01015,9.01015,0,0,1,801.81836,318.08691Z"
          transform="translate(-276.18187 -133.91309)"
          fill="red"
        ></path><circle cx="433.63626" cy="105.17383" r="20" fill="red"
        ></circle><circle cx="433.63626" cy="105.17383" r="12.18187" fill="#fff"
        ></circle></svg
      >
      <h1>Aucun resultat trouvé</h1>
      <p style="margin-top: -20px;">
        Try Refreching the page or Contact Support
      </p>
    </div>
  {/if}
</all>

<style>
  h1 {
    font-size: 2rem;
    /* color: #5d6e86; */
  }
  all {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0 5%;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }

  main {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* justify-content: s; */
    gap: 10px;
    align-items: baseline;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 500px;
    padding: 30px;
  }

  info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }

  @media (max-width: 768px) {
    div {
      width: 100%;
      height: 100%;
      /* transform: translateX(20px); */
    }

    svg {
      width: 100% !important;
      height: 100px !important;
    }
  }
</style>
