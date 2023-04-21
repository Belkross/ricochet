import { useMemo, useReducer } from "react"
import { GlobalFeatures } from "./components/global-features.js"
import { InterfaceGame } from "./components/interface-game.js"
import { initializeAppState } from "./functions/initialize-app-state.js"
import { reducerAppState } from "./functions/reducer-app-state.js"
import { AppStateDispatchContext } from "./contexts/context-app-state.js"

export default function App() {
  const [appState, dispatch] = useReducer(reducerAppState, initializeAppState())

  const dispatchMemoized = useMemo(() => dispatch, [])

  return (
    <GlobalFeatures>
      <AppStateDispatchContext.Provider value={dispatchMemoized}>
        <InterfaceGame appState={appState} />
      </AppStateDispatchContext.Provider>
    </GlobalFeatures>
  )
}
