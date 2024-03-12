import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AbarroTipsView,
  HomeView,
  ProductsView,
  SucursalesView,
} from "../views";
import {
  useBanners,
  useBranches,
  useCategories,
  usePosts,
  usePromos,
  useProducts,
  useSuppliers,
  useDiscountedProducts,
  usePaginationProducts,
} from "../../hooks/firebaseDB/getFromFirebaseDB";

export const MainRoutes = () => {
  useProducts();
  useBranches();
  useBanners();
  useCategories();
  useSuppliers();
  usePosts();
  usePromos();
  useDiscountedProducts();
  // usePaginationProducts();
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/productos" element={<ProductsView />} />
      <Route path="/abarrotips" element={<AbarroTipsView />} />
      <Route path="/sucursales" element={<SucursalesView />} />
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
};
