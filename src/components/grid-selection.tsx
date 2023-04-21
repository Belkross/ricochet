import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"
import { minGridId } from "../assets/grids.js"
import shape from "../theme/shape.js"
import { ModalAdvertisement } from "./modal-advertisement.js"
import { useAppStateDispatch } from "../config/contexts.js"

type Props = {
  appState: AppState
}

export function GridSelection({ appState }: Props) {
  const dispatch = useAppStateDispatch()
  const { selectedGrid, advertisementDisplayed } = appState

  const handleClickLeft = () => dispatch({ type: "grid-decremented" })
  const handleClickRight = () => dispatch({ type: "grid-incremented" })

  return (
    <>
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
        <IconButton aria-label="grille suivante" onClick={handleClickRight} size="small">
          <ArrowRight />
        </IconButton>
      </Stack>
      <ModalAdvertisement displayed={advertisementDisplayed} />
    </>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: shape.spacingBase,
  alignItems: "center",
  alignSelf: "center",
}
