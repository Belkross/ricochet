import React, { ReactNode } from "react";
import Container from "@mui/material/Container";
import AppBarTop from "./app-bar-top.js";
import { SetOfState } from "../types.js";

type Props = {
	children: ReactNode;
	appState: SetOfState;
};

export default function Layout({ children, appState }: Props) {
	return (
		<React.Fragment>
			<AppBarTop appState={appState} />
			<Container sx={style_container}>{children}</Container>
		</React.Fragment>
	);
}

const style_container = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: 1.5,
	maxWidth: { xs: "20cm" },
	paddingBottom: 10,
};
