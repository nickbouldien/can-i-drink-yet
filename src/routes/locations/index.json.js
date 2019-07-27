import locations from "./_locations.js";

const contents = JSON.stringify(
  locations.map(location => {
    return {
      name: location.name,
      slug: location.slug
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
