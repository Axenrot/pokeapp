import Card from "./Card";

export default function PokeFinder({ pokeData }) {
  return (
    <div className="text-white w-full h-fit text-center container mx-auto">
      {
        <div className="flex flex-wrap justify-center">
          {pokeData.map((pokemon) => (
            <Card
              key={pokemon.name}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
            />
          ))}
        </div>
      }
    </div>
  );
}
