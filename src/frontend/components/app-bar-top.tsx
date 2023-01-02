import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SetOfState } from "../App.js";
import ButtonChat from "./button-chat.js";
import ButtonConnectedPlayers from "./button-connected-players.js";
import ButtonThemeMode from "./button-theme-mode.js";
import ButtonRules from "./button-rules/button-rules.js";

interface AppBarTopProps {
	appState: SetOfState;
}

export default function AppBarTop({ appState }: AppBarTopProps) {
	const screenIsVerySmall = useMediaQuery(useTheme().breakpoints.up("thin" as Breakpoint));
	const userIsLogged = appState === "logged" ? true : false;

	return (
		<AppBar position="sticky" sx={style_container}>
			<Toolbar sx={style_toolbar}>
				{screenIsVerySmall && <Typography variant="h1">Ricochet</Typography>}
				<Stack sx={style_stack}>
					{userIsLogged && <ButtonChat />}
					{userIsLogged && <ButtonConnectedPlayers />}
					<ButtonThemeMode />
					<ButtonRules />
				</Stack>
			</Toolbar>
		</AppBar>
	);
}

const style_container = { marginBottom: 3 };

const style_toolbar = {
	justifyContent: { thinest: "center", thin: "space-between" },
	alignItems: "center",
	px: { thinest: 1, medium: 2 },
	backgroundColor: "background.navBar",
	borderBottomWidth: "1px",
	borderBottomStyle: "solid",
	borderBottomColor: "primary.main",
};

const style_stack = {
	flexDirection: "row",
	gap: 1,
};
