import React from "react";
import Link from "@mui/material/Link";

interface CustomLinkProps {
	href: string;
	anchor: string;
}

export default function CustomLink({ href, anchor }: CustomLinkProps) {
	return (
		<Link href={href} target="_blank" rel="noopener" underline="hover" sx={style_link}>
			{anchor}
		</Link>
	);
}

const style_link = {
	color: "text.link",
};
