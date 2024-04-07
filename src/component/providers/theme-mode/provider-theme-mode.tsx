import { ReactElement, useState } from "react"
import { defaultThemeMode, ThemeModeContext, ToggleThemeModeContext } from "../../../context/context-theme-mode"
import { getInitialThemeMode } from "./get-initial-theme-mode"

type Props = {
  children: ReactElement
}

const localStorageKey = "themeMode"

export function ProviderThemeMode({ children }: Props) {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode(localStorageKey, defaultThemeMode))

  const toggleThemeMode = () => {
    const newState = themeMode === "dark" ? "light" : "dark"
    setThemeMode(newState)
    localStorage.setItem(localStorageKey, newState)
  }

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ToggleThemeModeContext.Provider value={toggleThemeMode}>{children}</ToggleThemeModeContext.Provider>
    </ThemeModeContext.Provider>
  )
}
