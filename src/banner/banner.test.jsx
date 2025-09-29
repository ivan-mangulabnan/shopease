import { describe, it, expect } from "vitest";
import Banner from "./banner.jsx";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe('Banner Component', () => {

  it('renders both Logo and NavBar', () => {
    render(
      <MemoryRouter>
        <Banner />
      </MemoryRouter>
    );

    const logo = screen.getByRole('heading', { name: /shopease/i });
    const home = screen.getByRole('link', { name: /home/i });
    const shop = screen.getByRole('link', { name: /^shop$/i });
    const cart = screen.getByRole('link', { name: /cart/i });

    expect(logo, home, shop, cart).toBeInTheDocument();
  });
})