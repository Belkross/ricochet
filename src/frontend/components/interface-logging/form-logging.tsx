import React, { KeyboardEvent } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import useValidTextInput from "../../customHooks/use-valid-text-input.js";
import checkUsernameValidity, { USERNAME_MAX_LENGTH, USERNAME_MIN_LENGTH } from "../../functions/check-username-validity.js";
import getInitialUsername from "./functions/get-initial-username.js";
import localStorageKeys from "../../config/local-storage-keys.js";
import { AppStateChanger } from "../../types.js";
import useSubscribeEventLoggedIn from "./functions/use-subscribe-event-logged-in.js";
import handleLoggingSubmition from "./functions/handle-logging-submition.js";

type Props = {
	changeAppState: AppStateChanger;
};

const initialUsername = getInitialUsername(localStorageKeys.username);

export default function FormLogging({ changeAppState }: Props) {
	const [input, onInputChange] = useValidTextInput(initialUsername, checkUsernameValidity);

	const handleSubmit = () => handleLoggingSubmition(input);
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter") handleSubmit();
	};

	useSubscribeEventLoggedIn("loggedIn", changeAppState);

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
