import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
	close: () => void;
};

export default function ButtonCloseChat({close}: Props) {
	return (
		<IconButton onClick={close} sx={style_container} size="small">
			<CloseIcon />
		</IconButton>
	);
}

const style_container = { alignSelf: "end" };