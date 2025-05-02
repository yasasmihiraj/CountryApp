import React from "react";

type Props = {
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by country name..."
      className="w-full px-4 py-2 bg-white border border-red-500 rounded shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;