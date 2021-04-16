
function SearchBar({ items }) {


  return (
    <div>
    </div>
  );
}

export default SearchBar;

/*
function SearchBar({ items }) {
  const [newItems, setNewItems] = useResults();
  const inputEl = useRef(null);

  return (
    <div>
      <input
        className="SearchInput"
        name="search"
        placeholder="Search here..."
        ref={inputEl}
      />
      <button
        className="SearchButton"
        onClick={setNewItems(inputEl.current?.value, items)}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;

*/
