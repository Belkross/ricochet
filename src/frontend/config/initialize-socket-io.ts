import { io, Socket } from "socket.io-client";

export let socket: Socket;

export default function initializeSocketIo() {
	const environment = process.env.NODE_ENV;

	let serverUrl;
	switch (environment) {
		case "production":
			serverUrl = "https://belkross-ricochet.onrender.com";
			break;
		case "development":
			serverUrl = "http://localhost:1000";
			break;
		default:
			serverUrl = "";
			console.error("Unknown environment value detected.");
	}

	socket = io(serverUrl);
}
