import { useEffect } from "react";
import { socket } from "../config/initialize-socket-io.js";

export type subscribeSocketEventParams = {
	eventName: string;
	action: (...parameters: any[]) => void;
	effectDependencies: any[] | undefined;
};

export default function useSubscribeSocketEvent(params: subscribeSocketEventParams): void {
	useEffect((): any => {
		socket.on(params.eventName, (...serverParams: any[]) => params.action(...serverParams));

		return () => socket.off(params.eventName);
	}, params.effectDependencies);
}
