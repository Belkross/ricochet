import { MutableRefObject, useEffect } from "react";
import { ChatMessage } from "../../types.js";

export default function useChatAutoScrollDown(messages: ChatMessage[], ulElement: MutableRefObject<HTMLUListElement | null>) {
	useEffect(() => {
		if (ulElement.current) {
			const scrollBarPosition = ulElement.current.scrollTop;
			const scrollBarSize = ulElement.current.clientHeight;
			const scrollHeight = ulElement.current.scrollHeight - 50; //-50 to allow a window of activation

			if (scrollBarPosition + scrollBarSize >= scrollHeight) {
				//scroll down
				ulElement.current.scrollTop = ulElement.current.scrollHeight;
			}
		}
	}, [messages]);
}
