import React, { useState } from "react";
import GlobalFeatures from "./components/GlobalFeatures.js";
import initializeSocketIo from "./config/initializeSocketIo.js";
import LoadingInterface from "./components/LoadingInterface/index.js";

export type SetOfState = "connectingToSocketIo" | "loadingApp" | "logging" | "logged";

interface AppState {
	state: SetOfState;
	username: string | null;
}

export interface AppStateProperties {
	state?: SetOfState;
	username?: string | null;
}

initializeSocketIo();
const initialAppState: AppState = { state: "connectingToSocketIo", username: null };

export default function App() {
	const [app, setApp] = useState(initialAppState);
	const changeAppState = (newProperties: AppStateProperties): void => setApp({ ...app, ...newProperties });

	let appInterface;
	switch (app.state) {
		case "connectingToSocketIo":
		case "loadingApp":
			appInterface = <LoadingInterface appState={app.state} changeAppState={changeAppState} />;
			break;
		case "logging":
			appInterface = <div>Logging</div>;
			break;
		case "logged":
			break;
		default:
			appInterface = null;
	}

	return <GlobalFeatures>{appInterface}</GlobalFeatures>;
}
