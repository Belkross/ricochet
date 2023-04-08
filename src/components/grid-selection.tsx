import { IconButton, Stack, SxProps, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import ArrowRight from "@mui/icons-material/ArrowForwardIos"
import ArrowLeft from "@mui/icons-material/ArrowBackIosNew"
import { maxGridId, minGridId } from "../assets/grids.js"
import shape from "../theme/shape.js"
import useTemporaryElement from "../functions/use-temporary-element.js"
import { ModalAdvertisement } from "./modal-advertisement.js"
import { localStorageKeys } from "../config/local-storage-keys.js"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function GridSelection({ appState, setAppState }: Props) {
  const modal = useTemporaryElement(false)

  const { selectedGrid } = appState
  
  const handleClickLeft = () => {
    const newSelectedGrid = selectedGrid - 1
    localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))
    setAppState((prevState) => ({ ...prevState, selectedGrid: newSelectedGrid }))
  }
  const handleClickRight = () =>
    setAppState((prevState) => {
      if (selectedGrid < maxGridId) {
        const newSelectedGrid = selectedGrid + 1
        localStorage.setItem(localStorageKeys.gridId, newSelectedGrid.toString(10))
        return { ...prevState, selectedGrid: newSelectedGrid }
      } else {
        modal.display()
        return { ...prevState }
      }
    })

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
      <ModalAdvertisement displayed={modal.displayed} closeModal={modal.remove} />
    </>
  )
}

const style_container: SxProps = {
  flexFlow: "row nowrap",
  gap: shape.spacingBase,
  alignItems: "center",
  alignSelf: "center",
}
