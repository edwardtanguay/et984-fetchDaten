import "./style.css";
import { GetCharacterHtml } from "./components/GetCharacterHtml";
import { GetMainHtml } from "./components/GetMainHtml";

document.querySelector("#app").innerHTML = GetMainHtml();

const wrapper = document.querySelector(".wrapper");
let elementsList = [];

const fetchData = async () => {
	const response = await fetch("https://rickandmortyapi.com/api/character");
	const data = await response.json();
	elementsList = data.results;
	renderCharacter(elementsList);
};

const renderCharacter = (data) => {
	const elements = data.map((char) => {
		return GetCharacterHtml(char);
	});
	wrapper.innerHTML = elements.join("");
};

fetchData();

const input = document.querySelector(".input");

input.addEventListener("keyup", (e) => {
	const keyword = e.target.value.toLowerCase();
	if (keyword !== "") {

		const searchItemFilter = elementsList.filter((char) => char.name.toLowerCase().includes(keyword));
		console.log(elementsList);
		renderCharacter(searchItemFilter);
		return;
	}

	renderCharacter(elementsList);
});
