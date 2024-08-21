import { createTheme } from "@mui/material";
import { colors } from "./colors";

export const theme = createTheme({
  typography: {
    fontSize: 11,
  },
  palette: {
    primary: {
      main: colors.blue500,
      dark: colors.blue900,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation5: {
          "@media print": {
            boxShadow: "none",
          },
        },
      },
    },
  },
});
