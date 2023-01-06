export type AlertSeverity = "info" | "success" | "warning" | "error";

interface AlertList {
	readonly [alertId: string]: { severity: AlertSeverity; message: string };
}

export interface Alert {
	readonly key: number;
	readonly severity: AlertSeverity;
	readonly message: string;
}

export default function createAlert(alertId: keyof AlertList): Alert {
	return {
		...alerts[alertId],
		key: new Date().getTime(),
	};
}

const alerts: AlertList = {
	default: { severity: "info", message: "" },
};
