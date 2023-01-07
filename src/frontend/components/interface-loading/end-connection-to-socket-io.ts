import { AppStateChanger } from "../../types.js";
const FAKE_LOADING_DURATION = 500;

export default function endConnectionToSocketIo(changeAppState: AppStateChanger): void {
	changeAppState({ state: "loadingApp" });

	setTimeout(() => changeAppState({ state: "logging" }), FAKE_LOADING_DURATION);
}
