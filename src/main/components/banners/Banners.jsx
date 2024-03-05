import { Card, CardMedia } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
import "swiper/swiper-bundle.css"; // Asegúrate de importar los estilos de Swiper
import './Banners.css';
export const Banners = () => {
  const { banners } = useSelector((state) => state.firebase);
  return (
    <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, EffectFade]}
        navigation={true}
        effect={"fade"}
        className="yourSwiper"
      >
      {banners.map((banner) => (
        <SwiperSlide className="yourSwiper-slide" key={banner.id}>
          <Card
            className="banner-card"
            sx={{
              marginTop: "1rem",
              borderRadius: "12px",
            }}
          >
            <CardMedia
            className="banner-image"
              component="img"
              image={banner.imageUrl}
              style={{
                objectFit: "fill",
                aspectRatio: "16/9",
                justifyContent: "center",
                alignItems: "center"
              }} // Ajusta la imagen al tamaño del contenedor sin recortarla
            />
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

