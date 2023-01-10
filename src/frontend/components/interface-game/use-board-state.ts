import React, { useState, Dispatch, SetStateAction } from "react";
import { Pebble } from "../../types.js";
import useRemainingPebbles, { PebbleInventory } from "./use-remaining-pebbles.js";
import { useGameState } from "../provider-game-state/provider-game-state.js";

export type BoardState = {
	selectedGrid: number;
	selectedPebble: Pebble;
	setSelectedPebble: Dispatch<SetStateAction<Pebble>>;
	remainingPebbles: PebbleInventory;
	wordSpots: {
		[spot: number]: Pebble;
	};
};

//this component is the fusion between the client board state and the globally shared game state
export default function useBoardState(): BoardState {
	const [selectedPebble, setSelectedPebble] = useState<Pebble>(null);
	const { selectedGrid, wordSpots } = useGameState();
	const remainingPebbles = useRemainingPebbles();

	return {
		selectedGrid,
		selectedPebble,
		setSelectedPebble,
		remainingPebbles,
		wordSpots,
	};
}
