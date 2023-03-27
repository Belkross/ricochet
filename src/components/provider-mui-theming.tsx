import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material"
import { ReactElement } from "react"
import { createCustomizedMuiTheme } from "../theme/create-customized-mui-theme.js"

type Props = {
  children: ReactElement
}

export function ProviderMuiTheming({ children }: Props) {
  const themeMode = "dark"

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
    styles={
      {
        // body: {}
      }
    }
  />
)
