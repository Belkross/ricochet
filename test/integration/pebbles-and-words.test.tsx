import { Pebbles } from "../../src/component/pebbles"
import { render, screen, userEvent } from "../test-utils"
import { WordsGrid } from "../../src/component/words-grid"
import { pebbleColors } from "../../src/styles/palette"

function renderComponent() {
  render(
    <>
      <WordsGrid />
      <Pebbles />
    </>
  )
}

test("each pebble should show its id", () => {
  renderComponent()

  const pebbles = screen.getAllByRole("button", { name: /galet n°/ })

  for (const [index, pebble] of pebbles.entries()) {
    const pebbleId = index + 1

    //the pebble should show it’s id
    expect(pebble).toHaveTextContent(new RegExp(String(pebbleId)))
  }
})

test("putting a pebble in a word", async () => {
  renderComponent()
  const user = userEvent.setup()

  const pebbleId = 1
  const pebble1 = screen.getByRole("button", { name: `galet n°${pebbleId}` })
  const word1 = screen.getByRole("button", { name: "mot n°1" })

  //when holding the pebble, it should show a visual difference
  const initialBorderColor = `border-color: ${pebbleColors[pebbleId]}`
  expect(pebble1).toHaveStyle(initialBorderColor)
  await user.click(pebble1)
  expect(pebble1).not.toHaveStyle(initialBorderColor)

  //when clicking in a word while holding a pebble, the word should show the pebble id
  expect(word1).not.toHaveTextContent(new RegExp(String(pebbleId)))
  await user.click(word1)
  expect(word1).toHaveTextContent(new RegExp(String(pebbleId)))
})

test("pebble stock management", async () => {
  renderComponent()
  const user = userEvent.setup()

  const pebble = screen.getByRole("button", { name: /^galet n°1$/ })
  const word1 = screen.getByRole("button", { name: /^mot n°1$/ })
  const word2 = screen.getByRole("button", { name: /^mot n°2$/ })

  //putting a pebble on a word should decrement the quantity
  expect(pebble).toBeEnabled()
  await user.click(pebble)
  await user.click(word1)
  expect(pebble).toBeEnabled()

  //putting a second pebble in another word should disable the pebble
  await user.click(pebble)
  await user.click(word2)
  expect(pebble).toBeDisabled()

  //clicking on a word that contains a pebble should increment the quantity
  await user.click(word2)
  expect(pebble).toBeEnabled()
})
