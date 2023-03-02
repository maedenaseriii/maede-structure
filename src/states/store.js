import { configureStore } from "@reduxjs/toolkit";
import global from "./slices/globalSlice";

const store = configureStore({
  reducer: { global }
});

export default store;
