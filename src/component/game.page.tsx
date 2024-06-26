import { Box, Stack, SxProps, Typography } from "@mui/material"
import shape from "../styles/shape"
import { ButtonRules } from "./button-rules/button-rules"
import { ButtonThemeMode } from "./button-theme-mode"
import { Dialogue } from "./dialogue/dialogue"
import { Footer } from "./footer"
import { Pebbles } from "./pebbles"
import { WordsGrid } from "./words-grid"

export function GamePage() {
  return (
    <Box sx={style_container}>
      <Stack sx={style_header}>
        <Typography variant="h1">Ricochet</Typography>
        <Stack sx={style_menu}>
          <ButtonRules />
          <ButtonThemeMode />
        </Stack>
        <Dialogue />
      </Stack>

      <Stack sx={style_grids}>
        <WordsGrid />
        <Pebbles />
      </Stack>

      <Footer />
    </Box>
  )
}

const style_container: SxProps = {
  display: { xs: "flex", lg: "grid" },

  flexFlow: "column nowrap",
  alignItems: "center",
  gap: 2,

  gridTemplateColumns: "repeat(12, 1fr)",
  gridTemplateRows: "repeat(12, 1fr)",

  height: "100%",
  maxWidth: { xs: "none", lg: shape.appMaxWidth },
  maxHeight: { xs: "none", lg: shape.appMaxHeight },
  margin: "auto",

  py: { xs: 3, md: 5, lg: 8 },
  px: shape.spacingBase,
}

const style_header: SxProps = {
  alignItems: "center",
  gap: 2,

  gridColumn: "1/5",
  gridRow: "1/13",
  justifySelf: "start",
  alignSelf: { lg: "start" },

  width: "100%",
}

const style_menu: SxProps = {
  flexFlow: "row wrap",
  justifyContent: "center",
  gap: 1,
}

const style_grids: SxProps = {
  gridColumn: "5/13",
  gridRow: "1/13",
  justifySelf: "center",
  alignSelf: { lg: "center" },

  width: "100%",
  maxWidth: shape.gridMaxWidth,
  marginBottom: { xs: 6, lg: "none" },
}
