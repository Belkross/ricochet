import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useGameState } from "../provider-game-state/provider-game-state.js";

const dateOptions: Intl.DateTimeFormatOptions = {
	weekday: "long",
	year: "numeric",
	month: "long",
	day: "numeric",
	hour: "numeric",
	minute: "numeric",
};

type Props = {
	displayed: boolean;
	close: () => void;
};

export default function DrawerLastConnectedPlayers({ displayed, close }: Props) {
	const connections = useGameState().lastConnections.slice(-20).reverse();

	const list_connections = connections.map((entrie, index) => {
		const event = new Date(entrie.date);
		const text = `${event.toLocaleDateString("fr-FR", dateOptions)}, ${entrie.username}`;

		return (
			<ListItem key={index} sx={style_listItem}>
				<ListItemText primary={text} />
			</ListItem>
		);
	});

	return (
		<Drawer variant="temporary" anchor="left" open={displayed} onClose={close} PaperProps={{ sx: style_container }}>
			<Typography variant="h2" sx={style_title}>
				Derniers visiteurs
			</Typography>
			<List dense>{list_connections}</List>
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

const style_listItem = { px: 1, py: 0 };
