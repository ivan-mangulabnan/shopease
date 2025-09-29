import { describe, it, expect, beforeEach, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { routes } from "../router.jsx";
import { createMemoryRouter, RouterProvider, MemoryRouter } from "react-router";
import NavBar from "./navbar.jsx";
import userEvent from "@testing-library/user-event";

describe('NavBar Component', () => {

  it('renders home, shop, and cart components', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    const home = screen.getByRole('link', { name: /home/i });
    const shop = screen.getByRole('link', { name: /shop/i });
    const cart = screen.getByRole('link', { name: /cart/i });

    expect(home, shop, cart).toBeInTheDocument();
  });

  test('if home navigates to home when clicked', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop'] });
    render(<RouterProvider router={router}/>);

    const home = screen.getByRole('link', { name: /home/i });

    await userEvent.click(home);

    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  test('if shop navigates to shop when clicked', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router}/>);

    const shop = screen.getByRole('link', { name: /^shop$/i });

    await userEvent.click(shop);

    const shopPage = screen.getByTestId('shop-page');
    expect(shopPage).toBeInTheDocument();
  });

    test('if cart navigates to cart when clicked', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/'] });
    render(<RouterProvider router={router}/>);

    const cart = screen.getByRole('link', { name: /cart/i });

    await userEvent.click(cart);

    const cartPage = screen.getByTestId('cart-page');
    expect(cartPage).toBeInTheDocument();
  });
})