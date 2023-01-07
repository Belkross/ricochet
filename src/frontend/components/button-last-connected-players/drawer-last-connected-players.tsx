import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ConnectionsList from "./connections-list.js";

type Props = {
	displayed: boolean;
	close: () => void;
};

export default function DrawerLastConnectedPlayers({ displayed, close }: Props) {
	return (
		<Drawer variant="temporary" anchor="left" open={displayed} onClose={close} PaperProps={{ sx: style_container }}>
			<Typography variant="h2" sx={style_title}>
				Derniers visiteurs
			</Typography>
			<List dense>
				<ConnectionsList />
			</List>
		</Drawer>
	);
}

const style_container = {
	padding: 2,
	minWidth: "220px",
	maxWidth: { xs: "250px", sm: "none" },
	height: "100vh",
	opacity: 0.96,
};

const style_title = {
	textAlign: "center",
};
