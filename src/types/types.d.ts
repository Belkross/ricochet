type ThemeMode = "light" | "dark"

type AppState = {
  selectedGrid: number
  selectedPebble: number
  wordSpots: number[]
}

type FlowlessFunction = () => void