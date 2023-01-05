import React, { Dispatch, SetStateAction } from "react";
import { socket } from "../config/initialize-socket-io.js";
import { GameState, Pebble } from "../types.js";
import { useGameState } from "./provider-game-state/provider-game-state.js";
import { grids } from "../data/grids.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
	selectedPebble: Pebble;
	setSelectedPebble: Dispatch<SetStateAction<Pebble>>;
};

export default function WordsGrid({ selectedPebble, setSelectedPebble }: Props) {
	const gameState = useGameState();

	const handleClick = (wordId: number) => {
		const wordHasAPebble = gameState[`spot${wordId}` as keyof GameState] !== null;
		if (selectedPebble) {
			socket.emit("putPebble", wordId, selectedPebble);
			setSelectedPebble(null);
		} else if (wordHasAPebble) {
			socket.emit("removePebble", wordId);
		}
	};

	const list_words = grids[gameState.selectedGrid].grid.map((word, index) => {
		const wordId = index + 1;
		const playedPebble = gameState[`spot${wordId}` as keyof GameState];
		const pebbleTextualIdentifier = playedPebble ? playedPebble.toString() : "-";
		const capitalizedWord = word[0].toUpperCase() + word.substring(1);

		return (
			<Button key={wordId} sx={style_buttonWord(gameState[`spot${wordId}` as keyof GameState] as Pebble, selectedPebble)} onClick={() => handleClick(wordId)}>
				<Typography sx={style_wordString}>{capitalizedWord}</Typography>
				<Typography>{pebbleTextualIdentifier}</Typography>
			</Button>
		);
	});

	return <Box sx={style_container}>{list_words}</Box>;
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

const style_buttonWord = (pebbleOnWord: Pebble, selectedPebble: Pebble) => {
	const wordHasAPebble = pebbleOnWord !== null;
	const playedPebbleColor = `pebbles.${pebbleOnWord}`;
	const selectedPebbleColor = `pebbles.${selectedPebble}`;

	return {
		flexDirection: "column",
		justifyContent: "space-between",
		gap: { thinest: 0, thin: 1, medium: 1.5 },
		color: "text.words",
		backgroundColor: wordHasAPebble ? playedPebbleColor : "background.words",
		borderWidth: { thinest: "1px", thin: "3px" },
		//TODO: understand why the borderColor is white instead of the provided value "background.words"
		borderColor: wordHasAPebble ? playedPebbleColor : "background.words",
		padding: { thinest: "1.2mm", thin: 0.8, md: 1 },
		minWidth: { thinest: "unset", thin: "64px" },
		width: { thinest: "55px", thin: "inherit" },
		height: { thinest: "55px", thin: "inherit" },
		maxWidth: { thin: "105px", md: "inherit" },
		"&:hover": {
			borderWidth: { thinest: "1px", thin: "3px" },
			borderColor: selectedPebble ? selectedPebbleColor : "white",
			backgroundColor: wordHasAPebble ? playedPebbleColor : "white",
		},
	};
};

const style_wordString = {
	wordBreak: "break-all",
	lineHeight: 0.9,
	fontSize: { thinest: "13px", thin: "inherit" },
};
