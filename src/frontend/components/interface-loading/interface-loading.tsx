import React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import WebsiteIntroduction from "../website-introduction.js";
import { AppStateChanger, SetOfState } from "../../types.js";
import useSubscribeEventSocketIoConnection from "./use-subscribe-event-socket-io-connection.js";

type Props = {
	appState: SetOfState;
	changeAppState: AppStateChanger;
};

export default function InterfaceLoading({ appState, changeAppState }: Props) {
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
	
	useSubscribeEventSocketIoConnection("connectedToSocketIo", changeAppState);

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
