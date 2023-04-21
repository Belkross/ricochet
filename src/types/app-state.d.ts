type AppState = {
  selectedGrid: number
  selectedPebble: number
  wordSpots: number[]
  adDisplayed: boolean
}

type GridIncrement = {
  type: "grid-incremented"
}

type GridDecrement = {
  type: "grid-decremented"
}

type PebbleClick = {
  type: "pebble-clicked"
  payload: number
}

type AdModalToggled = {
  type: "modal-ad-toggled"
  payload: boolean
}

type WordClick = {
  type: "word-clicked"
  payload: number
}

type AppStateActions = GridIncrement | GridDecrement | PebbleClick | AdModalToggled | WordClick
