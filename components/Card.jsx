const Card = ({ image, name, types }) => {
  return (
    <div className="m-4 flex flex-col p-4 w-[250px] h-fit bg-pokebg rounded-md border-8 border-blackborder bg-opacity-10">
      <h4 className="capitalize mb-2 w-full bg-white bg-opacity-70 rounded-md text-black px-2 font-semibold border border-blackborder shadow-lg">
        {name}
      </h4>
      <img
        src={image}
        alt={name}
        className="rounded-md w-full bg-black bg-opacity-20 shadow-lg"
      />

      <div className="flex justify-around mt-4 py-2 rounded-md bg-black bg-opacity-20 shadow-lg">
        {types.map((type, index) => (
          <img
            key={`${name}${index}`}
            src={`images/types/${type.type.name}.webp`}
            className="w-1/4 shadow-xl rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
