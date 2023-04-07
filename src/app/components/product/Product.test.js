import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Product from "./Product";

describe("Product component", () => {
  it("Should render only one Image", () => {
    render(<Product/>)
    const image = screen.getAllByRole("img")
    expect(image.length).toBe(1)
  })

  it("Should receive a link via prop and pass it to the image", () => {
    const src = "image.png"
    render(<Product src = { src }/>)
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", src)
  })

  it("Should receive a alternative text via prop and pass it to the image", () => {
    const alt = "Texto alternativo"
    render(<Product alt = { alt }/>)
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("alt", alt)
  })

  it("Should render one h3", () => {
    render(<Product/>)
    const h3 = screen.getAllByRole("heading").filter(i => i.tagName === "H3")
    expect(h3.length).toBe(1)
    expect(h3[0].tagName).toBe("H3")
  })

  it("Should receive a title via prop and render it in the h3 element", () => {
    const title = "Titulo"
    render(<Product title={ title }/>)
    const h3 = screen.getAllByRole("heading").filter(i => i.tagName === "H3")
    expect(h3[0].innerHTML).toBe(title)
  })

  it("Should render one h4", () => {
    render(<Product/>)
    const h4 = screen.getAllByRole("heading").filter(i => i.tagName === "H4")
    expect(h4.length).toBe(1)
    expect(h4[0].tagName).toBe("H4")
  })

  it("Should receive a price via prop and render it in the h4 element", () => {
    const price = "20$"
    render(<Product price={ price }/>)
    const h4 = screen.getAllByRole("heading").filter(i => i.tagName === "H4")
    expect(h4[0].innerHTML).toBe(price)
  })

  it("Should render one button", () => {
    render(<Product/>)
    const btn = screen.getAllByRole("button")
    expect(btn.length).toBe(1)
  })

  it("Should call the addToCart function when the button is clicked", () => {
    const addToCart = jest.fn()
    render(<Product addToCart={ addToCart } />)
    const btn = screen.getByRole("button")
    fireEvent.click(btn)
    expect(addToCart).toBeCalledTimes(1)
  })
})