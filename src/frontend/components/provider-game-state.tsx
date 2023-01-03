import React, { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import useSubscribeSocketEvent, { subscribeSocketEventParams } from "../customHooks/use-subscribe-to-socket-event.js";
import { GameState } from "../types.js";

const GameStateContext = createContext(null);
const SetGameStateContext: any = createContext(null);
export const useGameState = (): GameState => useContext(GameStateContext);
export const useSetGameState = (): Dispatch<SetStateAction<GameState>> => useContext(SetGameStateContext);

interface ProviderGameStateProps {
	children: ReactElement;
}

export default function ProviderGameState({ children }: ProviderGameStateProps) {
	const [gameState, setGameState] = useState(null);

	const effectParameters: subscribeSocketEventParams = {
		eventName: "gameStateHasChanged",
		action: (newGameState) => setGameState({ ...newGameState }),
		effectDependencies: [],
	};
	useSubscribeSocketEvent(effectParameters);

	return (
		<GameStateContext.Provider value={gameState}>
			<SetGameStateContext.Provider value={setGameState}>{children}</SetGameStateContext.Provider>
		</GameStateContext.Provider>
	);
}
