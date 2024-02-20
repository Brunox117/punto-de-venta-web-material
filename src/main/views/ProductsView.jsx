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
  paper: {
    marginBottom: 30,
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
  },
  toolbar: {
    justifyContent: "space-between",
  },
}));

export const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setsearchProduct] = useState([]);
  const {products: productsFromFirebase} = useSelector((state) => state.firebase);
  const setProductsFromFirebase = () => {
    setsearchProduct(productsFromFirebase);
    setProducts(productsFromFirebase);
  };

  useEffect(() => {
    setProductsFromFirebase();
  }, [productsFromFirebase]);

  

  const filterProducts = (filterTerm) => {
    var filter = [...products];
    filter = filter.filter((product) => product.categories.includes(filterTerm));
    setsearchProduct(filter);
    console.log('searchProduct: ', searchProduct);
  };

  const searchProducts = (searchTerm) => {
    var search = [...products];
    search = search.filter((a) => {
      console.log(a);
      let b = a.name.toLowerCase().includes(searchTerm.toLowerCase());
      let c = a.population
        .toString()
        .includes(searchTerm.toLowerCase().replaceAll(",", ""));
      let d = a.region.toLowerCase().includes(searchTerm.toLowerCase());
      console.log(a);
      let test = "";

      if (b) {
        test += a.name.toLowerCase().includes(searchTerm.toLowerCase());
      }
      if (c) {
        test += a.population
          .toString()
          .includes(searchTerm.toLowerCase().replaceAll(",", ""));
      }
      if (d) {
        test += a.region.toLowerCase().includes(searchTerm.toLowerCase());
      }
      // console.log(test);
      return test;
    });
    setsearchProduct(search);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.flex}>
        <Searchbar searchProducts={searchProducts} />
        <Filter filterProducts={filterProducts} />
      </div>
      {/* <Products products={searchProduct} /> */}
    </div>
  );
};
