<script>
  import Logo from "./logo.svelte";
  import { Facebook, Instagram, Linkedin } from "lucide-svelte";
</script>

<footer>
  <section
    style="width: 100%;position: relative;;margin-right: 300px;"
  >
    <Logo />
    <p>Transform your Real Estate experience with digital innovation.</p>
    <p
      style="margin: 0;font-size: 12px;position: relative;top: 0px;opacity: .7;"
    >
      Copyright © 2024 TipTalk. All rights reserved.
    </p>
  </section>
  <section>
    <h1>Features</h1>
    <a href="/">House Simulator</a>
    <a href="/">Credit Simulator</a>
    <a href="/">Experts</a>
  </section>
  <section>
    <h1>Company</h1>
    <a href="/">Pricing</a>
    <a href="/">Contact</a>
    <a href="/">Blog</a>
  </section>
  <section>
    <h1>Support</h1>
    <a href="/">FAQ</a>
    <a href="/">Term & Conditions</a>
    <a href="/">Privacy Policy</a>
  </section>
</footer>

<style>
  footer {
    padding: 0 2%;
    display: flex;
    justify-content: space-between;

    align-items: start;
    gap: 10px;
    width: 100%;
    /* position: relative; */
    /* left: -40px; */
    margin-top: 100px;
    /* box-sizing: border-box; */

    section {
      display: flex;
      flex-direction: column;
      align-items: self-end;
      gap: 5px;
      width: 100%;
      margin-top: 30px;
      border-radius: 20px;
      height: 200px;

      a {
        text-decoration: none;
        color: rgb(67, 67, 67);
        font-family: Figtree;
        font-size: 14px;
      }
    }
    section:nth-child(1) {
      align-items: self-start;
      margin-top: 0;
    }

    p {
      font-family: Figtree;
      font-size: 14px;
      color: rgb(67, 67, 67);
    }

    h1 {
      font-family: "Milk";
      font-size: 18px;
    }
    ul {
      list-style: "";
      margin: 0;
      padding: 0;
      margin-top: 20px;
      display: flex;
      gap: 15px;
    }
    ul li a {
      background: #000 !important;
      /* padding: 10px; */
      /* color: rgb(255, 255, 255); */
      /* margin-right: 15px; */
      width: fit-content;
      /* margin-left: -10px; */
      transition: 0.2s all;
    }
  }
</style>
