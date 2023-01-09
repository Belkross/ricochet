import React, { useEffect } from "react";
import { socket } from "../../config/initialize-socket-io.js";
import { ButtonLastLoggedPlayersState } from "./use-button-last-logged-players-state.js";

export default function useSubscribeEventUserLogged(eventName: string, button: ButtonLastLoggedPlayersState) {
	useEffect((): (() => void) => {
		socket.on(eventName, () => {
			const drawerIsClosed = button.drawer.displayed === false;

			if (drawerIsClosed) button.setBadgeNotification((prevNotificationNumber) => prevNotificationNumber + 1);
		});

		return () => socket.off(eventName);
	}, [button.drawer.displayed]);
}
