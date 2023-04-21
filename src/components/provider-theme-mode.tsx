import { ReactElement, useState } from "react"
import { localStorageKeys } from "../config/local-storage-keys"
import { defaultThemeMode, ThemeModeContext, ToggleThemeModeContext } from "../contexts/context-theme-mode"
import { getInitialThemeMode } from "../functions/get-initial-theme-mode"

type Props = {
  children: ReactElement
}

export function ProviderThemeMode({ children }: Props) {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode(localStorageKeys.themeMode, defaultThemeMode))

  const toggleThemeMode = () => {
    const newState = themeMode === "dark" ? "light" : "dark"
    setThemeMode(newState)
    localStorage.setItem(localStorageKeys.themeMode, newState)
  }

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ToggleThemeModeContext.Provider value={toggleThemeMode}>{children}</ToggleThemeModeContext.Provider>
    </ThemeModeContext.Provider>
  )
}
