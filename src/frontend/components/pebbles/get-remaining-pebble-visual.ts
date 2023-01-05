import { Pebble } from "../../types.js";
import getRemainingPebbles, { PebbleInventory } from "./get-remaining-pebbles.js";

export default function getRemainingPebbleVisual(pebbleId: Pebble) {
	const remainingPebbles = getRemainingPebbles();
	let remainingPebbleVisual = "";
	let numberOfPebbleRemaining = remainingPebbles[pebbleId as keyof PebbleInventory];

	while (numberOfPebbleRemaining) {
		remainingPebbleVisual += ".";
		numberOfPebbleRemaining--;
	}

	return remainingPebbleVisual;
}
