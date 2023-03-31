import { SxProps, Typography } from "@mui/material"

export function Footer() {
  const copyright = `© ${new Date().getFullYear()} Ricochet`
  const content = `${copyright} - Mentions Légales`

  return (
    <Typography variant="caption" sx={style_typography}>
      {content}
    </Typography>
  )
}

const style_typography: SxProps = {
  gridColumn: "1/5",
  gridRow: "11/12",
  justifySelf: "center",
  alignSelf: { lg: "center" },
}
