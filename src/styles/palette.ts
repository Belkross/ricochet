import { orange, deepPurple, deepOrange, red } from "@mui/material/colors"

const smoothWhiteText = "rgba(255, 255, 255, .85)"
const smoothBlackText = "rgba(0, 0, 0, .85)"

export const pebbleColors: { [pebbleId: number]: string } = {
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
}

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
    border: "#7d61af",
    words: smoothWhiteText,
  },
  action: {
    hover: "rgba(255, 255, 255, 0.25)",
    disabledBackground: "rgba(0, 0, 0, 0.12)",
  },
  error: { main: red[400] },
  pebbles: pebbleColors,
}

const lightModePalette = {
  ...darkModePalette,
  primary: { main: deepPurple[200] },
  text: {
    primary: smoothBlackText,
    opposite: smoothWhiteText,
    link: deepOrange[800],
    words: smoothBlackText,
    pebbles: smoothBlackText,
    pebbleEmpty: smoothBlackText,
    dialogue: deepOrange[900],
  },
  background: {
    default: deepPurple[50],
    paper: deepPurple[100],
    border: deepPurple[200],
    words: smoothWhiteText,
  },
  error: { main: red[300] },
  action: {
    hover: "rgba(255, 255, 255, 0.25)",
  },
}

export default {
  dark: darkModePalette,
  light: lightModePalette,
}
