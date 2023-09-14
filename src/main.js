import "./style.css";
import { GetMainHtml } from "./components/GetMainHtml";
import * as tools from './tools';
import { GetCharacterListHtml } from './components/GetCharacterListHtml';

document.querySelector("#app").innerHTML = GetMainHtml();

tools.fetchData((elementsList) => {
	document.querySelector(".wrapper").innerHTML = GetCharacterListHtml(elementsList);
});

const input = document.querySelector(".input");
input.addEventListener("keyup", (e) => {
	const keyword = e.target.value.toLowerCase();
	if (keyword !== "") {

		const searchItemFilter = elementsList.filter((char) => char.name.toLowerCase().includes(keyword));
		console.log(elementsList);
		getCharacterListHtml(searchItemFilter);
		return;
	}

	getCharacterListHtml(elementsList);
});
