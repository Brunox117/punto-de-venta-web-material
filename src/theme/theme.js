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
    background: {
      main: '#e8d8c8'
    },
    cardbg: {
      main: '#c4885d'
    },
    fonts: {
      main: '#b07034'
    },
  },
});
