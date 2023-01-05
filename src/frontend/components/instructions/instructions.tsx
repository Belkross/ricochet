import React, { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Typed from "typed.js";
import { grids } from "../../data/grids.js";
import getTypedOptions from "./get-typed-options.js";

type Props = {
	id: number;
};

export default function Instructions({ id }: Props) {
	const element = useRef<HTMLParagraphElement>(null);
	const typed = useRef<Typed | null>(null);

	useEffect(() => {
		if (element.current) {
			typed.current = new Typed(element.current, getTypedOptions(id));

			return () => {
				if (typed.current) typed.current.destroy();
			};
		}
	}, [id]);

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
