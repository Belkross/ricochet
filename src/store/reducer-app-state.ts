import { ActionType, AppState, AppStateActions } from "#type"
import { localStorageKeys } from "../config/local-storage-keys"
import { MAX_GRID_ID, MAX_WORD_ID } from "#domain"
import { getPebbleInventory } from "../helpers/get-pebble-inventory"

export function reducerAppState(state: AppState, action: AppStateActions): AppState {
  const { selectedGrid, selectedPebble, wordSpots } = state

  switch (action.type) {
    case ActionType.decrement_grid: {
      const newSelectedGrid = selectedGrid - 1
      localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))
      return {
        ...state,
        selectedGrid: newSelectedGrid,
        wordSpots: new Array(MAX_WORD_ID).fill(NaN),
      }
    }

    case ActionType.increment_grid: {
      if (selectedGrid < MAX_GRID_ID) {
        const newSelectedGrid = selectedGrid + 1
        localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))

        return { ...state, selectedGrid: newSelectedGrid, wordSpots: new Array(MAX_WORD_ID).fill(NaN) }
      } else {
        return { ...state, adDisplayed: true }
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

      const spotHasAPebble = wordSpots[index]
      const newWordSpots = [...wordSpots]

      if (selectedPebble) newWordSpots[index] = selectedPebble
      else if (spotHasAPebble) newWordSpots[index] = NaN

      localStorage.setItem(localStorageKeys.wordSpots, newWordSpots.toLocaleString())
      return { ...state, wordSpots: newWordSpots, selectedPebble: NaN }
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
