import { ICharacter } from "../interfaces";
import { GetCharacterListHtml } from "./GetCharacterListHtml";

export const GetWrapperHtml = () => {
	return /*html*/ `
	<div class ="wrapper flex flex-wrap gap-4 justify-center items-center bg-slate-100 p-3 m-2"></div>
	`;
};

export const attachWrapperEvents = (characters: ICharacter[]) => {
	const inputElem = document.querySelector(".searchText");

	if (inputElem) {
		inputElem.addEventListener("input", (e: Event) => {
			const keyword = (e.target as HTMLInputElement).value.toLowerCase();
			const filteredCharacters = characters.filter((char) => char.name.toLowerCase().includes(keyword));
			const wrapperElem = document.querySelector(".wrapper");
			if (wrapperElem) {
				wrapperElem.innerHTML = GetCharacterListHtml(filteredCharacters);
			}
			return;
		});
	}
};