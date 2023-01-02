import { useEffect } from "react";
import { socket } from "../config/initialize-socket-io.js";

interface customHookParameters {
	eventName: string;
	action: (...parameters: any[]) => void;
	effectDependencies: any[] | undefined;
}

export default function useSubscribeSocketEvent(params: customHookParameters): void {
	useEffect((): any => {
		socket.on(params.eventName, (...serverParams: any[]) => params.action(...serverParams));

		return () => socket.off(params.eventName);
	}, params.effectDependencies);
}
