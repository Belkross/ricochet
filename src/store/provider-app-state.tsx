import { ReactElement, useMemo, useReducer } from "react"
import { AppStateContext, AppStateDispatchContext } from "../context/context-app-state"
import { initializeAppState } from "./initialize-app-state"
import { reducerAppState } from "./reducer-app-state"

type Props = {
  children: ReactElement
}

export function ProviderAppState({ children }: Props) {
  const [appState, dispatch] = useReducer(reducerAppState, initializeAppState())

  const dispatchMemoized = useMemo(() => dispatch, [])

  return (
    <AppStateContext.Provider value={appState}>
      <AppStateDispatchContext.Provider value={dispatchMemoized}>{children}</AppStateDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
