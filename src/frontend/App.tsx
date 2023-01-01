import React, { useState } from "react";
import GlobalFeatures from "./components/GlobalFeatures.js";
import initializeSocketIo from "./config/initializeSocketIo.js";
import Typography from "@mui/material/Typography";

initializeSocketIo();

export default function App() {
	const [app, setApp] = useState({ state: "loading", username: null });

	let appInterface;
	switch (app.state) {
		case "loading":
			appInterface = <Typography variant="h1">Loading</Typography>;
			break;
		case "logging":
			appInterface = <div>Logging</div>;
			break;
		default:
			appInterface = null;
	}

	return <GlobalFeatures>{appInterface}</GlobalFeatures>;
}
