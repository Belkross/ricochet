export type AlertSeverity = "info" | "success" | "warning" | "error";

export interface AlertList {
	readonly [alertId: string]: { severity: AlertSeverity; message: string };
}

export const alerts: AlertList = {
	defaultEmpty: { severity: "info", message: "" },
};
