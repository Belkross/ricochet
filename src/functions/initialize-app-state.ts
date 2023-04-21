import { minGridId } from "../assets/grids.js"
import { localStorageKeys } from "../config/local-storage-keys.js"
import { getInitialGridId } from "./get-initial-grid-id.js"
import { getInitialWordSpots } from "./get-initial-word-spots.js"

export function initializeAppState(): AppState {
  return {
    selectedGrid: getInitialGridId(localStorageKeys.gridId, minGridId),
    selectedPebble: NaN,
    wordSpots: getInitialWordSpots(localStorageKeys.wordSpots, Array(25).fill(NaN)),
    advertisementDisplayed: false,
  }
}
