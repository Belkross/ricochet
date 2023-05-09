import userEvent from "@testing-library/user-event"
import { Pebbles } from "../../components/pebbles"
import { render, screen } from "../test-utils"
import { getPebbleIds } from "../../helpers/get-pebble-ids"
import { initializeAppState } from "../../store/initialize-app-state"
import { ProviderAppState } from "../../store/provider-app-state"
import { WordsGrid } from "../../components/words-grid"

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
