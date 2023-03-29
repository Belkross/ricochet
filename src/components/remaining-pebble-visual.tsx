import { SxProps, Typography } from "@mui/material"
import { getPebbleInventory } from "../functions/get-pebble-inventory.js"

type Props = {
  pebbleId: number
  appState: AppState
}

export function RemainingPebbleVisual({ pebbleId, appState }: Props) {
  const pebbleIndex = pebbleId - 1
  const numberOfPebbleRemaining = getPebbleInventory(appState.wordSpots)[pebbleIndex]
  const content = "·".repeat(numberOfPebbleRemaining)

  return <Typography sx={style_typography}>{content}</Typography>
}

const style_typography: SxProps = {
  lineHeight: 0.5,
  fontSize: 28,
  fontWeight: 900,
}
