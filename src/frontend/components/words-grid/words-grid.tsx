import React from "react";
import Box from "@mui/material/Box";
import { BoardState } from "../interface-game/use-board-state.js";
import WordsList from "./words-list.js";

type Props = {
	board: BoardState;
};

export default function WordsGrid({ board }: Props) {
	return (
		<Box sx={style_container}>
			<WordsList board={board} />
		</Box>
	);
}

const style_container = {
	display: "grid",
	gridTemplateColumns: "repeat(5, 1fr)",
	gridTemplateRows: "repeat(5, 1fr)",
	gap: { thinest: 0.5 },
	mb: { thinest: 1, thin: 2 },
	backgroundColor: "background.paper",
	padding: { thinest: 1, thin: 3 },
};
