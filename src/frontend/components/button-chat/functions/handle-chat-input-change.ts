import checkChatMessageValidity from "./check-chat-message-validity.js";
import getChatMessageCharacterRemaining from "./get-chat-message-character-remaining.js";
import { ChatState } from "./use-chat-state.js";

export default function handleChatInputChange(event: any, chat: ChatState) {
	if (checkIfInputShouldBeIgnored(event, chat)) return;

	const inputValue = event.target.value;
	chat.setInput({
		value: inputValue,
		validity: checkChatMessageValidity(inputValue),
		characterRemaining: getChatMessageCharacterRemaining(inputValue),
	});
}

function checkIfInputShouldBeIgnored(event: any, chat: ChatState) {
	const inputIsNotBackspace = event.nativeEvent.inputType !== "deleteContentBackward";
	const noMoreCharacterRemains = chat.input.characterRemaining <= 0;

	return inputIsNotBackspace && noMoreCharacterRemains;
}