export function getInitialThemeMode(storageKey: string, defaultValue: ThemeMode): ThemeMode {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue === null) {
    return defaultValue
  } else {
    const storedValueIsValid = storedValue === "dark" || storedValue === "light"
    return storedValueIsValid ? storedValue  : defaultValue
  }
}

