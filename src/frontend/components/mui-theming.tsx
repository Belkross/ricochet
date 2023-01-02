import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../theme/create-mui-theme.js";
import { ThemeModeContext } from "./theme-mode/theme-mode.js";
import { SetOfTheme } from "./theme-mode/theme-mode.js";

type MuiThemingProps = {
	children: ReactNode;
};

export default function MuiTheming({ children }: MuiThemingProps) {
	const themeMode = React.useContext(ThemeModeContext);

	return (
		<ThemeProvider theme={createMuiTheme(themeMode as SetOfTheme)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
