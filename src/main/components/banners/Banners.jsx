import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Card, CardMedia} from "@mui/material";
export const Banners = () => {
  const {banners} = useSelector((state) => state.firebase)
  const settings = {
    className: "slider variable-width",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {banners.map((banner) => (
        <Card key={banner.id} className="banner-card">
          <CardMedia
        component="img"
        height="400"
        image={banner.imageUrl}
      />
        </Card>
      ))}
      </Slider>
    </div>
)}