import useProducts from "../get-product.jsx";
import ProductCard from "../product-card/card.jsx";

function Products () {
  const { data: products, isError, isLoading, error } = useProducts();

  if (isError) return <p>Error: {error.message}</p>
  if (isLoading) return <p>Loading...</p>

  return (
    <div data-testid='products'>
      { products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products;