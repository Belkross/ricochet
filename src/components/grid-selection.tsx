import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function GridSelection({ appState, setAppState }: Props) {
  const handleClickRight = () => setAppState((prevState) => ({ ...prevState, gridId: ++prevState.gridId }))
  const handleClickLeft = () => setAppState((prevState) => ({ ...prevState, gridId: --prevState.gridId }))

  return (
    <Stack sx={style_container}>
      <IconButton aria-label="grille précédente" onClick={handleClickLeft}>
        <ArrowLeft />
      </IconButton>
      <Typography>Grille n°{appState.gridId}</Typography>
      <IconButton aria-label="grille suivante" onClick={handleClickRight}>
        <ArrowRight />
      </IconButton>
    </Stack>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: 1,
  alignItems: "center"
}
