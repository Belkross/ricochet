type ThemeMode = "light" | "dark"

type AppState = {
  status: "home" | "game"
  gridId: number
}

type FlowlessFunction = () => void