import React, { ReactNode } from "react";
import MuiTheming from "./mui-theming.js";
import ThemeMode from "./theme-mode/theme-mode.js";

interface GlobalFeaturesProps {
	children: ReactNode;
}

export default function GlobalFeatures({ children }: GlobalFeaturesProps) {
	return (
		<ThemeMode>
			<MuiTheming>{children}</MuiTheming>
		</ThemeMode>
	);
}
