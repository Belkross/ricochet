import { CssBaseline, GlobalStyles, Theme, ThemeProvider, useMediaQuery } from "@mui/material"
import { ReactElement } from "react"
import { createCustomizedMuiTheme } from "../theme/create-customized-mui-theme.js"
import { useThemeMode } from "../contexts/context-theme-mode.js"

type Props = {
  children: ReactElement
}

export function ProviderMuiTheming({ children }: Props) {
  const themeMode = useThemeMode()
  const muiTheme = createCustomizedMuiTheme(themeMode)

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      {StaticGlobalStyles(muiTheme)}
      {children}
    </ThemeProvider>
  )
}

const StaticGlobalStyles = (theme: Theme) => {
  const smallScreen = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: smallScreen ? "start" : "center",
          minHeight: "100vh",

          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "inherit",
            width: "10px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "#6b6b6b",
            minHeight: "30px",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#959595",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "inherit",
          },
        },

        "#root": {
          width: "100%",
        },
      }}
    />
  )
}
