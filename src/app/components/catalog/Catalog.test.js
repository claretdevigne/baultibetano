import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Catalog from "./Catalog"

describe("Catalog component", () => {
  it("Should render an h2", () => {
    const heading = render(<Catalog/>).getByRole("heading", { level: 2})
    expect(heading).toBeInTheDocument()
  })

  it("Should render the text 'Catálogo'", () => {
    render(<Catalog/>)
    screen.getAllByText(/catálogo/i)
  })

  it("Should render a Product component per every item in a list received by props", () => {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    render(<Catalog data={ list }/>)
    const productComponent = screen.getAllByRole("img")
    expect(productComponent.length).toBe(list.length)
  })

  it("Should receive a list of objects with 4 properties (src, alt, title and price)", () => {
    const productData = [{
      src: "image.png",
      alt: "Text alternativo",
      title: "Producto 1",
      price: "Precio"
    }]

    render(<Catalog data={ productData } />)
    screen.getAllByRole("img").map((i, k) => expect(i).toHaveAttribute("src", productData[k].src))
    screen.getAllByRole("img").map((i, k) => expect(i).toHaveAttribute("alt", productData[k].alt))
    productData.map(i => expect(screen.getByText(i.title)).toBeInTheDocument())
    productData.map(i => expect(screen.getByText(i.price)).toBeInTheDocument())
  })
})