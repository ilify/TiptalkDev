<script>
  import { LoaderCircle } from "lucide-svelte";
  import { onMount } from "svelte";
  let progress = $state(0);
  $effect(() => {
    setTimeout(() => {
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 2000) {
          clearInterval(interval);
          document.querySelector("cover").remove();
        }
      }, 5);
    }, 1000);
  });
</script>

<cover style="--progress:{progress}px">
  <s>
    <LoaderCircle />
  </s>
  <p>Loading</p>
</cover>

<style>
  cover {
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(255, 255, 255, 1);
    mask-image: radial-gradient(
      circle var(--progress),
      rgba(255, 255, 255, 0) 50%,
      rgb(255, 255, 255) 100%
    );
    z-index: 100000;
  }
  s {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }

  @media (max-width: 768px) {
  }
</style>
