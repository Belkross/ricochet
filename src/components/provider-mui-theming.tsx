import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material"
import { ReactElement } from "react"
import { createCustomizedMuiTheme } from "../theme/create-customized-mui-theme.js"
import { useThemeMode } from "./provider-theme-mode.js"

type Props = {
  children: ReactElement
}

export function ProviderMuiTheming({ children }: Props) {
  const themeMode = useThemeMode()

  return (
    <ThemeProvider theme={createCustomizedMuiTheme(themeMode)}>
      <CssBaseline enableColorScheme />
      {StaticGlobalStyles}
      {children}
    </ThemeProvider>
  )
}

const StaticGlobalStyles = (
  <GlobalStyles
    styles={{
      body: {
        display: "flex",
        placeItems: "center",
        height: "100vh",

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
