const API = fetch("https://fakestoreapi.com/products")

  API.then(val => val.json()).then(data => {
    console.table(data);
  });