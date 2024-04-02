import { createContext, Dispatch, useContext } from "react"
import { contextErrorMessage } from "./error-message"
import { AppState, AppStateActions } from "#type"

export const AppStateDispatchContext = createContext<Dispatch<AppStateActions> | undefined>(undefined)
export const useAppStateDispatch = () => {
  const context = useContext(AppStateDispatchContext)
  if (!context) throw new Error(contextErrorMessage)
  return context
}

export const AppStateContext = createContext<AppState | undefined>(undefined)
export const useAppState = () => {
  const context = useContext(AppStateContext)
  if (!context) throw new Error(contextErrorMessage)
  return context
}
