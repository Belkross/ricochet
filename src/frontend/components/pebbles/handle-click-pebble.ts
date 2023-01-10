import { Pebble } from "../../types.js";
import { BoardState } from "../interface-game/use-board-state.js";
import { PebbleInventory } from "../interface-game/use-remaining-pebbles.js";

export default function handleClickPebble(pebbleId: Pebble, board: BoardState) {
	const pebbleAlreadySelected = pebbleId === board.selectedPebble;
	const somePebbleRemains = board.remainingPebbles[pebbleId as keyof PebbleInventory] > 0;

	if (pebbleAlreadySelected) board.setSelectedPebble(null);
	else if (somePebbleRemains) board.setSelectedPebble(pebbleId);
}
