import { configureStore } from "@reduxjs/toolkit";
import selectedItemSlice from "./SelectedItemSlice";

const store = configureStore({
  reducer: {
    SelectedItem: selectedItemSlice.reducer,
  },
});

export default store;