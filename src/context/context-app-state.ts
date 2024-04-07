import { createContext, Dispatch, useContext } from "react"
import { AppState, AppStateActions } from "#type"
import { OutOfProviderContextError } from "./context.error"

export const AppStateDispatchContext = createContext<Dispatch<AppStateActions> | undefined>(undefined)
export const useAppStateDispatch = () => {
  const context = useContext(AppStateDispatchContext)
  if (!context) throw new OutOfProviderContextError()
  return context
}

export const AppStateContext = createContext<AppState | undefined>(undefined)
export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) throw new OutOfProviderContextError()
  return context
}
