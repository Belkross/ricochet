import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { SetOfTheme } from "../components/ThemeMode/index.js";
import breakpoints from "./breakpoints.js";
import shape from "./shapes.js";
import { palettes } from "./palettes.js";
import addThemeComponents from "./components.js";
import addThemeTypographies from "./typographies.js";


export default function createMuiTheme(mode: SetOfTheme) {
	let theme = createTheme({
		breakpoints: { values: { ...breakpoints } },
		palette: { mode, ...palettes[mode] },
		shape,
	});

	theme = addThemeComponents(theme);
	theme = addThemeTypographies(theme);
	theme = responsiveFontSizes(theme);

	return theme;
}

/* typographies and default components might need palette/breakpoints/shape
values to define things and that’s why we need to create the theme in two
steps */
