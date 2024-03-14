import { Grid } from "@mui/material";
import { Discount } from "./Discount";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./Discount.css";
import { useEffect, useState } from "react";
import { Title } from "../titles/Title";

export const Discounts = () => {
  const { discountedProducts } = useSelector((state) => state.firebase);
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesPerView(1); // Para pantallas pequeñas (menos de 600px de ancho)
      } else if (window.innerWidth < 960) {
        setSlidesPerView(3); // Para pantallas medianas (entre 600px y 960px de ancho)
      } else {
        setSlidesPerView(4); // Para pantallas grandes (más de 960px de ancho)
      }
    };

    // Llamar a la función handleResize al cargar la página y al cambiar el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el evento del listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Grid
      container
      justifyContent="center"
      alignContent="center"
      spacing={1}
      sx={{ mt: 3 }}
    >
      <Title title="Nuestros" subtitle="Descuentos" />
      <Swiper
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="noSwiper"
      >
        {discountedProducts.map((discount) => (
          <SwiperSlide key={discount.id} style={{ backgroundColor: "000000" }}>
            <Discount discountedProduct={discount} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};
