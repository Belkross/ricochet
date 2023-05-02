import { Accordion, AccordionActions, AccordionDetails, Button, Box, Stack, SxProps, Typography } from "@mui/material"
import RuleIcon from "@mui/icons-material/TextSnippet"
import useTemporaryElement from "../../hooks/use-temporary-element"
import breakpoints from "../../styles/breakpoints"
import shape from "../../styles/shape"
import { ButtonCloseElement } from "../button-close-element"
import CustomLink from "../custom-link"
import { TitleAccordion } from "./title-accordion"

export function ButtonRules() {
  const drawer = useTemporaryElement(false)

  return (
    <>
      <Button onClick={drawer.display} startIcon={<RuleIcon />}>
        Règles
      </Button>
      <Box sx={style_paper(drawer.displayed)}>
        <Stack sx={style_header}>
          <Typography variant="h2" ml={1}>
            Règles du jeu
          </Typography>
          <ButtonCloseElement onClick={() => drawer.remove()} />
        </Stack>
        <Accordion>
          <TitleAccordion>C’est quoi Ricochet ?</TitleAccordion>
          <AccordionDetails sx={style_accordionDetails}>
            <Typography>
              Ricochet est un jeu de société dans lequel on progresse en associant des mots par leur sens, une
              expression ou une référence dans le but de découvrir le dénouement d’un court dialogue.
            </Typography>
            <Typography>
              Ce site est une version démo du jeu créé par Cyril Blondel et constitue un hommage à son travail. Il est
              possible de se procurer la version physique du jeu sur le site officiel:{" "}
              <CustomLink href="https://www.flipflapeditions.fr/" anchor="www.flipflapeditions.fr" />
            </Typography>
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>

        <Accordion>
          <TitleAccordion>Le but du jeu</TitleAccordion>
          <AccordionDetails sx={style_accordionDetails}>
            <Typography>
              Pour résoudre une grille, il faut éliminer des mots et trouver les 3 mots restant qui permettent de former
              la dernière réplique secrète du dialogue. Ces 3 derniers mots permettent de former un rébus auditif ce qui
              signifie qu’en les lisant à haute voix et dans le bon ordre, vous entendrez la dernière phrase du
              dialogue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <TitleAccordion>Commencer à jouer</TitleAccordion>
          <AccordionDetails sx={style_accordionDetails}>
            <Typography>
              Pour commencer à éliminer des mots, repérez les deux mots du départ. Pour la première grille, il s’agit de
              “Lune” et “Achille”. Ensuite trouvez deux autres mots sur la grille qui s’associent bien avec eux et posez
              la première couleur dessus (rouge).
            </Typography>
            <Typography>
              Pour poser la prochaine couleur (rose), vous devez trouver une association avec chacun des mots sur
              lesquels vous avez posé la dernière couleur.
            </Typography>
            <Typography>
              Il faut procéder ainsi jusqu’à ce que toutes les couleurs soient posées. Si les mots que vous avez
              éliminés sont les bons, les 3 mots sans couleur qu’il reste permettent de trouver la fin du dialogue.
            </Typography>
            <Typography>
              RÈGLE CONCERNANT LES ASSOCIATIONS: deux mots éliminés par une même couleur sont obligatoirement alignés.
              C’est-à-dire qu’ils se trouvent forcément sur la même colonne ou la même ligne.
            </Typography>
            <Typography>
              Les liens entre les mots sont forcément forts et évidents. Il peut s’agir de synonymes, contraires ou de
              mots faisant part d’une même expression française par exemple.
            </Typography>
            <Typography>
              La onzième paire de mot, (marron) lorsqu’elle est correcte constitue toujours un indice pour le rébus
              final.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <TitleAccordion>Que faire si je bloque ?</TitleAccordion>
          <AccordionDetails sx={style_accordionDetails}>
            <Typography>
              Si à un moment il ne vous est plus possible de faire d’associations cohérentes ou bien que les derniers
              mots restants ne permettent pas de faire une phrase qui colle au dialogue, vous vous êtes certainement
              trompé à un moment. Revenez en arrière et essayez d’autres combinaisons.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <TitleAccordion>Solutions</TitleAccordion>
          <AccordionDetails sx={style_accordionDetails}>
            <Typography>
              Les solutions des grilles se trouvent sur le site officiel du jeu:{" "}
              <CustomLink href="https://www.flipflapeditions.fr/comte-courant/" anchor="www.flipflapeditions.fr" />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}

const style_paper = (displayed: boolean): SxProps => ({
  position: "fixed",
  top: 0,
  left: displayed ? 0 : -breakpoints.lg,

  flexFlow: "column nowrap",
  gap: 1.5,

  transitionProperty: "left",
  transitionDuration: "0.6s",

  width: "100%",
  height: "100vh",
  maxWidth: { lg: "37vw", xl: "650px" },
  padding: shape.spacingBase,
  backgroundColor: "background.default",
  borderRightWidth: { xs: "2px", md: "3px" },
  borderRightStyle: "solid",
  borderRightColor: "background.border",
  boxShadow: 7,
  zIndex: 1,
  overflowY: "scroll",
})

const style_accordionDetails: SxProps = {
  display: "flex",
  flexFlow: "column nowrap",
  gap: 2,
}

const style_header: SxProps = {
  flexFlow: "row nowrap",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 1,
  marginBottom: shape.spacingBase,
}
