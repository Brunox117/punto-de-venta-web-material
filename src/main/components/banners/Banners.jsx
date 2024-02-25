import { Card, CardMedia } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css"; // Asegúrate de importar los estilos de Swiper

export const Banners = () => {
  const { banners } = useSelector((state) => state.firebase);
  return (
    <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper"
        effect={"fade"}
      >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <Card
            className="banner-card"
            sx={{
              borderRadius: "12px",
            }}
          >
            <CardMedia
              component="img"
              image={banner.imageUrl}
              style={{
                objectFit: "fill",
                width: "100%",
                justifyContent: "center",
                height: "576px",
              }} // Ajusta la imagen al tamaño del contenedor sin recortarla
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

