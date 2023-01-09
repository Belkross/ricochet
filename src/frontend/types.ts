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
	spot1: Pebble;
	spot2: Pebble;
	spot3: Pebble;
	spot4: Pebble;
	spot5: Pebble;
	spot6: Pebble;
	spot7: Pebble;
	spot8: Pebble;
	spot9: Pebble;
	spot10: Pebble;
	spot11: Pebble;
	spot12: Pebble;
	spot13: Pebble;
	spot14: Pebble;
	spot15: Pebble;
	spot16: Pebble;
	spot17: Pebble;
	spot18: Pebble;
	spot19: Pebble;
	spot20: Pebble;
	spot21: Pebble;
	spot22: Pebble;
	spot23: Pebble;
	spot24: Pebble;
	spot25: Pebble;
};
