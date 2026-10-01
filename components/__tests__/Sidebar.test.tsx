import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Sidebar from "@/components/Sidebar";

describe("Sidebar", () => {
  it("renders a link for every nav item", () => {
    render(<Sidebar />);

    const expected = [
      ["Watchlist", "/watchlist"],
      ["Chart", "/chart"],
      ["Portfolio", "/portfolio"],
    ];

    for (const [label, href] of expected) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href,
      );
    }
  });

  it("exposes the navigation as a labelled landmark", () => {
    render(<Sidebar />);
    expect(
      screen.getByRole("navigation", { name: "Main navigation" }),
    ).toBeInTheDocument();
  });
});
