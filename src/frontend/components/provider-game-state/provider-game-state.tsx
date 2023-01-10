import React, { createContext, ReactElement, useContext, useState } from "react";
import { GameState } from "../../types.js";
import { defaultGameState } from "./default-game-state.js";
import useSubscribeEventGameStateChange from "./use-subscribe-event-game-state-change.js";

const GameStateContext = createContext(defaultGameState);
export const useGameState = () => useContext(GameStateContext);

const UpdateGameStateContext = createContext((state: GameState) => {});
export const useUpdateGameState = () => useContext(UpdateGameStateContext);

type Props = {
	children: ReactElement;
};

export default function ProviderGameState({ children }: Props) {
	const [gameState, setGameState] = useState(defaultGameState);

	const updateGameState = (state: GameState): void => {
		setGameState({ ...state });
	};

	useSubscribeEventGameStateChange("gameStateHasChanged", setGameState);

	return (
		<GameStateContext.Provider value={gameState}>
			<UpdateGameStateContext.Provider value={updateGameState}>{children}</UpdateGameStateContext.Provider>
		</GameStateContext.Provider>
	);
}
