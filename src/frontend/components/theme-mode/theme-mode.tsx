import React, { createContext, ReactNode, useState } from "react";
import localStorageKeys from "../../config/local-storage-keys.js";
import getInitialThemeMode from "./get-initial-theme-mode.js";

interface ThemeModeProps {
	children: ReactNode;
}

export type SetOfTheme = "light" | "dark";

const defaultThemeMode = "dark";
const initialThemeMode = getInitialThemeMode(localStorageKeys.themeMode, defaultThemeMode);

export const ThemeModeContext = createContext(defaultThemeMode);
export const ToggleThemeModeContext = createContext(() => {});

export default function ThemeMode({ children }: ThemeModeProps) {
	const [themeMode, setThemeMode] = useState(initialThemeMode);

	const toggleThemeMode = () => {
		const newState = themeMode === "dark" ? "light" : "dark";
		setThemeMode(newState);
		localStorage.setItem(localStorageKeys.themeMode, newState);
	};

	return (
		<ThemeModeContext.Provider value={themeMode}>
			<ToggleThemeModeContext.Provider value={toggleThemeMode}>{children}</ToggleThemeModeContext.Provider>
		</ThemeModeContext.Provider>
	);
}
