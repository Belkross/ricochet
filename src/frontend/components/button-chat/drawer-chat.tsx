import React, { KeyboardEvent, useRef } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useChatAutoScrollDown from "./functions/use-chat-auto-scroll-down.js";
import MessageList from "./message-list.js";
import ButtonCloseChat from "./button-close-chat.js";
import handleChatMessageSubmition from "./functions/handle-chat-message-submition.js";
import handleChatKeyDown from "./functions/handle-chat-keydown.js";
import handleChatInputChange from "./functions/handle-chat-input-change.js";
import useChatState from "./functions/use-chat-state.js";
import useSubscribeEventChatMessage from "./functions/use-subscribe-event-chat-message.js";

export type DrawerChatProps = {
	displayed: boolean;
	clientUsername: string | null;
	close: () => void;
	notify: () => void;
};

export default function DrawerChat(props: DrawerChatProps) {
	const chat = useChatState(props);
	const ulElement = useRef<HTMLUListElement | null>(null);

	const handleInputChange = (event: any) => handleChatInputChange(event, chat);
	const handleSubmit = () => handleChatMessageSubmition(chat);
	const handleKeyDown = (event: KeyboardEvent) => handleChatKeyDown(event, chat);

	useChatAutoScrollDown(chat.messages, ulElement);
	useSubscribeEventChatMessage("newChatMessage", chat);

	return (
		<Drawer variant="persistent" anchor="left" open={chat.displayed} PaperProps={{ sx: style_container }} onClose={close}>
			<ButtonCloseChat close={chat.close} />

			<List ref={ulElement} dense sx={style_messageList}>
				<MessageList messages={chat.messages} />
			</List>

			<Stack sx={style_stackInputs}>
				<TextField
					value={chat.input.value}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder="Envoyer un message"
					autoFocus
					multiline
					fullWidth
					helperText={`Caractères restant: ${chat.input.characterRemaining}`}
					maxRows={4}
				/>
				<Button onClick={handleSubmit} disabled={!chat.input.validity}>
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
