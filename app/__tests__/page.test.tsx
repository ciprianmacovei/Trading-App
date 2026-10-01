import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "@/app/page";

describe("Home page", () => {
  it("shows the app name in the header", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Trading App" }),
    ).toBeInTheDocument();
  });

  it("renders the header, sidebar and main area", () => {
    render(<Home />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("complementary")).toBeInTheDocument();
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  it("links to watchlist, chart and portfolio", () => {
    render(<Home />);
    for (const label of ["Watchlist", "Chart", "Portfolio"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });
});
