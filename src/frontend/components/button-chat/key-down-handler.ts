import { KeyboardEvent } from "react";

export default function keyDownHandler(event: KeyboardEvent, handleSubmit: () => void) {
	if (event.key === "Enter") {
		event.preventDefault(); //otherwise handleInputChange is triggered
		handleSubmit();
	}
}
