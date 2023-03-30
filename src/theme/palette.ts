import { orange, deepPurple, purple } from "@mui/material/colors"

const smoothWhiteText = "rgba(255, 255, 255, .85)"
const smoothBlackText = "rgba(0, 0, 0, .85)"

const darkModePalette = {
  primary: { main: "#7d61af" },
  text: {
    primary: smoothWhiteText,
    opposite: smoothBlackText,
    link: orange[400],
    words: smoothBlackText,
    pebbles: smoothBlackText,
    pebbleEmpty: smoothWhiteText,
    dialogue: orange[400],
  },
  background: {
    default: "#1c1734",
    paper: "#45356e",
    navBar: "#2e1c5b",
    border: "#7255a4",
    words: smoothWhiteText,
  },
  action: {
    hover: "rgba(255, 255, 255, 0.25)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
  },
  pebbles: {
    1: "#e53935",
    2: "#f06292",
    3: "#9575cd",
    4: "#5a6abf",
    5: "#64b5f6",
    6: "#26a69a",
    7: "#388e3c",
    8: "#9ccc65",
    9: "#fff176",
    10: "#ffb74d",
    11: "#9c786c",
  },
}

const lightModePalette = {
  ...darkModePalette,
  primary: { main: deepPurple[300] },
  text: {
    primary: smoothBlackText,
    opposite: smoothWhiteText,
    link: deepPurple[800],
    words: smoothBlackText,
    pebbles: smoothBlackText,
    pebbleEmpty: smoothBlackText,
    dialogue: purple[800],
  },
  background: {
    default: deepPurple[50],
    paper: deepPurple[200],
    navBar: deepPurple[200],
    words: smoothWhiteText,
  },
  action: {
    hover: "rgba(255, 255, 255, 0.25)",
  },
}

export default {
  dark: darkModePalette,
  light: lightModePalette,
}
