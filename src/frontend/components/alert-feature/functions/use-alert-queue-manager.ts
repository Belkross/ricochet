import React, { useEffect } from "react";
import setUpNewAlert from "./set-up-new-alert.js";
import { SnackBarState } from "./use-snackbar-state.js";

export default function useAlertQueueManager(snackbar: SnackBarState) {
	useEffect(() => {
		if (checkIfNeedToDisplayAnAlert(snackbar)) {
			setUpNewAlert(snackbar);
		} else if (checkIfInterruptCurrentAlertWithAnother(snackbar)) {
			snackbar.setDisplay(false);
			//Then the close transition will reset the message alert to "" with handleExited.
			//a rerender occure, and it reach the conditions for checkIfNeedToDisplayAnAlert
		}
	}, [snackbar.display, snackbar.alertQueue, snackbar.currentAlert]);
}

function checkIfNeedToDisplayAnAlert(snackbar: SnackBarState) {
	return snackbar.alertQueue.length && snackbar.currentAlert.message === "";
}

function checkIfInterruptCurrentAlertWithAnother(snackbar: SnackBarState) {
	const anAlertCurrentlyDisplayed = snackbar.display && snackbar.currentAlert.message;
	const anAlertWaits = snackbar.alertQueue.length > 0;

	return anAlertCurrentlyDisplayed && anAlertWaits;
}
