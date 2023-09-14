import "./style.css";

document.querySelector("#app").innerHTML = /* html*/ `
  <div class =" container">
    <div>
<div class =" flex justify-center mb-32 mt-2">
  <h1 class=" text-4xl font-bold p-2">
    Rick and Martin
  </h1>
</div >
<div class =" border border-green-400 w-fit rounded-lg flex justify-center container mb-10">
  <input type="text" class=" input px-2 py-1 border border-none rounded-lg"/>
  <button class = " searchButton bg-green-400 px-2 py-1 rounded-lg">Search</button>
</div>
<div class =" wrapper flex flex-wrap gap-4 justify-center items-center bg-slate-100 p-3 m-2">


</div>
    </div>
   <div>
    
  

   
`;

const wrapper = document.querySelector(".wrapper")
let elementsList = [];

const fetchData = async()=>{
  const response = await fetch("https://rickandmortyapi.com/api/character")

  const data = await response.json()

   elementsList = data.results

  renderCharacter(elementsList)
 
}
const renderCharacter = (data)=>{
  const elements = data.map((char)=>{
    return createObject(char)
  })
  wrapper.innerHTML= elements.join("")

}

const createObject = (char)=>{
  return/*html */`
  
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src="${char.image}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${char.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${char.status}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${char.species}</p>
    </div>
</div>

  
  
  
  `

}
fetchData()

const input = document.querySelector(".input");



input.addEventListener("keyup",(e) => {
  const keyword = e.target.value.toLowerCase()
  if (keyword !==""){
    
    const searchItemFilter= elementsList.filter((char)=>char.name.toLowerCase().includes(keyword)) ;
    console.log(elementsList)
    renderCharacter(searchItemFilter)
    return;

  }
   
  renderCharacter(elementsList)
})
