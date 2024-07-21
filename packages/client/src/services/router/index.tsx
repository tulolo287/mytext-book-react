import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import CartPage from "../../pages/CartPage";
import CatalogItemPage from "../../pages/CatalogItemPage";
import CatalogPage from "../../pages/CatalogPage";
import HomePage from "../../pages/HomePage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/catalog/page/:page", element: <CatalogPage /> },
      { path: "/catalog/book/:id", element: <CatalogItemPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
