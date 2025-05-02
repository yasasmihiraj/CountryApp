type Props = {
    onSearch: (value: string) => void;
  };
  
  const SearchBar = ({ onSearch }: Props) => {
    return (
      <input
        type="text"
        placeholder="Search by country name..."
        className="border px-4 py-2 rounded w-full mb-4"
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  