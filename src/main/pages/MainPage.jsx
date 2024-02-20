import { NavBar } from "../components/common/NavBar";
import { MainRoutes } from "../router/MainRoutes";


export const MainPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#f5e8db"}}>
      <NavBar />
      <div style={{ backgroundColor: "#c4885d", height: '2px', opacity: '50%'}} />
      <div style={{ marginLeft: '40px', marginRight: '40px', marginTop: '40px'}}>
      <MainRoutes />
      </div>
      </div>
    </>
  );
};
