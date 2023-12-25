import { SearchIcon } from "@assets/icons/SearchIcon";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

const Search = ({ className, placeholder }: SearchProps) => {
  return (
    <div
      className={`w-4/6 h-16 bg-secondary-background rounded-full flex items-center gap-4 pl-6 ${
        className || ""
      }`}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder || "Search Here..."}
        className="w-full h-16 bg-secondary-background rounded-full focus:outline-none"
      />
    </div>
  );
};

export default Search;
