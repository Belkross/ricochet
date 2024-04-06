import { MAX_GRID_ID, MIN_GRID_ID } from "../constants"

export function getInitialGridId(storageKey: string, defaultValue: number): number {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue === null) return defaultValue

  const storedValueIsValid = checkValidity(storedValue)
  const formatedStoredValue = Number.parseInt(storedValue, 10)
  return storedValueIsValid ? formatedStoredValue : defaultValue
}

function checkValidity(storedValue: string): boolean {
  const regExp = new RegExp(`^[${MIN_GRID_ID}-${MAX_GRID_ID}]$`)
  return regExp.test(storedValue)
}
