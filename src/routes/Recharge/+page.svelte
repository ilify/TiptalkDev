<script>
  import Navbar from "../../components/navbar.svelte";
</script>

<main>
  <Navbar />
  <div>
    <a href="/">← Back</a>

    <credit>
      <h1>3560</h1>
      <p>Credits</p>
    </credit>
    <progress style="margin-top: -15px;margin-bottom: 10px;" value="3560" max="5000"></progress>
    <h2>Buy More </h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisic</p>
    <pricingCards>
      <panel>
        <h2>Starter Plan</h2>
        <credit style="margin-top: -20px;">
          <h1>1000</h1>
          <p>Credits</p>
        </credit>
      </panel>
      <panel>
        <h2>Basic Plan</h2>
        <credit style="margin-top: -20px;">
          <h1>2400</h1>
          <p>Credits</p>
        </credit>
      </panel>
      <panel>
        <h2>Pro Plan</h2>
        <credit style="margin-top: -20px;">
          <h1>6000</h1>
          <p>Credits</p>
        </credit>
      </panel>
    </pricingCards>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    padding: 1% 2%;

    > div {
      padding: 3% 5%;
    }
  }

  h1 {
    font-size: 5rem;
    font-weight: 700;
    font-family: Milk;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-family: Milk;
  }

  credit {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: baseline;

    p {
      font-size: 1.1rem;
      font-weight: 400;
    }
  }
  pricingCards {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 2rem;

    panel {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 2%;
      width: 42.5%;
      height: 450px;
      border-radius: 15px;
      box-shadow: 0px 0px 10px 0px #0000001f;
      outline: 1px solid #0000001f;
      background: rgb(255, 255, 255);

      
    }
  }
</style>
