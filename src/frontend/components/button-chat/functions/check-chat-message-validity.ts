export const MESSAGE_MAX_LENGTH: number = 140;

export default function checkChatMessageValidity(message: string, lengthMax: number) {
	const messageRespectRange = message.length > 0 && message.length <= lengthMax;
	const messageIsAString = typeof message === "string";

	if (messageIsAString && messageRespectRange) return true;
	else return false;
}
