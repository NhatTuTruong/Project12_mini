import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import banner from '../../data/banner'
const MainBanner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
       {
             banner && banner.map((item: any, index:number) => (
                <SwiperSlide key={index}>
                     <img src={item.url} alt={item.name} />
                </SwiperSlide>
            ))
       }
    </Swiper>
  )
}

export default MainBanner