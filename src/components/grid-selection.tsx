import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"
import { grids } from "../assets/grids.js"
import shape from "../theme/shape.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

const minGridId = 1
const maxGridId = Object.keys(grids).length

export function GridSelection({ appState, setAppState }: Props) {
  const { selectedGrid } = appState
  const handleClickRight = () => setAppState((prevState) => ({ ...prevState, selectedGrid: ++prevState.selectedGrid }))
  const handleClickLeft = () => setAppState((prevState) => ({ ...prevState, selectedGrid: --prevState.selectedGrid }))

  return (
    <Stack sx={style_container}>
      <IconButton
        aria-label="grille précédente"
        onClick={handleClickLeft}
        disabled={selectedGrid <= minGridId}
        size="small"
      >
        <ArrowLeft />
      </IconButton>
      <Typography>Grille n°{selectedGrid}</Typography>
      <IconButton
        aria-label="grille suivante"
        onClick={handleClickRight}
        disabled={selectedGrid >= maxGridId}
        size="small"
      >
        <ArrowRight />
      </IconButton>
    </Stack>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: shape.spacingBase,
  alignItems: "center",
}
