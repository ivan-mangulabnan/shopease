import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductCard, { Image, ProductButtons, Quantity } from "./card.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function renderWithClient(component) {
  const query = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });

  return render(
    <QueryClientProvider client={query}>
      { component }
    </QueryClientProvider>
  )
}

describe('ProductCard Component', () => {

  it('renders Image Component, title, price, and ProductButtons Comp', () => {
    const sampleProduct = { title: '', price: '', image: '#' }
    renderWithClient(<ProductCard product={sampleProduct}/>);

    const ImageComp = screen.getByTestId(/imagecomponent/i);
    const title = screen.getByTestId(/prodtitle/i);
    const price = screen.getByTestId(/prodprice/i);
    const ProductButtonsComp = screen.getByTestId(/productbuttonscomponent/i);

    expect(ImageComp, title, price, ProductButtonsComp).toBeInTheDocument();
  });

  it('renders passed product object', () => {
    const sampleProduct = { title: 'item', price: '25', image: '#' }
    renderWithClient(<ProductCard product={sampleProduct}/>);

    const title = screen.getByText("item");
    const price = screen.getByText("25");

    expect(title, price).toBeInTheDocument();
  });

  describe('Image Component', () => {

    it('renders img', () => {
      renderWithClient(<Image source={'#'} altText="sample"/>)
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
    })
  })

  describe('Quantity Component', () => {

    it('renders increment button, input, and decrement button', () => {
      renderWithClient(<Quantity />)
      
      const incrementBtn = screen.getByTestId(/increment/i);
      const decrementBtn = screen.getByTestId(/decrement/i);
      const input = screen.getByRole('textbox');

      expect(incrementBtn, input, decrementBtn).toBeInTheDocument();
    })
  })

  describe('ProductButtons Component', () => {

    it('renders add to cart button and Quantity Component', () => {
      renderWithClient(<ProductButtons />)
      
      const addToCartBtn = screen.getByRole('button', { name: /add\sto\scart/i });
      const quantityComp = screen.getByTestId(/quantity/i);

      expect(addToCartBtn, quantityComp).toBeInTheDocument();
    })
  })
})