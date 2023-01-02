import { SetOfTheme } from "./theme-mode.js";

const THEME_MODES = ["light", "dark"];

export default function getInitialThemeMode(localStorageKey: string, defaultThemeMode: SetOfTheme): SetOfTheme {
	const localStorageValue = localStorage.getItem(localStorageKey);
	const localStorageValueIsValid = Boolean(THEME_MODES.find((themeMode) => localStorageValue === themeMode));

	if (localStorageValue && localStorageValueIsValid) return <SetOfTheme>localStorageValue;
	else return defaultThemeMode;
}
