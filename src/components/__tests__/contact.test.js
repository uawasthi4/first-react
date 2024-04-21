import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("Should load contact us component", () => {
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact component", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    const button = screen.getByPlaceholderText("Name");

    expect(button).toBeInTheDocument();
  });

  it("Should load 2 input boxes in contact component", () => {
    // querying
    const inputBoxes = screen.getAllByRole("textbox");

    // assertion
    // expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
