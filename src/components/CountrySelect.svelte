<script>
  import locations from "../routes/locations/_locations";

  function getDefaultLocation() {
    // TODO - get user's location (if allowed)?? then look up the location based
    return "united-states";
  }
  export let selectedLocation = getDefaultLocation();
  export let selectedLocationData = locations.find(
    loc => loc.slug === selectedLocation
  );

  export let age = Math.floor(Math.random() * 100 + 1);
</script>

<style>
  input {
    margin-bottom: 1rem;
  }
  select {
    margin-bottom: 1rem;
  }
  p.green {
    color: green;
  }
  p.red {
    color: red;
  }
  p.big {
    font-size: 2rem;
    margin: 0.5rem 0rem;
  }
</style>

<h2>enter your age</h2>
<input
  type="number"
  bind:value={age}
  min="0"
  max="200"
  style="height:50px;font-size:14pt;" />

<h3>pick a location</h3>

<select bind:value={selectedLocation} style="height:50px;font-size:14pt;">
  {#each locations as loc}
    <option value={loc.slug}>{loc.name}</option>
  {/each}
</select>

{#if selectedLocationData.flag_image}
  <img src={selectedLocationData.flag_image} alt="location flag" />
{/if}

<p>age limit in selected location: {selectedLocationData.drinkingAge}</p>

<h4>
  <strong>verdict:</strong>
</h4>
{#if age >= locations.find(loc => loc.slug === selectedLocation).drinkingAge}
  <p class="green big">yup!</p>
{:else}
  <p class="red big">nope!</p>
{/if}
