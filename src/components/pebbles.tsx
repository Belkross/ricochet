import { Box, SxProps } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import shape from "../theme/shape.js"
import { PebbleList } from "./pebble-list.js"

export const minPebble = 1
export const maxPebble = 11

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function Pebbles({ appState, setAppState }: Props) {
  return (
    <Box sx={style_container}>
      <PebbleList appState={appState} setAppState={setAppState} />
    </Box>
  )
}

const style_container: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(2, 1fr)",
  gap: { xs: 0.5, sm: 0.6 },
  ...shape.borderedContainer,
}
