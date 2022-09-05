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

      {loading && (
        <img
          src="images/gengar.gif"
          alt="Loading"
          className="sm:w-[50%] lg:w-[30%] mx-auto pt-5"
        />
      )}
      {!loading && <PokeFinder pokeData={pokeData} />}
    </Background>
  );
}
