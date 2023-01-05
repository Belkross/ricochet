import React, { Dispatch, SetStateAction } from "react";
import getRemainingPebbles, { PebbleInventory } from "./get-remaining-pebbles.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pebble } from "../../types.js";
import getRemainingPebbleVisual from "./get-remaining-pebble-visual.js";

const pebbles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

type Props = {
	selectedPebble: Pebble;
	setSelectedPebble: Dispatch<SetStateAction<Pebble>>;
};

export default function Pebbles({ selectedPebble, setSelectedPebble }: Props) {
	const remainingPebbles = getRemainingPebbles();

	const handleClick = (pebbleId: Pebble) => {
		const pebbleAlreadySelected = pebbleId === selectedPebble;
		const somePebbleAvailable = remainingPebbles[pebbleId as keyof PebbleInventory] > 0;

		if (pebbleAlreadySelected) setSelectedPebble(null);
		else if (somePebbleAvailable) setSelectedPebble(pebbleId);
	};

	const list_pebbles = pebbles.map((pebbleId) => {
		return (
			<Button key={pebbleId} sx={style_pebble(pebbleId, selectedPebble, remainingPebbles)} onClick={() => handleClick(pebbleId)}>
				<Typography>{pebbleId}</Typography>
				<Typography variant="h1" sx={style_remainingPebbleVisual}>
					{getRemainingPebbleVisual(pebbleId)}
				</Typography>
			</Button>
		);
	});

	return <Box sx={style_container}>{list_pebbles}</Box>;
}

const style_container = {
	display: "grid",
	gridTemplateColumns: "repeat(6, 1fr)",
	gridTemplateRows: "repeat(2, 1fr)",
	gap: { thinest: 0.5, thin: 0.6 },
	padding: { thinest: 0.7, thin: 2 },
	backgroundColor: "background.paper",
};

const style_pebble = (pebbleId: Pebble, selectedPebble: Pebble, remainingPebbles: PebbleInventory) => {
	const somePebbleAvailable = remainingPebbles[pebbleId as keyof PebbleInventory] > 0;
	const selectedPebbleColor = `pebbles.${pebbleId}`;

	return {
		display: "flex",
		flexDirection: "column",
		backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
		borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
		borderWidth: { thinest: "1px", thin: "2px" },
		color: somePebbleAvailable ? "text.pebbles" : "text.pebbleEmpty",
		padding: "6px",
		minWidth: { thinest: "45px", thin: "55px", medium: "64px" },
		gridColumnStart: pebbleId === 11 ? 5 : "initial",
		gridColumnEnd: pebbleId === 11 ? 7 : "initial",
		"&:hover": {
			borderWidth: { thinest: "1px", thin: "2px" },
			borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
			backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
			color: "white",
		},
	};
};

const style_remainingPebbleVisual = { lineHeight: 0, mb: 1 };
