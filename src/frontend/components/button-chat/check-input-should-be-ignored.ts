export default function checkIfInputShouldBeIgnored(inputType: any, characterRemaining: number) {
	const inputIsNotBackspace = inputType !== "deleteContentBackward";
	const noMoreCharacterRemains = characterRemaining <= 0;

	if (inputIsNotBackspace && noMoreCharacterRemains) return true;
	else return false;
}
