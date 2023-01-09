import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/icons-material/Groups";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import Badge from "@mui/material/Badge";
import DrawerLastConnectedPlayers from "./drawer-last-connected-players.js";
import useSubscribeSocketEvent, { SubscribeSocketEventParams } from "../../customHooks/use-subscribe-to-socket-event.js";

export default function ButtonLastConnectedPlayers() {
	const drawer = useTemporaryElement(false);
	const [badgeNotification, setBadgeNotification] = useState(0);

	const effectArgs: SubscribeSocketEventParams = {
		eventName: "notifyNewConnection",
		action: () => {
			if (drawer.displayed === false) setBadgeNotification((prev) => prev + 1);
		},
		effectDependencies: [drawer.displayed],
	};
	useSubscribeSocketEvent(effectArgs);

	const handleClick = () => {
		drawer.display();
		setBadgeNotification(0);
	};

	return (
		<React.Fragment>
			<Badge badgeContent={badgeNotification} color="warning" overlap="circular">
				<IconButton onClick={handleClick}>
					<Icon />
				</IconButton>
			</Badge>
			
			<DrawerLastConnectedPlayers displayed={drawer.displayed} close={drawer.remove} />
		</React.Fragment>
	);
}
