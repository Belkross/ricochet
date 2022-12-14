import React from "react";
import Box from "@mui/material/Box";
import { BoardState } from "../interface-game/use-board-state.js";
import PebbleList from "./pebble-list.js";

type Props = {
	board: BoardState;
};

export default function Pebbles({ board }: Props) {
	return (
		<Box sx={style_container}>
			<PebbleList board={board} />
		</Box>
	);
}

const style_container = {
	display: "grid",
	gridTemplateColumns: "repeat(6, 1fr)",
	gridTemplateRows: "repeat(2, 1fr)",
	gap: { thinest: 0.5, thin: 0.6 },
	padding: { thinest: 0.7, thin: 2 },
	backgroundColor: "background.paper",
};
