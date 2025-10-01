function ProductCard ({ product }) {
  return (
    <div>
      <Image source={product.image}/>
      <h2 data-testid='prodTitle'>{product.title}</h2>
      <p data-testid='prodPrice'>{product.price}</p>
      <ProductButtons />
    </div>
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
    <form data-testid='productButtonsComponent'>
      <button type='submit'>Add To Cart</button>
      <Quantity />
    </form>
  )
}

const Quantity = ({ value, onChange }) => {
  return (
    <div data-testid='quantityComponent'>
      <button data-testid='decrementBtn' type='button'>Decrease</button>
      <input name="quantity" type='text' placeholder="0" value={value} onChange={onChange} required/>
      <button data-testid='incrementBtn' type='button'>Increase</button>
    </div>
  )
}

export { Image, ProductButtons, Quantity };
export default ProductCard;