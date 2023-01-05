import React from "react";
import { AppStateChanger } from "../../types.js";
import WebsiteIntroduction from "../website-introduction.js";
import FormLogging from "./form-logging.js";

type Props = {
	changeAppState: AppStateChanger;
};

export default function InterfaceLogging({ changeAppState }: Props) {
	return (
		<React.Fragment>
			<WebsiteIntroduction />
			<FormLogging changeAppState={changeAppState} />
		</React.Fragment>
	);
}
