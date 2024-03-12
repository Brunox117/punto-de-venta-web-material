import {
  loadBanners,
  loadBranches,
  loadCategories,
  loadPosts,
  loadProducts,
  loadSuppliers,
  loadPromos,
  loadDiscountedProducts,
  loadPaginationProducts
} from "../../../helpers/firebaseDB/loadFromFirebase";
import {
  setBanners,
  setBranches,
  setCategories,
  setPosts,
  setProducts,
  setSuppliers,
  setPromos,
  setDiscountedProducts,
} from "./firebaseSlice";

export const startLoadingCategories = () => {
  return async (dispatch) => {
    const categories = await loadCategories();
    dispatch(setCategories(categories));
  };
};

export const startLoadingProducts = () => {
  return async (dispatch) => {
    const products = await loadProducts();
    dispatch(setProducts(products));
  };
};

export const startLoadingBranches = () => {
  return async (dispatch) => {
    const branches = await loadBranches();
    dispatch(setBranches(branches));
  };
};

export const startLoadingSuppliers = () => {
  return async (dispatch) => {
    const suppliers = await loadSuppliers();
    dispatch(setSuppliers(suppliers));
  };
};

export const startLoadingPosts = () => {
  return async (dispatch) => {
    const posts = await loadPosts();
    dispatch(setPosts(posts));
  };
};

export const startLoadingBanners = () => {
  return async (dispatch) => {
    const banners = await loadBanners();
    dispatch(setBanners(banners));
  };
};

export const startLoadingPromos = () => {
  return async (dispatch) => {
    const promos = await loadPromos();
    dispatch(setPromos(promos));
  };
}

export const startLoadingPaginationProducts = (page) => {
  return async (dispatch) => {
    const {products} = await loadPaginationProducts(page, null);
    dispatch(setProducts(products));
  };
}

export const startLoadingDiscountedProducts = () => {
  return async (dispatch) => {
    const discountedProducts = await loadDiscountedProducts();
    dispatch(setDiscountedProducts(discountedProducts));
  };
}
