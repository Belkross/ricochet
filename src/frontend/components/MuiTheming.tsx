import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../theme/createMuiTheme.js";
import { ThemeModeContext } from "./ThemeMode/index.js";
import { SetOfTheme } from "./ThemeMode/index.js";

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
