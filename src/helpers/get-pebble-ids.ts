import { MAX_PEBBLE_ID } from "../constants"

export function getPebbleIds() {
  const array = Array(MAX_PEBBLE_ID).fill(NaN)
  return array.map((element, index) => {
    return index + 1
  })
}
