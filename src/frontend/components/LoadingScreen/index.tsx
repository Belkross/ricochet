import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { AppStateProperties } from "../../App.js";
import useSubscribeSocketEvent from "../../customHooks/useSubscribeToSocketEvent.js";
import endConnectionToSocketIo from "./endConnectionToSocketIo.js";

interface LoadingScreenProps {
	appState: string;
	changeAppState: (properties: AppStateProperties) => void;
}

export default function LoadingScreen({ appState, changeAppState }: LoadingScreenProps) {
	useSubscribeSocketEvent("connectedToSocketIo", () => endConnectionToSocketIo(changeAppState), []);

	let statusMessage;
	switch (appState) {
		case "connectingToSocketIo":
			statusMessage = "Connection au serveur...";
			break;
		case "loadingApp":
			statusMessage = "Chargement de l’application...";
			break;
		default:
			statusMessage = "Erreur";
	}

	return (
		<Stack sx={style_container}>
			<CircularProgress sx={style_circularProgress} />
			<Typography>{statusMessage}</Typography>
		</Stack>
	);
}

const style_container = {
	alignItems: "center",
	gap: 2,
};

const style_circularProgress = {
	marginTop: 5,
	alignSelf: "center",
};
