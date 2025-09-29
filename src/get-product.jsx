import { useQuery } from "@tanstack/react-query";

function fetchProducts () {
  return fetch('https://fakestoreapi.com/products')
    .then(res => {
      if (res.ok) return res.json();
      throw new Error()
    })
}

// customized hook for tanstack useQuery
function useProducts () {
  return useQuery({ queryKey: ['products'], queryFn: fetchProducts });
}

export default useProducts;