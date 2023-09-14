import { GetCharacterListHtml } from "./GetCharacterListHtml";

export const GetWrapperHtml = () => {
	return /*html*/ `
	<div class ="wrapper flex flex-wrap gap-4 justify-center items-center bg-slate-100 p-3 m-2"></div>
	`;
}; 

export const attachWrapperEvents = (characters) => {
	const input = document.querySelector(".input");
	input.addEventListener("input", (e) => {
		const keyword = e.target.value.toLowerCase();
		if (keyword !== "") {
			const filteredCharacters = characters.filter((char) => char.name.toLowerCase().includes(keyword));
			document.querySelector(".wrapper").innerHTML = GetCharacterListHtml(filteredCharacters);
			return;
		}

	});
}