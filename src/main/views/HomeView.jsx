import { Banners } from "../components/banners/Banners";
import { Categories } from "../components/categories/Categories";
import { Suppliers } from "../components/suppliers/Suppliers";
import { Subscribe } from "../components/common/Subscribe";
import { Promos } from "../components/promos/Promos";

export const HomeView = () => {
  return (
    <>
      <Banners />

      <Suppliers />

      <Promos />

      <Categories />

      {/* <Subscribe /> */}
    </>
  );
};
