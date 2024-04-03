import { AccordionSummary, Typography } from "@mui/material"
import { ReactNode } from "react"
import ExpandMore from "@mui/icons-material/ExpandMore"

type Props = {
  children: ReactNode
}

export function TitleAccordion({ children }: Props) {
  return (
    <AccordionSummary expandIcon={<ExpandMore />}>
      <Typography variant="h3">{children}</Typography>
    </AccordionSummary>
  )
}
