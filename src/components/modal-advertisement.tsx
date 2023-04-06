import { Dialog, SxProps, Typography } from "@mui/material"
import CustomLink from "./custom-link.js"
import shape from "../theme/shape.js"

type Props = {
  displayed: boolean
  closeModal: FlowlessFunction
}

export function ModalAdvertisement({ displayed, closeModal }: Props) {
  return (
    <Dialog open={displayed} onClose={closeModal} PaperProps={{ sx: style_container }}>
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
  backgroundImage: "none",
}
