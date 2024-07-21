import { Link } from "react-router-dom";

const Catalog = ({ books, query }) => {
  return (
    <>
      <div className="content">
        {books?.map((book) => (
          <Link
            to={`/catalog/book/${book.id}`}
            state={query}
            className="group"
            key={book.id}
          >
            <div className="img-container">
              <img className="img" src={book.thumbnail} />
            </div>
            <section className="flex justify-between">
              <p className="">{book.title}</p>
              <p className="ml-2">{book.price}</p>
            </section>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Catalog;
