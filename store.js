import basketReducer from "./features/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    basket: basketReducer
  },
});
