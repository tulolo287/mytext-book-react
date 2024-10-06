import { NavLink } from "react-router-dom";
import styles from "./CatalogItem.module.scss";

export const CatalogItem = ({ item }) => {
  return (
    <NavLink to={`/catalog/book/${item.id}`}>
      <article className={styles.catalogItem}>
        <h3>{item.title}</h3>
        <img src={item.thumbnail} alt={item.title} />
      </article>
    </NavLink>
  );
};
