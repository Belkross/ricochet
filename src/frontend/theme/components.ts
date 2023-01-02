import { Theme } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export default function addThemeComponents(theme: Theme): Theme {
	return createTheme(theme, {
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						scrollbarColor: "#6b6b6b #2b2b2b",
						"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
							backgroundColor: "#2b2b2b",
							width: "10px",
						},
						"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
							borderRadius: 1,
							backgroundColor: "#6b6b6b",
							minHeight: 24,
							border: "0px solid #2b2b2b",
						},
						"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
							backgroundColor: "#959595",
						},
						"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
							backgroundColor: "#959595",
						},
						"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
							backgroundColor: "#959595",
						},
						"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
							backgroundColor: "#2b2b2b",
						},
					},
				},
			},
			MuiDrawer: {
				defaultProps: {},
				styleOverrides: {
					paper: {
						backgroundImage: "none", //the paper container is lighter by default
						backgroundColor: theme.palette.background.paper,
						height: "unset", //the paper container is full height by default
					},
				},
			},
			MuiIconButton: {
				styleOverrides: {
					root: {
						borderRadius: theme.shape.borderRadius,
						borderWidth: "1px",
						borderStyle: "solid",
						borderColor: theme.palette.primary.main,
						backgroundColor: theme.palette.primary.main,
						"&:disabled": {
							backgroundColor: theme.palette.action.disabledBackground,
							borderColor: theme.palette.action.disabled,
						},
					},
				},
			},
			MuiButton: {
				defaultProps: {
					variant: "outlined",
				},
				variants: [
					{
						props: { variant: "outlined" },
						style: {
							backgroundColor: theme.palette.primary.main,
							borderColor: theme.palette.primary.main,
						},
					},
				],
				styleOverrides: {
					root: {
						padding: "12px 12px",
						color: theme.palette.text.primary,
						"&:disabled": {
							backgroundColor: theme.palette.action.disabledBackground,
							borderColor: theme.palette.action.disabled,
						},
					},
				},
			},
		},
	});
}
