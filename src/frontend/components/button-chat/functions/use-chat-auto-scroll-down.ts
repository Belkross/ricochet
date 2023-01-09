import { MutableRefObject, useEffect } from "react";
import { ChatMessage } from "../../../types.js";

export default function useChatAutoScrollDown(messages: ChatMessage[], ulElement: MutableRefObject<HTMLUListElement | null>) {
	useEffect(() => {
		if (ulElement.current) {
			if (checkIfNeedToScrollDown(ulElement.current)) {
				ulElement.current.scrollTop = ulElement.current.scrollHeight;
			}
		}
	}, [messages]);
}

const NO_SCROLL_WINDOW = 50;
function checkIfNeedToScrollDown(ulElement: HTMLUListElement) {
	const scrollBarPosition = ulElement.scrollTop;
	const scrollBarSize = ulElement.clientHeight;
	const scrollHeight = ulElement.scrollHeight - NO_SCROLL_WINDOW;

	return scrollBarPosition + scrollBarSize >= scrollHeight;
}
