import React, { useState } from "react";
import GlobalFeatures from "./components/global-features.js";
import initializeSocketIo from "./config/initialize-socket-io.js";
import LoadingInterface from "./components/loading-interface/loading-interface.js";
import Layout from "./components/layout.js";
import LoggingInterface from "./components/logging-interface/logging-interface.js";
import { AppState, AppStateChanger } from "./types.js";

initializeSocketIo();
const initialAppState: AppState = { state: "connectingToSocketIo", username: null };

export default function App() {
	const [app, setApp] = useState(initialAppState);
	const changeAppState: AppStateChanger = (newProperties) => setApp({ ...app, ...newProperties });

	let appInterface;
	switch (app.state) {
		case "connectingToSocketIo":
		case "loadingApp":
			appInterface = <LoadingInterface appState={app.state} changeAppState={changeAppState} />;
			break;
		case "logging":
			appInterface = <LoggingInterface changeAppState={changeAppState} />;
			break;
		case "logged":
			break;
		default:
			appInterface = null;
	}

	return (
		<GlobalFeatures>
			<Layout appState={app.state}>{appInterface}</Layout>
		</GlobalFeatures>
	);
}
