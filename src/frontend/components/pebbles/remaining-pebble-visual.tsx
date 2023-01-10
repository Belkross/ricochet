import React from "react";
import { Pebble } from "../../types.js";
import { BoardState } from "../interface-game/use-board-state.js";
import { PebbleInventory } from "../interface-game/use-remaining-pebbles.js";
import Typography from "@mui/material/Typography";
import { titleFont } from "../../theme/typographies.js";

type Props = {
	pebbleId: Pebble;
	board: BoardState;
};

export default function RemainingPebbleVisual({ pebbleId, board }: Props) {
	let remainingPebbleVisual = "";
	let numberOfPebbleRemaining = board.remainingPebbles[pebbleId as keyof PebbleInventory];

	while (numberOfPebbleRemaining) {
		remainingPebbleVisual += ".";
		numberOfPebbleRemaining--;
	}

	return <Typography sx={style_remainingPebbleVisual}>{remainingPebbleVisual}</Typography>;
}

const style_remainingPebbleVisual = {
	lineHeight: 0,
	mb: 1.2,
	fontSize: 40,
	letterSpacing: -0.5,
	fontFamily: titleFont,
};
