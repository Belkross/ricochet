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

export type GameState = {
	chatMessages: Array<{ author: string; date: Date; content: string }>;
	lastConnections: Array<{ username: string; date: Date }>;
	messageMaxLength: 140;
	selectedGrid: number;
	spot1: number;
	spot2: number;
	spot3: number;
	spot4: number;
	spot5: number;
	spot6: number;
	spot7: number;
	spot8: number;
	spot9: number;
	spot10: number;
	spot11: number;
	spot12: number;
	spot13: number;
	spot14: number;
	spot15: number;
	spot16: number;
	spot17: number;
	spot18: number;
	spot19: number;
	spot20: number;
	spot21: number;
	spot22: number;
	spot23: number;
	spot24: number;
	spot25: number;
};
