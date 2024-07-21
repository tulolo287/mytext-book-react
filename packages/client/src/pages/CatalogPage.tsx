import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Catalog from "../components/Catalog";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import { useGetBooksQuery } from "../services/api/books";

const CatalogPage = () => {
  const { state } = useLocation();

  const [query, setQuery] = useState({ limit: 10, skip: 0, q: "" });
  const { isLoading, data, refetch } = useGetBooksQuery(query);

  console.log("Cat page", data);


  return (
    <section>
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <Filter query={query} setQuery={setQuery} />
          <Catalog books={data} query={query} />
          <Pagination
            query={query}
            totalItems={2}
            setQuery={setQuery}
          />
        </>
      )}
    </section>
  );
};

export default CatalogPage;
