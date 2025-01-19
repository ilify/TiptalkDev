<script>
  import { Mail, KeyRound, User, Check, Eye, EyeOff } from "lucide-svelte";
  export const Validators = {
    email: (value) => {
      const settings = {
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        minLength: 5,
        maxLength: 50,
        required: true,
      };

      if (!value && settings.required) return false;
      if (value.length < settings.minLength) return false;
      if (value.length > settings.maxLength) return false;
      return settings.pattern.test(value);
    },

    password: (value) => {
      const settings = {
        minLength: 8,
        maxLength: 32,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecial: true,
        required: true,
      };

      if (!value && settings.required) return false;
      if (value.length < settings.minLength) return false;
      if (value.length > settings.maxLength) return false;
      if (settings.requireUppercase && !/[A-Z]/.test(value)) return false;
      if (settings.requireLowercase && !/[a-z]/.test(value)) return false;
      if (settings.requireNumbers && !/[0-9]/.test(value)) return false;
      if (settings.requireSpecial && !/[!@#$%^&*]/.test(value)) return false;
      return true;
    },

    username: (value) => {
      const settings = {
        minLength: 3,
        maxLength: 20,
        allowSpaces: false,
        allowSpecial: false,
        pattern: /^[a-zA-Z0-9_-]*$/,
        required: true,
      };

      if (!value && settings.required) return false;
      if (value.length < settings.minLength) return false;
      if (value.length > settings.maxLength) return false;
      if (!settings.allowSpaces && /\s/.test(value)) return false;
      if (!settings.allowSpecial && !settings.pattern.test(value)) return false;
      return true;
    },
  };
  export var {
    name = "Input",
    type = "password",
    placeholder = "Your Password",
    passwordStrength = true,
    value = $bindable(),
  } = $props();
  let validator = Validators[type];
  let input = $state("");
  let empty = $derived(input.length === 0);
  let valid = $derived(validator(input));
  let strengthLvl = $derived(
    input.length > 0
      ? [/[A-Z]/.test(input), /[0-9]/.test(input), input.length >= 8].filter(
          (v) => v
        ).length
      : 0
  );
  let hidden = $state(true);
  $effect(() => {
    value = input;
  });
</script>

<ainput
  {name}
  {valid}
  class={type == "password" ? "password" : ""}
  style="max-height: {passwordStrength ? '140px' : '40px'};"
>
  <h style="position: relative;">
    <icon>
      {#if type == "email"}
        <Mail size={16} />
      {/if}
      {#if type == "password"}
        <KeyRound size={16} />
      {/if}
      {#if type == "username"}
        <User size={16} />
      {/if}
    </icon>
    <input
      type="{type}{hidden ? '' : '<3'}"
      bind:value={input}
      {empty}
      autocomplete="off"
    />
    <p>{placeholder}</p>
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    {#if type == "password"}
      <toggle
        onclick={() => {
          hidden = !hidden;
        }}
      >
        {#if hidden}
          <Eye size={20} />
        {:else}
          <EyeOff size={20} />
        {/if}
      </toggle>
    {/if}
  </h>
  {#if passwordStrength}
    <div class={passwordStrength ? "passwordStrength" : ""}>
      <article>
        <progress value={strengthLvl > 0 ? 10 : 0} max="10"></progress>
        <progress value={strengthLvl > 1 ? 10 : 0} max="10"></progress>
        <progress value={strengthLvl > 2 ? 10 : 0} max="10"></progress>
      </article>
      <rules>
        <r done={strengthLvl > 0 ? 10 : 0}
          ><i><Check size={12} /></i>Au moins une lettre majuscule</r
        >
        <r done={strengthLvl > 1 ? 10 : 0}
          ><i><Check size={12} /></i>Au moins un chiffre</r
        >
        <r done={strengthLvl > 2 ? 10 : 0}
          ><i><Check size={12} /></i>Au moins 8 caractères</r
        >
      </rules>
    </div>
  {/if}
</ainput>

<style>
  Ainput {
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
      transform: translateY(-45%);
      z-index: 2;
    }

    toggle {
      opacity: 0;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-40%);
      z-index: 2;
      cursor: pointer;
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

  div {
    width: 100%;
    opacity: 0;
    overflow: hidden;

    rules {
      margin-top: 10px;
      height: fit-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;

      r {
        font-size: 13px;
        display: flex;
        gap: 7px;
        i {
          display: flex;
          color: #fff;
          justify-content: center;
          align-items: center;
          width: 15px;
          height: 15px;
          border-radius: 100%;
          background: rgb(203, 203, 203);
          transition: 0.3s ease all;
        }

        &[done="10"] {
          i {
            background: rgb(6, 169, 0);
          }
        }
      }
    }
    article {
      margin-top: 10px;
      display: flex;
      width: 100%;
      gap: 5px;
      height: 8px;
      flex-direction: row;

      progress {
        width: 100%;
        height: 8px;
        background: #f1f1f1;
        margin-top: 0;
      }

      progress:nth-child(1)::-webkit-progress-value {
        transition: 0.3s ease all;
        background: linear-gradient(90deg, rgb(255, 77, 0), rgb(255, 123, 0));
      }

      progress:nth-child(2)::-webkit-progress-value {
        transition: 0.3s ease all;
        background: linear-gradient(90deg, rgb(255, 123, 0), rgb(224, 255, 47));
      }
      progress:nth-child(3)::-webkit-progress-value {
        transition: 0.3s ease all;
        background: linear-gradient(90deg, rgb(224, 255, 47), rgb(0, 201, 57));
      }
    }
  }
  .password:has(input:focus),
  .password[valid="false"]:has(input[empty="false"]) {
    height: 140px;
    opacity: 1;
    icon {
      transform: translateY(-50%) !important;
    }
    toggle {
      opacity: 1;
      transform: translateY(-50%) !important;
    }

    div {
      opacity: 1;
    }
  }
</style>
