import React, { useEffect } from "react";
import { socket } from "../../../config/initialize-socket-io.js";
import { ChatMessage } from "../../../types.js";
import handleNewMessage from "./handle-new-message.js";
import { ChatState } from "./use-chat-state.js";

export default function useSubscribeEventChatMessage(eventName: string, chat: ChatState) {
	useEffect((): (() => void) => {
		socket.on(eventName, (newMessage: ChatMessage) => handleNewMessage(newMessage, chat));

		return () => socket.off(eventName);
	}, [chat.messages, chat.displayed]);
}
