import React, { createContext, ReactElement, useContext, useState } from "react";
import localStorageKeys from "../../config/local-storage-keys.js";
import getInitialThemeMode from "./get-initial-theme-mode.js";

export type SetOfTheme = "light" | "dark";

const defaultThemeMode: SetOfTheme = "dark";
const initialThemeMode = getInitialThemeMode(localStorageKeys.themeMode, defaultThemeMode);

const ThemeModeContext = createContext<SetOfTheme>(defaultThemeMode);
export const useThemeMode = () => useContext(ThemeModeContext);

const ToggleThemeModeContext = createContext(() => {});
export const useToggleThemeMode = () => useContext(ToggleThemeModeContext);

type Props = {
	children: ReactElement;
};

export default function ProviderThemeMode({ children }: Props) {
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
