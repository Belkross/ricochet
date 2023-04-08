import { useState } from "react"
import { GlobalFeatures } from "./components/global-features.js"
import { InterfaceGame } from "./components/interface-game.js"
import { getInitialGridId } from "./functions/get-initial-grid-id.js"
import { localStorageKeys } from "./config/local-storage-keys.js"
import { minGridId } from "./assets/grids.js"

const initialAppState: AppState = {
  selectedGrid: getInitialGridId(localStorageKeys.gridId, minGridId),
  selectedPebble: NaN,
  wordSpots: Array(25).fill(NaN),
}

export default function App() {
  const [appState, setAppState] = useState(initialAppState)

  return (
    <GlobalFeatures>
      <InterfaceGame appState={appState} setAppState={setAppState} />
    </GlobalFeatures>
  )
}
