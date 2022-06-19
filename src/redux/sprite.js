import { createSlice } from "@reduxjs/toolkit";
export const spriteSlice = createSlice({
  name: "sprite",
  initialState: {
    glasses: false,
    direction: "normal",
  },
  reducers: {
    setValue: (state, action) => {
      state.direction = action.payload;
    },
    toggleGlasses: (state, action) => {
      state.glasses = !state.glasses;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, toggleGlasses } = spriteSlice.actions;

export default spriteSlice.reducer;
