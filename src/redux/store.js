import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./mode.js";
import spriteReducer from "./sprite.js";
export default configureStore({
  reducer: {
    mode: modeReducer,
    sprite: spriteReducer,
  },
});
