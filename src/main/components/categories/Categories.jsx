import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { Category } from "./Category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

export const Categories = () => {
  const sliderRef = useRef(null); // Referencia al Slider
  const [selectedSupplierIndex, setSelectedSupplierIndex] = useState(-1);

  const { categories } = useSelector((state) => state.firebase);

  const handleMouseEnter = (index) => {
    setSelectedSupplierIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedSupplierIndex(-1);
  };

  const calculateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 4; // Para pantallas grandes, muestra 3 slides
    } else if (screenWidth >= 768) {
      return 2; // Para pantallas medianas, muestra 2 slides
    } else {
      return 1; // Para pantallas pequeñas, muestra 1 slide
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: calculateSlidesToShow(), // Llama a una función para calcular el número de slides a mostrar
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
  };
  return (
    <div style={{ backgroundColor: "#f5e8db"}}>


      <Grid
  container
  justifyContent="center"
  alignItems="center"
  sx={{
    padding: {
      xs: 0,
      sm: 2,
      md: 12,
      lg: 4,
      xl: 5
    },
    ml: {
      xs: 12,
      sm: 3,
      md: 4,
      lg: 5,
      xl: 4
    }
  }}
>
  {categories.map((category) => (
    <Grid item key={category.id} xs={12} sm={6} md={4} lg={3} xl={2}>
      <Category category={category}/>
    </Grid>
  ))}
</Grid>
  </div>

  );
};
