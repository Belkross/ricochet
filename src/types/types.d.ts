type ThemeMode = "light" | "dark"

type AppState = {
  status: "home" | "game"
  selectedGrid: number
  selectedPebble: number
  wordSpots: number[]
}

type FlowlessFunction = () => void