type Props = {
    onFilter: (region: string) => void;
  };
  
  const Filter = ({ onFilter }: Props) => {
    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  
    return (
      <select
        className="border px-4 py-2 rounded mb-4"
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
  