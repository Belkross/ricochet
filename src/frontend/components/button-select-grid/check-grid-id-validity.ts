import { NUMBER_OF_GRIDS } from "../../data/grids.js";

export default function checkGridIdValidity(id: string): boolean {
	const idIsTwoDigitNumber = /^[0-9]{1,2}$/.test(id);
	const idRespectRange = checkIdRespectRange(id);

	return idIsTwoDigitNumber && idRespectRange;
}

function checkIdRespectRange(id: string) {
	const parsedId = parseInt(id, 10);

	return parsedId >= 1 && parsedId <= NUMBER_OF_GRIDS;
}
