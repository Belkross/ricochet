import React from "react";
import Button from "@mui/material/Button";
import RuleIcon from "@mui/icons-material/TextSnippet";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import DrawerRules from "./drawer-rules.js";

export default function ButtonRules() {
	const [drawerDisplay, openDrawer, closeDrawer] = useTemporaryElement(false);

	return (
		<React.Fragment>
			<Button onClick={openDrawer} startIcon={<RuleIcon />}>
				Règles
			</Button>
			<DrawerRules display={drawerDisplay} close={closeDrawer} />
		</React.Fragment>
	);
}
