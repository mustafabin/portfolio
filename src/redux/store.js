import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./mode.js";
export default configureStore({
  reducer: {
    mode: modeReducer,
  },
});
