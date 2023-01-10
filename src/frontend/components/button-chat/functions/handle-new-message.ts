import { ChatMessage } from "../../../types.js";
import playChatSoundNotification from "./playChatSoundNotification.js";
import { ChatState } from "./use-chat-state.js";

const MAX_MEMORIZED_MESSAGE = 60;

export default function handleNewMessage(message: ChatMessage, chat: ChatState) {
	addMessageToChat(message, chat);
	if (!chat.drawer.displayed) chat.notify();
	playChatSoundNotification();
}

function addMessageToChat(newMessage: ChatMessage, chat: ChatState) {
	const tooMuchMessageMemorized = chat.messages.length >= MAX_MEMORIZED_MESSAGE;

	if (tooMuchMessageMemorized) {
		chat.setMessages([...chat.messages.slice(1, MAX_MEMORIZED_MESSAGE), newMessage]);
	} else {
		chat.setMessages([...chat.messages, newMessage]);
	}
}
