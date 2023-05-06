import { Dialog, SxProps, Typography } from "@mui/material"
import { useAppStateDispatch } from "../context/context-app-state"
import shape from "../styles/shape"
import { ButtonCloseElement } from "./button-close-element"
import CustomLink from "./custom-link"
import { OFFICIAL_WEBSITE_URL } from "../constants"

type Props = {
  displayed: boolean
}

export function ModalAd({ displayed }: Props) {
  const dispatch = useAppStateDispatch()

  const handleClick = () => dispatch({ type: "modal-ad-toggled", payload: false })

  return (
    <Dialog open={displayed} PaperProps={{ sx: style_container }}>
      <ButtonCloseElement onClick={handleClick} />
      <Typography>
        Ce site n’est qu’une version démo et ne permet pas de d’accéder aux prochaines grilles. Pour se procurer une
        boîte du jeu complet, c’est par ici:
        <CustomLink href={OFFICIAL_WEBSITE_URL} anchor="www.flipflapeditions.fr" />
      </Typography>
    </Dialog>
  )
}

const style_container: SxProps = {
  ...shape.borderedContainer,
  placeItems: "end",
  gap: 2,
  backgroundImage: "none",
}
