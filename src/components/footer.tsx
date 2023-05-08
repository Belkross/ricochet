import { Link, SxProps, Typography } from "@mui/material"
import useTemporaryElement from "../hooks/use-temporary-element"
import { ModalLegalNotice } from "./modal-legal-notice"

export function Footer() {
  const modal = useTemporaryElement(false)
  const copyright = `© ${new Date().getFullYear()} Ricochet - `

  return (
    <>
      <Typography variant="caption" sx={style_typography}>
        {copyright}
        <Link component="span" sx={style_link} onClick={modal.display}>
          Mentions Légales
        </Link>
      </Typography>
      <ModalLegalNotice displayed={modal.displayed} closeModal={modal.remove} />
    </>
  )
}

const style_typography: SxProps = {
  gridColumn: "1/5",
  gridRow: "11/12",
  justifySelf: "center",
  alignSelf: { lg: "center" },
}

const style_link: SxProps = {
  color: "text.primary",
  textDecoration: "none",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
    textDecorationColor: "text.primary",
  },
}
