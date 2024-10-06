import { Catalog } from "components/catalog/Catalog";
import styles from "./CatalogPage.module.scss";

export const CatalogPage = () => {
  return (
    <main className={styles.container}>
      CatalogPage
      <Catalog />
    </main>
  );
};
