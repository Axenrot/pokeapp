import axios from "axios";

let pokedata = [];
let types = [];
let check = false;
let loading = true;

async function getData() {
  let typesGetter = [];
  let pokedataGetter = [];
  await axios
    .get("https://pokeapi.co/api/v2/type/")
    .then((response) =>
      response.data.results.map((res) => typesGetter.push(res.name))
    )
    .then(() => {
      typesGetter.pop();
      typesGetter.pop();
    })
    .then(async () => {
      for (let i = 1; i <= 20; i++) {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokedataGetter.push(res.data);
      }
    })
    .then(() => {
      types = typesGetter;
      pokedata = pokedataGetter;
      loading = false;
      console.log(types);
      console.log(pokedata);
    });
}

if (!check) {
  getData();
  console.log(types);
  console.log(pokedata);
}

export default {
  loading: loading,
  pokedata: pokedata,
  types: types,
};
