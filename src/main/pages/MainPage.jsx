import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/NavBar";
import { MainRoutes } from "../router/MainRoutes";
import { useTheme } from '@mui/material/styles';
import "./MainPage.css";
export const MainPage = () => {
  const theme = useTheme();
  const handleClick = () => {
    window.open("https://www.facebook.com/abarrotech", "_blank");
  };
  return (
    <>
      <div style={{backgroundColor: theme.palette.background.main}}>
        <NavBar />
        <div className="divisor" />
        <div
          className="mainPageContainer"
        >
          <div className="whatsappContainer">
            <WhatsApp
              onClick={handleClick}
              style={{ color: theme.palette.primary.main, fontSize: "60px" }}
            />
          </div>
          <MainRoutes />
        </div>
        <Footer />
      </div>
    </>
  );
};
