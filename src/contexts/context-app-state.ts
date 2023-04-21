import { createContext, Dispatch, useContext } from "react"
import { contextErrorMessage } from "./context-error-message"

export const AppStateDispatchContext = createContext<Dispatch<AppStateActions> | null>(null)
export const useAppStateDispatch = () => {
  const context = useContext(AppStateDispatchContext)
  if (!context) throw new Error(contextErrorMessage)
  return context
}
