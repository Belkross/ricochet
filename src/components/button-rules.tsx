import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Drawer,
  Typography,
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"
import RuleIcon from "@mui/icons-material/TextSnippet"
import useTemporaryElement from "../functions/use-temporary-element.js"
import CustomLink from "./custom-link.js"
import shape from "../theme/shape.js"

export default function ButtonRules() {
  const drawer = useTemporaryElement(false)

  return (
    <>
      <Button onClick={drawer.display} startIcon={<RuleIcon />}>
        Règles
      </Button>
      <Drawer
        variant="temporary"
        anchor="left"
        open={drawer.displayed}
        onClose={drawer.remove}
        PaperProps={{ sx: style_paper }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3">C’est quoi Ricochet ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ricochet est un jeu de société dans lequel on progresse en associant des mots liés par leur sens, une
              expression ou une référence dans le but final de découvrir le dénouement d’un court dialogue. Il peut se
              jouer seul, mais il est bien plus amusant en coopération.
            </Typography>
            <Typography>
              Ce site est une version en ligne du jeu créé par Cyril Blondel. Vous pouvez vous procurer une version
              physique sur le <CustomLink href="https://www.flipflapeditions.fr/" anchor="site officiel" />.
            </Typography>
          </AccordionDetails>
          <AccordionActions></AccordionActions>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3">Chouette ! Je veux essayer !</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Chaque grille raconte un bout d’une même histoire alors découvrez le jeu en commençant par la première
              grille. Pour chaque grille voici la marche à suivre :
            </Typography>
            <Typography>
              Démarrez la partie en lisant le dialogue du début pour vous mettre dans l’ambiance. Votre objectif si vous
              l’acceptez, est de trouver la dernière réplique du dialogue et pour cela vous allez devoir éliminer un
              certain nombre de mots qui se trouvent sur la grille (22 mots à écarter dans les premières grilles). Avec
              les mots vous restant à la fin, vous devez trouver l’ordre dans lequel les disposer pour qu’ils forment un
              rébus auditif. Autrement dit, en lisant les derniers mots à voix haute et dans le bon ordre, vous
              entendrez la dernière phrase du dialogue.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3">Comment éliminer des mots ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lisez d’abord les deux mots du départ. Dans la grille 1, il s’agit d’Achille et de Lune. Vous devez
              trouver sur la grille, un mot qui s’associe à Achille et un autre à Lune. Les liens entre les mots sont
              forts et évidents. Il peut s’agir de synonymes, contraires ou de mots faisant parti d’une même expression
              française par exemple.
            </Typography>
            <Typography>
              Lorsque vous pensez les avoir trouvé, posez dessus les deux galets numéro 1 (de couleur rouge) et verifiez
              que la combinaison respecte la règle fondamentale suivante : deux galets de la même couleur sont forcément
              alignés (sur la même ligne ou sur la même colonne). Si ce n’est pas le cas, vous devez essayer une autre
              combinaison.
            </Typography>
            <Typography>
              Lorsque vous avez trouvé une combinaison qui convient, continuez d’avancer en cherchant maintenant des
              associations avec les deux mots sur lesquels vous venez de poser vos galets. Répétez cela jusqu’à réussir
              à poser les deux derniers galets 11 (marron) pour ensuite pouvoir chercher la suite du dialogue.
            </Typography>
            <Typography>
              Soyez attentifs à la combinaison de mots formée par les galets 11, car c’est un indice pour trouver le
              rébus final.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3">Je bloque ! Que faire ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Si à un moment il ne vous est plus possible de faire d’associations pertinentes ou bien que les derniers
              mots restants de permettent pas de faire une phrase qui colle au dialogue, vous vous êtes certainement
              trompé à un moment. Revenez en arrière et essayez d’autres combinaisons.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="h3">C’est trop dur ! C’est quoi la solution ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Pour votre propre plaisir, j’aimerais vous inviter une dernière fois à faire preuve de persévérance avant
              de regarder les solutions. N’hésitez pas à laisser la grille en suspens pour y revenir plus tard avec un
              regard neuf et frais sur les choses. Vous trouverez certainement de nouvelles associations possibles !
            </Typography>
            <Typography>
              Il est aussi tout à fait autorisé de chercher des associations entre deux mots à l’aide d’un moteur de
              recherche car on ne peut pas tout connaître.
            </Typography>
          </AccordionDetails>
          <AccordionActions>
            <CustomLink href="https://www.flipflapeditions.fr/comte-courant/" anchor="Solutions des grilles" />
          </AccordionActions>
        </Accordion>
      </Drawer>
    </>
  )
}

const style_paper = {
  width: "100%",
  height: "100vh",
  maxWidth: { md: "20cm" },
  padding: shape.spacingBase,

  backgroundColor: "background.default",
}
