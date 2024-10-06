import styles from "./CatalogItemInfo.module.scss";

export const CatalogItemInfo = ({ data }) => {
  return (
    <section className={styles.container}>
      <article className={styles.bookInfo__description}>
        <h1>{data.title}</h1>
        {data.images.map((item: any) => (
          <img src={item} alt={data.title} />
        ))}
        <div>
          <p>{data.description}</p>
          <article className={styles.bookInfo__buy}>
            <span>{data.price}</span>
            <button>Add to cart</button>
          </article>
        </div>
      </article>
    </section>
  );
};
