function fetchProducts () {
  return fetch('https://fakestoreapi.com/products')
    .then(res => {
      if (res.ok) return res.json();
      throw new Error()
    })
}