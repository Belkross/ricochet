import { SxProps, Typography } from "@mui/material"
import { getPebbleInventory } from "../functions/get-pebble-inventory.js"

type Props = {
  pebbleId: number
  appState: AppState
}

export function RemainingPebbleVisual({ pebbleId, appState }: Props) {
  let remainingPebbleVisual = ""
  const pebbleIndex = pebbleId -1
  let numberOfPebbleRemaining = getPebbleInventory(appState.wordSpots)[pebbleIndex]

  while (numberOfPebbleRemaining) {
    remainingPebbleVisual += "."
    numberOfPebbleRemaining--
  }

  return <Typography sx={style_remainingPebbleVisual}>{remainingPebbleVisual}</Typography>
}

const style_remainingPebbleVisual: SxProps = {
  lineHeight: 0,
  mb: 1.2,
  fontSize: 40,
  letterSpacing: -0.5,
}
