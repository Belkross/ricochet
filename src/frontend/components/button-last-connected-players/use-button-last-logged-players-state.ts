import React, { useState, Dispatch, SetStateAction } from "react";
import useTemporaryElement, { TemporaryElementState } from "../../customHooks/use-temporary-element.js";

export type ButtonLastLoggedPlayersState = {
	drawer: TemporaryElementState;
	badgeNotification: number;
	setBadgeNotification: Dispatch<SetStateAction<number>>;
};

export default function useButtonLastLoggedPlayersState(): ButtonLastLoggedPlayersState {
	const drawer = useTemporaryElement(false);
	const [badgeNotification, setBadgeNotification] = useState(0);

	return {
		drawer,
		badgeNotification,
		setBadgeNotification,
	};
}
