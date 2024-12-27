<script lang="ts">
  export let username: string;
  export let type: string;
  export let isUnfolded: boolean = false;
  export function getRandomColor(username) {
    // Generate a hash code from the username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Convert the hash to an RGB color
    const r = (hash >> 16) & 0xff;
    const g = (hash >> 8) & 0xff;
    const b = hash & 0xff;

    // Return the color in hex format
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
</script>

<span class:isUnfolded>
  <pic
    style={`background: linear-gradient(45deg,${getRandomColor(username.split(" ")[0])},${getRandomColor(username.split(" ")[1])});`}
    >{username[0]}
  </pic>
  <div>
    <p class="username">{username}</p>
    <p class="type">{type}</p>
  </div>
</span>

<style>
  span {
    display: flex;
    align-items: center;
    gap: 15px;

    /* padding: 10px; */
    /* border-radius: 5px; */

    &:hover {
      cursor: pointer;
      /* background-color: #00082b13; */
    }
  }

  .username {
    font-size: 15px;
    font-weight: 500;
    font-family: Slice;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
  }

  .type {
    font-size: 13px;
    font-weight: 400;
    font-family: Figtree;
    color: #808080;
    white-space: nowrap;
    overflow: hidden;
  }

  pic {
    width: 40px;
    height: 40px;
    min-width: 40px;
    border-radius: 50%;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    font-family: "Inter";
    color: #ffffff;
  }

  .isUnfolded {
    div {
      display: none;
    }
  }
</style>
