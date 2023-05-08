import { SxProps, Typography } from "@mui/material"
import { useRef } from "react"
import { useTypingAnimation } from "./use-typing-animation"
import { useAppState } from "../../context/context-app-state"

export function Dialogue() {
  const { selectedGrid: id } = useAppState()
  const element = useRef<HTMLParagraphElement>(null)

  useTypingAnimation(element, id)

  return <Typography ref={element} sx={style_dialogue} />
}

const style_dialogue: SxProps = {
  color: "text.dialogue",
  fontFamily: "courier prime",
  my: { xs: 3, lg: 6 },
}
