<script>
  import { Plus, Minus, Image, Trash2 } from "lucide-svelte";

  export var { images = $bindable() } = $props();

  function addpicmain() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = false;
    input.click();
    input.onchange = (e) => {
      const files = e.target.files;
      const reader = new FileReader();
      reader.onload = (e) => {
        images[0] = e.target.result;
      };
      reader.readAsDataURL(files[0]);
    };
  }

  function addpic() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = true;
    input.click();
    input.onchange = (e) => {
      const files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          images = [...images, e.target.result];
        };
        reader.readAsDataURL(files[i]);
      }
    };
  }

  function delpic(pic) {
    images = images.filter((p) => p !== pic);
  }
</script>

<mainpic onclick={addpicmain}>
  {#if images[0] !== undefined}
    <img src={images[0]} alt="mainpic" />
  {:else}
    <div>
      <h1>Ajouter une image principale</h1>
      <p>Cliquez ici pour ajouter une image principale</p>
    </div>
  {/if}
</mainpic>
<div>
  <!-- <input type="file" accept="image/*" multiple /> -->
  {#each images.slice(1) as pic}
    <pic>
      <img src={pic} alt="pic" />
      <mask></mask>
      <button del onclick={() => delpic(pic)}><Trash2 color="#fff" /></button>
    </pic>
  {/each}
  <button onclick={addpic}><Plus color="#d0d0d0" /></button>
</div>

<style>
  mainpic {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 16/9;
    width: 100%;
    background: #f4f4f4;
    background-color: #e5e5f7;
    /* opacity: 0.8; */
    background: repeating-linear-gradient(
      45deg,
      #00000020,
      #00000020 5px,
      #ffffff 5px,
      #ffffff 25px
    );
    overflow: hidden;
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    color: #000;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      opacity: 1;
      transform: translateY(-5px);
      /* scale: 1.01; */
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      h1 {
        font-size: 1.5rem;
        margin: 0;
        font-family: Milk;
      }
    }
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: start;
    /* overflow-x: auto; */
    gap: 10px;

    button {
      /* opacity: 0.5; */
      width: calc((100% - 30px) / 4);
      /* height: 100px; */
      aspect-ratio: 16/9;

      border: 2px dashed #dfdfdf;
      border-radius: 10px;
      display: grid;
      place-content: center;
    }

    pic {
      width: calc((100% - 30px) / 4);
      /* height: 100px; */
      aspect-ratio: 16/9;
      background: #f4f4f4;
      border-radius: 10px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 0, 0, 1)
        );
        /* display: none; */
        opacity: 0;
        transition: 0.3s ease;
      }

      &:hover {
        button[del] {
          opacity: 1 !important;
        }
        mask {
          opacity: 0.5;
        }
      }
    }
  }
  button[del] {
    opacity: 0 !important;
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    background: none;
    outline: none !important;
    border: none !important;
    transition: 0.3s ease;
  }
</style>
