import { render, screen } from "@testing-library/react"
import Catalog from "./Catalog"

describe("Catalog component", () => {
  it("Should render a component", () => {
    render(<Catalog/>)
    expect(<Catalog/>).toBeDefined()
  })

  it("Should have an h2", () => {
    const heading = render(<Catalog/>).getByRole("heading")
    expect(heading.tagName).toBe("H2")
  })

  it("Should render the text 'Catalog'", () => {
    render(<Catalog/>)
    screen.getAllByText(/catálogo/i)
  })

  it("Should render a Product component per every item in the prop list", () => {
    let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    render(<Catalog images={ images }/>)
    const productComponent = screen.getAllByRole("img")
    expect(productComponent.length).toBe(images.length)
  })
})