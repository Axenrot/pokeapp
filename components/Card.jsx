const Card = ({ image, name, types }) => {
  return (
    <div className="m-1 flex p-4 w-[250px] bg-pokebg rounded-md border border-white bg-opacity-10 bg-cover">
      <img
        src={image}
        alt={name}
        className="transition-all duration-200 scale-150 hover:opacity-90 hover:scale-[1.6]"
      />

      <div className="flex flex-col self-center">
        <h4 className="capitalize mb-2 w-full bg-white bg-opacity-20 rounded-md text-white px-2 font-semibold border border-white shadow-lg">
          {name}
        </h4>

        <div className="flex justify-around py-2 rounded-md bg-white bg-opacity-20 shadow-lg w-full">
          {types.map((type, index) => (
            <img
              key={`${name}${index}`}
              src={`images/types/${type.type.name}.webp`}
              className="shadow-xl rounded-full w-1/4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
