import { useMemo, useState } from "react"
import { GlobalFeatures } from "./components/global-features.js"
import { InterfaceGame } from "./components/interface-game.js"
import { InterfaceHome } from "./components/interface-home.js"

const initialAppState: AppState = {
  status: "game",
  selectedGrid: 1,
  selectedPebble: NaN,
  wordSpots: Array(25).fill(NaN),
}

export default function App() {
  const [appState, setAppState] = useState(initialAppState)
  const cachedSetAppState = useMemo(() => setAppState, [])

  let appInterface
  switch (appState.status) {
    case "home":
      appInterface = <InterfaceHome setAppState={cachedSetAppState} />
      break
    case "game":
      appInterface = <InterfaceGame appState={appState} setAppState={cachedSetAppState} />
      break
    default:
      appInterface = <p>app interface status error</p>
  }

  return <GlobalFeatures>{appInterface}</GlobalFeatures>
}
