import useTemporaryElement from "../hooks/use-temporary-element"
import { ModalLegalNotice } from "./modal-legal-notice"

export function Footer() {
  const modal = useTemporaryElement(false)
  const copyright = `© ${new Date().getFullYear()} Ricochet - Mentions légales`

  return (
    <>
      <button style={style_typography} onClick={modal.display}>
        {copyright}
      </button>
      <ModalLegalNotice displayed={modal.displayed} closeModal={modal.remove} />
    </>
  )
}

const style_typography: React.CSSProperties = {
  gridColumn: "1/5",
  gridRow: "11/12",
  justifySelf: "center",
  alignSelf: "center",
  cursor: "pointer",
  border: "none",
  backgroundColor: "inherit",
}
