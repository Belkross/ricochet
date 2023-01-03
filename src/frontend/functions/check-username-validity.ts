export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 12;

export default function checkUsernameValidity(username: string): boolean {
	const modele = `^[a-zéèëêàâäïîôöÿçùûüœæ]{${USERNAME_MIN_LENGTH},${USERNAME_MAX_LENGTH}}$`;
	const regex = new RegExp(modele, "i");

	return regex.test(username);
}
