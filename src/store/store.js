import { configureStore } from "@reduxjs/toolkit";
import { firebaseSlice } from "./slices/firebaseSlice";

export const store = configureStore({
  reducer: {
    firebase: firebaseSlice.reducer,
  },
});
