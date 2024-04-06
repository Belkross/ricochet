import { GridSelection } from "../src/component/grid-selection"
import { MAX_GRID_ID, MIN_GRID_ID, OFFICIAL_WEBSITE_NAME, OFFICIAL_WEBSITE_URL } from "../src/constants"
import { initializeAppState } from "../src/store/initialize-app-state"
import { ProviderAppState } from "../src/store/provider-app-state"
import { render, screen } from "./test-utils"
import userEvent from "@testing-library/user-event"

test("nothing")

/* test("allows to navigate between grid 1 and some other grid", async () => {
  const user = userEvent.setup()
  renderComponent({ gridId: MIN_GRID_ID })
  const buttonPreviousGrid = screen.getByRole("button", { name: "grille précédente" })
  const buttonNextGrid = screen.getByRole("button", { name: "grille suivante" })

  //the component is initialized with the first grid
  expect(screen.getByText("Grille n°1")).toBeInTheDocument()

  //the user should not be able to go under grid 1
  expect(buttonPreviousGrid).toBeDisabled()

  //when next grid button clicked, it displays the next grid
  await user.click(buttonNextGrid)
  expect(screen.getByText("Grille n°2")).toBeInTheDocument()

  //now the user should be able to go to a previous grid
  expect(buttonPreviousGrid).toBeEnabled()

  //when previous grid button clicked, it displays the previous grid
  await user.click(buttonPreviousGrid)
  expect(screen.getByText("Grille n°1")).toBeInTheDocument()

  //the user should be not able to go under grid 1
  expect(buttonPreviousGrid).toBeDisabled()
})

test("display a link to the official website when clicking next grid while current grid is the last one", async () => {
  const user = userEvent.setup()
  renderComponent({ gridId: MAX_GRID_ID })
  const buttonNextGrid = screen.getByRole("button", { name: "grille suivante" })

  //the component is initialized with the last grid
  expect(screen.getByText(`Grille n°${MAX_GRID_ID}`))

  //the next grid button is enabled even if the current grid is the last one
  expect(buttonNextGrid).toBeEnabled()

  //no link to the offical website displayed yet
  expect(screen.queryByRole("link", { name: new RegExp(OFFICIAL_WEBSITE_NAME, "i") })).not.toBeInTheDocument()

  //when next grid button clicked, the displayed grid should stay the last one
  await user.click(buttonNextGrid)
  expect(screen.getByText(`Grille n°${MAX_GRID_ID}`))

  //a link to the official website is displayed
  const linkWebsite = screen.getByRole("link", { name: new RegExp(OFFICIAL_WEBSITE_NAME, "i") })
  expect(linkWebsite).toBeInTheDocument()
  expect(linkWebsite).toHaveAttribute("href", OFFICIAL_WEBSITE_URL)
})

function renderComponent(initialState: { gridId: number }) {
  const initialAppState = { ...initializeAppState(), selectedGrid: initialState.gridId }
  render(
    <ProviderAppState initialState={initialAppState}>
      <GridSelection />
    </ProviderAppState>
  )
}
 */
