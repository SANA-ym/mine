async function getPokemonData(pokemonName){
const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
const data=await response.json()
//取得したJSONデータを整形してHTMLに表示
document.getElementById("output").textContent=JSON.stringify(data,null,2)
}

getPokemonData('tepig')