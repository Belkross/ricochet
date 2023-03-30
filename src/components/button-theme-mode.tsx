import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import IconButton from "@mui/material/IconButton"
import { useThemeMode, useToggleThemeMode } from "./provider-theme-mode.js"

export function ButtonThemeMode() {
  const themeMode = useThemeMode()
  const toggleThemeMode = useToggleThemeMode()

  const icon = themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />

  const handleClick = () => toggleThemeMode()

  return <IconButton onClick={handleClick}>{icon}</IconButton>
}
