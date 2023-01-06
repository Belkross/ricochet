import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import IconButton from "@mui/material/IconButton";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import DrawerChat from "./drawer-chat.js";
import Badge from "@mui/material/Badge";

type Props = {
	clientUsername: string | null;
};

export default function ButtonChat({ clientUsername }: Props) {
	const drawer = useTemporaryElement(false);
	const [badgeNotification, setBadgeNotification] = useState(0);

	const notifyMessage = () => setBadgeNotification((prev) => prev + 1);

	const toggleDrawer = () => {
		if (drawer.displayed) {
			drawer.remove();
			setBadgeNotification(0);
		} else {
			drawer.display();
		}
	};

	return (
		<Badge badgeContent={badgeNotification} color="warning" overlap="circular">
			<IconButton onClick={toggleDrawer}>
				<ChatIcon />
			</IconButton>

			<DrawerChat displayed={drawer.displayed} close={drawer.remove} notify={notifyMessage} clientUsername={clientUsername} />
		</Badge>
	);
}
