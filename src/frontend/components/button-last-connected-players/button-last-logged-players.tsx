import React from "react";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/icons-material/Groups";
import Badge from "@mui/material/Badge";
import DrawerLastConnectedPlayers from "./drawer-last-logged-players.js";
import useButtonLastLoggedPlayersState from "./use-button-last-logged-players-state.js";
import useSubscribeEventUserLogged from "./use-subscribe-event-user-logged.js";

export default function ButtonLastLoggedPlayers() {
	const button = useButtonLastLoggedPlayersState();

	const handleClick = () => {
		button.drawer.display();
		button.setBadgeNotification(0);
	};

	useSubscribeEventUserLogged("newLoggedPlayer", button);

	return (
		<React.Fragment>
			<Badge badgeContent={button.badgeNotification} color="warning" overlap="circular">
				<IconButton onClick={handleClick}>
					<Icon />
				</IconButton>
			</Badge>

			<DrawerLastConnectedPlayers displayed={button.drawer.displayed} close={button.drawer.remove} />
		</React.Fragment>
	);
}
