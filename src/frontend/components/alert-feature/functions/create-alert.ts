import { AlertList, alerts, AlertSeverity } from "../alerts.js";

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
