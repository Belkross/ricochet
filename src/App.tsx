import { useState } from "react"
import { GlobalFeatures } from "./components/global-features.js"
import { InterfaceGame } from "./components/interface-game.js"

const initialAppState: AppState = {
  selectedGrid: 1,
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
