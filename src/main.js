import "./style.css";
import { GetMainHtml } from "./components/GetMainHtml";
import * as tools from './tools';
import { GetCharacterListHtml } from './components/GetCharacterListHtml';
import { attachWrapperEvents } from "./components/GetWrapperHtml";

tools.fetchData((characters) => {
	document.querySelector("#app").innerHTML = GetMainHtml();
	document.querySelector(".wrapper").innerHTML = GetCharacterListHtml(characters);

	// attach events
	attachWrapperEvents(characters);
});
