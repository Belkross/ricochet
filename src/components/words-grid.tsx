import { Box, Stack, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import shape from "../theme/shape.js"
import { GridSelection } from "./grid-selection.js"
import { WordsList } from "./words-list.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function WordsGrid({ appState, setAppState }: Props) {
  return (
    <Stack sx={style_container}>
      <GridSelection appState={appState} setAppState={setAppState} />
      <Box sx={style_wordsGrid}>
        <WordsList appState={appState} setAppState={setAppState} />
      </Box>
    </Stack>
  )
}

const style_container: SxProps = {
  alignItems: "stretch",
  gap: shape.spacingBase,

  width: "100%",
  maxWidth: shape.gridMaxWidth,
  marginBottom: shape.spacingBase,

  ...shape.borderedContainer,
}

const style_wordsGrid: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: 0.5,
}
