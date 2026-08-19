import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  if (!showSearch) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center w-3/4 sm:w-1/2 my-5 mx-3 px-5 border border-gray-400 rounded-full">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="flex-1 bg-inherit outline-none text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search" />
      </div>

      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close search"
      />
    </div>
  );
};

export default SearchBar;
