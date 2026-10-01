import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "@/components/Header";

describe("Header", () => {
  it("shows the app name", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Trading App" }),
    ).toBeInTheDocument();
  });
});
