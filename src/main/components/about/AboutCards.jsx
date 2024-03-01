import { Grid } from '@mui/material';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperStyles.css'

export const AboutCards = () => {
  return (
    <Grid container>
        <Grid item xs={12} sm={6} md={4}>
        <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide className='mySwiper-slide'>Slide 1</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 4</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 5</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 6</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 7</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 8</SwiperSlide>
            <SwiperSlide className='mySwiper-slide'>Slide 9</SwiperSlide>
        </Swiper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            Aqui va otra cosa
        </Grid>
    </Grid>
  )
}
