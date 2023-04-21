import { createContext, useContext } from "react"
import { contextErrorMessage } from "./context-error-message"

export const defaultThemeMode: ThemeMode = "light"

export const ThemeModeContext = createContext<ThemeMode>(defaultThemeMode)
export const useThemeMode = () => useContext(ThemeModeContext)

export const ToggleThemeModeContext = createContext<FlowlessFunction | null>(null)
export const useToggleThemeMode = () => {
  const context = useContext(ToggleThemeModeContext)
  if (!context) throw new Error(contextErrorMessage)
  return context
}
