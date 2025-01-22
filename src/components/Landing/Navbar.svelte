<navbar>
  <nav>
    <div style="display: flex;align-items: center;">
      <img src="/assets/images/logo2.png" alt="TipTalk" />
      <links>
        <button on:click={() => window.location.href='/Landing'}>Accueil</button>
        <button on:click={() => window.location.href='/Landing'}>Services</button>
        <button on:click={() => window.location.href='/'}>Marketplace</button>
        <button on:click={() => window.location.href='/Landing'}>Contact</button>
        <button on:click={() => window.location.href='/Landing'}>Pour les investisseurs</button>
      </links>
    </div>
    <div>
      <buttona>Lancez-vous →</buttona>
    </div>
  </nav>
</navbar>

<style>
  nav {
    border: #ffffff35 1px solid;
    width: 100%;
    position: relative;
    /* left: 40px; */
    height: 90px;

    background: #ffffff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding: 0 12.5vw; */
    margin-bottom: 16px;

    margin-top: 0;

    img {
      width: 110px;
      margin-right: 30px;
      transform: translateY(5px);
    }

    links {
      margin-top: 7px;
      display: flex;
      gap: 20px;

      button {
        text-decoration: none;
        color: rgb(179, 179, 179);
        font-family: Figtree;
        font-weight: 500;
        font-size: 16px;
        -webkit-text-stroke-width: 0.5px;
        transition: 0.2s ease all;
      }
      button:hover {
        color: #000000b3;
      }

      button[active] {
        color: rgb(0, 0, 0);
      }
    }

    buttona {
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: none;
      border-radius: 100px;
      padding: 10px 20px;
      font-family: Figtree;
      font-weight: 500;
      font-size: 16px;
      /* -webkit-text-stroke-width: .5px; */
      cursor: pointer;
      transition: 0.2s ease all;

      &:hover {
        background: rgb(0, 0, 0, 0.8);
      }
    }
  }
</style>
