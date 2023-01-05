import React from "react";
import Button from "@mui/material/Button";
import RuleIcon from "@mui/icons-material/TextSnippet";
import useTemporaryElement from "../../customHooks/use-temporary-element.js";
import DrawerRules from "./drawer-rules.js";

export default function ButtonRules() {
	const drawer = useTemporaryElement(false);

	return (
		<React.Fragment>
			<Button onClick={drawer.display} startIcon={<RuleIcon />}>
				Règles
			</Button>
			<DrawerRules display={drawer.displayed} close={drawer.remove} />
		</React.Fragment>
	);
}
