import React, { ReactElement } from "react";
import AlertFeature from "./alert-feature/alert-feature.js";
import ProviderGameState from "./provider-game-state/provider-game-state.js";
import ProviderMuiTheming from "./provider-mui-theming.js";
import ProviderThemeMode from "./provider-theme-mode/provider-theme-mode.js";

type Props = {
	children: ReactElement;
};

export default function GlobalFeatures({ children }: Props) {
	return (
		<ProviderThemeMode>
			<ProviderMuiTheming>
				<AlertFeature />
				<ProviderGameState>{children}</ProviderGameState>
			</ProviderMuiTheming>
		</ProviderThemeMode>
	);
}
