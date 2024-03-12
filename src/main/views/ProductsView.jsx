// ProductsView.jsx
import React, { useState, useEffect } from "react";
import { Products } from "../components/productos/Products";
import { useSelector } from "react-redux";
import { SearchbarWithFilter } from "../components/productos/SearchbarWithFilter";
import { useLocation } from "react-router-dom";
import { Categories } from "../components/categories/Categories";
import { Grid } from "@mui/material";

export const ProductsView = () => {
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // let categoryFromParams = queryParams.get("categoria");
  // if (categoryFromParams === null) {
  //   categoryFromParams = "";
  // }
  const [searchProduct, setSearchProduct] = useState([]);
  const { products: productsFromFirebase, categories } = useSelector(
    (state) => state.firebase
  );

  useEffect(() => {
    setSearchProduct(productsFromFirebase);
  }, [productsFromFirebase]);

  const filterProducts = (searchTerm, category) => {
    let filteredProducts = productsFromFirebase;

    if (searchTerm) {
      const normalizedSearchTerm = searchTerm
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(normalizedSearchTerm)
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.includes(category)
      );
    }

    setSearchProduct(filteredProducts);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      sx={{ mb: 4 }}
    >
      <Categories />
      <SearchbarWithFilter
        searchProducts={filterProducts}
        categories={categories}
      />
      <Products products={searchProduct} />
    </Grid>
  );
};
