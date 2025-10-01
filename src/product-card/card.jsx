function ProductCard ({ product }) {
  return (
    <form>
      <Image source={product.image}/>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <ProductButtons />
    </form>
  )
}

const Image = ({ source, altText = '' }) => {
  return (
    <div data-testid='imageComponent'>
      <img src={source} alt={altText} />
    </div>
  )
}

const ProductButtons = () => {
  return (
    <div data-testid='productButtonsComponent'>
      <button type='submit'>Add To Cart</button>
      <Quantity />
    </div>
  )
}

const Quantity = () => {
  return (
    <div data-testid='quantityComponent'>
      <button data-testid='decrementBtn' type='button'>Decrease</button>
      <input name="quantity" type='text' required/>
      <button data-testid='incrementBtn' type='button'>Increase</button>
    </div>
  )
}

export { Image, ProductButtons, Quantity };
export default ProductCard;