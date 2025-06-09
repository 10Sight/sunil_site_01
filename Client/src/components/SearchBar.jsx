import { FaSearch, FaMicrophone } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-[#fefbf7] border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-sm w-full max-w-3xl mx-auto">
      <FaSearch className="text-gray-500 text-sm sm:text-base mr-2 sm:mr-3" />
      <input
        type="search"
        placeholder="Search for Carbide Cutters"
        aria-label="Search for Carbide Cutters"
        className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
      />
      <FaMicrophone className="text-gray-500 text-sm sm:text-base ml-2 sm:ml-3" />
    </div>
  );
}
