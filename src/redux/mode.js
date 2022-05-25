import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    value: "light",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    toggleValue: (state, action) => {
      if (state.value === "light") {
        state.value = "dark";
      } else {
        state.value = "light";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = modeSlice.actions;
export const { toggleValue } = modeSlice.actions;

export default modeSlice.reducer;
