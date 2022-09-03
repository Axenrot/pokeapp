import PokeFinder from "../components/PokeFinder";
import axios from "axios";

export async function getServerSideProps() {
  let pokedata = [];
  for (let i = 1; i <= 1; i++) {
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
  return <PokeFinder pokedata={pokedata} />;
}
