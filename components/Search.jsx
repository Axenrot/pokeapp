import { useRef } from "react";
import { useType } from "../pages";
import { FaSearch } from "react-icons/fa";

const Search = ({ types, getFilteredData }) => {
  function toFilter(type) {
    getFilteredData(type);
  }

  return (
    <div className="flex flex-wrap bg-gradient-to-b from-neutral-800 to-transparent bg-opacity-10 py-5 justify-center mb-5">
      <div className="container flex flex-col">
        <div className="w-full">
          <img src="images/pokelogo.png" alt="" className="h-[20vh] mx-auto" />
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-wrap justify-center w-full text-white mb-5 items-center min-h-[130px] lg:min-h-[65px]">
            {types.length > 0 &&
              types.map((e) => (
                <button onClick={() => toFilter(e)} key={e}>
                  <img
                    src={`images/types/${e}.webp`}
                    className="transition-all duration-200 w-[40px] h-[40px] m-1 hover:cursor-pointer hover:w-[45px] hover:h-[45px]"
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
