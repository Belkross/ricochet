import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import ModalSelectGrid from "./modal-selectd-grid.js";

interface ButtonSelectGridProps {
	id: number;
}

export default function ButtonSelectGrid({ id }: ButtonSelectGridProps) {
	const [modalDisplay, openModal, closeModal] = useTemporaryElement(false);

	return (
		<React.Fragment>
			<Stack sx={style_stack}>
				<IconButton size="small" onClick={openModal}>
					<EditIcon />
				</IconButton>
				<Typography>{`Grille n°${id}`}</Typography>
			</Stack>
			<ModalSelectGrid displayState={modalDisplay} closeModal={closeModal} />
		</React.Fragment>
	);
}

const style_stack = {
	flexDirection: "row",
	gap: 1,
	alignItems: "center",
};
