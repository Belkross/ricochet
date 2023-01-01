import React, { ReactNode } from "react";
import MuiTheming from "./MuiTheming.js";
import ThemeMode from "./ThemeMode/index.js";

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
