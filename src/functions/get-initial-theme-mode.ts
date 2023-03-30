export function getInitialThemeMode(storageKey: string, defaultThemeMode: ThemeMode): ThemeMode {
  const storedValue = localStorage.getItem(storageKey)

  if (storedValue === null) {
    return defaultThemeMode
  } else {
    const storedValueIsValid = /^(dark|light)$/.test(storedValue)
    return storedValueIsValid ? (storedValue as ThemeMode) : defaultThemeMode
  }
}
