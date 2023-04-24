import { Button, SxProps, Typography } from "@mui/material"
import { getPebbleInventory } from "../functions/get-pebble-inventory"
import { RemainingPebbleVisual } from "./remaining-pebble-visual"
import { useAppStateDispatch } from "../context/context-app-state"

type Props = {
  appState: AppState
}

export function PebbleList({ appState }: Props) {
  const dispatch = useAppStateDispatch()

  const handleClick = (id: number) => dispatch({ type: "pebble-clicked", payload: id })

  const list_pebbles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((pebbleId: number) => {
    return (
      <Button key={pebbleId} sx={style_button(pebbleId, appState)} onClick={() => handleClick(pebbleId)}>
        <Typography>{pebbleId}</Typography>
        <RemainingPebbleVisual pebbleId={pebbleId} appState={appState} />
      </Button>
    )
  })

  return <>{list_pebbles}</>
}

const style_button = (pebbleId: number, appState: AppState): SxProps => {
  const { selectedPebble, wordSpots } = appState
  const somePebbleAvailable = getPebbleInventory(wordSpots)[pebbleId - 1]
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

    backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
    color: somePebbleAvailable ? "text.pebbles" : "text.pebbleEmpty",
    borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    borderWidth: { xs: "1px", sm: "2px" },
    ":hover": {
      backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
      color: "white",
      borderWidth: { xs: "1px", sm: "2px" },
      borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    },
    ":focus": {
      backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
      borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    },
  }
}
