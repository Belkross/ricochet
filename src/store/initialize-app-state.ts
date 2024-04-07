import { boardRepository } from "#domain"
import { AppState } from "#type"

export function initializeAppState(): AppState {
  return {
    selectedGrid: boardRepository.getSelectedGrid(),
    selectedPebble: NaN,
    wordSpots: boardRepository.getWordSpots(),
    adDisplayed: false,
  }
}
