import React, { useRef } from "react";
import Typography from "@mui/material/Typography";
import { grids } from "../../data/grids.js";
import useTypingDialogueEffect from "./use-typing-dialogue-effect.js";

type Props = {
	id: number;
};

export default function Instructions({ id }: Props) {
	const element = useRef<HTMLParagraphElement>(null);
	
	useTypingDialogueEffect(element, id);

	return (
		<React.Fragment>
			<Typography id="truc" ref={element} sx={style_dialogue} />
			<Typography>{grids[id].winConditions}</Typography>
			<Typography>{`Instruction: ${grids[id].instruction}`}</Typography>
			<Typography sx={style_typography}>{`Aide: ${grids[id].help}`}</Typography>
		</React.Fragment>
	);
}

const style_dialogue = {
	color: "text.dialogue",
	fontFamily: "monospace",
};

const style_typography = {
	marginBottom: 3,
};
