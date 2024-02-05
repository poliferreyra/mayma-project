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
        <Image
          src="https://mayma.lat/web/image/23700/Slider%20-%20foto.png"
          objectFit="cover"
          boxSize="400px"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://mayma.lat/web/image/22642/3.jpg"
          objectFit="cover"
          boxSize="400px"
        />
      </SwiperSlide>
    </Swiper>
  );
};
