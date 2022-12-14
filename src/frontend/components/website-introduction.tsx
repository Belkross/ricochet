import React from "react";
import Typography from "@mui/material/Typography";

export default function WebsiteIntroduction() {
	return (
		<React.Fragment>
			<Typography mb={1}>
				Ricochet est un jeu de société dans lequel on progresse en associant des mots liés par leur sens, une expression ou une référence dans le but final de découvrir le dénouement d’un court
				dialogue.
			</Typography>
			<Typography mb={2}>
				Ce site constitue une version en ligne du jeu de société créé par Cyril Blondel et permettra aux visiteurs de découvrir le jeu. Il s’agit d’une unique table de jeu publique accessible par
				n’importe qui et à tout moment. En vous souhaitant le même plaisir que fut le mien sur ce jeu unique.
			</Typography>
			<Typography mb={2}>Contact: belkross.contact@gmail.com</Typography>
		</React.Fragment>
	);
}
