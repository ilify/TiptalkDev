<script>
  export var { isChecked = $bindable() } = $props();
  function toggle() {
    isChecked = !isChecked;
  }
</script>

<checkbox onclick={toggle} class={isChecked ? "checked" : ""}></checkbox>

<style>
  checkbox {
    display: block;
    width: 66px;
    height: 30px;
    background: light-dark(#e5e5e5, #303030);
    border-radius: 100px;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: pointer;

    &:after {
      content: "";
      display: block;
      width: 26px;
      margin: 2px;
      height: 26px;
      background: light-dark(#ffffffae, #ffffff6f);
      border-radius: 100px;
      transition: all 0.3s ease;
    }

    &:hover {
      background: light-dark(#c3c3c3, #3d3d3d);
    }

    &.checked {
      background: light-dark(#01ffc8, #ffffff);
      &:after {
        background: light-dark(#ffffff, #ffffff);
        filter: drop-shadow(0px 0px 15px light-dark(#000000, #ffffff));
        transform: translateX(35px);
      }
    }
  }
</style>
