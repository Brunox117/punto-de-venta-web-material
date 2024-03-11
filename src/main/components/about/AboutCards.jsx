import { Grid } from "@mui/material";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "./SwiperStyles.css";
import { useTheme } from "@emotion/react";

export const AboutCards = () => {
  const theme = useTheme();
  return (
    <Swiper
      className="ourSwiper"
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      effect={"fade"}
    >
      <SwiperSlide className="ourSwiper-slide">
        <Grid
          container
          style={{ backgroundColor: theme.palette.background.main }}
        >
          <Grid
            item
            sm={12}
            xl={5}
          >
            <h2
              className="title"
              style={{ color: theme.palette.fonts.category }}
            >
              Variedad de Productos
            </h2>
            <p className="text" style={{ color: theme.palette.fonts.category }}>
              Somos una empresa mayorista con una amplia gama de productos,
              desde alimentos básicos hasta artículos no comestibles. Nuestra
              selección está diseñada para satisfacer las necesidades de
              tienderos y consumidores finales.
            </p>
          </Grid>
          <Grid item sm={12} xl={5}>
            <img className="ourSwiper-img" src="../../../../about1.svg" />
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide className="ourSwiper-slide">
        <Grid
          container
          style={{ backgroundColor: theme.palette.background.main }}
        >
          <Grid item sm={12} xl={5}>
            <h2
              className="title"
              style={{ color: theme.palette.fonts.category }}
            >
              Servicio al Cliente Destacado
            </h2>
            <p className="text" style={{ color: theme.palette.fonts.category }}>
              En nuestra tienda, los clientes eligen sus productos en persona y
              se los llevan directamente. Sin complicaciones ni esperas.
              ¡Bienvenidos a una experiencia de compra sin igual! 🛒✨
            </p>
          </Grid>
          <Grid item sm={12} xl={5}>
            <img className="ourSwiper-img" src="../../../../about2.svg" />
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide className="ourSwiper-slide">
        <Grid
          container
          style={{ backgroundColor: theme.palette.background.main }}
        >
          <Grid item sm={12} xl={5}>
            <h2
              className="title"
              style={{ color: theme.palette.fonts.category }}
            >
              Aliados en las Ganancias
            </h2>
            <p className="text" style={{ color: theme.palette.fonts.category }}>
              Tu éxito es nuestro objetivo. Ofrecemos precios competitivos y
              descuentos por volumen para maximizar tus beneficios.
            </p>
          </Grid>
          <Grid item sm={12} xl={5}>
            <img className="ourSwiper-img" src="../../../../about3.svg" />
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide className="ourSwiper-slide">
        <Grid
          container
          style={{ backgroundColor: theme.palette.background.main }}
        >
          <Grid item sm={12} xl={5}>
            <h2
              className="title"
              style={{ color: theme.palette.fonts.category }}
            >
              Experiencia de Compra Única
            </h2>
            <p className="text" style={{ color: theme.palette.fonts.category }}>
              Queremos que tu experiencia con nosotros sea especial. Bienvenidos
              a nuestra familia de clientes satisfechos. 🛒🌟
            </p>
          </Grid>
          <Grid item sm={12} xl={5}>
            <img className="ourSwiper-img" src="../../../../about4.svg" />
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
};
