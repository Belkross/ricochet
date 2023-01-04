import React, { useState } from "react";
import GlobalFeatures from "./components/global-features.js";
import initializeSocketIo from "./config/initialize-socket-io.js";
import InterfaceLoading from "./components/interface-loading/interface-loading.js";
import Layout from "./components/layout.js";
import { AppState, AppStateChanger } from "./types.js";
import InterfaceLogging from "./components/interface-logging/interface-logging.js";
import InterfaceGame from "./components/interface-game.js";

initializeSocketIo();
const initialAppState: AppState = { state: "connectingToSocketIo", username: null };

export default function App() {
	const [app, setApp] = useState(initialAppState);
	const changeAppState: AppStateChanger = (newProperties) => setApp({ ...app, ...newProperties });

	let appInterface;
	switch (app.state) {
		case "connectingToSocketIo":
		case "loadingApp":
			appInterface = <InterfaceLoading appState={app.state} changeAppState={changeAppState} />;
			break;
		case "logging":
			appInterface = <InterfaceLogging changeAppState={changeAppState} />;
			break;
		case "logged":
			appInterface = <InterfaceGame />;
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
