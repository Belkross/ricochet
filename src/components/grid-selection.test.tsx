import { GridSelection } from "./grid-selection"
import { render, screen } from "../helpers/test-utils"
import userEvent from "@testing-library/user-event"

describe(GridSelection.name, () => {
  it("should inform that the first grid is displayed at start", () => {
    render(<GridSelection />)

    const information = screen.getByText(/n°1/)
    expect(information).toBeDefined()
  })

  test("cannot decrement selected grid if it’s number 1", async () => {
    render(<GridSelection />)
    const button = screen.getByLabelText("grille précédente")

    expect(screen.getByText("Grille n°1")).toBeDefined()
    expect(button.hasAttribute("disabled")).toBeTruthy()
  })

  it("should increment the grid when clicking the 'next grid' button", async () => {
    render(<GridSelection />)
    const user = userEvent.setup()
    const button = screen.getByLabelText("grille suivante")

    const firstView = screen.getByText(/n°1/)
    expect(firstView).toBeDefined()

    await user.click(button)
    const secondView = screen.getByText(/n°2/)
    expect(secondView).toBeDefined()
  })
})
