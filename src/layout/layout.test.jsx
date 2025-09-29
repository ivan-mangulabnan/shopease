import { describe, expect, it } from "vitest";
import Layout from "./layout.jsx";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe('Layout Component', () => {

  it('renders banner and main', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    )

    const banner = screen.getByTestId('banner');
    const main = screen.getByRole('main');

    expect(banner, main).toBeInTheDocument();
  });
})