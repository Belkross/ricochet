import { minGridId, maxGridId } from "../assets/grids"

export function getInitialGridId(storageKey: string, defaultValue: number): number {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue === null) {
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
