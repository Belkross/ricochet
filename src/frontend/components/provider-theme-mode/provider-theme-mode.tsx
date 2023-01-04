import React, { createContext, ReactElement, useContext, useState } from "react";
import localStorageKeys from "../../config/local-storage-keys.js";
import getInitialThemeMode from "./get-initial-theme-mode.js";

interface ProviderThemeModeProps {
	children: ReactElement;
}

export type SetOfTheme = "light" | "dark";

const defaultThemeMode: SetOfTheme = "dark";
const initialThemeMode = getInitialThemeMode(localStorageKeys.themeMode, defaultThemeMode);

const ThemeModeContext = createContext(defaultThemeMode as SetOfTheme);
export const useThemeMode = () => useContext(ThemeModeContext);

const ToggleThemeModeContext = createContext(() => {});
export const useToggleThemeMode = () => useContext(ToggleThemeModeContext);

export default function ProviderThemeMode({ children }: ProviderThemeModeProps) {
	const [themeMode, setThemeMode] = useState(initialThemeMode);

	const toggleThemeMode = (): void => {
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
