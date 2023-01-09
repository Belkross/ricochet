import { socket } from "../../../config/initialize-socket-io.js";
import { ChatState } from "./use-chat-state.js";

export default function handleChatMessageSubmition(chat: ChatState) {
	if (chat.input.validity) {
		socket.emit("sendChatMessage", chat.clientUsername, chat.input.value);
		chat.setInput(chat.initialInputState);
	}
}
