import checkUsernameValidity from "../../functions/check-username-validity.js";

export default function getInitialUsername(localStorageKey: string): string {
	const storedUsername = localStorage.getItem(localStorageKey);
  
	if (storedUsername) {
		const storedUsernameIsValid = checkUsernameValidity(storedUsername);
		return storedUsernameIsValid ? storedUsername : "";
	} else {
		return "";
	}
}
