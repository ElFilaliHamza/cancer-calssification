// materialTheme.js
import { createTheme } from "@mui/material/styles";
import { themeColors } from "./themeColors";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: themeColors.mainColor.DEFAULT,
      dark: themeColors.mainColor.dark,
      light: themeColors.mainColor.light,
      contrastText: "#ffffff", // example
    },
    error: {
      main: themeColors.danger.DEFAULT,
      dark: themeColors.danger.dark,
      light: themeColors.danger.light,
    },
    success: {
      main: themeColors.success.DEFAULT,
      dark: themeColors.success.dark,
      light: themeColors.success.light,
    },
  },
});
