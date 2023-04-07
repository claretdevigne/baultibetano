import App from "./App"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Connect } from "./database/database"

describe("App component", () => {

  it("Should render catalog component", () => {
    render(<App />)
    const text = "Catálogo"
    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it("Should connect to the database", () => {
    const connect = new Connect()
    render(<App/>)
  
  })
})
