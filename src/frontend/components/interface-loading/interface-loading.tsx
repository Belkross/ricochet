import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import useSubscribeSocketEvent from "../../customHooks/use-subscribe-to-socket-event.js";
import endConnectionToSocketIo from "./end-connection-to-socket-io.js";
import WebsiteIntroduction from "../website-introduction.js";
import { AppStateChanger, SetOfState } from "../../types.js";

type Props = {
	appState: SetOfState;
	changeAppState: AppStateChanger;
};

export default function InterfaceLoading({ appState, changeAppState }: Props) {
	const effectParameters = {
		eventName: "connectedToSocketIo",
		action: () => endConnectionToSocketIo(changeAppState),
		effectDependencies: [],
	};
	useSubscribeSocketEvent(effectParameters);

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
			<WebsiteIntroduction />
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
