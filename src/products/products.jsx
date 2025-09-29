import useProducts from "../get-product.jsx";

function Products () {
  const { data: products, isError, isLoading, error } = useProducts();

  return (
    <div data-testid='products'></div>
  )
}

export default Products;