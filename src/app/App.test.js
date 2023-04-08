import App from "./App"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Connect } from "./database/database"

describe("App component", () => {

  it("Should render catalog component", () => {
    render(<App />)
    const text = "Catálogo"
    const h2 = screen.getAllByText(text).filter(i => i.tagName.includes("H2"))
    expect(h2[0]).toBeInTheDocument()
  })
})
