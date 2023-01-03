import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../theme/create-mui-theme.js";
import { ThemeModeContext } from "./provider-theme-mode/provider-theme-mode.js";
import { SetOfTheme } from "./provider-theme-mode/provider-theme-mode.js";

type ProviderMuiThemingProps = {
	children: ReactNode;
};

export default function ProviderMuiTheming({ children }: ProviderMuiThemingProps) {
	const themeMode = React.useContext(ThemeModeContext);

	return (
		<ThemeProvider theme={createMuiTheme(themeMode as SetOfTheme)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
