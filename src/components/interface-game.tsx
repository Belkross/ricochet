import { Container, Stack, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { ButtonRules } from "./button-rules.js"
import { ButtonThemeMode } from "./button-theme-mode.js"
import { Dialogue } from "./dialogue/dialogue.js"
import { Pebbles } from "./pebbles.js"
import { WordsGrid } from "./words-grid.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function InterfaceGame({ appState, setAppState }: Props) {
  return (
    <Container sx={style_container}>
      <Stack sx={style_menu}>
        <ButtonRules />
        <ButtonThemeMode />
      </Stack>
      <Dialogue appState={appState} />
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

const style_menu: SxProps = {
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: 1
}
