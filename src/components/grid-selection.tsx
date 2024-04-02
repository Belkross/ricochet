import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"
import { useAppState, useAppStateDispatch } from "../context/context-app-state"
import shape from "../styles/shape"
import { ModalAd } from "./modal-ad"
import { MIN_GRID_ID } from "../constants"
import { ActionType } from "#type"

export function GridSelection() {
  const { selectedGrid, adDisplayed } = useAppState()
  const dispatch = useAppStateDispatch()

  const handleClickLeft = () => dispatch({ type: ActionType.decrement_grid })
  const handleClickRight = () => dispatch({ type: ActionType.increment_grid })

  return (
    <>
      <Stack sx={style_container}>
        <IconButton
          aria-label="grille précédente"
          onClick={handleClickLeft}
          disabled={selectedGrid <= MIN_GRID_ID}
          size="small"
        >
          <ArrowLeft />
        </IconButton>
        <Typography>Grille n°{selectedGrid}</Typography>
        <IconButton aria-label="grille suivante" onClick={handleClickRight} size="small">
          <ArrowRight />
        </IconButton>
      </Stack>
      <ModalAd displayed={adDisplayed} />
    </>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: shape.spacingBase,
  alignItems: "center",
  alignSelf: "center",
}
