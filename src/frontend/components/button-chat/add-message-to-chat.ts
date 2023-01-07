import { Dispatch, SetStateAction } from "react";
import { ChatMessage } from "../../types.js";

const MAX_MEMORIZED_MESSAGE = 60;

export default function addMessageToChat(newMessage: ChatMessage, messageList: ChatMessage[], setMessageList: Dispatch<SetStateAction<ChatMessage[]>>) {
	const tooMuchMessageMemorized = messageList.length >= MAX_MEMORIZED_MESSAGE;

	if (tooMuchMessageMemorized) setMessageList([...messageList.slice(1, MAX_MEMORIZED_MESSAGE), newMessage]);
	else setMessageList([...messageList, newMessage]);
}
