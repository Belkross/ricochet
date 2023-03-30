import { Container, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { Instructions } from "./instructions/instructions.js"
import { Pebbles } from "./pebbles.js"
import { WordsGrid } from "./words-grid.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function InterfaceGame({ appState, setAppState }: Props) {
  return (
    <Container sx={style_container}>
      <Instructions appState={appState} />
      <WordsGrid appState={appState} setAppState={setAppState} />
      <Pebbles appState={appState} setAppState={setAppState} />
    </Container>
  )
}

const style_container: SxProps = {
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "center",
  gap: 2,

  py: { xs: 3, md: 5 },
}
