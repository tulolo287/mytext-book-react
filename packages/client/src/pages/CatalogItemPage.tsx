import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../services/api/books";

const CatalogItemPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetBookQuery(id);

  return (
    <>
      {isLoading && "Loading..."}
      Catalog item
      {data ? <img src={data.thumbnail} alt="" /> : "Product not found"}
    </>
  );
};

export default CatalogItemPage;
