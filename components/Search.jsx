import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ types }) => {
  const search = useRef();
  const search2 = useRef();

  function toSearch() {
    search2.current.innerHTML = search.current.value;
    console.log(types);
  }

  function toFilter(type) {
    search2.current.innerHTML = type;
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
          <div className="w-full flex justify-center">
            <input
              ref={search}
              type="text"
              className="rounded-md py-1 px-2 border border-gray-500"
              placeholder="Search..."
            />

            <button
              onClick={toSearch}
              className="bg-white mx-2 rounded-md px-2 py-1 border border-gray-500"
            >
              <FaSearch />
            </button>
            <div
              ref={search2}
              className="w-20 bg-white rounded-sm px-2 py-1 leading-relaxed"
            >
              alou
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
