import { minGridId } from "../assets/grids"
import { localStorageKeys } from "../config/local-storage-keys"
import { getInitialGridId } from "./get-initial-grid-id"
import { getInitialWordSpots } from "./get-initial-word-spots"

export function initializeAppState(): AppState {
  return {
    selectedGrid: getInitialGridId(localStorageKeys.gridId, minGridId),
    selectedPebble: NaN,
    wordSpots: getInitialWordSpots(localStorageKeys.wordSpots, Array(25).fill(NaN)),
    adDisplayed: false,
  }
}
