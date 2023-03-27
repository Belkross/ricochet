import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"
import { grids } from "../assets/grids.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

const minGridId = 1
const maxGridId = Object.keys(grids).length

export function GridSelection({ appState, setAppState }: Props) {
  const { gridId } = appState
  const handleClickRight = () => setAppState((prevState) => ({ ...prevState, gridId: ++prevState.gridId }))
  const handleClickLeft = () => setAppState((prevState) => ({ ...prevState, gridId: --prevState.gridId }))

  return (
    <Stack sx={style_container}>
      <IconButton aria-label="grille précédente" onClick={handleClickLeft} disabled={gridId <= minGridId}>
        <ArrowLeft />
      </IconButton>
      <Typography>Grille n°{gridId}</Typography>
      <IconButton aria-label="grille suivante" onClick={handleClickRight} disabled={gridId >= maxGridId}>
        <ArrowRight />
      </IconButton>
    </Stack>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: 1,
  alignItems: "center",
}
