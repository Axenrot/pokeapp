import PokeFinder from "../components/PokeFinder";
import Search from "../components/Search";
import Background from "../components/Background";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [pokeData, setPokeData] = useState([]);
  const [types, setTypes] = useState([]);
  const [check, setCheck] = useState(true);
  const [loading, setLoading] = useState(true);

  async function getData() {
    let typesGetter = [];
    let pokeDataGetter = [];
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
          pokeDataGetter.push(res.data);
        }
      })
      .then(() => {
        setTypes(typesGetter);
        setPokeData(pokeDataGetter);
        setLoading(false);
        setCheck(false);
      });
  }

  if (check) {
    getData();
  }
  return (
    <Background>
      <Head>
        <title>PokéApp</title>
      </Head>
      {loading && (
        <div className="text-white text-center text-[60px]">Loading...</div>
      )}
      {!loading && <Search types={types} />}
      {!loading && <PokeFinder pokedata={pokeData} />}
    </Background>
  );
}
