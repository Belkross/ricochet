import React from "react";
import { grids } from "../../data/grids.js";
import { BoardState } from "../interface-game/use-board-state.js";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import handleClickWord from "./handle-click-word.js";
import { Pebble } from "../../types.js";
import capitalizeWord from "../../functions/capitalize-word.js";

type Props = {
	board: BoardState;
};

export default function WordsList({ board }: Props) {
	const words = grids[board.selectedGrid].grid;
	const handleClick = (wordId: number) => handleClickWord(wordId, board);

	const list_words = words.map((word, index) => {
		const wordId = index + 1;
		const playedPebble = board.wordSpots[wordId];

		return (
			<Button key={wordId} sx={style_buttonWord(playedPebble, board.selectedPebble)} onClick={() => handleClick(wordId)}>
				<Typography sx={style_wordString}>{capitalizeWord(word)}</Typography>
				<Typography>{playedPebble ? playedPebble : "-"}</Typography>
			</Button>
		);
	});

	return <React.Fragment>{list_words}</React.Fragment>;
}

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
