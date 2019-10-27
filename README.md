# can i drink yet

a site to let you know if you're old enough to (*legally) drink in a given location

To start the app locally (in dev mode), clone the app and then

```bash
cd can-i-drink-yet
npm install # or yarn!
npm run dev
```

Open up [localhost:3000](http://localhost:3000) to see the site running on the dev server (3000 is the default port which can be changed if needed).

For more details on Svelte and/or Sapper, look at [svelte.dev/](https://svelte.dev/) or [sapper.svelte.dev](https://sapper.svelte.dev) for more info.


## contributing
feel free to make a pull request to add a location (found in `src/routes/locations/_locations.js`). Please try to make them at least somewhat accurate (a source of where you're getting your data (article, country stat site, etc.) as part of your pull request is preferred).  One location per contributor please (to allow more people to practice making pull requests)

as of now, the location objects look like the below example. please try to follow the formatting when adding new location objects

```js
  {
    drinkingAge: 18,
    population: 209300000,
    name: "Brasil",
    continent: "South America",
    slug: "brasil"
  }
```

## license
This project is licensed under the MIT License
