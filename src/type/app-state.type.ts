export type AppState = {
  selectedGrid: number
  selectedPebble: number
  wordSpots: number[]
  adDisplayed: boolean
}

export enum ActionType {
  increment_grid = "increment_grid",
  decrement_grid = "decrement_grid",
  click_pebble = "click_pebble",
  click_word = "click_word",
  toggle_ad_modal = "toggle_ad_modal",
}

type GridIncrement = {
  type: ActionType.increment_grid
}

type GridDecrement = {
  type: ActionType.decrement_grid
}

type PebbleClick = {
  type: ActionType.click_pebble
  payload: number
}

type WordClick = {
  type: ActionType.click_word
  payload: number
}

type AdModalToggled = {
  type: ActionType.toggle_ad_modal
  payload: boolean
}

export type AppStateActions = GridIncrement | GridDecrement | PebbleClick | AdModalToggled | WordClick
