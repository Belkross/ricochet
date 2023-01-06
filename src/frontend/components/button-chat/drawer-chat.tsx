import React, { KeyboardEvent, useRef, useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { useGameState } from "../provider-game-state/provider-game-state.js";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import checkChatMessageValidity, { MESSAGE_MAX_LENGTH } from "./check-chat-message-validity.js";
import getChatMessageCharacterRemaining from "./get-chat-message-character-remaining.js";
import { ChatInputState, ChatMessage } from "../../types.js";
import useSubscribeSocketEvent, { subscribeSocketEventParams } from "../../customHooks/use-subscribe-to-socket-event.js";
import useChatAutoScrollDown from "./use-chat-auto-scroll-down.js";
import MessageList from "./message-list.js";
import ButtonCloseChat from "./button-close-chat.js";
import playChatSoundNotification from "./playChatSoundNotification.js";
import keyDownHandler from "./key-down-handler.js";
import submitHandler from "./submit-handler.js";

const MAX_MEMORIZED_MESSAGE = 60;
const initialMessage: ChatMessage = { author: "Ricochet", content: "Bienvenue sur le chat.", date: new Date() };
export const initialInputState: ChatInputState = { value: "", validity: false, characterRemaining: MESSAGE_MAX_LENGTH };

type Props = {
	displayed: boolean;
	clientUsername: string | null;
	close: () => void;
	notify: () => void;
};

export default function DrawerChat({ displayed, close, notify, clientUsername }: Props) {
	const gameState = useGameState();
	const [input, setInput] = useState(initialInputState);
	const [messages, setMessages] = useState([initialMessage]);
	const ulElement = useRef<HTMLUListElement | null>(null);

	//Effects
	const effectArgs: subscribeSocketEventParams = {
		eventName: "newChatMessage",
		action: (newMessage: ChatMessage) => {
			const tooMuchMessageMemorized = messages.length >= MAX_MEMORIZED_MESSAGE;

			if (tooMuchMessageMemorized) setMessages([...messages.slice(1, MAX_MEMORIZED_MESSAGE), newMessage]);
			else setMessages([...messages, newMessage]);

			if (!displayed) notify();

			playChatSoundNotification();
		},
		effectDependencies: [messages, displayed],
	};
	useSubscribeSocketEvent(effectArgs);
	useChatAutoScrollDown(messages, ulElement);

	//Handling functions
	const handleInputChange = (event: any) => {
		const userIsUsingBackspace = event.nativeEvent.inputType !== "deleteContentBackward";
		const noCharaterRemaining = input.characterRemaining <= 0;

		if (noCharaterRemaining && userIsUsingBackspace) return;
		const value = event.target.value;
		setInput({
			value,
			validity: checkChatMessageValidity(value, gameState.messageMaxLength),
			characterRemaining: getChatMessageCharacterRemaining(value, gameState.messageMaxLength),
		});
	};

	const handleSubmit = () => submitHandler(input, setInput, clientUsername);
	const handleKeyDown = (event: KeyboardEvent) => keyDownHandler(event, handleSubmit);

	return (
		<Drawer variant="persistent" anchor="left" open={displayed} PaperProps={{ sx: style_container }} onClose={close}>
			<ButtonCloseChat close={close} />

			<List ref={ulElement} dense sx={style_messageList}>
				<MessageList messages={messages} />
			</List>

			<Stack sx={style_stackInputs}>
				<TextField
					value={input.value}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder="Envoyer un message"
					autoFocus
					multiline
					fullWidth
					helperText={`Caractères restant: ${input.characterRemaining}`}
					maxRows={4}
				/>
				<Button onClick={handleSubmit} disabled={!input.validity}>
					Envoyer
				</Button>
			</Stack>
		</Drawer>
	);
}

const style_container = {
	padding: 2,
	height: "100vh",
	width: { xs: "100%", sm: "330px" },
	display: "flex",
	flexDirection: "column",
	gap: 2,
};

const style_messageList = {
	backgroundColor: "background.default",
	gap: 0,
	overflowY: "scroll",
	height: "100%",
};

const style_stackInputs = {
	flexDirection: "column",
	alignItems: "end",
};
