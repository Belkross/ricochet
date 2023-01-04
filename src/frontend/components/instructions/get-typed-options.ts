import { grids } from "../../data/grids.js";

const TYPE_SPEED = 50;

export default function getTypedOptions(gridId: number) {
	const entireString = grids[gridId].dialogue.reduce((previousValue: string, currentValue: string): string => {
		return previousValue + `-${currentValue}<br/>`;
	}, "");

	return {
		strings: [entireString],
		typeSpeed: TYPE_SPEED,
		showCursor: false,
	};
}
