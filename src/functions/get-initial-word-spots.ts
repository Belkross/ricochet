import { maxPebble, minPebble } from "../components/pebbles.js"

export function getInitialWordSpots(storageKey: string, defaultValue: Array<number>): Array<number> {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue === null) {
    return defaultValue
  } else {
    const storedValueIsValid = checkValidity(storedValue)
    const formatedStoredValue = formatToWordSpots(storedValue)
    return storedValueIsValid ? formatedStoredValue : defaultValue
  }
}

function checkValidity(storedValue: string): boolean {
  const wordSpots = formatToWordSpots(storedValue)

  return wordSpots.every((number) => {
    const isNaN = Number.isNaN(number)
    const isInPebbleRange = number >= minPebble && number <= maxPebble
    return isNaN || isInPebbleRange
  })
}

function formatToWordSpots(string: string): Array<number> {
  const strings = string.split(",")
  return strings.map((string) => Number.parseInt(string, 10))
}
