import React, { ReactElement } from "react";
import ProviderGameState from "./provider-game-state/provider-game-state.js";
import ProviderMuiTheming from "./provider-mui-theming.js";
import ProviderThemeMode from "./provider-theme-mode/provider-theme-mode.js";

interface GlobalFeaturesProps {
	children: ReactElement;
}

export default function GlobalFeatures({ children }: GlobalFeaturesProps) {
	return (
		<ProviderThemeMode>
			<ProviderMuiTheming>
				<ProviderGameState>{children}</ProviderGameState>
			</ProviderMuiTheming>
		</ProviderThemeMode>
	);
}
