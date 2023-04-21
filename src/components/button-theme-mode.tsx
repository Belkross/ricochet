import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import { Button } from "@mui/material"
import { useThemeMode, useToggleThemeMode } from "../contexts/context-theme-mode"

export function ButtonThemeMode() {
  const themeMode = useThemeMode()
  const toggleThemeMode = useToggleThemeMode()

  const icon = themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />

  const handleClick = () => toggleThemeMode()

  return (
    <Button onClick={handleClick} startIcon={icon}>
      Thème
    </Button>
  )
}
