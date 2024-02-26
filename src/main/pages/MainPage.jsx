import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/NavBar";
import { MainRoutes } from "../router/MainRoutes";
import "./MainPage.css";
export const MainPage = () => {
  const handleClick = () => {
    window.open("https://www.facebook.com/abarrotech", "_blank");
  };
  return (
    <>
      <div className="background">
        <NavBar />
        <div className="divisor" />
        <div
          className="mainPageContainer"
        >
          <div className="whatsappContainer">
            <WhatsApp
              onClick={handleClick}
              style={{ color: "#c4885d", fontSize: "60px" }}
            />
          </div>
          <MainRoutes />
        </div>
        <Footer />
      </div>
    </>
  );
};
