import { configureStore } from "@reduxjs/toolkit";
import { firebaseSlice } from "./slices/firebaseSlice";
import { themeSlice } from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    firebase: firebaseSlice.reducer,
    theme: themeSlice.reducer,
  },
});
