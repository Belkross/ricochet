import { createContext, useContext } from "react"
import { OutOfProviderContextError } from "./context.error"

export const defaultThemeMode: ThemeMode = "light"

export const ThemeModeContext = createContext<ThemeMode>(defaultThemeMode)
export const useThemeMode = () => useContext(ThemeModeContext)

export const ToggleThemeModeContext = createContext<FlowlessFunction | null>(null)
export const useToggleThemeMode = () => {
  const context = useContext(ToggleThemeModeContext)
  if (!context) throw new OutOfProviderContextError()
  return context
}
