import { useEffect } from "react";
import { socket } from "../config/initializeSocketIo.js";

export default function useSubscribeSocketEvent(eventName: string, instructions: any, dependencies: any) {
	useEffect((): any => {
		socket.on(eventName, (...args) => instructions(...args));

		return () => socket.off(eventName);
	}, dependencies);
}
