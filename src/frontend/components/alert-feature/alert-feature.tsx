import React, { useEffect, useState, SyntheticEvent } from "react";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Close from "@mui/icons-material/Close";
import createAlert, { Alert, AlertSeverity } from "./alerts";
import useSubscribeSocketEvent, { subscribeSocketEventParams } from "../../customHooks/use-subscribe-to-socket-event.js";
import { SnackbarCloseReason } from "@mui/material";
const ALERT_DISPLAY_DURATION = 6000;

//Each time we need to remove an alert from the screen, we set display to false and THEN the transition will reset the alert content
//TODO: for an unknown reason, anchorOrigin props and snackbar width bug when the component benefits from Mui’s theme context
export default function AlertFeature() {
	const [alertQueue, setAlertQueue] = useState<Array<Alert>>([]);
	const [snackbarDisplay, setSnackbarDisplay] = useState(false);
	const [snackbarAlert, setSnackbarAlert] = useState(createAlert("default"));

	const effectArgs: subscribeSocketEventParams = {
		eventName: "alertMessage",
		action: (alertId) => setAlertQueue([...alertQueue, createAlert(alertId)]),
		effectDependencies: [alertQueue],
	};
	useSubscribeSocketEvent(effectArgs);

	useEffect(() => {
		const needToDisplayAnAlert = alertQueue.length && snackbarAlert.message === "";
		const needToReplaceActiveAlert = alertQueue.length && snackbarDisplay && snackbarAlert.message;

		if (needToDisplayAnAlert) {
			const nextAlertInQueue = alertQueue[0];
			setSnackbarDisplay(true);
			setSnackbarAlert(nextAlertInQueue);
			setAlertQueue((prev) => prev.slice(1));
		} else if (needToReplaceActiveAlert) {
			setSnackbarDisplay(false);
		}
	}, [alertQueue, snackbarDisplay, snackbarAlert]);

	const handleClose = (event: SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === "clickaway") return;
		setSnackbarDisplay(false);
	};

	const handleExited = () => setSnackbarAlert(createAlert("default"));

	return (
		<Snackbar
			key={snackbarAlert.key}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={snackbarDisplay} //when this props switch from true to false, it trigger a transition
			message={snackbarAlert.message}
			autoHideDuration={ALERT_DISPLAY_DURATION}
			onClose={handleClose}
			TransitionProps={{ onExited: handleExited }} //when the transition end
			ContentProps={{ sx: style_snackbar(snackbarAlert.severity) }}
			action={
				<IconButton size="small" onClick={handleClose} sx={style_buttonClose(snackbarAlert.severity)}>
					<Close />
				</IconButton>
			}
		/>
	);
}

const style_snackbar = (severity: AlertSeverity) => ({
	backgroundColor: `${severity}.main`,
	flexFlow: "row nowrap",
	justifyContent: "start",
	alignItems: "start",
});

const style_buttonClose = (severity: AlertSeverity) => ({
	color: "inherit",
	backgroundColor: `${severity}.dark`,
	borderColor: `${severity}.dark`,
});
