import { getInitialThemeMode } from "./get-initial-theme-mode.js"

describe(`function: ${getInitialThemeMode.name}`, () => {
  const defaultValue = "dark"
  const localStoragKey = "randomName"

  test("no value stored in localStorage", () => {
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(defaultValue)
  })

  test("invalid value stored in localStorage", () => {
    localStorage.setItem(localStoragKey, "invalidTheMode")
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(defaultValue)
  })

  test("valid value and different than default value", () => {
    const validThemeMode = "light"
    localStorage.setItem(localStoragKey, validThemeMode)
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(validThemeMode)
  })
})
