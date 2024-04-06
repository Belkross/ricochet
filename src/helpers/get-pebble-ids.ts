import { MAX_PEBBLE_ID } from "../constants"

export function getPebbleIdsdArray() {
  const array = new Array(MAX_PEBBLE_ID).fill(NaN)

  return array.map((element, index) => index + 1)
}
