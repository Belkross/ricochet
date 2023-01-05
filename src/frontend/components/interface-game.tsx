import React, { useState } from "react";
import { Pebble } from "../types.js";
import ButtonSelectGrid from "./button-select-grid/button-select-grid.js";
import Instructions from "./instructions/instructions.js";
import Pebbles from "./pebbles/pebbles.js";
import { useGameState } from "./provider-game-state/provider-game-state.js";
import WordsGrid from "./words-grid.js";

export default function InterfaceGame() {
	const [selectedPebble, setSelectedPebble] = useState<Pebble>(null);
	const selectedGrid = useGameState().selectedGrid;

	return (
		<React.Fragment>
			<ButtonSelectGrid id={selectedGrid} />
			<Instructions id={selectedGrid} />
			<WordsGrid selectedPebble={selectedPebble} setSelectedPebble={setSelectedPebble} />
			<Pebbles selectedPebble={selectedPebble} setSelectedPebble={setSelectedPebble} />
		</React.Fragment>
	);
}
