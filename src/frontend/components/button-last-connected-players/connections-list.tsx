import React from "react";
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

export default function ConnectionsList() {
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

	return <React.Fragment>{list_connections}</React.Fragment>;
}

const style_listItem = { px: 1, py: 0 };
