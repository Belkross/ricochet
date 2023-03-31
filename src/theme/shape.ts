const shape = {
  appMaxWidth: "950px",
  appMaxHeight: "800px",
  drawerMaxWidth: "600px",
  gridMaxWidth: "550px",

  borderRadius: 2.5,
  
  spacingBase: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
}

export default {
  ...shape,

  borderedContainer: {
    padding: shape.spacingBase,
    backgroundColor: "background.paper",
    borderWidth: { xs: "2px", md: "3px" },
    borderStyle: "solid",
    borderColor: "background.border",
    borderRadius: shape.borderRadius,
    boxShadow: 12,
  },
}
