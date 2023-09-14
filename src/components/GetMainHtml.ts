import { GetCharacterListAreaHtml } from "./GetCharacterListAreaHtml";

export const GetMainHtml = () => {
	return /*html*/ `
	<div class ="container">
		<h1 class="text-4xl font-bold p-2">Rick and Martin</h1>
	</div>
	<div class ="border border-green-400 w-fit rounded-lg flex justify-center container mb-10">
		<input type="text" class="searchText px-2 py-1 border border-none rounded-lg"/>
		<button class = "searchButton bg-green-400 px-2 py-1 rounded-lg">Search</button>
	</div>
	${GetCharacterListAreaHtml()}
`;
}