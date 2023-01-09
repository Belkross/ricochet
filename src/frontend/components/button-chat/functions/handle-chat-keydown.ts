import { KeyboardEvent } from "react";
import handleChatMessageSubmition from "./handle-chat-message-submition.js";
import { ChatState } from "./use-chat-state.js";

export default function handleChatKeyDown(event: KeyboardEvent, chat: ChatState) {
	if (event.key === "Enter") {
		event.preventDefault(); //otherwise handleInputChange is triggered
		handleChatMessageSubmition(chat);
	}
}
