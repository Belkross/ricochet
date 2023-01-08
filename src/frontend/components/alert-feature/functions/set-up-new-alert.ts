import { SnackBarState } from "./use-snackbar-state.js";

export default function setUpNewAlert(snackbar: SnackBarState) {
	const nextAlertInQueue = snackbar.alertQueue[0];

	snackbar.setDisplay(true);
	snackbar.setCurrentAlert(nextAlertInQueue);
	snackbar.setAlertQueue((prevQueueState) => prevQueueState.slice(1));
}
