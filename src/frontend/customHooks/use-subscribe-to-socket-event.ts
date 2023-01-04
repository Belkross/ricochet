import { DependencyList, useEffect } from "react";
import { socket } from "../config/initialize-socket-io.js";

export type subscribeSocketEventParams = {
	eventName: string;
	action: (...parameters: any[]) => void;
	effectDependencies?: DependencyList;
};

export default function useSubscribeSocketEvent(params: subscribeSocketEventParams): void {
	useEffect((): (() => void) => {
		socket.on(params.eventName, (...serverParams: any[]) => params.action(...serverParams));

		return () => socket.off(params.eventName);
	}, params.effectDependencies);
}
