import { ReactElement, useMemo, useReducer } from "react"
import { AppStateContext, AppStateDispatchContext } from "../context/context-app-state"
import { reducerAppState } from "./reducer-app-state"
import { AppState } from "#type"
import { MAX_WORD_ID, MIN_GRID_ID } from "../constants"

type Props = {
  children: ReactElement
  initialState?: AppState
}

const defaultAppState: AppState = {
  selectedGrid: MIN_GRID_ID,
  selectedPebble: NaN,
  wordSpots: new Array(MAX_WORD_ID).fill(NaN),
  adDisplayed: false,
}

export function ProviderAppState({ children, initialState }: Props) {
  const [appState, dispatch] = useReducer(reducerAppState, initialState ?? defaultAppState)

  const dispatchMemoized = useMemo(() => dispatch, [])

  return (
    <AppStateContext.Provider value={appState}>
      <AppStateDispatchContext.Provider value={dispatchMemoized}>{children}</AppStateDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}
