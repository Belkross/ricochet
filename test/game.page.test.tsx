import { GamePage } from "#component/game.page"
import { MAX_PEBBLE_ID, MAX_WORD_ID } from "../src/constants"
import { render, screen } from "./test-utils"

test("the game board view should contain these elements", () => {
  render(<GamePage />)

  const title = screen.getByRole("heading", { name: "Ricochet" })
  const ruleButton = screen.getByRole("button", { name: "Règles" })
  const dialogue = screen.getByTestId("grid_dialogue")
  const legalNotice = screen.getByRole("button", { name: /Mentions légales/ })
  const currentGrid = screen.getByText(/Grille n°\d/)
  const nextGridButton = screen.getByRole("button", { name: "grille suivante" })
  const previousGridButton = screen.getByRole("button", { name: "grille précédente" })
  const winConditions = screen.getByTestId("win_conditions")
  const advices = screen.getByTestId("advices")
  const words = screen.getAllByRole("button", { name: /mot n°\d{1,2}/ })
  const pebbles = screen.getAllByRole("button", { name: /galet n°\d{1,2}/ })

  expect(title).toBeVisible()
  expect(ruleButton).toBeVisible()
  expect(dialogue).toBeVisible()
  expect(legalNotice).toBeVisible()
  expect(currentGrid).toBeVisible()
  expect(nextGridButton).toBeVisible()
  expect(previousGridButton).toBeVisible()
  expect(winConditions).toBeVisible()
  expect(advices).toBeVisible()
  expect(words.length).toBe(MAX_WORD_ID)
  expect(pebbles.length).toBe(MAX_PEBBLE_ID)
})
