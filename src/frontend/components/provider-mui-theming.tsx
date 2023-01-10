import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createMuiTheme from "../theme/create-mui-theme.js";
import { useThemeMode } from "./provider-theme-mode/provider-theme-mode.js";

type Props = {
	children: ReactNode;
};

export default function ProviderMuiTheming({ children }: Props) {
	const themeMode = useThemeMode();

	return (
		<ThemeProvider theme={createMuiTheme(themeMode)}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
