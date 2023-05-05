import userEvent from "@testing-library/user-event"
import { Pebbles } from "../../components/pebbles"
import { render, screen } from "../test-utils"
import { pebbleColors } from "../../styles/palette"
import { getRandomInteger } from "../../helpers/get-random-integer"
import { MAX_PEBBLE_ID, MIN_PEBBLE_ID } from "../../constants"

describe(`${Pebbles.name}.tsx`, () => {
  test("a pebble display its id", () => {
    render(<Pebbles />)
    const testedPebble = getRandomInteger(MIN_PEBBLE_ID, MAX_PEBBLE_ID)
    const idRegexp = new RegExp(testedPebble.toString())

    expect(screen.getByLabelText(`galet ${testedPebble}`)).toHaveTextContent(idRegexp)
  })

  test("a pebble show a visual difference when it is hold", async () => {
    render(<Pebbles />)
    const user = userEvent.setup()
    const testedPebble = getRandomInteger(MIN_PEBBLE_ID, MAX_PEBBLE_ID)
    const pebble = screen.getByLabelText(`galet ${testedPebble}`)
    const nonSelectedStyle = `border-color: ${pebbleColors[testedPebble]}`

    expect(pebble).toHaveStyle(nonSelectedStyle)
    await user.click(pebble)
    expect(pebble).not.toHaveStyle(nonSelectedStyle)
  })
})
