import userEvent from "@testing-library/user-event"
import { Pebbles } from "./pebbles"
import { render, screen } from "../tests/test-utils"
import { pebbleColors } from "../styles/palette"

describe(`${Pebbles.name}.tsx`, () => {
  test("a pebble display its id", () => {
    render(<Pebbles />)
    const testedPebble = 6
    const pebble = screen.getByLabelText(`galet ${testedPebble}`)

    const idRegexp = new RegExp(testedPebble.toString())
    expect(pebble).toHaveTextContent(idRegexp)
  })

  test("a pebble show a visual difference when it is hold", async () => {
    render(<Pebbles />)
    const user = userEvent.setup()
    const testedPebble = 1
    const pebble = screen.getByLabelText(`galet ${testedPebble}`)
    const nonSelectedStyle = `border-color: ${pebbleColors[testedPebble]}`

    expect(pebble).toHaveStyle(nonSelectedStyle)
    await user.click(pebble)
    expect(pebble).not.toHaveStyle(nonSelectedStyle)
  })
})
