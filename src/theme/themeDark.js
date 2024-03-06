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
    footer: {
      primary: '#99b957',
      secondary: '#71891a',
      icons: '#F9F9F9'
    },
    appbar: {
      primary: '#71891a',
      secondary: '#99b957',
    },
    background: {
      main: '#0A0A0A '
    },
    cardbg: {
      main: '#FFFFFF'
    },
    fonts: {
      main: '#b07034',
      category: '#F9F9F9',
      product: '#F9F9F9',
    },
    chip: {
      main: '#818181',
    },
    searchbarAndFilter: {
      searchbar: '#E1E1E1',
      filter: '#E1E1E1',
    }
  },
});