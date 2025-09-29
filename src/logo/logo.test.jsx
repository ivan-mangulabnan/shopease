import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Logo from "./logo.jsx";
import { MemoryRouter, createMemoryRouter, RouterProvider } from "react-router";
import { routes } from "../router.jsx";

describe('Logo Component', () => {
  it('renders the logo text', () => {

    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    )

    const logo = screen.getByRole('link');

    expect(logo).toHaveTextContent(/shopease/i);
  })

  it('navigates to home when logo is clicked', async () => {

    const router = createMemoryRouter(routes, { initialEntries: ['/shop'] });
    render(<RouterProvider router={router}/>)

    const logo = screen.getByRole('link', { name: /shopease/i} );

    await userEvent.click(logo);

    const homePage = screen.getByTestId('home-page');

    expect(homePage).toBeInTheDocument();
  })
})