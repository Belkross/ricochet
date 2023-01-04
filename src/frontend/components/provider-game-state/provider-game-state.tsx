import React, { createContext, ReactElement, useContext, useState } from "react";
import useSubscribeSocketEvent, { subscribeSocketEventParams } from "../../customHooks/use-subscribe-to-socket-event.js";
import { GameState } from "../../types.js";
import { defaultGameState } from "./default-game-state.js";

const GameStateContext = createContext(defaultGameState);
export const useGameState = () => useContext(GameStateContext);

const SetGameStateContext = createContext((state: GameState) => {});
export const useUpdateGameState = () => useContext(SetGameStateContext);

interface ProviderGameStateProps {
	children: ReactElement;
}

export default function ProviderGameState({ children }: ProviderGameStateProps) {
	const [gameState, setGameState] = useState(defaultGameState);

	const effectParameters: subscribeSocketEventParams = {
		eventName: "gameStateHasChanged",
		action: (newGameState) => setGameState({ ...newGameState }),
		effectDependencies: [],
	};
	useSubscribeSocketEvent(effectParameters);

	const updateGameState = (state: GameState): void => {
		setGameState({ ...state });
	};

	return (
		<GameStateContext.Provider value={gameState}>
			<SetGameStateContext.Provider value={updateGameState}>{children}</SetGameStateContext.Provider>
		</GameStateContext.Provider>
	);
}
