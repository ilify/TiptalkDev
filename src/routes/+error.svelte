<script>
  export let error = {
    message: "An error occurred while Loading the page.",
  };
</script>

<div class="container">
  <div class="emoji">Error</div>
  <div class="message">{error.message}</div>
  <a class="home-link" href="/">Go to Home</a>
</div>

<style>
  .container {
    text-align: center;
    padding: 50px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .emoji {
    font-size: 100px;
    font-family: Milk;
  }
  .message {
    font-size: 18px;
    margin-top: 20px;
  }
  .home-link {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #000000;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  .home-link:hover {
    background-color: #363636;
  }
</style>
