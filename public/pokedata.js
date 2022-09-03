import axios from "axios";

var pokedata = [];
axios.get("https://pokeapi.co/api/v2/pokemon/").then((response) => {
  pokedata = response.data.results;
});

export default pokedata;
