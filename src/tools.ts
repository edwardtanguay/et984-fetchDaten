import { ICharacter } from "./interfaces";

export const fetchData = async (callback:  (characters: ICharacter[]) => void) => {
	const response = await fetch("https://rickandmortyapi.com/api/character");
	const data = await response.json();
	const characters = data.results;
	callback(characters);
};
