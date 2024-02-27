import React, { useState, useRef } from "react";
import { Box } from "@mui/system";
import { Card, CardContent, CardMedia, Button, Grid } from "@mui/material";
import "./Supplier.css"; // Importa los estilos CSS
import { useSelector } from "react-redux";
import { Title } from "../titles/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

export const Suppliers = () => {
  const sliderRef = useRef(null); // Referencia al Slider
  const [selectedSupplierIndex, setSelectedSupplierIndex] = useState(-1);

  const { suppliers } = useSelector((state) => state.firebase);

  const handleMouseEnter = (index) => {
    setSelectedSupplierIndex(index);
  };

  const handleMouseLeave = () => {
    setSelectedSupplierIndex(-1);
  };

  const openLinkInNewTab = (url) => {
    const fullUrl =
      url.startsWith("http://") || url.startsWith("https://")
        ? url
        : "https://" + url;
    window.open(fullUrl, "_blank");
  };

  return (
    <Grid
      item
      sx={{ justifyContent: "center", marginTop: "5" }}
    >
      <Box
        display="flex"
        paddingTop="80px"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Title title={"Nuestros"} subtitle={"Proveedores"} />
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
      >
        {suppliers.map((supplier, index) => (
          <SwiperSlide key={index}>
            <div>
              <Card
                key={index}
                className={`supplier-card ${
                  index === sliderRef.current?.slickCurrentSlide ||
                  index === selectedSupplierIndex
                    ? "supplier-centered"
                    : ""
                }`}
                sx={{
                  backgroundColor: "#fff", // Color de fondo del Card
                  borderRadius: "8px",
                  boxShadow: "none",
                  width: "100%",
                  mt: 2,
                  mb: 2,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: "8px",
                      height: 500,
                      width: 450,
                      objectFit: "cover",
                    }}
                    image={supplier.imageUrl}
                    title={supplier.name}
                  />
                </div>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => openLinkInNewTab(supplier.siteLink)}
                    sx={{
                      fontWeight: "bold",
                      borderColor: "secondary.main",
                      backgroundColor: "transparent", // Cambiado de bgcolor a backgroundColor
                      color: "secondary.main",
                      borderRadius: 20,
                      width: "40%",
                      "&:hover": {
                        backgroundColor: "#f77e0a",
                        borderColor: "#f77e0a",
                        color: "white",
                      },
                    }}
                  >
                    VISITANOS
                  </Button>
                </CardContent>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

{
  /* <Slider {...settings} ref={sliderRef} arrows={false}>
        {suppliers.map((supplier, index) => (
          <div key={index}>
            <Card
              key={index}
              className={`supplier-card ${
                index === sliderRef.current?.slickCurrentSlide ||
                index === selectedSupplierIndex
                  ? "supplier-centered"
                  : ""
              }`}
              sx={{
                backgroundColor: '#f5e8db', // Color de fondo del Card
                borderRadius: "8px",
                boxShadow: "none",
                width: "100%",
                mt: 2,
                mb: 2,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    borderRadius: "8px",
                    height: 500,
                    width: 450,
                    objectFit: "cover",
                  }}
                  image={supplier.imageUrl}
                  title={supplier.name}
                />
              </div>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Button
  variant="outlined"
  onClick={() => openLinkInNewTab(supplier.siteLink)}
  sx={{
    fontWeight: 'bold',
    borderColor: 'secondary.main',
    backgroundColor: 'transparent', // Cambiado de bgcolor a backgroundColor
    color: 'secondary.main',
    borderRadius: 20,
    width: "40%",
    '&:hover': {
      backgroundColor: '#f77e0a',
      borderColor: '#f77e0a',
      color: 'white',
    },
  }}
>
  VISITANOS
</Button>

              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
      <style>
        {`
          .slick-dots li button:before {
            color: #f77e0a !important;
          }
          .slick-dots li.slick-active button:before {
            color: #f77e0a !important;
          }
        `}
      </style> */
}
