import { GameState } from "../../types.js";
import { useGameState } from "../provider-game-state/provider-game-state.js";

export class PebbleInventory {
	1 = 2;
	2 = 2;
	3 = 2;
	4 = 2;
	5 = 2;
	6 = 2;
	7 = 2;
	8 = 2;
	9 = 2;
	10 = 2;
	11 = 2;
}

export default function getRemainingPebbles(): PebbleInventory {
	const gameState = useGameState();
	const remainingPebbles = new PebbleInventory();

	for (let wordId = 1; wordId <= 25; wordId++) {
		const playedPebble = gameState[`spot${wordId}` as keyof GameState];
		if (playedPebble) remainingPebbles[playedPebble as keyof PebbleInventory]--;
	}

	return remainingPebbles;
}
