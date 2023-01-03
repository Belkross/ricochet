import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";
import { ThemeModeContext, ToggleThemeModeContext } from "./provider-theme-mode/provider-theme-mode.js";

export default function ButtonThemeMode() {
	const themeMode = useContext(ThemeModeContext);
	const toggleThemeMode = useContext(ToggleThemeModeContext);
	const icon = themeMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />;

	const handleClick = () => toggleThemeMode();

	return <IconButton onClick={handleClick}>{icon}</IconButton>;
}
