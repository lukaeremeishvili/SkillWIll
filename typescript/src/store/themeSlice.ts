import { createSlice} from "@reduxjs/toolkit";

type Theme = "light" | "dark";

const initialState: Theme = (localStorage.getItem("theme") as Theme) || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: Theme): Theme => {
      const newTheme = state === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
