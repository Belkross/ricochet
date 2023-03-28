import { Button, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { getPebbleInventory } from "../functions/get-pebble-inventory.js"
import { RemainingPebbleVisual } from "./remaining-pebble-visual.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function PebbleList({ appState, setAppState }: Props) {
  const { selectedPebble, wordSpots } = appState

  const handleClick = (id: number) => () => {
    const pebbleAlreadySelected = id === selectedPebble
    const somePebbleRemains = getPebbleInventory(wordSpots)[id - 1] > 0

    if (pebbleAlreadySelected) setAppState((prevState) => ({ ...prevState, selectedPebble: NaN }))
    else if (somePebbleRemains) setAppState((prevState) => ({ ...prevState, selectedPebble: id }))
  }

  const list_pebbles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((pebbleId: number) => {
    return (
      <Button key={pebbleId} sx={style_pebble(pebbleId, appState)} onClick={() => handleClick(pebbleId)}>
        <Typography>{pebbleId}</Typography>
        <RemainingPebbleVisual pebbleId={pebbleId} appState={appState} />
      </Button>
    )
  })

  return <>{list_pebbles}</>
}

const style_pebble = (pebbleId: number, appState: AppState): SxProps => {
  const { selectedPebble, wordSpots } = appState
  const somePebbleAvailable = getPebbleInventory(wordSpots)[pebbleId - 1]
  const selectedPebbleColor = `pebbles.${pebbleId}`

  return {
    display: "flex",
    flexDirection: "column",
    gridColumnStart: pebbleId === 11 ? 5 : "initial",
    gridColumnEnd: pebbleId === 11 ? 7 : "initial",

    minWidth: { thinest: "45px", thin: "55px", medium: "64px" },
    padding: "6px",
    
    backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
    color: somePebbleAvailable ? "text.pebbles" : "text.pebbleEmpty",
    borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    borderWidth: { thinest: "1px", thin: "2px" },
    "&:hover": {
      backgroundColor: somePebbleAvailable ? selectedPebbleColor : "background.paper",
      color: "white",
      borderWidth: { thinest: "1px", thin: "2px" },
      borderColor: selectedPebble === pebbleId ? "white" : selectedPebbleColor,
    },
  }
}