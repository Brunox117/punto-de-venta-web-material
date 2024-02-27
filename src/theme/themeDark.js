import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const darkTheme = createTheme({
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
      primary: '#b25a0b',
      secondary: '#f2b255',
    },
    background: {
      main: '#202020'
    },
    cardbg: {
      main: '#FFFFFF'
    },
    fonts: {
      main: '#b07034'
    },
  },
});
