import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Header from "./Header"

describe("Header component", () => {
  it("Should be defined", () => {
    const header = render(<Header/>)
  })

  it("Should render the logo from 'https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/logo.png' image", () => {
    render(<Header/>)
    const img = screen.getAllByRole("img")
    expect(img.some(i => i.getAttribute("src") === "https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/logo.png")).toBe(true)
  })

  it("Should render the title from 'https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/title.png'", () => {
    render(<Header/>)
    const img = screen.getAllByRole("img")
    expect(img.some(i => i.getAttribute("src") === "https://raw.githubusercontent.com/claretdevigne/baultibetano-data/main/branding/title.png")).toBe(true)
  })

  it("Should render 2 options (Inicio, Catálogo) component", () => {
    render(<Header/>)
    const text = screen.getByText(/inicio/i)
    const text2 = screen.getByText(/catálogo/i)
    expect(text).toBeInTheDocument()
    expect(text2).toBeInTheDocument()
  })

  it("Should render the options in the center with a separation", () => {
    render(<Header/>)
    const menuContainer = screen.getByText(/inicio/i).parentElement
    expect(menuContainer.style.justifyContent).toBe("center")
    expect(+menuContainer.style.gap[0] > 0).toBe(true)
  })

  it("Should render the two options in a row", () => {
    render(<Header/>)
    let inicio = screen.getByText(/inicio/i).parentElement
    let catalogo = screen.getByText(/catálogo/i).parentElement
    expect(inicio === catalogo).toBe(true)
    expect(inicio.style.display).toBe("flex")
    expect(inicio.style.flexDirection).toBe("row")
  })
})