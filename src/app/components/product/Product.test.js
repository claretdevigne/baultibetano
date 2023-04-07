import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product component", () => {
  it("Should render an Image", () => {
    render(<Product/>)
    const image = screen.getAllByRole("img")
    expect(image).toBeInTheDocument()
  })
})