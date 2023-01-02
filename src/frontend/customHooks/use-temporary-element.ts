import { useState } from "react";

export default function useTemporaryElement(initialState: boolean): [boolean, () => void, () => void] {
	const [elementDisplay, setElementDisplay] = useState(initialState);

	const displayElement = () => setElementDisplay(true);
	const removeElement = () => setElementDisplay(false);

	return [elementDisplay, displayElement, removeElement];
}
