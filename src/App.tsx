import { useMemo, useState } from "react"
import { InterfaceGame } from "./components/interface-game.js"
import { InterfaceHome } from "./components/interface-home.js"
import { ProviderMuiTheming } from "./components/provider-mui-theming.js"

const initialAppState: AppState = {
  status: "game",
  gridId: 1,
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

  return <ProviderMuiTheming>{appInterface}</ProviderMuiTheming>
}
