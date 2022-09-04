import Card from "./Card";

export default function PokeFinder({ pokedata }) {
  function logdata() {
    console.log(pokedata);
  }

  return (
    <div className="text-white w-full h-fit text-center container mx-auto">
      {pokedata.length !== 0 && (
        <div className="flex flex-wrap justify-center">
          {pokedata.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
            />
          ))}
        </div>
      )}
    </div>
  );
}
