import { socket } from "../../config/initialize-socket-io.js";
import { BoardState } from "../interface-game/use-board-state.js";

export default function handleClickWord(wordId: number, board: BoardState) {
	const wordHasAPebble = board.wordSpots[wordId] !== null;

	if (board.selectedPebble) {
		socket.emit("putPebble", { ...board.wordSpots, [wordId]: board.selectedPebble });
		board.setSelectedPebble(null);
	} else if (wordHasAPebble) {
		socket.emit("removePebble", { ...board.wordSpots, [wordId]: null });
	}
}
