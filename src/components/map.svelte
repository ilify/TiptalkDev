<script>
  import { onMount } from "svelte";

  let mapElement;
  let map;
  let marker;

  let { lat, lng } = $props();

  // Reactive variables for coordinates and zoom level
  // let lat = 37.266915;
  // let lng = 9.883565;
  let zoom = 5;

  let minZoom = 5;
  let maxZoom = 19;

  let mode = "map";
  let sub = ["a", "b", "c"];

  let link = $state("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  function changeMode() {
    if (mode === "satellite") {
      mode = "map";
      link = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      sub = ["a", "b", "c"];
    } else {
      mode = "satellite";
      link = "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}";
      sub = ["mt0", "mt1", "mt2", "mt3"];
    }
  }

  $effect(() => {
    map = L.map(mapElement, {
      center: [lat, lng],
      zoom: zoom,
      minZoom: minZoom,
      maxZoom: maxZoom,
    });
    L.tileLayer(link, {
      maxZoom: 19,
      attribution: "",
      subdomains: sub,
    }).addTo(map);
    marker = L.marker([lat, lng], { draggable: false }).addTo(map);
    map.on("zoomend", () => {
      zoom = map.getZoom();
    });
    return () => {
      map.remove();
    };
  });
</script>

<!-- {lat} {lng} -->
<div bind:this={mapElement} class="map-container">
  <button onclick={changeMode}>◑</button>
</div>

<style>
  .map-container {
    height: 100%;
    width: 100%;
    position: relative;
    border-radius: 10px;
    outline: 2px solid #0000004f;
    border: none;
    outline-offset: -1px;

    button {
      position: absolute;
      top: 82px;
      left: 10px;
      background: white;
      padding: 5px;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  .coordinates {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: white;
    padding: 5px;
    border-radius: 4px;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
