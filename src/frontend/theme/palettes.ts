import { blue, orange, grey, deepOrange } from "@mui/material/colors";
const friendlyWhite = "rgba(255, 255, 255, .85)";
const friendlyBlack = "rgba(0, 0, 0, .85)";

export const darkModePalette = {
	primary: { main: blue[700] },
	text: {
		primary: friendlyWhite,
		opposite: friendlyBlack,
		link: orange[400],
		words: friendlyBlack,
		pebbles: friendlyBlack,
		pebbleEmpty: friendlyWhite,
		chatAuthor: orange[500],
		dialogue: orange[500],
	},
	background: {
		default: "#0a1929",
		paper: "#132f4c",
		navBar: "#001e3c",
		words: friendlyWhite,
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
};

export const lightModePalette = {
	...darkModePalette,
	primary: { main: blue[400] },
	text: {
		primary: friendlyBlack,
		opposite: friendlyWhite,
		link: orange[900],
		words: friendlyBlack,
		pebbles: friendlyBlack,
		pebbleEmpty: friendlyBlack,
		chatAuthor: orange[900],
		dialogue: deepOrange[900],
	},
	background: {
		default: grey[50],
		paper: blue[100],
		navBar: blue[200],
		words: friendlyWhite,
	},
	action: {
		hover: "rgba(255, 255, 255, 0.25)",
	},
};

export const palettes = {
	dark: darkModePalette,
	light: lightModePalette,
};
