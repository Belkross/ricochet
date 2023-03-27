import { Button, Container } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import WebsiteIntroduction from "./website-introduction.js"

type Props = {
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function InterfaceHome({ setAppState }: Props) {
  const handleClick = () => setAppState((prevState) => ({ ...prevState, status: "game" }))

  return (
    <Container>
      <Button onClick={handleClick}>Jouer</Button>
      <WebsiteIntroduction />
    </Container>
  )
}
