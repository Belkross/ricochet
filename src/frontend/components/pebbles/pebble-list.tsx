import React from "react";
import { BoardState } from "../interface-game/use-board-state.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pebble } from "../../types.js";
import handleClickPebble from "./handle-click-pebble.js";
import { PebbleInventory } from "../interface-game/use-remaining-pebbles.js";
import RemainingPebbleVisual from "./remaining-pebble-visual.js";
const PEBBLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

type Props = {
	board: BoardState;
};

export default function PebbleList({ board }: Props) {
	const list_pebbles = PEBBLES.map((pebbleId: Pebble) => {
		const handleClick = (pebbleId: Pebble) => handleClickPebble(pebbleId, board);

		return (
			<Button key={pebbleId} sx={style_pebble(pebbleId, board)} onClick={() => handleClick(pebbleId)}>
				<Typography>{pebbleId}</Typography>
				<RemainingPebbleVisual pebbleId={pebbleId} board={board} />
			</Button>
		);
	});

	return <React.Fragment>{list_pebbles}</React.Fragment>;
}

const style_pebble = (pebbleId: Pebble, board: BoardState) => {
	const somePebbleAvailable = board.remainingPebbles[pebbleId as keyof PebbleInventory] > 0;
	const selectedPebbleColor = `pebbles.${pebbleId}`;

	return {
		display: "flex",
		flexDirection: "column",
		backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
		borderColor: board.selectedPebble === pebbleId ? "white" : selectedPebbleColor,
		borderWidth: { thinest: "1px", thin: "2px" },
		color: somePebbleAvailable ? "text.pebbles" : "text.pebbleEmpty",
		padding: "6px",
		minWidth: { thinest: "45px", thin: "55px", medium: "64px" },
		gridColumnStart: pebbleId === 11 ? 5 : "initial",
		gridColumnEnd: pebbleId === 11 ? 7 : "initial",
		"&:hover": {
			borderWidth: { thinest: "1px", thin: "2px" },
			borderColor: board.selectedPebble === pebbleId ? "white" : selectedPebbleColor,
			backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
			color: "white",
		},
	};
};
