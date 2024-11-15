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
      // main: '#202020'
    },
    cardbg: {
      main: '#FFFFFF'
    },
    fonts: {
      navbar: '#F6FFF2',
      category: '#202020',
      product: '#202020',
    },
    chip: {
      main: '#F4FFFB',
    },
    searchbarAndFilter: {
      searchbar: '#F9F9F9',
      filter: '#F9F9F9',
    },
    subscription: {
      background: '#f9f9f9', 
      card: '#ffffff', 
      text: '#333333', 
      heading: '#333333', 
      input: '#f0f0f0', 
      button: '#f9a826', 
      buttonText: '#000000', 
      link: '#f9a826', 
    },
  },
});
