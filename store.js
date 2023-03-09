import basketReducer from "./features/basketSlice";
import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./features/reastaurantSlice";

export default configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantSlice,
  },
});
