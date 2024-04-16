import { MAX_GRID_ID, MIN_GRID_ID } from "#domain"
import { initializeAppState } from "../../src/store/initialize-app-state"
import { reducerAppState } from "../../src/store/reducer-app-state"
import { ActionType } from "../../src/type/app-state.type"

describe("decrementing the grid", () => {
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

describe("incrementing the grid", () => {
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
