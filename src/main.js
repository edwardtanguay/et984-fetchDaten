import "./style.css";
import { GetMainHtml } from "./components/GetMainHtml";
import * as tools from './tools';
import { GetCharacterListHtml } from './components/GetCharacterListHtml';
tools.fetchData((characters) => {

	document.querySelector("#app").innerHTML = GetMainHtml();

	document.querySelector(".wrapper").innerHTML = GetCharacterListHtml(characters);

	const input = document.querySelector(".input");
	input.addEventListener("keyup", (e) => {
		const keyword = e.target.value.toLowerCase();
		if (keyword !== "") {

			const filteredCharacters = characters.filter((char) => char.name.toLowerCase().includes(keyword));
			document.querySelector(".wrapper").innerHTML = GetCharacterListHtml(filteredCharacters);
			return;
		}

	});

});