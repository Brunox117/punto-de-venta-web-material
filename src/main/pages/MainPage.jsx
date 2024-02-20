import { NavBar } from "../components/common/NavBar";
import { MainRoutes } from "../router/MainRoutes";


export const MainPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#e8d8c8"}}>
      <div style={{ marginLeft: '50px', marginRight: '50px'}}>
      <NavBar />
      <MainRoutes />
      </div>
      </div>
    </>
  );
};
