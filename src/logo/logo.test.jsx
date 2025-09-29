import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Logo from "./logo.jsx";
import { MemoryRouter } from "react-router";

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
})