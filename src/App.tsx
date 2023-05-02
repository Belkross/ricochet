import { useMemo, useReducer } from "react"
import { GlobalFeatures } from "./components/global-features"
import { InterfaceGame } from "./components/interface-game"
import { AppStateDispatchContext } from "./context/context-app-state"
import { initializeAppState } from "./store/initialize-app-state"
import { reducerAppState } from "./store/reducer-app-state"

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
