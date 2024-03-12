import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  startLoadingBanners,
  startLoadingBranches,
  startLoadingCategories,
  startLoadingPosts,
  startLoadingProducts,
  startLoadingSuppliers,
  startLoadingPromos,
  startLoadingDiscountedProducts,
  startLoadingPaginationProducts,
} from "../../store/slices/firebaseSlice/thunks";

export const useCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingCategories());
  }, []);
};

export const useProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);
};

export const useBanners = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingBanners());
  }, []);
};

export const useBranches = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingBranches());
  }, []);
};

export const useSuppliers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingSuppliers());
  }, []);
};

export const usePosts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingPosts());
  }, []);
};

export const usePromos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingPromos());
  }, []);
}

export const usePaginationProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingPaginationProducts(2));
  }, []);
}

export const useDiscountedProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingDiscountedProducts());
  }, []);
};



