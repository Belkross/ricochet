import { socket } from "../../../config/initialize-socket-io.js";
import localStorageKeys from "../../../config/local-storage-keys.js";

export default function handleLoggingSubmition(input: { value: string; validity: boolean }) {
	if (input.validity) {
		localStorage.setItem(localStorageKeys.username, input.value);
		socket.emit("login", input.value);
	}
}
