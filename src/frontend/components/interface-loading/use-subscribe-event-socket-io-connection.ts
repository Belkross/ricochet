import React, { useEffect } from "react";
import { socket } from "../../config/initialize-socket-io.js";
import { AppStateChanger } from "../../types.js";

export default function useSubscribeEventSocketIoConnection(eventName: string, changeAppState: AppStateChanger) {
	useEffect((): (() => void) => {
		socket.on(eventName, () => endConnectionToSocketIo(changeAppState));

		return () => socket.off(eventName);
	}, []);
}

const FAKE_LOADING_DURATION = 500;
function endConnectionToSocketIo(changeAppState: AppStateChanger): void {
	changeAppState({ state: "loadingApp" });

	setTimeout(() => changeAppState({ state: "logging" }), FAKE_LOADING_DURATION);
}
