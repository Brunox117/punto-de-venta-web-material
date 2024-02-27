import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { useSelector } from "react-redux";
import { darkTheme } from "./themeDark";

export const AppTheme = ({ children }) => {
  const {darkMode} = useSelector((state) => state.theme);
  return (
    <>
    {darkMode ? <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
     :<ThemeProvider theme={theme}>
     <CssBaseline />
     {children}
   </ThemeProvider> }
    </>
  );
};
