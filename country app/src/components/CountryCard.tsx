import React from "react";
import { Link } from "react-router-dom";
import { Country } from "../types/country";

type CountryCardProps = {
  country: Country;
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="block bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
          {country.name.common}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <strong>Region:</strong> {country.region}
        </p>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;