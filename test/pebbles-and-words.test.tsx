import userEvent from "@testing-library/user-event"
import { Pebbles } from "../src/component/pebbles"
import { render, screen } from "./test-utils"
import { getPebbleIds } from "../src/helpers/get-pebble-ids"
import { initializeAppState } from "../src/store/initialize-app-state"
import { ProviderAppState } from "../src/store/provider-app-state"
import { WordsGrid } from "../src/component/words-grid"
import { pebbleColors } from "../src/styles/palette"

test.each(getPebbleIds())("putting pebble %i in a word", async (id) => {
  const user = userEvent.setup()
  renderComponent()
  const pebble = screen.getByLabelText(new RegExp(`^galet ${id}$`, "i"))
  const word = screen.getByRole("button", { name: /^mot\s1$/ })

  //pebble should show it’s id
  expect(pebble).toHaveTextContent(new RegExp(`^${id}`))

  //when hold, should show a visual difference
  const initialBorderColor = `border-color: ${pebbleColors[id]}`
  expect(pebble).toHaveStyle(initialBorderColor)
  await user.click(pebble)
  expect(pebble).not.toHaveStyle(initialBorderColor)

  //when clicked in a word while holding a pebble, the word should show the pebble put on him and take its color
  const pebblePutVisual = `background-color: ${pebbleColors[id]}`
  expect(word).toHaveTextContent(/-$/)
  expect(word).not.toHaveStyle(pebblePutVisual)
  await user.click(word)
  expect(word).toHaveTextContent(new RegExp(`${id}$`))
  expect(word).toHaveStyle(pebblePutVisual)
})

test.each(getPebbleIds())("pebble %i stock management", async (id) => {
  const user = userEvent.setup()
  renderComponent()
  const pebbleQuantityRegExp = (quantity: number) => new RegExp(`·{${quantity}}$`)
  const pebble = screen.getByLabelText(new RegExp(`^galet ${id}$`, "i"))
  const word1 = screen.getByRole("button", { name: /^mot\s1$/ })
  const word2 = screen.getByRole("button", { name: /^mot\s2$/ })

  //should show a visual for a quantity of two
  expect(pebble).toHaveTextContent(pebbleQuantityRegExp(2))

  //when first pebble hold and put on a word, should show one less pebble
  await user.click(pebble)
  await user.click(word1)

  expect(pebble).toHaveTextContent(pebbleQuantityRegExp(1))

  //when second pebble hold and put on same word, should show no difference
  await user.click(pebble)
  await user.click(word1)
  expect(pebble).toHaveTextContent(pebbleQuantityRegExp(1))

  //when second pebble hold and put on another word, should show one less pebble
  //and become disabled
  await user.click(pebble)
  await user.click(word2)
  expect(pebble).toHaveTextContent(pebbleQuantityRegExp(0))
  expect(pebble).toBeDisabled()
})

const initialState = initializeAppState()
function renderComponent() {
  render(
    <ProviderAppState initialState={initialState}>
      <>
        <WordsGrid />
        <Pebbles />
      </>
    </ProviderAppState>
  )
}
