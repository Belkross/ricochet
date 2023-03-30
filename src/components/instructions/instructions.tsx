import { SxProps, Typography } from "@mui/material"
import { useRef } from "react"
import { useTypingAnimation } from "./use-typing-animation.js"

type Props = {
  appState: AppState
}

export function Instructions({ appState }: Props) {
  const { selectedGrid: id } = appState
  const element = useRef<HTMLParagraphElement>(null)

  useTypingAnimation(element, id)

  return <Typography ref={element} sx={style_dialogue} />
}

const style_dialogue: SxProps = {
  color: "text.dialogue",
  fontFamily: "courier prime",
  marginBottom: { xs: 3, lg: 0 },
}
