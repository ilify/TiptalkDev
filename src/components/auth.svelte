<script>
  import Input from "./input.svelte";
  import Logo from "./logo.svelte";

  let pos = 0;

  function next() {
    pos++;
    if (pos > 1) pos = 1;
  }
  function back() {
    pos--;
    if (pos < 0) pos = 0;
  }
</script>

<main>
  <panel>
    <content style="--pos: {pos}">
      <welcome>
        <h1>Welcome to TipTalk !</h1>
        <p>Choose an option to continue</p>
        <button main
          ><img
            src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
            alt="google"
          /> Continue with Google</button
        >
        <button onclick={next()}>Continue with Email</button>
        <po>OR</po>
        <button>Login to your Account</button>
        <law
          >By Choosing a sign in method, I confirm that I have read and
          understood the <a href="/">Privacy Policy</a> as well as the
          <a href="/">Terms of service</a></law
        >
      </welcome>
      <inputs>
        <back onclick={back()}>← Back</back>
        <h1>Title Here of the Actio !</h1>
        <p>Subtitle of the action</p>
        <Input name="" placeholder="Email" type="email" />
        <Input name="" placeholder="Username" type="username" />
        <Input name="" placeholder="Password" type="password" />

        <button>Sign Up</button>
        <law>
          By clicking Sign Up, you agree to our <a href="/">Terms of Service</a>
          and <a href="/">Privacy Policy</a>
        </law>
      </inputs>
    </content>
  </panel>
</main>

<style>
  main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    z-index: 100;
  }

  panel {
    width: 70%;
    height: 80%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  content {
    --pos: 0;
    width: 410px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    overflow: hidden;
    align-items: center;
    gap: 10px;
    /* background: red; */

    > * {
      width: 100%;
      min-width: 400px;
      height: 50%;
      transition: 0.5s all;
      transform: translateX(calc(var(--pos) * -100%));
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.7rem;
      opacity: calc(1 + var(--pos));
    }
  }

  h1 {
    font-size: 2rem;
    color: #333;
    font-family: Milk;
  }
  p {
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #6e6e6e;
    font-family: Figtree;
  }
  po {
    opacity: 0.7;
    font-size: 0.7rem;
    width: 100%;
    text-align: center;
  }
  button {
    width: 100%;
    height: 40px;
    background-color: #000000;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 0.8rem;
    font-family: Figtree;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    img {
      width: 16px;
      height: 16px;
      /* margin-right: 10px; */
    }

    &[main] {
      background: none;
      border: 2px solid #000000;
      color: #000000;
    }
  }

  law {
    margin-top: 10px;
    opacity: 0.7;
    font-family: figtree;
    font-size: 0.75rem;

    a {
      color: #ff781d;
      text-decoration: none;
      font-weight: 600;
    }
  }
  back {
    cursor: pointer;
  }
</style>
