import React, { useEffect } from "react";
import { socket } from "../../../config/initialize-socket-io.js";
import createAlert from "./create-alert.js";
import { SnackBarState } from "./use-snackbar-state.js";

export default function useSubscribeEventAlert(eventName: string, snackbar: SnackBarState) {
	useEffect((): (() => void) => {
		socket.on(eventName, (alertId) => snackbar.setAlertQueue([...snackbar.alertQueue, createAlert(alertId)]));

		return () => socket.off(eventName);
	}, [snackbar.alertQueue]);
}
