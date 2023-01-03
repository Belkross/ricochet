import { AppStateChanger } from "../../types.js";

export default function endConnectionToSocketIo(changeAppState: AppStateChanger): void {
	changeAppState({ state: "loadingApp" });

	const fakeLoadingDuration = 500;
	setTimeout(() => changeAppState({ state: "logging" }), fakeLoadingDuration);
}
