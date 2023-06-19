import { configureStore } from "@reduxjs/toolkit";
import selectedItemSlice from "./SelectedItemSlice";
import RegularOrderSlice from "./RegularOrderSlice";

const store = configureStore({
  reducer: {
    SelectedItem: selectedItemSlice.reducer,
    RegularOrder : RegularOrderSlice.reducer,
  },
});

export default store;