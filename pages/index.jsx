import PokeFinder from "../components/PokeFinder";
import Search from "../components/Search";
import Background from "../components/Background";
import axios from "axios";
import Head from "next/head";

export async function getServerSideProps() {
  let pokedata = [];
  for (let i = 1; i <= 5; i++) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    pokedata.push(response.data);
  }

  return {
    props: {
      pokedata,
    },
  };
}

export default function Home({ pokedata }) {
  return (
    <Background>
      <Head>
        <title>PokéApp</title>
      </Head>
      <Search />
      <PokeFinder pokedata={pokedata} />
    </Background>
  );
}
