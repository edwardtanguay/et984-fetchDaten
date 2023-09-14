import "./style.css";
import { GetMainHtml } from "./components/GetMainHtml";
import * as tools from './tools';
import { GetCharacterListHtml } from './components/GetCharacterListHtml';
import { attachWrapperEvents } from "./components/GetWrapperHtml";
import { ICharacter } from "./interfaces";

tools.fetchData((characters: ICharacter[]) => {
	const appElem = document.querySelector("#app");

	if (appElem) {
		appElem.innerHTML = GetMainHtml();
		const wrapperElem = document.querySelector(".characterListArea");
		if (wrapperElem) {
			wrapperElem.innerHTML = GetCharacterListHtml(characters);
		}
	}

	attachWrapperEvents(characters);
});
