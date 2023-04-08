import { Dialog, SxProps, Typography } from "@mui/material"
import CustomLink from "./custom-link.js"
import shape from "../theme/shape.js"
import { ButtonCloseElement } from "./button-close-element.js"

type Props = {
  displayed: boolean
  closeModal: FlowlessFunction
}

export function ModalAdvertisement({ displayed, closeModal }: Props) {
  return (
    <Dialog open={displayed} PaperProps={{ sx: style_container }}>
      <ButtonCloseElement onClick={() => closeModal()} />
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
