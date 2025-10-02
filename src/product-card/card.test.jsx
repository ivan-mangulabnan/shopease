import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi, test, beforeEach } from "vitest";
import ProductCard, { Image, ProductButtons, Quantity } from "./card.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import { CartContext } from "../cart-context.jsx";

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
    renderWithClient(
      <CartContext.Provider value={{ cart: [], setCart: () => {} }}>
        <ProductCard product={sampleProduct}/>
      </CartContext.Provider>
    );

    const ImageComp = screen.getByTestId(/imagecomponent/i);
    const title = screen.getByTestId(/prodtitle/i);
    const price = screen.getByTestId(/prodprice/i);
    const ProductButtonsComp = screen.getByTestId(/productbuttonscomponent/i);

    expect(ImageComp, title, price, ProductButtonsComp).toBeInTheDocument();
  });

  it('renders passed product object', () => {
    const sampleProduct = { title: 'item', price: '25', image: '#' }

    renderWithClient(
      <CartContext.Provider value={{ cart: [], setCart: () => {} }}>
        <ProductCard product={sampleProduct}/>
      </CartContext.Provider>
    );

    const title = screen.getByText("item");
    const price = screen.getByText("25");

    expect(title, price).toBeInTheDocument();
  });

  describe('Image Component', () => {

    it('renders img', () => {
      renderWithClient(<Image source={'#'} altText="sample"/>)
      const img = screen.getByRole('img', { name: 'sample' });
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
    });

    it('displays passed value and calls passed function', async () => {
      const mockValue = 'sample';
      const mockOnChange = vi.fn();

      renderWithClient(<Quantity value={mockValue} onChange={mockOnChange}/>);

      const input = screen.getByDisplayValue('sample');

      expect(input).toBeInTheDocument();

      await userEvent.type(input, 'a');

      expect(mockOnChange).toBeCalled();
    });
  })

  describe('ProductButtons Component', () => {

    let mockFn;

    beforeEach(() => {
      mockFn = vi.fn();

      renderWithClient(
        <CartContext.Provider value={{ cart: [], setCart: mockFn }}>
          <ProductButtons />
        </CartContext.Provider>
      )
    })

    it('renders add to cart button and Quantity Component', () => {
      
      const addToCartBtn = screen.getByRole('button', { name: /add\sto\scart/i });
      const quantityComp = screen.getByTestId(/quantity/i);

      expect(addToCartBtn, quantityComp).toBeInTheDocument();
    });

    test('if input changes values upon user event', async () => {
      
      const input = screen.getByRole('textbox');

      await userEvent.clear(input);
      await userEvent.type(input, 'test');

      expect(input).toHaveValue('test');
    }); 
    
    test('if decrement and increment button adds and subtracts 1 every click', async () => {
      
      const incrementBtn = screen.getByTestId(/incrementbtn/i);
      const decrementBtn = screen.getByTestId(/decrementbtn/i);
      const input = screen.getByRole('textbox');

      await userEvent.click(incrementBtn);
      await userEvent.click(incrementBtn);
      await userEvent.click(decrementBtn);

      expect(input).toHaveValue("2");
    });

    it('disables decrement if value is empty or isNaN', async () => {
      
      const incrementBtn = screen.getByTestId(/incrementbtn/i);
      const decrementBtn = screen.getByTestId(/decrementbtn/i);
      const input = screen.getByRole('textbox');

      await userEvent.clear(input);

      expect(decrementBtn).toBeDisabled();

      await userEvent.type(input, 'test');

      expect(decrementBtn).toBeDisabled();

      await userEvent.clear(input);
      await userEvent.type(input, '12');

      expect(decrementBtn).not.toBeDisabled();
    });

    it('does not decrement when value is zero or less', async () => {

      const decrementBtn = screen.getByTestId(/decrementbtn/i);
      const input = screen.getByRole('textbox');

      await userEvent.click(decrementBtn);

      expect(input).toHaveDisplayValue('0');

      await userEvent.clear(input);
      await userEvent.type(input, '-1');
      await userEvent.click(decrementBtn);

      expect(input).toHaveDisplayValue('-1');
    })

    it('calls contextProvider fn when add to cart is pressed', async () => {

      const addToCartBtn = screen.getByRole('button', { name: /add to cart/i });
      const incrementBtn = screen.getByTestId(/incrementbtn/i);

      await userEvent.click(incrementBtn);
      await userEvent.click(addToCartBtn);

      expect(mockFn).toHaveBeenCalled();
    })
  })
})