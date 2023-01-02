import React, { useState } from "react";
import GlobalFeatures from "./components/global-features.js";
import initializeSocketIo from "./config/initialize-socket-io.js";
import LoadingInterface from "./components/loading-interface/loading-interface.js";

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
