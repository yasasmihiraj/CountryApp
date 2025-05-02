import { Country } from "../types/country";
import { Link } from "react-router-dom";

type Props = { country: Country };

const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white shadow-md rounded-xl p-4 hover:scale-105 transition">
        <img src={country.flags.png} alt={`${country.name.common} flag`} className="w-full h-40 object-cover rounded-md" />
        <h2 className="mt-2 font-bold text-lg">{country.name.common}</h2>
        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
