import { MESSAGE_MAX_LENGTH } from "./check-chat-message-validity.js";

export default function getChatMessageCharacterRemaining(message: string) {
	return MESSAGE_MAX_LENGTH - message.length;
}