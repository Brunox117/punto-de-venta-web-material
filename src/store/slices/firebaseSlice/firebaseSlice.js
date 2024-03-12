import { createSlice } from '@reduxjs/toolkit';

export const firebaseSlice = createSlice({
    name: 'firebase',
    initialState: {
        banners: [],
        products: [],
        categories: [],
        posts: [],
        branches: [],
        suppliers: [],
        promos: [],
        discountedProducts: [],
    },
    reducers: {
        setBanners: (state, action) => {
            state.banners = action.payload;
        },
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setBranches: (state, action) => {
            state.branches = action.payload;
        },
        setSuppliers: (state, action) => {
            state.suppliers = action.payload;
        },
        setPromos: (state, action) => {
            state.promos = action.payload;
        },
        setDiscountedProducts: (state, action) => {
            state.discountedProducts = action.payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
    setDiscountedProducts,
    setBanners, 
    setProducts, 
    setCategories, 
    setPosts, 
    setBranches, 
    setSuppliers,
    setPromos,
 } = firebaseSlice.actions;