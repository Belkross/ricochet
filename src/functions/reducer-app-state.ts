import { maxGridId } from "../assets/grids.js"
import { localStorageKeys } from "../config/local-storage-keys.js"
import { getPebbleInventory } from "./get-pebble-inventory.js"

export function reducerAppState(state: AppState, action: AppStateActions): AppState {
  const { selectedGrid, selectedPebble, wordSpots } = state

  switch (action.type) {
    case "grid-decremented": {
      const newSelectedGrid = selectedGrid - 1
      localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))
      return {
        ...state,
        selectedGrid: newSelectedGrid,
      }
    }

    case "grid-incremented": {
      if (selectedGrid < maxGridId) {
        const newSelectedGrid = selectedGrid + 1
        localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))

        return { ...state, selectedGrid: newSelectedGrid }
      } else {
        return { ...state, adDisplayed: true }
      }
    }

    case "pebble-clicked": {
      const pebbleId = action.payload
      const pebbleAlreadySelected = pebbleId === selectedPebble

      const pebbleInventory = getPebbleInventory(wordSpots)
      const index = pebbleId - 1
      const somePebbleRemains = pebbleInventory[index] > 0

      if (pebbleAlreadySelected) return { ...state, selectedPebble: NaN }
      else if (somePebbleRemains) return { ...state, selectedPebble: pebbleId }
      else return state
    }

    case "modal-advertisement-toggled": {
      return {
        ...state,
        adDisplayed: action.payload,
      }
    }

    case "word-clicked": {
      const index = action.payload

      const spotHasAPebble = wordSpots[index]
      const newWordSpots = [...wordSpots]

      if (selectedPebble) newWordSpots[index] = selectedPebble
      else if (spotHasAPebble) newWordSpots[index] = NaN

      localStorage.setItem(localStorageKeys.wordSpots, newWordSpots.toLocaleString())
      return { ...state, wordSpots: newWordSpots, selectedPebble: NaN }
    }

    default: {
      return state
    }
  }
}
