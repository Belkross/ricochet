import { GridSelector } from "../../src/component/grid-selector"
import { MAX_GRID_ID } from "#domain"
import { render, screen, userEvent } from "../test-utils"

test("increment and decrement the selected grid", async () => {
  render(<GridSelector />)
  const user = userEvent.setup()

  const buttonPreviousGrid = screen.getByRole("button", { name: "grille précédente" })
  const buttonNextGrid = screen.getByRole("button", { name: "grille suivante" })

  //the component is initialized with the first grid
  expect(screen.getByText("Grille n°1")).toBeInTheDocument()

  //when next grid button clicked, it displays the next grid
  await user.click(buttonNextGrid)
  expect(screen.getByText("Grille n°2")).toBeInTheDocument()

  //when previous grid button clicked, it displays the previous grid
  await user.click(buttonPreviousGrid)
  expect(screen.getByText("Grille n°1")).toBeInTheDocument()
})

test("not allowed to decrement the selected grid when the current one is n°1", async () => {
  render(<GridSelector />)
  const user = userEvent.setup()

  const buttonPreviousGrid = screen.getByRole("button", { name: "grille précédente" })
  const buttonNextGrid = screen.getByRole("button", { name: "grille suivante" })

  expect(buttonPreviousGrid).toBeDisabled()

  await user.click(buttonNextGrid)
  expect(buttonPreviousGrid).toBeEnabled()
})

test("display the ad modal when clicking next grid while current grid is the last one", async () => {
  const user = userEvent.setup()
  render(<GridSelector />)
  const buttonNextGrid = screen.getByRole("button", { name: "grille suivante" })

  let numberOfClicksToReachLastGrid = MAX_GRID_ID - 1
  while (numberOfClicksToReachLastGrid > 0) {
    --numberOfClicksToReachLastGrid
    await user.click(buttonNextGrid)
  }

  //the current grid is the last one
  expect(screen.getByText(`Grille n°${MAX_GRID_ID}`))

  //the next grid button is enabled even if the current grid is the last one
  expect(buttonNextGrid).toBeEnabled()

  //when next grid button clicked, the ad modal should appear
  await user.click(buttonNextGrid)
  const adModal = screen.getByTestId("ad_modal")
  expect(adModal).toBeVisible()

  //the current grid should stay the last one
  expect(screen.getByText(`Grille n°${MAX_GRID_ID}`))
})
