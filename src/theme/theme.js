import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#bfeb00",
      opacity80: "rgba(191, 235, 0, 0.8)",
      opacity50: "rgba(191, 235, 0, 0.5)",
    },
    secondary: {
      main: "#f77e0a",
    },
    error: {
      main: red.A400,
    },
    appbar: {
      primary: '#E27009',
      secondary: '#f2b255',
    },
    footer: {
      primary: '#f2b255',
      secondary: '#E27009',
      icons: '#F9F9F9'
    },
    background: {
      main: '#F9F9F9'
    },
    cardbg: {
      main: '#FFFFFF'
    },
    fonts: {
      navbar: '#F6FFF2',
      category: '#202020'
    },
  },
});
