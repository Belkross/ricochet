import React from "react";
import ButtonSelectGrid from "../button-select-grid/button-select-grid.js";
import Instructions from "../instructions/instructions.js";
import Pebbles from "../pebbles/pebbles.js";
import WordsGrid from "../words-grid/words-grid.js";
import useBoardState from "./use-board-state.js";

export default function InterfaceGame() {
	const board = useBoardState();

	return (
		<React.Fragment>
			<ButtonSelectGrid id={board.selectedGrid} />
			<Instructions id={board.selectedGrid} />
			<WordsGrid board={board} />
			<Pebbles board={board} />
		</React.Fragment>
	);
}
