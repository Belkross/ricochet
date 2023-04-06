import { Box, Chip, Stack, SxProps, Tooltip, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { grids } from "../assets/grids.js"
import shape from "../theme/shape.js"
import { GridSelection } from "./grid-selection.js"
import { WordsList } from "./words-list.js"
import HelpIcon from "@mui/icons-material/Help"

type Props = {
  appState: AppState
  setAppState: Dispatch<SetStateAction<AppState>>
}

export function WordsGrid({ appState, setAppState }: Props) {
  const { selectedGrid: id } = appState
  const tooltip = <Typography sx={style_typo}>{`${grids[id].help}\n${grids[id].instruction}`}</Typography>

  return (
    <Stack sx={style_container}>
      <GridSelection appState={appState} setAppState={setAppState} />

      <Stack sx={style_instructions}>
        <Typography alignSelf="center">{grids[id].winConditions}</Typography>
        <Tooltip title={tooltip}>
          <Chip label="Aide" variant="filled" icon={<HelpIcon />} />
        </Tooltip>
      </Stack>

      <Box sx={style_wordsGrid}>
        <WordsList appState={appState} setAppState={setAppState} />
      </Box>
    </Stack>
  )
}

const style_container: SxProps = {
  alignItems: "stretch",
  gap: shape.spacingBase,
  marginBottom: shape.spacingBase,

  ...shape.borderedContainer,
}

const style_instructions: SxProps = {
  flexFlow: "row wrap",
  alignSelf: "center",
  justifyContent: { xs: "center", md: "start" },
  alignItems: "center",
  gap: 2,
}

const style_wordsGrid: SxProps = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "repeat(5, 1fr)",
  gap: 0.5,
}

const style_typo: SxProps = {
  fontSize: "18px",
  padding: 1,
}
