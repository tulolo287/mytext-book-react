import { MainLayout } from "layouts/main/MainLayout";
import { BookInfoPage } from "pages/book-info/BookInfoPage";
import { CatalogPage } from "pages/catalog/CatalogPage";
import Home from "pages/Home";
import { createBrowserRouter, RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/catalog/page/:page", element: <CatalogPage /> },
      { path: "/catalog/book/:id", element: <BookInfoPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
