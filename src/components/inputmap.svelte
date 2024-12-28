<script>
  let isMapOpen = $state(false);
  let map = null;

  $effect(() => {
    if (isMapOpen) {
      const mapElement = document.querySelector("#map");
      map = L.map(mapElement).setView([51.505, -0.09], 13);

      const baseLayers = {
        "Street Map": L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
          {
            maxZoom: 19,
            attribution: "",
            subdomains: ["a", "b", "c"],
          }
        ),
        Satellite: L.tileLayer(
          "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
          {
            maxZoom: 19,
            attribution: "",
            subdomains: ["mt0", "mt1", "mt2", "mt3"],
          }
        ),
      };

      baseLayers["Street Map"].addTo(map);

      L.control.layers(baseLayers).addTo(map);

      let marker = null;

      map.on("click", function (e) {
        if (marker) {
          map.removeLayer(marker);
        }
        marker = L.marker(e.latlng, { draggable: true }).addTo(map);
        console.log(e.latlng);
      });

      GetUserLocation();
    }
  });

  function GetUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        map.setView([position.coords.latitude, position.coords.longitude], 13);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function openMap() {
    isMapOpen = true;
  }

  function closeMap() {
    isMapOpen = false;
  }

  const handleMapClick = (e) => {
    e.stopPropagation(); // This prevents the click from reaching the background
  };
</script>

<button onclick={openMap}>Chose on map</button>
{#if isMapOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <bg onclick={closeMap}>
    <div id="map" onclick={handleMapClick}></div>
  </bg>
{/if}

<style>
  button {
    background: #fff;
    border: 1px solid #e4e4e7;
    color: rgba(0, 0, 0, 0.76);
    width: fit-content;
    padding: 0.5em 1em;
    border-radius: 10px;
  }

  bg {
    z-index: 100;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
  div {
    z-index: 101;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    top: 10%;
    left: 10%;
    border-radius: 10px;
    display: flex;
    background: black;
    width: 80vw;
    height: 80vh;
  }
</style>
