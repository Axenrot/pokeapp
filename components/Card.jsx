const Card = ({ image, name }) => {
  return (
    <div className="m-4 flex flex-col p-4 w-[250px] h-[400px] bg-pokebg rounded-md">
      <h4 className="capitalize mb-2 w-full bg-white rounded-md text-black text-start px-2 font-semibold">
        {name}
      </h4>
      <img src={image} alt={name} className="rounded-md w-full bg-white" />
    </div>
  );
};

export default Card;
