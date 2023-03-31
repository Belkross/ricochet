import { Box, Stack, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { grids } from "../assets/grids.js"
import shape from "../theme/shape.js"
import { GridSelection } from "./grid-selection.js"
import { WordsList } from "./words-list.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function WordsGrid({ appState, setAppState }: Props) {
  const { selectedGrid: id } = appState

  return (
    <Stack sx={style_container}>
      <GridSelection appState={appState} setAppState={setAppState} />

      <Typography alignSelf="center">{grids[id].winConditions}</Typography>

      <Box sx={style_wordsGrid}>
        <WordsList appState={appState} setAppState={setAppState} />
      </Box>
    </Stack>
  )
}

//TODO: a tooltip to display the text below
//<Typography>{`Instruction: ${grids[id].instruction}`}</Typography>
//<Typography>{`Aide: ${grids[id].help}`}</Typography>

const style_container: SxProps = {
  alignItems: "stretch",
  gap: shape.spacingBase,
  marginBottom: shape.spacingBase,

  ...shape.borderedContainer,
}

const style_wordsGrid: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: 0.5,
}
