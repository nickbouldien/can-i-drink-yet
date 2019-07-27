<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`locations.json`)
      .then(r => r.json())
      .then(locations => {
        return { locations };
      });
  }
</script>

<script>
  export let locations;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Locations</title>
</svelte:head>

<h1>Location data</h1>

<ul>
  {#each locations as location}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="locations/{location.slug}">{location.name}</a>
    </li>
  {/each}
</ul>
