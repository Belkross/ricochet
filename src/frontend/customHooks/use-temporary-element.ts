import { useState } from "react";

type functionReturn = [boolean, () => void, () => void];

export default function useTemporaryElement(initialState: boolean): functionReturn {
	const [elementDisplay, setElementDisplay] = useState(initialState);

	const displayElement = () => setElementDisplay(true);
	const removeElement = () => setElementDisplay(false);

	return [elementDisplay, displayElement, removeElement];
}
