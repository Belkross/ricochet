import { createContext, Dispatch, useContext } from "react"
import { doNothing } from "../functions/do-nothing.js"

export const AppStateDispatchContext = createContext<Dispatch<AppStateActions>>(doNothing)
export const useAppStateDispatch = () => useContext(AppStateDispatchContext)
