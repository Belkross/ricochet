import { Button, SxProps, Typography } from "@mui/material"
import { getPebbleInventory } from "../helpers/get-pebble-inventory"
import { RemainingPebbleVisual } from "./remaining-pebble-visual"
import { useAppState, useAppStateDispatch } from "../context/context-app-state"
import { getPebbleIdsdArray } from "../helpers/get-pebble-ids"
import { ActionType, AppState } from "#type"

export function PebbleList() {
  const appState = useAppState()
  const dispatch = useAppStateDispatch()
  const pebbleInventory = getPebbleInventory(appState.wordSpots)

  const handleClick = (id: number) => dispatch({ type: ActionType.click_pebble, payload: id })

  const list_pebbles = getPebbleIdsdArray().map((pebbleId: number) => {
    const whileDisabled = pebbleInventory[pebbleId - 1] <= 0
    return (
      <Button
        key={pebbleId}
        sx={style_button(pebbleId, appState)}
        onClick={() => handleClick(pebbleId)}
        aria-label={`galet n°${pebbleId}`}
        disabled={whileDisabled}
      >
        <Typography>{pebbleId}</Typography>
        <RemainingPebbleVisual pebbleId={pebbleId} appState={appState} />
      </Button>
    )
  })

  return <>{list_pebbles}</>
}

const style_button = (pebbleId: number, appState: AppState): SxProps => {
  const { selectedPebble } = appState
  const selectedPebbleColor = `pebbles.${pebbleId}`

  return {
    display: "flex",
    flexDirection: "column",
    gridColumnStart: pebbleId === 11 ? 5 : "initial",
    gridColumnEnd: pebbleId === 11 ? 7 : "initial",

    width: "100%",
    minWidth: { xs: "auto", md: "64px" },
    height: "100%",
    padding: { xs: 0, sm: 0.5 },

    backgroundColor: selectedPebbleColor,
    color: "text.pebbles",
    borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    borderWidth: { xs: "1px", sm: "2px" },
    ":hover": {
      backgroundColor: selectedPebbleColor,
      color: "white",
      borderWidth: { xs: "1px", sm: "2px" },
      borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    },
    ":focus": {
      backgroundColor: selectedPebbleColor,
      borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    },
  }
}
