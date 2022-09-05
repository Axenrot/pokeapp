import PokeFinder from "../components/PokeFinder";
import Search from "../components/Search";
import Background from "../components/Background";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [types, setTypes] = useState([]);
  const [type, setType] = useState("");
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(true);

  async function getTypes() {
    let typesGetter = [];
    await axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((response) =>
        response.data.results.map((res) => typesGetter.push(res.name))
      )
      .then(() => {
        typesGetter.pop();
        typesGetter.pop();
      })
      .then(setTypes(typesGetter));
  }

  async function getData() {
    let pokeDataGetter = [];

    for (let i = 1; i <= 100; i++) {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokeDataGetter.push(res.data);
    }

    setPokeData(pokeDataGetter);
    setLoading(false);
  }

  async function getFilteredData(type) {
    let pokemonList = [];
    setLoading(true);

    const res = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);

    for (let i = 0; i < res.data.pokemon.length; i++) {
      const r = await axios.get(res.data.pokemon[i].pokemon.url);
      pokemonList.push(r.data);
    }
    setPokeData(pokemonList);
    setLoading(false);
  }

  if (check) {
    getTypes();
    getData();
    setCheck(false);
  }

  return (
    <Background>
      <Head>
        <title>PokéApp</title>
      </Head>

      {types.length > 0 && (
        <Search types={types} getFilteredData={getFilteredData} />
      )}

      <button
        className="bg-white text-black p-2 ml-[50%] rounded-md -translate-x-[50%]"
        onClick={() => console.log("hello")}
      >
        Console Log ""
      </button>

      {loading && (
        <div className="text-white text-center text-[60px]">Loading...</div>
      )}
      {!loading && <PokeFinder pokeData={pokeData} />}
    </Background>
  );
}
