// ProductsView.jsx
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Products } from "../components/productos/Products";
import { useSelector } from "react-redux";
import { SearchbarWithFilter } from "../components/productos/SearchbarWithFilter";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
}));

export const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const { products: productsFromFirebase, categories } = useSelector((state) => state.firebase);

  useEffect(() => {
    setProducts(productsFromFirebase);
    setSearchProduct(productsFromFirebase);
  }, [productsFromFirebase]);

  const filterProducts = (searchTerm, category) => {
    let filteredProducts = [...productsFromFirebase];

    if (searchTerm) {
      const normalizedSearchTerm = searchTerm.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(normalizedSearchTerm));
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product => product.categories.includes(category));
    }

    setSearchProduct(filteredProducts);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SearchbarWithFilter searchProducts={filterProducts} categories={categories} />
      <Products products={searchProduct} />
    </div>
  );
};
