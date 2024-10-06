import { CatalogItemInfo } from "components/catalog/catalog-item-info/CatalogItemInfo";
import { useParams } from "react-router-dom";
import { booksApi } from "services/api/booksApi";

export const BookInfoPage = () => {
  const { id } = useParams();
  const { data, isLoading } = booksApi.useGetBookQuery(id);
  return (
    <div>
      BookInfo
      {isLoading ? "Loading..." : <CatalogItemInfo data={data} />}
    </div>
  );
};
