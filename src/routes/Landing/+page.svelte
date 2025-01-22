<script>
  import Footer from "../../components/Landing/Footer.svelte";
  import Navbar from "../../components/Landing/Navbar.svelte";
  import { Check } from "lucide-svelte";
  import Services from "../../components/Landing/Services.svelte";
</script>

<main>
  <Navbar />
  <page>
    <show>
      <div>
        <h1>Votre maison Réalisée par l'IA Guidée par nos experts.</h1>
        <br /><br />
        <h2>
          <tick><Check /></tick> Transformez vos idées en
          une maison unique.
        </h2>
        <h2>
          <tick><Check /></tick> Profitez de conseils professionnels
          à chaque étape.
        </h2>
        <h2>
          <tick><Check /></tick> Laissez l'intelligence artificielle
          donner vie à vos rêves.
        </h2>
        <button>Lancez-vous !</button>
      </div>
      <showimg>
        <phone>
          <notch></notch>
          <btn1></btn1>
          <btn2></btn2>
          <btn3></btn3>
        </phone>
        <shownotif style="top: 30%;left: 10%;">
          <h1 style="color:rgb(111, 187, 44)">£ 10.3200,3</h1>
          <h2>Estimation de Prix</h2>
        </shownotif>
        <shownotif style="top: 75%;left: 60%;">
          <h1>£ 17.1600,9</h1>
          <h2>Attendu en 2028</h2>
        </shownotif>
      </showimg>
    </show>
    <!-- {% include "HomeServices.html" %} -->
  </page>
  <Services />
  <Footer />
</main>

<style>
  main{
    padding: 0 12.5%;

  }
  Show {
    display: flex;
    flex-direction: row;
    height: 630px;
    margin: 70px 0;

    gap: 40px;

    div {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      button {
        margin-top: 40px;
        width: fit-content;
        border: none;
        background: black;
        border-radius: 50px;
        color: white;
        padding: 10px 20px;
        font-size: 18px;
        font-family: Figtree;
      }

      h1 {
        font-size: 3.8em;
        line-height: 1.1;
        font-weight: 700;
        color: #333;
        margin: 0;
        font-family: Figtree;
      }

      h2 {
        text-align: start;
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: Figtree;
        font-size: 18px;
        color: #333;
        font-weight: 500;
        margin: 0;
        margin-bottom: 10px;
      }

      tick {
        width: 32px;
        height: 32px;
        display: grid;
        place-items: center;
        background: #ccff00;
        border-radius: 50%;
        scale: 0.8;

        svg {
          fill: rgba(0, 0, 0, 0.375);
          position: relative;
          left: -4px;
          scale: 0.5;
        }
      }
    }

    showimg {
      overflow: hidden;
      display: block;
      width: 50%;
      height: 100%;
      border-radius: 30px;
      background: url(/assets/images/HomeImages/02-Green_Blue_LM-4K.png);
      background-size: 400%;
      background-position: 50% 50%;
      filter: saturate(1.5) hue-rotate(-20deg);
      position: relative;

      phone {
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        flex-direction: column;
        border-radius: 50px;
        background: url(/assets/images/HomeImages/homet.jpg);
        background-repeat: no-repeat;
        background-size: 150%;
        background-position: 40% 0%;
        width: 370px;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0%);
        aspect-ratio: 9/16;
        border: #ffffff71 1px solid;
        outline: #000000 12px solid;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);

        notch {
          display: block;
          width: 100px;
          height: 28px;
          background: #000000;
          border-radius: 50px;
        }

        btn1 {
          display: block;
          width: 4px;
          height: 70px;
          background: #000000;
          border-radius: 0 50px 50px 0;
          position: absolute;
          right: -17px;
          top: 20%;
        }

        btn2 {
          display: block;
          width: 4px;
          height: 100px;
          background: #000000;
          border-radius: 50px 0 0 50px;
          position: absolute;
          left: -17px;
          top: 25%;
        }

        btn3 {
          display: block;
          width: 4px;
          height: 40px;
          background: #000000;
          border-radius: 50px 0 0 50px;
          position: absolute;
          left: -17px;
          top: 15%;
        }
      }
    }

    shownotif {
      width: 200px;
      height: 100px;
      border-radius: 20px;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
      outline: #00000020 1px solid;
      background: rgba(255, 255, 255);
      backdrop-filter: blur(20px);
      display: block;
      position: absolute;
      padding: 23px;
      box-sizing: border-box;

      h1 {
        margin: 0;
        font-family: Milk;
        font-size: 26px;
        color: rgb(255, 128, 0);
      }

      h2 {
        margin: 0;
        font-family: Figtree;
        font-size: 16px;
        color: rgb(0, 0, 0);
      }
    }
  }
</style>
