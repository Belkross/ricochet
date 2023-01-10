export type SetOfState = "connectingToSocketIo" | "loadingApp" | "logging" | "logged";

export interface AppState {
	state: SetOfState;
	username: string | null;
}

//has to be synchronized with AppState type
interface AppStateProperties {
	state?: SetOfState;
	username?: string | null;
}

export type AppStateChanger = (newProperties: AppStateProperties) => void;

export type Pebble = number | null;

export type ChatMessage = { author: string; date: Date; content: string };

export type GameState = {
	chatMessages: Array<ChatMessage>;
	lastConnections: Array<{ username: string; date: Date }>;
	messageMaxLength: 140;
	selectedGrid: number;
	wordSpots: {
		[spot: number]: Pebble;
	};
};
