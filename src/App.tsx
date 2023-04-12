import { useState } from "react"
import { GlobalFeatures } from "./components/global-features.js"
import { InterfaceGame } from "./components/interface-game.js"
import { initializeAppState } from "./functions/initialize-app-state.js"

export default function App() {
  const [appState, setAppState] = useState(initializeAppState())

  return (
    <GlobalFeatures>
      <InterfaceGame appState={appState} setAppState={setAppState} />
    </GlobalFeatures>
  )
}
