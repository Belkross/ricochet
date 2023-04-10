import { getInitialThemeMode } from "./get-initial-theme-mode.js"

describe(getInitialThemeMode.name, () => {
  const defaultValue = "dark"
  const localStoragKey = "randomName"

  test("nothing is stored", () => {
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(defaultValue)
  })

  test("localStorage key is invalid", () => {
    expect(getInitialThemeMode("notValidKey", defaultValue)).toBe(defaultValue)
  })

  test("something invalid is stored", () => {
    localStorage.setItem(localStoragKey, "invalidTheMode")
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(defaultValue)
  })

  test("something valid and different than defaultValue is stored", () => {
    const validThemeMode = "light"
    localStorage.setItem(localStoragKey, validThemeMode)
    expect(getInitialThemeMode(localStoragKey, defaultValue)).toBe(validThemeMode)
  })
})
