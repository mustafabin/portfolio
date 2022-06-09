import { createSlice } from "@reduxjs/toolkit";
export const spriteSlice = createSlice({
  name: "sprite",
  initialState: {
    value: "normal",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = spriteSlice.actions;

export default spriteSlice.reducer;
