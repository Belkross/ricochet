import { createTheme, responsiveFontSizes } from "@mui/material"
import breakpoints from "./breakpoints"
import { createMuiComponents } from "./components"
import palette from "./palette"
import shape from "./shape"
import typography from "./typography"

export function createCustomizedMuiTheme(mode: ThemeMode) {
  const theme = createTheme({
    breakpoints: { values: { ...breakpoints } },
    palette: { mode, ...palette[mode] },
    typography,
    shape,
  })

  return createTheme(responsiveFontSizes(theme), createMuiComponents(theme))
}

/* typographies and default components might need palette/breakpoints/shape
values to define things and that’s why we need to create the theme in two
steps */
