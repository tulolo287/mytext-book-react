import { useState } from "react";
import Button from "../Button";

const Search = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e: any) {
    e.preventDefault();
  }
  return (
    <div>
      Search
      <form action="submit" onSubmit={handleSearch}>
        <input
          className="input"
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          name="title"
          value={search}
        />
        <Button>Add Product</Button>
      </form>
    </div>
  );
};

export default Search;
