import { Box, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import shape from "../theme/shape.js"
import { WordsList } from "./words-list.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function WordsGrid({ appState, setAppState }: Props) {
  return (
    <Box sx={style_container}>
      <WordsList appState={appState} setAppState={setAppState} />
    </Box>
  )
}

const style_container: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: { xs: 0.5 },
  mb: { xs: 1, sm: 2 },
  backgroundColor: "background.paper",
  padding: { xs: 1, sm: 3 },
  borderRadius: shape.borderRadius,
  boxShadow: 7,
}
