import { Button, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { grids } from "../assets/grids.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function WordsList({ appState, setAppState }: Props) {
  const { selectedGrid, selectedPebble, wordSpots } = appState
  const words = grids[selectedGrid].grid
  const handleClick = (/* wordId: number */) => {
    setAppState((prevState) => ({ ...prevState }))
  }

  const list_words = words.map((word, index) => {
    const wordId = index + 1
    const playedPebble = wordSpots[index]

    return (
      <Button key={wordId} sx={style_buttonWord(playedPebble, selectedPebble)} onClick={() => handleClick()}>
        <Typography sx={style_wordString}>{word[0].toUpperCase() + word.slice(1)}</Typography>
        <Typography>{playedPebble || "-"}</Typography>
      </Button>
    )
  })

  return <>{list_words}</>
}

const style_buttonWord = (pebbleOnWord: number, selectedPebble: number): SxProps => {
  const playedPebbleColor = pebbleOnWord ? `pebbles.${pebbleOnWord}` : undefined
  const selectedPebbleColor = selectedPebble ? `pebbles.${selectedPebble}` : undefined

  return {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: { xs: 0, sm: 1, md: 1.5 },

    width: { xs: "55px", sm: "inherit" },
    minWidth: { xs: "unset", sm: "64px" },
    maxWidth: { sm: "105px", md: "inherit" },
    height: { xs: "55px", sm: "inherit" },
    padding: { xs: "1.2mm", sm: 0.8, md: 1 },

    //TODO: understand why the borderColor is white instead of the provided value "background.words"
    backgroundColor: pebbleOnWord ? playedPebbleColor : "background.words",
    borderWidth: { xs: "1px", sm: "3px" },
    borderColor: pebbleOnWord ? playedPebbleColor : "background.words",
    color: "text.words",

    "&:hover": {
      borderWidth: { xs: "1px", sm: "3px" },
      borderColor: selectedPebble ? selectedPebbleColor : "white",
      backgroundColor: pebbleOnWord ? playedPebbleColor : "white",
    },
  }
}

const style_wordString: SxProps = {
  wordBreak: "break-all",
  lineHeight: 0.9,
  fontSize: { xs: "13px", sm: "inherit" },
}
