import { NUMBER_OF_GRIDS } from "../../data/grids.js";

export default function checkGridIdValidity(input: string): boolean {
	const inputIsTwoDigitNumber = /^[0-9]{1,2}$/.test(input);

	const id = parseInt(input, 10);
	const idRespectRange = id >= 1 && id <= NUMBER_OF_GRIDS;

	if (inputIsTwoDigitNumber && idRespectRange) return true;
	else return false;
}
