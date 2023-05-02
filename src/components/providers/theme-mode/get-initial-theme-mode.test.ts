import { getInitialThemeMode } from "./get-initial-theme-mode"

describe(`function: ${getInitialThemeMode.name}`, () => {
  const defaultValue = "dark"
  const localStoragKey = "randomName"

  test("no value stored in localStorage", () => {
    const themeModeProvided = getInitialThemeMode(localStoragKey, defaultValue)
    expect(themeModeProvided).toBe(defaultValue)
  })

  test("invalid value stored in localStorage", () => {
    const invalidKey = "invalidTheMode"
    localStorage.setItem(localStoragKey, invalidKey)

    const themeModeProvided = getInitialThemeMode(localStoragKey, defaultValue)

    expect(themeModeProvided).toBe(defaultValue)
  })

  test("valid value and different than default value", () => {
    const validThemeMode = "light"
    localStorage.setItem(localStoragKey, validThemeMode)

    const themeModeProvided = getInitialThemeMode(localStoragKey, defaultValue)

    expect(themeModeProvided).toBe(validThemeMode)
  })
})
