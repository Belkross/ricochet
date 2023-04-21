import { Button, SxProps, Typography } from "@mui/material"
import { grids } from "../assets/grids.js"
import { useAppStateDispatch } from "../contexts/context-app-state.js"

type Props = {
  appState: AppState
}

export function WordsList({ appState }: Props) {
  const { selectedGrid, selectedPebble, wordSpots } = appState
  const words = grids[selectedGrid].grid
  const dispatch = useAppStateDispatch()

  const handleClick = (index: number) => dispatch({ type: "word-clicked", payload: index })

  const list_words = words.map((word, index) => {
    const playedPebble = wordSpots[index]

    return (
      <Button key={index} sx={style_buttonWord(playedPebble, selectedPebble)} onClick={() => handleClick(index)}>
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: { xs: 0, sm: 0.5 },

    width: "100%",
    minWidth: "unset", //a button has a min width by default
    height: { xs: "55px", sm: "inherit" },
    padding: { xs: "1.2mm", sm: 0.8, md: 1 },

    //TODO: understand why the borderColor is white instead of the provided value "background.words"
    backgroundColor: pebbleOnWord ? playedPebbleColor : "background.words",
    borderWidth: { xs: "1px", sm: "3px" },
    borderColor: pebbleOnWord ? playedPebbleColor : "background.words",
    color: "text.words",

    ":hover": {
      borderWidth: { xs: "1px", sm: "3px" },
      borderColor: selectedPebble ? selectedPebbleColor : "background.words",
      backgroundColor: pebbleOnWord ? playedPebbleColor : "white",
    },

    ":focus": {
      backgroundColor: pebbleOnWord ? playedPebbleColor : "background.words",
    },
  }
}

const style_wordString: SxProps = {
  wordBreak: "break-all",
  lineHeight: 0.9,
  fontSize: { xs: "13px", sm: "inherit" },
}
