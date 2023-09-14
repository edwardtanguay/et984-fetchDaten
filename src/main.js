import "./style.css";
import { GetCharacterHtml } from "./components/GetCharacterHtml";

document.querySelector("#app").innerHTML = /* html*/ `
	<div class =" container">
		<h1 class=" text-4xl font-bold p-2">Rick and Martin</h1>
	</div >
	<div class =" border border-green-400 w-fit rounded-lg flex justify-center container mb-10">
		<input type="text" class=" input px-2 py-1 border border-none rounded-lg"/>
		<button class = " searchButton bg-green-400 px-2 py-1 rounded-lg">Search</button>
	</div>
	<div class =" wrapper flex flex-wrap gap-4 justify-center items-center bg-slate-100 p-3 m-2">
	</div>
	<div>
`;

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
