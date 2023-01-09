import React, { useEffect } from "react";
import { socket } from "../../../config/initialize-socket-io.js";
import { AppStateChanger } from "../../../types.js";
import { useUpdateGameState } from "../../provider-game-state/provider-game-state.js";

export default function useSubscribeEventLoggedIn(eventName: string, changeAppState: AppStateChanger) {
	const updateGameState = useUpdateGameState();

	useEffect((): (() => void) => {
		socket.on(eventName, (username, gameState) => {
			changeAppState({ state: "logged", username });
			updateGameState(gameState);
		});

		return () => socket.off(eventName);
	}, []);
}
