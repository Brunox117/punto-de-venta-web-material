import { WhatsApp } from "@mui/icons-material";
import { Footer } from "../components/common/Footer";
import { NavBar } from "../components/common/NavBar";
import { MainRoutes } from "../router/MainRoutes";
export const MainPage = () => {
  const handleClick = () => {
    window.open("https://www.facebook.com/abarrotech", "_blank");
  };
  return (
    <>
      <div style={{ backgroundColor: "#f5e8db" }}>
        <NavBar />
        <div
          style={{ backgroundColor: "#c4885d", height: "2px", opacity: "50%" }}
        />
        <div
          style={{ marginLeft: "40px", marginRight: "40px", marginTop: "40px" }}
        >
          <MainRoutes />
          <div style={{ height: "70px" }} />
          <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
            <WhatsApp
              onClick={handleClick}
              style={{ color: "#c4885d", fontSize: "60px" }}
            />
          </div>
        </div>
          <Footer />
      </div>
    </>
  );
};
