import React, { useState, Dispatch, SetStateAction } from "react";
import { ChatMessage } from "../../../types.js";
import { DrawerChatProps } from "../drawer-chat.js";
import { MESSAGE_MAX_LENGTH } from "./check-chat-message-validity.js";

export type ChatInputState = {
	value: string;
	validity: boolean;
	characterRemaining: number;
};

export interface ChatState extends DrawerChatProps {
	messages: ChatMessage[];
	setMessages: Dispatch<SetStateAction<ChatMessage[]>>;
	input: ChatInputState;
	setInput: Dispatch<SetStateAction<ChatInputState>>;
	initialInputState: ChatInputState;
}

const initialMessage: ChatMessage = { author: "Ricochet", content: "Bienvenue sur le chat.", date: new Date() };
const initialInputState: ChatInputState = { value: "", validity: false, characterRemaining: MESSAGE_MAX_LENGTH };

export default function useChatState(props: DrawerChatProps): ChatState {
	const [messages, setMessages] = useState([initialMessage]);
	const [input, setInput] = useState(initialInputState);

	return {
		...props,
		messages,
		setMessages,
		input,
		setInput,
		initialInputState,
	};
}
