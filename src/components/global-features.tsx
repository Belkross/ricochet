import { ReactElement } from "react"
import { ProviderMuiTheming } from "./provider-mui-theming.js"
import { ProviderThemeMode } from "./provider-theme-mode.js"

type Props = {
  children: ReactElement
}

export function GlobalFeatures({ children }: Props) {
  return (
    <ProviderThemeMode>
      <ProviderMuiTheming>{children}</ProviderMuiTheming>
    </ProviderThemeMode>
  )
}
