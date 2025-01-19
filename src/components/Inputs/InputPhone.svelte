<script>
  import { isValidNumber, parsePhoneNumberFromString } from "libphonenumber-js";

  function getCountryCode(phoneNumber) {
    const phoneNumberObj = parsePhoneNumberFromString(phoneNumber);
    console.log(phoneNumberObj);
    if (!phoneNumberObj) return ""; // Return empty string if invalid number
    return phoneNumberObj.country.toLocaleLowerCase() || ""; // Return the country code
  }

  import "/node_modules/flag-icons/css/flag-icons.min.css";
  import { Phone, Check } from "lucide-svelte";

  export const Validators = {
    phone: (value) => {
      const settings = {
        pattern: /^[0-9]{10}$/, // Example pattern for a 10-digit number (can be adjusted)
        required: true,
      };

      if (!value && settings.required) return false;
      return settings.pattern.test(value);
    },
  };

  export var {
    name = "Input",
    placeholder = "Your Phone Number",
    value = $bindable(),
  } = $props();

  let input = $state("");
  let empty = $derived(String(input).length === 0);
  let valid = $derived(Validators.phone(input));

  let flag = $derived(getCountryCode(input));

  $effect(() => {
    value = input;
  });
</script>

<painput {name} {valid}>
  <h style="position: relative;">
    <icon>
      <Phone size={16} />
    </icon>
    <flag class="fi fi-{flag}"></flag>
    <input bind:value={input} {empty} />
    <p>{placeholder}</p>
  </h>
</painput>

<style>
  PAinput {
    display: block;
    position: relative;
    width: 100%;
    /* max-width: 350px; */
    /* height: fit-content; */
    display: grid;
    /* grid-template-rows: 0fr; */
    /* transition: grid-template-rows 0.5s ease-out; */
    height: 40px;
    transition: 0.3s ease all;
    p {
      position: absolute;
      top: 50%;
      left: 38px;
      transform: translateY(-50%);
      font-size: 14px;
      color: #000000a8 !important;
      opacity: 1 !important;
      padding: 0 4px;
      pointer-events: none;
      background: none;
      /* scale: font; */
      transition: 0.3s ease all;
    }

    icon {
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-38%);
      z-index: 2;
    }

    flag {
      position: absolute;
      top: 50%;
      right: 12px;
      background-size: cover;
      width: 22px;
      transform: translateY(-50%);
      z-index: 2;
      border-radius: 3px;
      overflow: hidden;
      height: 16px;
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      padding: 0 12px;
      padding-left: 36px;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
    }
    input[empty="false"] + p,
    input:focus + p {
      top: 0px;
      background: #fff;
      color: rgba(0, 0, 0) !important;
      font-size: 12px;
      left: 12px;
    }
  }
</style>
