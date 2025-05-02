import React from "react";

type Props = {
  onFilter: (region: string) => void;
};

const Filter: React.FC<Props> = ({ onFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <select
      className="w-full px-4 py-2 bg-white border border-red-500 rounded shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      onChange={(e) => onFilter(e.target.value)}
    >
      <option value="">All Regions</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export default Filter;