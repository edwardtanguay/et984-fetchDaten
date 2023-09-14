import { GetCharacterHtml } from "./GetCharacterHtml";

export const GetCharacterListHtml = (data) => {
	return /*html*/ `
	${data.map(char => {
		return GetCharacterHtml(char);
	}).join('')}
	`
};