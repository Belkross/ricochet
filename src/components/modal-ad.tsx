import { Dialog, SxProps, Typography } from "@mui/material"
import { useAppStateDispatch } from "../contexts/context-app-state"
import shape from "../theme/shape"
import { ButtonCloseElement } from "./button-close-element"
import CustomLink from "./custom-link"

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
        boîte du jeu complet, c’est par ici:{" "}
        <CustomLink
          href="https://www.flipflapeditions.fr/produit/ricochet-a-la-poursuite-du-comte-courant/"
          anchor="www.flipflapeditions.fr"
        />
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
