import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.scss";

export const Pagination = ({ totalPages, limit = 5 }) => {
  const navigate = useNavigate();

  const pagination = useMemo(() => {
    let pagination = [];
    for (let i = 0; i < totalPages / limit; i++) {
      pagination.push(i + 1);
    }
    return pagination;
  }, [totalPages, limit]);

  function handlerNavigate(item) {
    navigate(`/catalog/page/${item}`);
  }

  return (
    <section className={styles.container}>
      {pagination.map((item) => (
        <div
          onClick={() => handlerNavigate(item)}
          className={styles.paginateItem}
        >
          {item}
        </div>
      ))}
    </section>
  );
};
