import "./style.css";

document.querySelector("#app").innerHTML = /*html */ `
  <div class="container">
  <div class="flex justify-center">
      <h1 class="text-3xl text-slate-600">Ricky and Morty</h1>
    </div>
    <div class="wrapper flex flex-wrap gap-4 justify-center py-2 bg-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    </div>
  </div>
`;

const wrapper = document.querySelector(".wrapper");

const fetchCharacter = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const characters = data.results;

    wrapper.innerHTML = characters
      .map((char) => {
        return createCharacter(char);
      })
      .join("");
  } catch (error) {
    console.error("Ein Fehler ist aufgetreten:", error);
  }
};

const createCharacter = (character) => {
  return /* html */ `
    
    <div class="  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg" src="${character.image}" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${character.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${character.status}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          ${character.status}
          <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>
  `;
};

fetchCharacter();
