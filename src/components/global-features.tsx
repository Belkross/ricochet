import { ReactElement } from "react"
import { ProviderMuiTheming } from "./providers/provider-mui-theming"
import { ProviderThemeMode } from "./providers/theme-mode/provider-theme-mode"
import { ProviderAppState } from "../store/provider-app-state"

type Props = {
  children: ReactElement
}

export function GlobalFeatures({ children }: Props) {
  return (
    <ProviderThemeMode>
      <ProviderMuiTheming>
        <ProviderAppState>{children}</ProviderAppState>
      </ProviderMuiTheming>
    </ProviderThemeMode>
  )
}
