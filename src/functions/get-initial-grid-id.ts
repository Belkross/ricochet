import { maxGridId, minGridId } from "../assets/grids.js"

export function getInitialGridId(storageKey: string, defaultValue: number): number {
  const storedValue = localStorage.getItem(storageKey)
  const storedValueNull = typeof storedValue === "object"

  if (storedValueNull) {
    return defaultValue
  } else {
    const storedValueIsValid = checkValidity(storedValue)
    const formatedStoredValue = Number.parseInt(storedValue, 10)
    return storedValueIsValid ? formatedStoredValue : defaultValue
  }
}

function checkValidity(storedValue: string): boolean {
  const regExp = new RegExp(`^[${minGridId}-${maxGridId}]$`)
  return regExp.test(storedValue)
}
