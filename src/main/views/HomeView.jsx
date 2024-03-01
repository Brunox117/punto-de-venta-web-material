import { Banners } from "../components/banners/Banners";
import { Categories } from "../components/categories/Categories";
import { Suppliers } from "../components/suppliers/Suppliers";
import { Subscribe } from "../components/common/Subscribe";
import { Promos } from "../components/promos/Promos";
import { AboutCards } from "../components/about/AboutCards";

export const HomeView = () => {
  return (
    <>
      <AboutCards />

      <Banners />

      <Suppliers />

      <Promos />

      <Categories />

      {/* <Subscribe /> */}
    </>
  );
};
