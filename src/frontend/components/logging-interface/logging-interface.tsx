import React from "react";
import { AppStateChanger } from "../../types.js";
import WebsiteIntroduction from "../website-introduction.js";
import FormLogging from "./form-logging.js";

interface LoggingInterfaceProps {
	changeAppState: AppStateChanger;
}

export default function LoggingInterface({ changeAppState }: LoggingInterfaceProps) {
	return (
		<React.Fragment>
			<WebsiteIntroduction />
			<FormLogging changeAppState={changeAppState} />
		</React.Fragment>
	);
}
