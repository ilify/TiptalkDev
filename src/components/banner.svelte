<script>
  import {
    Search,
    Map,
    Bed,
    Bath,
    Car,
    Cctv,
    Sofa,
    WavesLadder,
  } from "lucide-svelte";
  import { onMount, onDestroy } from "svelte";
  import { Slider } from "$lib/components/ui/slider";
  import { countries, Maincountries } from "$lib/Countries/data.js";
  import Inputints from "$components/inputints.svelte";
  export var { All = $bindable(), Filtered = $bindable() } = $props();
  // Use reactive statements instead of $state
  let topValue = $state(470);
  let PriceRange = $state([0, 1500000]);
  let SurfaceRange = $state([0, 1500]);
  let toolsFolded = $state(true);
  let toolsStep = $state(0);
  let Dist = $state([]);
  let roomnbr = $state(0);
  let bathnbr = $state(0);
  let yearnbr = $state(2010);
  let SelectedCountries = $state([]);
  let options = $state([
    {
      value: false,
      icon: Sofa,
      title: "Furnished",
    },
    {
      value: false,
      icon: WavesLadder,
      title: "Swimming Pool",
    },
    {
      value: false,
      icon: Cctv,
      title: "Camera",
    },
    {
      value: false,
      icon: Car,
      title: "Garage",
    },
  ]);

  // Debounce scroll handler to reduce calculations
  let scrollTimeout;
  function handleScroll() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      topValue = Math.max(0, 470 - scrollTop);
      if (topValue === 0 && !toolsFolded) {
        toolsFolded = true;
      }
    });
  }

  // Memoize distribution calculation
  const createDistribution = (count = 42) => {
    const dist = new Array(count);
    const halfCount = count / 2;

    for (let i = 0; i < count; i++) {
      const value = Math.random() * 100;
      const normalized =
        value * Math.pow(1 - Math.abs(i - halfCount) / count, 3);
      dist[i] = Math.max(2, normalized);
    }

    return [0, 0, 0, 0, ...dist, 0, 0, 0, 0];
  };

  function MakeValuesDist() {
    Dist = createDistribution();
  }

  function OpenAndSet(step) {
    if (!toolsFolded && toolsStep === step) {
      toolsFolded = true;
      return;
    }
    toolsFolded = false;
    toolsStep = step;
  }

  // Cleanup function to prevent memory leaks
  let cleanup = () => {};

  onMount(() => {
    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    MakeValuesDist();

    cleanup = () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  });

  function SelectCountry(country) {
    const btn = document.querySelector("#" + country);
    const btns = document.querySelector("#" + country + " span2");
    btn.classList.toggle("countrybtnSelected");
    btns.classList.toggle("countrybtnSelectedSpan");
    if (SelectedCountries.includes(country)) {
      SelectedCountries = SelectedCountries.filter((c) => c !== country);
    } else {
      SelectedCountries = [...SelectedCountries, country];
    }
  }
  let searchinput = $state("");
  let FilteredCountries = $state(Maincountries);

  $effect(() => {
    SearchCountries(searchinput);
    const Filters = {
      PriceRange,
      SurfaceRange,
      SelectedCountries,
      roomnbr,
      bathnbr,
      yearnbr,
      options,
    };
    console.log(Filters);
    FilterData(Filters);
  });

  function SearchCountries(input) {
    if (input === "") return;
    const result = Object.keys(countries).reduce((acc, key) => {
      if (countries[key].toLowerCase().includes(input.toLowerCase())) {
        acc[key] = countries[key];
      }
      return acc;
    }, {});

    FilteredCountries = result;
  }
  function FilterData(filters) {
    let filtered = All.filter((item) => {
      let priceFilter =
        item.price >= filters.PriceRange[0] &&
        item.price <= filters.PriceRange[1];

      let surfaceFilter =
        item.surface >= filters.SurfaceRange[0] &&
        item.surface <= filters.SurfaceRange[1];

      let roomnbrFilter =
        filters.roomnbr === 0 || item.bedroom >= filters.roomnbr;
      let bathnbrFilter =
        filters.bathnbr === 0 || item.bathroom >= filters.bathnbr;
      let yearnbrFilter =
        filters.yearnbr === 1900 || item.year >= filters.yearnbr;
      const country = item.address.address.split(",").pop().trim();
      const code = Object.keys(countries).find(
        (key) => countries[key] === country
      );
      const cameraFilter = filters.options[2].value
        ? item.camera === filters.options[2].value
        : true;

      const garageFilter = filters.options[3].value
        ? item.garage === filters.options[3].value
        : true;

      const poolFilter = filters.options[1].value
        ? item.pool === filters.options[1].value
        : true;

      const furnishedFilter = filters.options[0].value
        ? item.furnished === filters.options[0].value
        : true;

      const countryFilter =
        filters.SelectedCountries.length === 0 ||
        Object.values(filters.SelectedCountries).includes(code);

      return (
        priceFilter &&
        surfaceFilter &&
        roomnbrFilter &&
        bathnbrFilter &&
        yearnbrFilter &&
        countryFilter &&
        cameraFilter &&
        garageFilter &&
        poolFilter &&
        furnishedFilter
      );
    });
    Filtered = filtered;
  }
  onDestroy(cleanup);
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

  <searchbar fold={topValue <= 0} style="top: {topValue}px;">
    <div class="search-container">
      {#each ["Pays", "Price", "Surface", "Options"] as item, index}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <buttonf set={toolsStep === index} onclick={() => OpenAndSet(index)}>
          <div>
            {item}
            <p>
              {index === 0
                ? "Select Your Country"
                : index === 1
                  ? "Set Prices"
                  : index === 2
                    ? "Set Surface"
                    : "Add Options"}
            </p>
          </div>
        </buttonf>
      {/each}
    </div>

    <button><Search size={22} /></button>

    <filters folded={toolsFolded} style="--step:{toolsStep}">
      <contries
        ><div class="price-header">
          <div>
            <h2>Choose Your Country</h2>
            <p>Select the country where you want to find properties</p>
          </div>
          <price class="coutrysearch">
            <input
              type="text"
              placeholder="Search for a country"
              bind:value={searchinput}
              autocomplete="off"
            />
            <Search size={20} />
          </price>
        </div>
        <div
          class="c-scrollbar"
          style="display: flex;flex-wrap: wrap;gap: 10px;margin-top: 1rem;overflow-y:auto;padding-right:10px;"
        >
          {#each Object.keys(FilteredCountries) as country}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
              class="countrybtn {SelectedCountries.includes(country)
                ? 'countrybtnSelected'
                : ''}"
              id={country}
              onclick={() => SelectCountry(country)}
            >
              <span class="fi fi-{country}"></span>
              <span2
                class="fi fi-{country} {SelectedCountries.includes(country)
                  ? 'countrybtnSelectedSpan'
                  : ''}"
              ></span2>
              <p>
                {FilteredCountries[country]}
              </p>
            </div>
          {/each}
        </div>
      </contries>
      <prices>
        <div class="price-header">
          <div>
            <h2>Price Range</h2>
            <p>Set your desired price range</p>
          </div>
          <price>
            <div>
              <p>min</p>
              <input type="number" bind:value={PriceRange[0]} />
            </div>
            <div>
              <p>max</p>
              <input type="number" bind:value={PriceRange[1]} />
            </div>
          </price>
        </div>

        <slider>
          <dist>
            {#each Dist as value, i}
              {@const price = i * (1500000 / 50)}
              {@const isInRange =
                PriceRange[0] <= price && price <= PriceRange[1]}
              <!-- svelte-ignore element_invalid_self_closing_tag -->
              <div
                class="dist-bar"
                style="
                  background: {isInRange ? 'black' : '#00000020'};
                  height: {isInRange ? value : value * 0.2}px;
                "
              />
            {/each}
          </dist>
          <Slider bind:value={PriceRange} min={0} max={1500000} step={1000} />
        </slider>
      </prices>
      <surfaces
        ><div class="price-header">
          <div>
            <h2>Surface Range</h2>
            <p>Select the desired surface area</p>
          </div>
          <surface-range>
            <div>
              <p>Min</p>
              <input type="number" bind:value={SurfaceRange[0]} min="0" />
            </div>
            <div>
              <p>Max</p>
              <input type="number" bind:value={SurfaceRange[1]} min="0" />
            </div>
          </surface-range>
        </div>

        <slider>
          <dist>
            {#each Dist as value, i}
              {@const surface = i * (1500 / 50)}
              {@const isInRange =
                SurfaceRange[0] <= surface && surface <= SurfaceRange[1]}
              <!-- svelte-ignore element_invalid_self_closing_tag -->
              <div
                class="dist-bar"
                style="
                background: {isInRange ? 'black' : '#00000020'};
                height: {isInRange ? value : value * 0.2}px;
              "
              />
            {/each}
          </dist>
          <Slider bind:value={SurfaceRange} min={0} max={1500} step={1} />
        </slider></surfaces
      >
      <options
        ><div class="price-header">
          <div>
            <h2>Options</h2>
            <p>Select additional options for your property search</p>
          </div>
          <!-- <price>
          <div>
            <p>min</p>
            <input type="number" bind:value={PriceRange[0]} />
          </div>
          <div>
            <p>max</p>
            <input type="number" bind:value={PriceRange[1]} />
          </div>
        </price> -->
        </div>
        <div style="display: flex;gap: 30px;">
          <div
            style="margin-top: 30px;width: 110%;display: flex;flex-direction: column;gap: 20px;"
          >
            <div style="display: flex;align-items: center;width: 100%;">
              <p
                style="width: fit-content;text-align: start;white-space:nowrap"
              >
                Nombre de chambres
              </p>
              <Inputints bind:count={roomnbr} plus={true} />
            </div>
            <div style="display: flex;align-items: center;width: 100%;">
              <p
                style="width: fit-content;text-align: start;white-space:nowrap"
              >
                Nombre de salle bain
              </p>
              <Inputints bind:count={bathnbr} plus={true} />
            </div>
            <div style="display: flex;align-items: center;width: 100%;">
              <p
                style="width: fit-content;text-align: start;white-space:nowrap"
              >
                Année de constcuction
              </p>
              <Inputints
                bind:count={yearnbr}
                min={1900}
                max={2025}
                plus={true}
              />
            </div>
          </div>
          <dive
            style="margin-top: 30px;width: 100%;display: flex;flex-direction:row;flex-wrap: wrap;gap: 10px;height: fit-content;"
          >
            {#each options as option}
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_static_element_interactions -->
              <!-- svelte-ignore svelte_component_deprecated -->
              <divr
                class="optionbtn {option.value ? 'optionSelected' : ''}"
                onclick={() => {
                  option.value = !option.value;
                }}
              >
                <svelte:component this={option.icon} size={20} />
                <pe style="width: fit-content;text-align: start;"
                  >{option.title}</pe
                >
              </divr>
            {/each}
          </dive>
        </div>
      </options>
    </filters>
  </searchbar>
</main>

<style>
  .optionSelected {
    background: #000000 !important;
    color: #ffffff !important;
    opacity: 1 !important;
  }
  .optionbtn {
    transition: 0.2s ease all;
    opacity: 0.5;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    width: fit-content;
    height: fit-content;
    gap: 10px;
    border: 1px solid #00000020;
    background: rgb(255, 255, 255);
    padding: 5px 15px;
    margin: 0;
    border-radius: 100px;
  }
  .countrybtnSelected {
    border: 1px solid #0000008d !important;
  }
  .countrybtnSelectedSpan {
    opacity: 1 !important;
  }
  .c-scrollbar::-webkit-scrollbar {
    width: 7px;
  }
  .c-scrollbar::-webkit-scrollbar-thumb {
    background: #00000070;
    min-height: 20px;
    margin-left: 3px;
    transform: translateX(10px);
    border-radius: 10px;
  }
  .countrybtn {
    transition: 0.2s ease all;
    cursor: pointer;
    width: calc((100% - 20px) / 3);
    max-width: calc((100% - 20px) / 3);
    display: flex;
    align-items: center;
    background: #f8faff;
    border: 1px solid #00000015;
    padding: 0.5rem;
    /* justify-content: space-between; */
    border-radius: 10px;
    gap: 0.5rem;
    overflow: hidden;
    position: relative;

    span2 {
      position: absolute;
      scale: 5;
      right: 20px;
      filter: blur(10px);
      opacity: 0.2;
      transition: 0.3s ease;
    }
    p {
      z-index: 1;
      font-size: 0.9rem;
      max-width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      /* color: #868686; */
      white-space: nowrap;
    }
  }
  .search-container {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    height: 100px;
    z-index: 100;
  }

  .price-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dist-bar {
    display: block;
    width: 100%;
    border-radius: 3px 3px 0 0;
    transition:
      height 0.3s ease,
      background-color 0.3s ease;
  }
  slider {
    padding: 1rem;
  }
  dist {
    display: flex;
    gap: 1px;
    height: 120px;
    align-items: flex-end;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 700;
    /* margin-bottom: 1rem; */
    /* text-align: center; */
  }
  surface-range,
  price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* gap: 1rem; */
    overflow: hidden;
    width: 35%;
    padding: 0 1rem;
    background: #f2f2f274;
    border: 1px solid #0000000a;
    border-radius: 50px;
    height: 50px;

    input {
      width: 100%;
      background: none;
      font-size: 0.9rem;
      /* text-align: center; */

      &:focus {
        outline: none;
      }
    }
    div {
      width: 50%;
      display: flex;
      flex-direction: column;

      p {
        font-size: 0.8rem;
        color: #868686;
        margin-top: 0.2rem;
        white-space: nowrap;
      }
      input {
        margin-top: -5px;
        background: none;
        font-size: 1.1rem;
        width: 80px;
      }

      input:focus {
        outline: none;
      }
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        appearance: textfield;
      }

      &:last-child {
        align-items: end;
        border-left: 1px solid #0000000a;

        input {
          text-align: right;
        }
      }
    }
  }
  filters {
    width: calc(100% + 2px);
    display: flex;
    height: 300px;
    background: #ffffff;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    border: 1px solid rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 35px;
    left: -1px;
    border-radius: 0 0 25px 25px;
    border-top: none;
    transition: 0.25s ease all;
    opacity: 1;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
    /* padding: 20px; */
    padding-top: 30px;
    overflow: hidden;
    /* gap: 30px; */

    > * {
      mask-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 3%,
        rgba(0, 0, 0, 1) 97%,
        rgba(0, 0, 0, 0) 100%
      );
      /* background: linear-gradient(90deg, red, blue); */
      padding: 30px;
      padding-top: 20px;
      width: 100%;
      height: 100%;
      min-width: calc(((100% / 4) * 4) + 0px);
      /* transform: translateX(); */
      opacity: 1;
      transition:
        0.25s ease all 0.2s,
        transform 0.25s ease;
      transform: translateX(calc(var(--step) * -100%));
      display: flex;
      flex-direction: column;
      gap: 0px;
      p {
        width: fit-content;
      }
    }

    &[folded="true"] {
      height: 0;
      padding: 0;
      border-color: #00000000;
      left: 1px;
      width: calc(100% - 1px);

      > * {
        transition: 0.1s ease all;
        opacity: 0;
      }
    }
  }
  main {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 27vw;
    width: 100%;
    min-height: 60vh;
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
    z-index: 100;
    display: flex;
    gap: 0.7rem;
    margin-top: 1rem;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.5em;
    border-radius: 100px;
    width: 40vw;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    position: fixed;
    transition: width 0.3s ease;
    min-width: 720px;
    /* transition: 0.3s all; */

    &[fold="true"] {
      width: 37vw;
      min-width: 0px;

      > div {
        justify-content: flex-start;
      }
    }
    buttonf {
      z-index: 100;
      background: #ffffff;
      color: #9b9b9b;
      border: none;
      width: 100%;
      height: 30px;
      aspect-ratio: 1;
      display: flex;
      padding: 0 0.5rem;
      justify-content: start;
      align-items: center;
      /* border-radius: 100px; */
      cursor: pointer;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      transition: 0.1s all ease;
      padding-right: 1em;
      div {
        display: flex;
        flex-direction: column;
        gap: -0.5rem;
        p {
          font-size: 0.8rem;
          color: #868686;
          margin-top: -0.2rem;
          white-space: nowrap;
        }
      }
      &:last-child {
        border-right: none;
      }
      &[set="true"] {
        width: 300%;
        color: #000000;
      }
      &:hover {
        color: #000;
      }
    }
    button {
      z-index: 100;
      background: rgb(132, 189, 0);
      color: #fff;
      border: none;
      width: 50px;
      height: 50px;
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
      position: relative;
      top: 0 !important;
      width: 85vw !important;
      min-width: 0px !important;
      height: 140px;
      border-radius: 20px;
      padding: 0.4em;

      .countrybtn {
        width: calc((100% - 10px) / 2);
        max-width: calc((100% - 10px) / 2);
      }
      .search-container {
        flex-wrap: wrap;
        justify-content: space-between;
        buttonf {
          width: 46%;
        }
        buttonf:nth-child(2) {
          border-right: none;
        }
      }
      filters {
        /* background: red; */
        padding-top: 100px;
        height: 370px;
        > * {
          justify-content: space-between;
        }

        surface-range,
        price {
          width: 65%;
          height: 50px;
          > input {
            font-size: 0.6rem;
            /* &::placeholder{
              background: linear-gradient(to right,rgb(0, 0, 0),rgba(58, 58, 62, 0));
              color: transparent;
              background-clip: text;
            } */
          }
        }
        .coutrysearch {
          width: 50% !important;
        }
        options {
          overflow-y: scroll;
          .optionbtn {
            font-size: 0.9em;
          }
          dive {
            margin-top: 0 !important;
          }
          p {
            overflow: visible;
          }
          div:nth-child(2) {
            flex-direction: column;
            div {
              width: 100% !important;
              div {
                overflow: hidden;
                /* background: red; */
                flex-direction: row !important;
                p {
                  overflow: visible;
                }
              }
            }
          }
        }
        slider {
          /* height: 100%; */
          padding: 0;
          /* transform: scaleY(.5); */
        }
        .price-header > div {
          width: 30%;
        }
        h2 {
          font-size: 0.9rem;
          white-space: nowrap;
          width: fit-content;
        }
        p {
          font-size: 0.8rem;
          width: fit-content;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }
      }
      button {
        display: none;
      }
      input {
        font-size: 0.8rem;
      }
    }
  }
</style>
