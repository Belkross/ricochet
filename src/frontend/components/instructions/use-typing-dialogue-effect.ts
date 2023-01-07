import React, { useEffect, useRef, RefObject } from "react";
import Typed from "typed.js";
import getTypedOptions from "./get-typed-options.js";

export default function useTypingDialogueEffect(elementRef: RefObject<HTMLParagraphElement>, gridId: number) {
	const typed = useRef<Typed | null>(null);

	useEffect(() => {
		if (elementRef.current) {
			typed.current = new Typed(elementRef.current, getTypedOptions(gridId));

			return () => {
				if (typed.current) typed.current.destroy();
			};
		}
	}, [gridId]);
}
