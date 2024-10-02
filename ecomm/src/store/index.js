import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import custSlice from "./custSlice";

export default configureStore({
  reducer: { appSlice, custSlice },
});
