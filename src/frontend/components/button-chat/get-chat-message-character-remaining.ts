export default function getChatMessageCharacterRemaining(message: string, lengthMax: number) {
	return lengthMax - message.length;
}