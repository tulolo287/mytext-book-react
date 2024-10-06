import { Pagination } from "components/pagingtion/Pagination";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { booksApi } from "services/api/booksApi";
import styles from "./Catalog.module.scss";
import { CatalogItem } from "./catalog-item/CatalogItem";

export const Catalog = () => {
  const [books, setBooks] = useState(null);
  const { page } = useParams();
  const [query, setQuery] = useState({ skip: 0, limit: 5 });
  const { data, isLoading } = booksApi.useGetBooksQuery(query);

  useEffect(() => {
    const skip = query.limit * (Number(page) - 1);
    setQuery({ ...query, skip });
  }, [page]);

  return (
    <section>
      Catalog
      <div className={styles.container}>
        {isLoading
          ? "Loading..."
          : data?.products?.map((item) => (
              <CatalogItem key={item.id} item={item} />
            ))}
      </div>
      {data && <Pagination totalPages={data?.total} limit={query.limit} />}
    </section>
  );
};
