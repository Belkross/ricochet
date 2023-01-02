import { AppStateProperties } from "../../App.js";

export default function endConnectionToSocketIo(changeAppState: (properties: AppStateProperties) => void): void {
	changeAppState({ state: "loadingApp" });

	const fakeLoadingDuration = 500;
	setTimeout(() => changeAppState({ state: "logging" }), fakeLoadingDuration);
}
