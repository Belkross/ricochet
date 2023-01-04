import React, { useState } from "react";
import ButtonSelectGrid from "./button-select-grid/button-select-grid.js";
import { useGameState } from "./provider-game-state/provider-game-state.js";

export default function InterfaceGame() {
	const [selectedPebble, setSelectedPebble] = useState(null);
	const selectedGrid = useGameState().selectedGrid;

	return (
		<React.Fragment>
			<ButtonSelectGrid id={selectedGrid} />
		</React.Fragment>
	);
}
