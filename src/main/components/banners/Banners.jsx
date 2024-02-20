import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Card, CardMedia, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: "src\assets\img\leftArrow.webp",
        width: 20, // Ancho de la flecha
        height: 20, // Alto de la flecha
        right: 10, // Posición desde el borde derecho
        zIndex: 1, // Asegúrate de que las flechas estén por encima de los puntos (dots)
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundImage: "src\assets\img\rightArrow.webp",
        width: 20, // Ancho de la flecha
        height:20, // Alto de la flecha
        left: 10, // Posición desde el borde izquierdo
        zIndex: 1, // Asegúrate de que las flechas estén por encima de los puntos (dots)
      }}
      onClick={onClick}
    />
  );
}


export const Banners = () => {
  const { banners } = useSelector((state) => state.firebase);
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
    fade: true,
    waitForAnimate: false,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <Grid item sx={{background: '#f5e8db'}}>

    <div className="slider-container">
      <Slider {...settings}>
        {banners.map((banner) => (
          <Card key={banner.id} className="banner-card" sx={{
            borderRadius: "12px", // Aplica un borde redondeado de 8px al CardMedia
          }}>
            <CardMedia component="img" height="425" image={banner.imageUrl}  />
          </Card>
        ))}
      </Slider>
    </div>
        </Grid>
  );
};
