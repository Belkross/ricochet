import { useEffect, Dispatch, SetStateAction } from "react";
import { socket } from "../../config/initialize-socket-io.js";
import { GameState } from "../../types.js";

export default function useSubscribeEventGameStateChange(eventName: string, setGameState: Dispatch<SetStateAction<GameState>>) {
	useEffect((): (() => void) => {
		socket.on(eventName, (newGameState) => setGameState({ ...newGameState }));

		return () => socket.off(eventName);
	}, []);
}
