import { createContext, useContext, ReactElement, useState } from "react"
import { localStorageKeys } from "../config/local-storage-keys.js"
import { doNothing } from "../functions/do-nothing.js"
import { getInitialThemeMode } from "../functions/get-initial-theme-mode.js"

const defaultThemeMode: ThemeMode = "light"
const initialThemeMode = getInitialThemeMode(localStorageKeys.themeMode, defaultThemeMode)

const ThemeModeContext = createContext<ThemeMode>(defaultThemeMode)
export const useThemeMode = () => useContext(ThemeModeContext)

const ToggleThemeModeContext = createContext(doNothing)
export const useToggleThemeMode = () => useContext(ToggleThemeModeContext)

type Props = {
  children: ReactElement
}

export function ProviderThemeMode({ children }: Props) {
  const [themeMode, setThemeMode] = useState(initialThemeMode)

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
