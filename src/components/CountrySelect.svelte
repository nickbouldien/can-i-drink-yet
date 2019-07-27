<script>
  import locations from "../locations.js";

  function getDefaultLocation() {
    // TODO
    return "unitedStates";
  }
  export let selectedLocation = getDefaultLocation();
  export let age = Math.floor(Math.random() * 100 + 1);
</script>

<style>
  h1 {
    color: blue;
  }
</style>

<h3>enter your age</h3>
<input type="number" bind:value={age} min="0" max="200" />

<h3>pick a location</h3>
<select bind:value={selectedLocation}>
  {#each Object.entries(locations) as [key, loc]}
    <option value={key}>{loc.name}</option>
  {/each}
</select>

<p>age limit in selected location: {locations[selectedLocation].drinkingAge}</p>

{#if locations[selectedLocation].flag_image}
  <img src={locations[selectedLocation].flag_image} alt="location flag" />
{/if}

<h4>verdict:</h4>
{#if age >= locations[selectedLocation].drinkingAge}
  <p>yup!</p>
{:else}
  <p>nope!</p>
{/if}
