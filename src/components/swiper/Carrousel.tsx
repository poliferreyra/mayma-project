// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { Image } from "@chakra-ui/react";
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "@/assets/slider1.png";
import slider2 from "@/assets/slider2.jpg";

export const Carrousel = () => {
  return (
    <Swiper
      effect={"fade"}
      navigation={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src={slider1} objectFit="cover" boxSize="400px" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slider2} objectFit="cover" boxSize="400px" />
      </SwiperSlide>
    </Swiper>
  );
};
