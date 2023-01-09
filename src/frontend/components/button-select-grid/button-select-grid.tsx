import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import ModalSelectGrid from "./modal-selectd-grid.js";

type Props = {
	id: number;
};

export default function ButtonSelectGrid({ id }: Props) {
	const modal = useTemporaryElement(false);

	return (
		<React.Fragment>
			<Stack sx={style_stack}>
				<IconButton size="small" onClick={modal.display}>
					<EditIcon />
				</IconButton>
				<Typography>{`Grille n°${id}`}</Typography>
			</Stack>

			<ModalSelectGrid displayed={modal.displayed} closeModal={modal.remove} />
		</React.Fragment>
	);
}

const style_stack = {
	flexDirection: "row",
	gap: 1,
	alignItems: "center",
};
