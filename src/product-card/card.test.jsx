import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Image, ProductButtons, Quantity } from "./card.jsx";
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