import Card from "./Card";

export default function PokeFinder({ pokedata }) {
  function logdata() {
    console.log(pokedata);
  }

  return (
    <div className="bg-black text-white w-full min-h-[100vh] h-fit text-center">
      <button
        onClick={logdata}
        className="bg-white rounded md text-black p-2 m-2"
      >
        Click me!
      </button>
      {pokedata.length !== 0 && (
        <div className="flex flex-wrap justify-center">
          {pokedata.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
          ))}
        </div>
      )}
    </div>
  );
}
