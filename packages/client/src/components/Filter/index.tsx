import { useState } from "react";

const Filter = ({ setQuery, query }) => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    const searchWords = e.target.value;
    setSearch(searchWords);
    setQuery({ ...query, q: searchWords });
  }

  function handleChange(e) {
    const limit = parseInt(e.target.value);
    setQuery({ ...query, limit });
  }

  return (
    <div>
      Filter
      <select onChange={handleChange}>
        <option selected={query.limit === 1} value={1}>
          1
        </option>
        <option selected={query.limit === 5} value={5}>
          5
        </option>
        <option selected={query.limit === 10} value={10}>
          10
        </option>
      </select>
      <form>
        <input type="search" onChange={handleSearch} value={search} />
        <input type="radio" />
      </form>
    </div>
  );
};

export default Filter;
