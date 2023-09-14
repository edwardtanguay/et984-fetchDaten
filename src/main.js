import "./style.css";
import { GetCharacterHtml } from "./components/GetCharacterHtml";
import { GetMainHtml } from "./components/GetMainHtml";
import * as tools from './tools';

document.querySelector("#app").innerHTML = GetMainHtml();

const wrapper = document.querySelector(".wrapper");

const getCharacterListHtml = (data) => {
	const elements = data.map((char) => {
		return GetCharacterHtml(char);
	});
	wrapper.innerHTML = elements.join("");
};

tools.fetchData((elementsList) => {
	getCharacterListHtml(elementsList);
});


//input
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
