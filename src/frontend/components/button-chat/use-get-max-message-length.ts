import React from "react";
import { useGameState } from "../provider-game-state/provider-game-state.js";

export default function useGetMaxMessageLength() {
	return useGameState().messageMaxLength;
}
