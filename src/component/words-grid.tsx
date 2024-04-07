import { Box, Chip, Stack, SxProps, Tooltip, Typography } from "@mui/material"
import HelpIcon from "@mui/icons-material/Help"
import shape from "../styles/shape"
import { GridSelector } from "./grid-selector"
import { WordsList } from "./words-list"
import { useAppState } from "../context/context-app-state"
import { grids } from "#domain"

export function WordsGrid() {
  const { selectedGrid: id } = useAppState()

  const tooltip = <Typography sx={style_typo}>{`${grids[id].help}\n${grids[id].instruction}`}</Typography>

  return (
    <Stack sx={style_container}>
      <GridSelector />

      <Stack sx={style_instructions}>
        <Typography data-testid="win_conditions" alignSelf="center">
          {grids[id].winConditions}
        </Typography>
        <Tooltip data-testid="advices" title={tooltip} placement="top" arrow>
          <Chip label="Aide" variant="filled" icon={<HelpIcon />} />
        </Tooltip>
      </Stack>

      <Box sx={style_wordsGrid}>
        <WordsList />
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
