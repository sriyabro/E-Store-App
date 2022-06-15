import { ChangeEvent, useState } from "react";
import { Search, X } from "react-feather";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>(undefined);
  const [searchResults, setSearchResults] = useState<string[] | null>(null);

  const onSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const resetSearchInput = () => {
    setSearchInput("");
  };

  return (
    <div className="search-container py-4">
      <div className="search">
        <div className="search-bar py-2 px-3">
          <Search size={20} className="search-icon" />
          <input
            className="search-input mx-3"
            type="text"
            placeholder="Search.."
            value={searchInput}
            onChange={(e) => onSearchInputChange(e)}
          />
          {searchInput && (
            <X className="close-icon" size={20} onClick={resetSearchInput} />
          )}
        </div>
      </div>
      {searchResults && (
        <div className="search-results my-1">
          {searchResults.map((item, index) => {
            return (
              <span className="item py-1 px-3" key={index}>
                {item}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
