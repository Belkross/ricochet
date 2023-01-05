import React, { useState, KeyboardEvent } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { NUMBER_OF_GRIDS } from "../../data/grids.js";
import useValidTextInput from "../../customHooks/use-valid-text-input.js";
import checkGridIdValidity from "./check-grid-id-validity.js";
import { socket } from "../../config/initialize-socket-io.js";
import { useGameState } from "../provider-game-state/provider-game-state.js";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, Breakpoint } from "@mui/material/styles";

type Props = {
	displayState: boolean;
	closeModal: () => void;
};

export default function ModalSelectGrid({ displayState, closeModal }: Props) {
	const gameState = useGameState();
	const [input, onInputChange] = useValidTextInput(gameState.selectedGrid.toString(), checkGridIdValidity);
	const [cleanGridPreference, setCleanGridPreference] = useState(false);
	const fullScreen = useMediaQuery(useTheme().breakpoints.down("thin" as Breakpoint));

	const handleCheckboxChange = () => setCleanGridPreference(cleanGridPreference ? false : true);

	const handleSubmit = () => {
		if (input.validity) {
			closeModal();
			socket.emit("changeGrid", parseInt(input.value, 10), cleanGridPreference);
		}
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			event.preventDefault(); //otherwise, the modal don’t close
			handleSubmit();
		}
	};

	return (
		<Dialog open={displayState} onClose={closeModal} sx={style_dialog} fullScreen={fullScreen} maxWidth={false}>
			<DialogTitle>Changer de grille</DialogTitle>

			<DialogContent>
				<DialogContentText sx={style_dialogContentText}>{`Choisissez un numéro de grille compris entre 1 et ${NUMBER_OF_GRIDS}.`}</DialogContentText>
				<TextField autoFocus label="numéro de grille" fullWidth value={input.value} onChange={onInputChange} onKeyDown={handleKeyDown} />
				<FormControlLabel label="Nettoyer la grille" control={<Checkbox checked={cleanGridPreference} onChange={handleCheckboxChange} />} />
			</DialogContent>

			<DialogActions>
				<Button onClick={handleSubmit} disabled={!input.validity}>
					Valider
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const style_dialog = {
	margin: "auto",
};

const style_dialogContentText = {
	marginBottom: 2,
};
