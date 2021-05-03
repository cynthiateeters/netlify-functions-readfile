const response = fetch('/.netlify/lambda/hello-world')
  .then((res) => res.json())
  .catch((err) => console.error(err));

console.log(response.response)