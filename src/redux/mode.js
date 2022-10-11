import { createSlice } from "@reduxjs/toolkit";
export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    value: "Dark",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
    toggleValue: (state, action) => {
      if (state.value === "Light") {
        state.value = "Dark";
        document.body.style.setProperty("--main-color", "#2a2f40");
        document.body.style.setProperty("--dark-main-color", "#212831");
        document.body.style.setProperty("--footer-color", "#212831");
        document.body.style.setProperty("--splash-color", "#7a2605");
        document.body.style.setProperty(
          "--fade-action-color",
          "rgba(255, 137, 0, 0.2)"
        );
        document.body.style.setProperty(
          "--fade-sub-action-color",
          "rgba(0, 254, 255, 0.2)"
        );
        document.body.style.setProperty("--action-color", "#ff8900");
        document.body.style.setProperty("--sub-action-color", "#00feff");
        document.body.style.setProperty("--text-color", "white");
      } else {
        state.value = "Light";
        document.body.style.setProperty("--main-color", "#ffffff");
        document.body.style.setProperty("--dark-main-color", "#ffffff");
        document.body.style.setProperty("--footer-color", "#e5e4cb71");
        document.body.style.setProperty("--splash-color", "#ede7f4");
        document.body.style.setProperty(
          "--fade-action-color",
          "rgba(212, 56, 255, 0.1)"
        );
        document.body.style.setProperty(
          "--fade-sub-action-color",
          "rgba(112, 7, 217, 0.2)"
        );
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
