<script>
  import { onMount } from "svelte";

  //   export let pictures = [];
  export var { pictures, isPicsVisible = $bindable() } = $props();

  let currentIndex = $state(0);

  const next = () => {
    currentIndex = (currentIndex + 1) % pictures.length;
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
  };

  const selectImage = (index) => {
    currentIndex = index;
  };

  const closeCarousel = () => {
    isPicsVisible = !isPicsVisible;
    // alert(isPicsVisible);
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore event_directive_deprecated -->
<div class="carousel" on:click={closeCarousel}>
  {#if pictures.length > 0}
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <img src={pictures[currentIndex]} alt="Carousel" on:click|stopPropagation />
  {/if}
  <div class="controls" on:click|stopPropagation>
    <button on:click={prev}>&#10094;</button>
    <button on:click={next}>&#10095;</button>
  </div>
  <div class="thumbnails" on:click|stopPropagation>
    {#each pictures as picture, index}
      <button
        type="button"
        class:selected={index === currentIndex}
        on:click={() => selectImage(index)}
        on:keydown={(e) => e.key === "Enter" && selectImage(index)}
      >
        <img src={picture} alt="Thumbnail" />
      </button>
    {/each}
  </div>
</div>

<style>
  .carousel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    z-index: 1000;
  }

  .carousel img {
    max-width: 90%;
    height: 85%;
    border: 2px solid white;
    border-radius: 10px;
    transition: 0.5 ease all;
  }

  .controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* transform: translateY(-0%); */
  }

  .controls button {
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
  }

  .thumbnails {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .thumbnails button {
    width: 100px;
    height: 70px;
    margin: 0 0px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: 0.2s ease;

    &:focus {
      outline: none;
    }
  }

  .thumbnails button.selected {
    scale: 1.1;
  }
</style>
