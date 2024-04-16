import { MAX_GRID_ID, MIN_GRID_ID, MIN_PEBBLE_ID } from "#domain"
import { initializeAppState } from "../../src/store/initialize-app-state"
import { reducerAppState } from "../../src/store/reducer-app-state"
import { ActionType } from "../../src/type/app-state.type"

describe(ActionType.decrement_grid, () => {
  test("when the current grid is the first one it should keep it", () => {
    const state = initializeAppState()
    state.selectedGrid = MIN_GRID_ID

    const updatedState = reducerAppState(state, { type: ActionType.decrement_grid })

    expect(updatedState.selectedGrid).toBe(MIN_GRID_ID)
  })

  test("when the current grid is not the first one, it should decrement", () => {
    const state = initializeAppState()
    state.selectedGrid = MIN_GRID_ID + 1

    const updatedState = reducerAppState(state, { type: ActionType.decrement_grid })

    expect(updatedState.selectedGrid).toBe(MIN_GRID_ID)
  })
})

describe(ActionType.increment_grid, () => {
  test("when the current grid is the last one should keep it" + "should display the ad", () => {
    const state = initializeAppState()
    state.selectedGrid = MAX_GRID_ID
    state.adDisplayed = false

    const updatedState = reducerAppState(state, { type: ActionType.increment_grid })

    expect(updatedState.selectedGrid).toBe(MAX_GRID_ID)
    expect(updatedState.adDisplayed).toBe(true)
  })

  test("when the current grid is not the last one, it should increment", () => {
    const state = initializeAppState()
    state.selectedGrid = MIN_GRID_ID

    const updatedState = reducerAppState(state, { type: ActionType.increment_grid })

    expect(updatedState.selectedGrid).toBe(MIN_GRID_ID + 1)
  })
})

describe(ActionType.click_pebble, () => {
  test("getting a pebble", () => {
    const state = initializeAppState()
    state.selectedPebble = NaN

    const updatedState = reducerAppState(state, { type: ActionType.click_pebble, payload: MIN_PEBBLE_ID })

    expect(updatedState.selectedPebble).toBe(MIN_PEBBLE_ID)
  })

  test("clicking on a while already having the same on hand", () => {
    const state = initializeAppState()
    const pebble = MIN_PEBBLE_ID
    state.selectedPebble = pebble

    const updatedState = reducerAppState(state, { type: ActionType.click_pebble, payload: pebble })

    expect(updatedState.selectedPebble).toBe(NaN)
  })

  test("clicking on a pebble when no pebble left", () => {
    const state = initializeAppState()
    const pebble = MIN_PEBBLE_ID
    state.wordSpots[0] = pebble
    state.wordSpots[1] = pebble

    const updatedState = reducerAppState(state, { type: ActionType.click_pebble, payload: pebble })

    expect(updatedState.selectedPebble).toBe(NaN)
  })
})
