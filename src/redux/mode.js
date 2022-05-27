import { createSlice } from "@reduxjs/toolkit";
export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    value: "Light",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    toggleValue: (state, action) => {
      if (state.value === "Light") {
        state.value = "Dark";
        document.body.style.setProperty("--main-color", "#333a4f");
        document.body.style.setProperty("--dark-main-color", "#272d3d");
        document.body.style.setProperty("--action-color", "#ff8900");
        document.body.style.setProperty("--sub-action-color", "#00feff");
        document.body.style.setProperty("--text-color", "white");
      } else {
        state.value = "Light";
        document.body.style.setProperty("--main-color", "#ffffff");
        document.body.style.setProperty("--dark-main-color", "#ffffff");
        document.body.style.setProperty("--action-color", "#d438ff");
        document.body.style.setProperty("--sub-action-color", "#07d9d9");
        document.body.style.setProperty("--text-color", "black");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue } = modeSlice.actions;
export const { toggleValue } = modeSlice.actions;

export default modeSlice.reducer;
