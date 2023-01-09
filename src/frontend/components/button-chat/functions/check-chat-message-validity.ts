export const MESSAGE_MAX_LENGTH: number = 140;

export default function checkChatMessageValidity(message: string) {
	const messageRespectRange = message.length > 0 && message.length <= MESSAGE_MAX_LENGTH;
	const messageIsAString = typeof message === "string";

	return messageIsAString && messageRespectRange;
}
