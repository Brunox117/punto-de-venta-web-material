import { Banners } from "../components/banners/Banners";
import { Suppliers } from "../components/suppliers/Suppliers";
// import { Subscribe } from "../components/common/Subscribe";
import { Promos } from "../components/promos/Promos";
import { AboutCards } from "../components/about/AboutCards";
import { Discounts } from "../components/discounts/Discounts";

export const HomeView = () => {
  return (
    <>
      <AboutCards />

      <Suppliers />

      <Banners />

      <Discounts />

      <Promos />

      {/* <Subscribe /> */}
    </>
  );
};
