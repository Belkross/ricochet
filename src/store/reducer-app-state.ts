import { ActionType, AppState, AppStateActions } from "#type"
import { MAX_GRID_ID, boardRepository } from "#domain"
import { getPebbleInventory } from "../helpers/get-pebble-inventory"

export function reducerAppState(state: AppState, action: AppStateActions): AppState {
  const { selectedGrid, selectedPebble, wordSpots } = state

  switch (action.type) {
    case ActionType.decrement_grid: {
      const newSelectedGrid = selectedGrid - 1
      boardRepository.setSelectedGrid(newSelectedGrid)

      return {
        ...state,
        selectedGrid: newSelectedGrid,
        wordSpots: boardRepository.getResettedWordSpots(),
      }
    }

    case ActionType.increment_grid: {
      if (selectedGrid >= MAX_GRID_ID) return { ...state, adDisplayed: true }

      const newSelectedGrid = selectedGrid + 1
      boardRepository.setSelectedGrid(newSelectedGrid)

      return {
        ...state,
        selectedGrid: newSelectedGrid,
        wordSpots: boardRepository.getResettedWordSpots(),
      }
    }

    case ActionType.click_pebble: {
      const pebbleId = action.payload
      const pebbleAlreadySelected = pebbleId === selectedPebble

      const pebbleInventory = getPebbleInventory(wordSpots)
      const index = pebbleId - 1
      const somePebbleRemains = pebbleInventory[index] > 0

      if (pebbleAlreadySelected) return { ...state, selectedPebble: NaN }
      else if (somePebbleRemains) return { ...state, selectedPebble: pebbleId }
      else return state
    }

    case ActionType.click_word: {
      const index = action.payload

      const spotHasAPebble = !isNaN(wordSpots[index])
      const holdingAPebble = !isNaN(selectedPebble)
      const newWordSpots = [...wordSpots]

      if (holdingAPebble) newWordSpots[index] = selectedPebble
      else if (spotHasAPebble) newWordSpots[index] = NaN

      boardRepository.setWordSpots(newWordSpots)

      return {
        ...state,
        wordSpots: newWordSpots,
        selectedPebble: NaN,
      }
    }

    case ActionType.toggle_ad_modal: {
      return {
        ...state,
        adDisplayed: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
