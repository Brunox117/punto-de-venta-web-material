import React from "react";
import { Route, Routes } from "react-router-dom";
import { AbarroTipsView, HomeView, ProductsView } from "../views";
import { useBanners, useCategories, useProducts } from "../../hooks/firebaseDB/getFromFirebaseDB";

export const MainRoutes = () => {
  useProducts();
  useBanners();
  useCategories();
  
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/productos" element={<ProductsView />} />
      <Route path="/abarrotips" element={<AbarroTipsView />} />
      <Route path="*" element={<HomeView />} />
    </Routes>
  );
};
