import { ReactElement } from "react"
import { ProviderMuiTheming } from "./providers/provider-mui-theming"
import { ProviderThemeMode } from "./providers/theme-mode/provider-theme-mode"

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
