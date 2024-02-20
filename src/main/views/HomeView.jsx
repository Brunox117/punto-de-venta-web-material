import { Grid } from "@mui/material";
import { Banners } from "../components/banners/Banners";
import { Categories } from "../components/categories/Categories";
import { Products } from "../components/productos/Products";
import { Suppliers } from "../components/suppliers/Suppliers";

export const HomeView = () => {
  return( <>

    <Banners />

    <Suppliers />

    <Categories />

   </>);
};
