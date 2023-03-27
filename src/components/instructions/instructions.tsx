import { Stack, SxProps, Typography } from "@mui/material"
import { useRef } from "react"
import { grids } from "../../assets/grids.js"
import { useTypingAnimation } from "./use-typing-animation.js"

type Props = {
  id: number
}

export default function Instructions({ id }: Props) {
  const element = useRef<HTMLParagraphElement>(null)

  useTypingAnimation(element, id)

  return (
    <Stack sx={style_container}>
      <Typography ref={element} sx={style_dialogue} />
      <Typography>{grids[id].winConditions}</Typography>
      <Typography>{`Instruction: ${grids[id].instruction}`}</Typography>
      <Typography sx={style_typography}>{`Aide: ${grids[id].help}`}</Typography>
    </Stack>
  )
}

const style_container: SxProps = {
  gap: 1,
  alignItems: "center",
}

const style_dialogue: SxProps = {
  color: "text.dialogue",
  fontFamily: "courier prime",
}

const style_typography: SxProps = {
  marginBottom: 3,
}
