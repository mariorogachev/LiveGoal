import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle the search query, for example, by making an API request
    console.log("Search query:", searchQuery);
  };

  return (
    <form className="w-80 mx-16" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          {/* Add your search icon here */}
          {/* <Image priority src={SearchLogo} alt="Search" width={20} /> */}
        </div>
        <input
          type="search"
          id="default-search"
          className="placeholder-black bg-transparent bflock w-full p-4 ps-10 text-sm text-black border border-black rounded-lg focus:ring-gray-900 focus:border-blue-500 dark:border-gray-600 dark:text-white"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
