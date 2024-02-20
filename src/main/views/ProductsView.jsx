import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Products } from "../components/productos/Products";
import { Filter } from "../components/productos/Filter";
import { Searchbar } from "../components/productos/Searchbar";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 30,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 20,
  },
}));

export const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);
  const { products: productsFromFirebase, categories } = useSelector((state) => state.firebase);

  const filterProducts = (filterTerm, searchTerm) => {
    if (filterTerm === "" && searchTerm === "") {
      setSearchProduct(products); // Mostrar todos los productos si no hay un término de filtro ni de búsqueda
      return;
    }
    let filteredProducts = [...products];
    if (filterTerm !== "") {
      filteredProducts = filteredProducts.filter(product =>
        product.categories.includes(filterTerm)
      );
    }
    if (searchTerm !== "") {
      const normalizedSearchTerm = searchTerm.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalizar el término de búsqueda
      filteredProducts = filteredProducts.filter(product => {
        const normalizedProductName = product.name.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Normalizar el nombre del producto
        return normalizedProductName.includes(normalizedSearchTerm);
      });
    }
    setSearchProduct(filteredProducts);
  };

  useEffect(() => {
    setProducts(productsFromFirebase);
    setSearchProduct(productsFromFirebase);
  }, [productsFromFirebase]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Searchbar searchProducts={filterProducts} />
        <Filter filterProducts={filterProducts} categories={categories} />
      </div>
      <Products products={searchProduct} />
    </div>
  );
};
