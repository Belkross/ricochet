import React, { KeyboardEvent } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useValidTextInput from "../../customHooks/use-valid-text-input.js";
import checkUsernameValidity, { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../../functions/check-username-validity.js";
import getInitialUsername from "./get-initial-username.js";
import localStorageKeys from "../../config/local-storage-keys.js";
import { AppStateChanger } from "../../types.js";
import { socket } from "../../config/initialize-socket-io.js";
import useSubscribeSocketEvent, { subscribeSocketEventParams } from "../../customHooks/use-subscribe-to-socket-event.js";
import { useUpdateGameState } from "../provider-game-state/provider-game-state.js";

interface FormLoggingProps {
	changeAppState: AppStateChanger;
}

const initialUsername = getInitialUsername(localStorageKeys.username);

export default function FormLogging({ changeAppState }: FormLoggingProps) {
	const [input, onInputChange] = useValidTextInput(initialUsername, checkUsernameValidity);
	const updateGameState = useUpdateGameState();

	const effectParameters: subscribeSocketEventParams = {
		eventName: "loggedIn",
		action: (username, gameState) => {
			changeAppState({ state: "logged", username });
			updateGameState(gameState);
		},
		effectDependencies: [],
	};
	useSubscribeSocketEvent(effectParameters);

	const handleSubmit = (): void => {
		if (input.validity) {
			localStorage.setItem(localStorageKeys.username, input.value);
			socket.emit("login", input.value);
		}
	};

	const handleKeyDown = (event: KeyboardEvent): void => {
		if (event.key === "Enter") handleSubmit();
	};

	return (
		<Paper variant="outlined" sx={style_container}>
			<Typography variant="h2">Identification</Typography>
			<Typography>Choisissez un pseudo pour accéder au jeu.</Typography>
			<Stack sx={style_stackInputs}>
				<TextField label="Pseudo" value={input.value} onChange={onInputChange} onKeyDown={handleKeyDown} autoFocus helperText={`${USERNAME_MIN_LENGTH}-${USERNAME_MAX_LENGTH} lettres, sans espaces`} />
				<Button onClick={handleSubmit} disabled={!input.validity}>
					Valider
				</Button>
			</Stack>
		</Paper>
	);
}

const style_container = {
	padding: 4,
	display: "flex",
	flexDirection: "column",
	gap: 2,
};

const style_stackInputs = {
	flexDirection: "row",
	gap: 2,
	alignSelf: "center",
	alignItems: "start",
};
