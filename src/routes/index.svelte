<script>
  import CountrySelect from "../components/CountrySelect.svelte";
</script>

<style>
  h1,
  small {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2em;
    /* text-transform: uppercase; */
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 3em;
    }
  }
</style>

<svelte:head>
  <title>Can I drink yet??</title>
</svelte:head>

<h1>Can I drink yet?? *</h1>

<CountrySelect />

<small>(* legally)</small>
