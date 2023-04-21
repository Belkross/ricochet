import { Box, SxProps } from "@mui/material"
import shape from "../theme/shape"
import { PebbleList } from "./pebble-list"

export const minPebble = 1
export const maxPebble = 11

type Props = {
  appState: AppState
}

export function Pebbles({ appState }: Props) {
  return (
    <Box sx={style_container}>
      <PebbleList appState={appState} />
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
