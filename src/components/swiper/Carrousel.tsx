// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
        <Box
          w="100vw"
          h="400px"
          bgImage={`url(${slider1})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          objectFit="cover"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Heading lineHeight="1.2">
              <Text as="mark" bg={"rgba(0, 0, 0, 0.5)"} color="white">
                Buscamos proyectos innovadores
              </Text>
            </Heading>
            <br />
            <Heading lineHeight="0.3">
              <Text as="mark" bg={"rgba(0, 0, 0, 0.5)"} color="white">
                de salud física y mental
              </Text>
            </Heading>
            <Button
              as={Link}
              to="https://mayma.lat/salud"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              bg="#C9302C"
              mt="24px"
              color="white"
              borderRadius="20px"
            >
              Quiero + info
            </Button>
          </Box>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box
          w="100%"
          h="400px"
          bgImage={`url(${slider2})`}
          bgPosition="center center"
          bgRepeat="no-repeat"
          objectFit="contain"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box>
            <Heading lineHeight="1">
              <Text as="mark" bgColor={"rgba(0, 0, 0, 0.5)"} color="white">
                Hace 17 años fortalecemos emprendedores
              </Text>
            </Heading>
            <br />
            <Heading lineHeight="0.5">
              <Text as="mark" bgColor={"rgba(0, 0, 0, 0.5)"} color="white">
                socioambientales de Lationoamérica
              </Text>
            </Heading>
            <Button
              as={Link}
              to="https://mayma.org.ar/hablemos?_gl=1*6so4g2*_ga*MTk0NzQ0ODMyLjE3MDcxNjEyMzU.*_ga_JZ7CXM01CB*MTcwNzIyNjk4NC4yLjEuMTcwNzIyODQxMC4wLjAuMA.."
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              bg="#0A78E4"
              color="white"
              mt="24px"
              borderRadius="20px"
            >
              Hablemos
            </Button>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
