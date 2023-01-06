import React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ChatMessage } from "../../types.js";

type Props = {
	messages: ChatMessage[];
};

export default function MessageList({ messages }: Props) {
	const list_message = messages.map((message) => {
		const chatEntrie = (
			<React.Fragment>
				<Typography component="span" sx={style_authorTypo}>{`${message.author}`}</Typography>
				<Typography component="span">{`: ${message.content}`}</Typography>
			</React.Fragment>
		);

		return (
			<ListItem key={message.date.toString()} sx={style_container}>
				<ListItemText primary={chatEntrie} />
			</ListItem>
		);
	});

	return <React.Fragment>{list_message}</React.Fragment>;
}

const style_authorTypo = { color: "text.chatAuthor" };

const style_container = { px: 1, py: 0 };
