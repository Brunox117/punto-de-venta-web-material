import { Route, Routes } from "react-router-dom";
import { MainPage } from "../main/pages/MainPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};
