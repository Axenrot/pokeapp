import { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const search = useRef();
  const search2 = useRef();
  function toSearch() {
    search2.current.innerHTML = search.current.value;
  }

  return (
    <div className="flex bg-black bg-opacity-30 py-5 justify-center">
      <input
        ref={search}
        type="text"
        className="rounded-md py-1 px-2 border border-gray-500"
        placeholder="Search..."
      />

      <button
        onClick={toSearch}
        className="bg-white mx-2 rounded-md px-2 border border-gray-500"
      >
        <FaSearch />
      </button>
      <div ref={search2} className="w-20 bg-white ">
        alou
      </div>
    </div>
  );
};

export default Search;
