import { Dispatch, SetStateAction } from "react";
import { socket } from "../../config/initialize-socket-io.js";
import { ChatInputState } from "../../types.js";
import { initialInputState } from "./drawer-chat.js";

export default function submitHandler(input: ChatInputState, setInput: Dispatch<SetStateAction<ChatInputState>>, clientUsername: string | null) {
	if (input.value && input.validity) {
		socket.emit("sendChatMessage", clientUsername, input.value);
		setInput(initialInputState);
	}
}
