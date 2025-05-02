import { JSX, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchCountryByCode } from "../api/countries";
import { Country } from "../types/country";
import { FaArrowLeft, FaGlobe, FaUsers, FaLanguage, FaCity } from "react-icons/fa";

// Reusable LoadingSpinner component for a consistent loading experience
const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center">
    <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    <p className="mt-3 text-lg font-medium text-gray-500 dark:text-gray-400">
      Loading country details...
    </p>
  </div>
);

// Reusable DetailItem to display each country detail
const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) => (
  <div className="flex items-center">
    <span className="text-primary mr-2">{icon}</span>
    <span className="text-sm">
      <strong>{label}:</strong> {value}
    </span>
  </div>
);

const CountryDetail = () => {
  const { code } = useParams();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (code) {
      setLoading(true);
      setError("");
      fetchCountryByCode(code)
        .then((data) => setCountry(data))
        .catch(() => setError("Failed to load country details. Please try again."))
        .finally(() => setLoading(false));
    }
  }, [code]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-[60vh] transition-all duration-300">
        <LoadingSpinner />
      </div>
    );

  if (error || !country)
    return (
      <div className="text-center py-16">
        <p className="text-xl font-semibold text-red-500">
          {error || "Country not found."}
        </p>
        <Link to="/" className="mt-4 inline-flex items-center text-primary hover:underline">
          <FaArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto p-6">
        <Link
          to="/"
          className="inline-flex items-center mb-6 text-sm text-primary hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back
        </Link>

        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="md:flex">
            {/* Country Flag */}
            <div className="md:w-1/2">
              <img
                src={country.flags.png}
                alt={`${country.name.common} flag`}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Country Details */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-3xl font-bold mb-2">{country.name.common}</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                <em>Official Name:</em> {country.name.official}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <DetailItem
                  icon={<FaCity />}
                  label="Capital"
                  value={country.capital?.[0] || "—"}
                />
                <DetailItem icon={<FaGlobe />} label="Region" value={country.region} />
                <DetailItem
                  icon={<FaUsers />}
                  label="Population"
                  value={country.population.toLocaleString()}
                />
                <DetailItem
                  icon={<FaLanguage />}
                  label="Languages"
                  value={Object.values(country.languages || {}).join(", ")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;