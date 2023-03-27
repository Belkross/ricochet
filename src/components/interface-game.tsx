import { Container } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { GridSelection } from "./grid-selection.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function InterfaceGame({ appState, setAppState }: Props) {
  return (
    <Container>
      <GridSelection appState={appState} setAppState={setAppState} />
    </Container>
  )
}
