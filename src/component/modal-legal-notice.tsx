import { Dialog, DialogContent, Typography, SxProps, Box } from "@mui/material"
import shape from "../styles/shape"

type Props = {
  displayed: boolean
  closeModal: FlowlessFunction
}

export function ModalLegalNotice({ displayed, closeModal }: Props) {
  return (
    <Dialog open={displayed} onClose={closeModal} PaperProps={{ sx: style_container }}>
      <DialogContent sx={style_dialogContent}>
        <Typography variant="h2">Mentions légales</Typography>

        <Box>
          <Typography variant="h3" mb={1}>
            Contact
          </Typography>
          <Typography>Le site est édité par Truong Huy.</Typography>
          <Typography>Email: belkross.contact@gmail.com</Typography>
        </Box>

        <Box>
          <Typography variant="h3" mb={1}>
            Hébergement
          </Typography>
          <Typography>
            Le site est hébergé par la société Netlify, située au 44 Montgomery Street, Suite 300, San Francisco,
            California 94104.
          </Typography>
          <Typography>Email: support@netlify.com</Typography>
        </Box>

        <Box>
          <Typography variant="h3" mb={1}>
            Données personneles
          </Typography>
          <Typography>Aucune donnée personnelle n’est collectée et le site n’utilise pas de cookie.</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

const style_container: SxProps = {
  backgroundImage: "none",
  ...shape.borderedContainer,
}

const style_dialogContent: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
}
