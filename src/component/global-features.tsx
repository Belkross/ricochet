import { ReactElement } from "react"
import { ProviderMuiTheming } from "./providers/provider-mui-theming"
import { ProviderThemeMode } from "./providers/theme-mode/provider-theme-mode"
import { ProviderAppState } from "../store/provider-app-state"
import { AppState } from "#type"

type Props = {
  children: ReactElement
  initialAppState?: AppState
}

export function GlobalFeatures({ children, initialAppState }: Props) {
  return (
    <ProviderThemeMode>
      <ProviderMuiTheming>
        <ProviderAppState initialState={initialAppState}>{children}</ProviderAppState>
      </ProviderMuiTheming>
    </ProviderThemeMode>
  )
}
